
import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "react-use-measure";

export const ResizableAnimation = ({ children, direction, path }: { children: React.ReactNode, direction: "forward" | "previous", path: number[] }) => {
    const [ref, { height }] = useMeasure();

    const animations = {
        forward: {
            initial: { opacity: 0, x: 0 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -300 },
        },
        previous: {
            initial: { opacity: 0, x: 0 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 300 },
        },
    };

    return (
        <motion.div
            className="relative overflow-hidden"
            animate={{ height: height || "auto" }}
            transition={{ delay: 0.05 }}
        >
            <AnimatePresence initial={false}>
                <motion.div
                    {...animations[direction]}
                    transition={
                        {
                            opacity: { duration: 0.3 },
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
