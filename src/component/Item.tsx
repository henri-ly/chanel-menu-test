type ItemProps = { onClick?: () => void, children: React.ReactNode, hasNext?: boolean };

export const Item = ({ children, onClick, hasNext }: ItemProps) => {
    return <div className={`w-full bg-demo-menu-bg hover:bg-demo-menu-hover px-6 py-4 ${onClick ? "cursor-pointer" : ""} flex justify-between font-semibold`} onClick={onClick}>
        <div>{children}</div>
        {hasNext ? <div className='text-gray-400 font-bold'>{"->"}</div> : ""}
    </div>
}
