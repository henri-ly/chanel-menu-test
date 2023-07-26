import React, { useState, useCallback } from 'react';
import { Item } from './Item';
import { ResizableAnimation } from './ResizableAnimation';

type MenuItem = { "name": string, "children"?: MenuItem[] }
type MenuItemProps = { menu: MenuItem, parent?: MenuItem, onForward: (targetedPath: number) => void, onPrevious?: () => void }

const MenuItem: React.FC<MenuItemProps> = ({ menu, onForward, onPrevious }) => {
    return <>
        <Item key={0} onClick={onPrevious}>{onPrevious ? "<-" : menu.name}</Item>
        {menu.children?.map((child, index) => {
            return <Item key={menu.name + child.name} onClick={() => onForward(index)} hasNext={true}>
                {child.name}
            </Item>
        })}
    </>
}

const goToMenuItem = (menu: MenuItem, path: number[]): MenuItem | undefined => {
    if (path.length === 0) {
        return menu;
    }
    const child = menu.children?.[path[0]];
    if (child === undefined) {
        return undefined;
    }
    return goToMenuItem(child, path.slice(1));
}

export const Menu: React.FC<{ config: MenuItem }> = ({ config }) => {
    const [path, setPath] = useState<number[]>([])
    const [direction, setDirection]= useState<"forward" | "previous">("forward");
    const onForward = useCallback((targetedPath: number) => {
        setPath([...path, targetedPath])
        setDirection("forward");
    }, [path, setPath])

    const onPrevious = useCallback(() => {
        setPath(path.slice(0, path.length - 1));
        setDirection("previous");
    }, [path, setPath,]);

    const currentMenu = goToMenuItem(config, path) ?? config;
    return  <div className="mx-auto mt-8 h-full w-full">
    <ResizableAnimation direction={direction} path={path}>
        <MenuItem menu={currentMenu} onForward={onForward} onPrevious={path.length > 0 ? onPrevious : undefined} />
    </ResizableAnimation>
    </div>
}