
import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "react-use-measure";

export const ResizableAnimation = ({ children, direction, path }: { children: React.ReactNode, direction: "forward" | "previous", path: number[] }) => {
    const [ref, { height }] = useMeasure();

    const animations = {
        forward: {
            initial: { opacity: 0, x: 0 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
        },
        previous: {
            initial: { opacity: 0, x: 0 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 },
        },
    };

    console.log(height);

    return (
        <motion.div
            className="relative overflow-hidden"
            animate={{ height: height || "auto" }}
            transition={{ delay: 0.3 }}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    {...animations[direction]}
                    transition={
                        {
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }
                    }
                    className={`absolute w-full bg-demo-menu-bg`}
                    key={path.join("-")}
                >
                    <div ref={ref}>
                        {children}
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
