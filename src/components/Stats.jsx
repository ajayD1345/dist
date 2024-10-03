import CountUp from "react-countup";
import { motion } from "framer-motion";

// Stats data
const stats = [
    {
        number: 2,
        text: "Years of Experience",
    },
    {
        number: 12,
        text: "Projects Completed",
    },
    {
        number: 12,
        text: "Technologies Used",
    },
    {
        number: 156,
        text: "Code Commits",
    },
];

// Component
const Stats = () => {
    return (
        <section
        className="flex flex-row mx-5 p-2">
            <div className="container w-[65%] mx-auto">
                <div className="flex flex-wrap gap-6 sm:max-w-[88vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <motion.div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}
                            // Color transition animation
                            animate={{ 
                                color: [
                                    "#FF6F61",  // Red
                                    "#00FFFF",  // Cyan
                                    "#FFA500",  // Orange
                                    "#FF00FF",  // Magenta
                                    "#00FF00",  // Green
                                    "#FFD700",  // Gold
                                    "#FF6F61"   // Back to Red
                                ] 
                            }}
                            transition={{
                                duration: 6, // Smooth color transition duration across all colors
                                repeat: Infinity, // Loop animation
                                ease: "easeInOut",
                            }}
                        >
                            {/* CountUp for the numbers */}
                            <CountUp
                                end={stat.number}
                                duration={4} // Count duration
                                delay={1} // Initial delay
                                className="lg:text-[60px] text-[30px] font-bold"
                            />
                            {/* Stat description */}
                            <p className="flex flex-wrap lg:max-w-[100px] text-[17px] lg:text[17px] text-white-100/50 font-bold">
                                {stat.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
