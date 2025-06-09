import { motion } from "framer-motion";

import Navbar from "@/widgets/NavBar";
import Banner from "@/features/HomeComponents/Banner";
import MyDesigner from "@/features/HomeComponents/MyDesigner";
import Navigator from "@/features/HomeComponents/Navigator";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
    return (
        <div>
            <Navbar />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-8"
            >
                <motion.div variants={itemVariants}>
                    <Banner />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <MyDesigner />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Navigator />
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Home;