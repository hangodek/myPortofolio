import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import mySvg from "../../assets/svg/menu-svgrepo-com.svg";
import notesApp from "../../assets/notes.jpeg";
import inventoryApp from "../../assets/inventory_application.jpeg";
import cvApp from "../../assets/cv_application.jpeg";

function ProjectCard() {
    const leftSlide = {
        initial: { x: "-100%" },
        whileInView: { x: "0%" },
    };

    const rightSlide = {
        initial: { x: "100%" },
        whileInView: { x: "0%" },
    };

    return (
        <>
            <div className="flex flex-col gap-4 p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                >
                    <h1 className="text-5xl text-center font-edu ">
                        Some of my <span className="text-green-500">works</span>
                    </h1>
                </motion.div>
                <div className="flex flex-col gap-28 mt-16">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ duration: 2 }}
                        variants={leftSlide}
                        viewport={{ once: true }}
                        className="min-h-96 w-full max-w-4xl p-4 rounded-xl shadow-2xl self-start"
                    >
                        <img src={notesApp} alt="" className="" />
                        <h1 className="text-4xl text-center">Notes App</h1>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ duration: 2 }}
                        variants={rightSlide}
                        viewport={{ once: true }}
                        className="min-h-96 w-full max-w-4xl p-4 rounded-xl shadow-2xl self-end"
                    >
                        <img
                            src={inventoryApp}
                            alt=""
                            className="h-96 w-full"
                        />
                        <h1 className="text-4xl text-center">Notes App</h1>
                    </motion.div>
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ duration: 2 }}
                        variants={leftSlide}
                        viewport={{ once: true }}
                        className="min-h-96 w-full max-w-4xl p-4 rounded-xl shadow-2xl self-start"
                    >
                        <img src={cvApp} alt="" />
                        <h1 className="text-4xl text-center">Notes App</h1>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
export default ProjectCard;
