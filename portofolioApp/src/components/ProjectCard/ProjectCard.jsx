import {motion} from "framer-motion";

import notesApp from "../../assets/notes.jpeg";
import inventory from "../../assets/inventory.jpeg";
import todolist from "../../assets/todolist.jpeg";

import githubwhite from "../../assets/github_icon_white.svg";

function ProjectCard() {
    const leftSlide = {
        initial: {x: "-100%"},
        whileInView: {x: "0%"},
    };

    const rightSlide = {
        initial: {x: "100%"},
        whileInView: {x: "0%"},
    };

    const animateDescription = {
        initial: {opacity: 0},
        whileInView: {opacity: 1},
    };

    return (
        <>
            <div className="flex flex-col gap-20 sm:gap-40 p-4">
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 3}}
                    viewport={{once: true}}
                >
                    <h1 className="mt-36 text-5xl text-center font-edu ">
                        Some of my <span className="text-green-500">Projects</span>
                    </h1>
                </motion.div>
                <div className="flex sm:flex-col gap-4">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 2}}
                            variants={leftSlide}
                            viewport={{once: true}}
                            className="h-full w-full rounded-xl shadow-2xl self-start"
                        >
                            <img src={notesApp} alt="" className="h-[28rem] w-full rounded-xl"/>
                            <motion.span
                                whileHover={{
                                    cursor: "pointer",
                                    opacity: 1,
                                    backgroundColor: "rgba(0, 0, 0, .5)",
                                }}
                                transition={{duration: 1}}
                                className="absolute text-white inset-0 flex justify-center items-center gap-4 opacity-0"
                            >
                                <img src={githubwhite} alt="" width={30}/>
                                <a
                                    href="https://github.com/hangodek/project_Notes"
                                    target="_blank"
                                >
                                    Go to Github
                                </a>
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 4}}
                            variants={animateDescription}
                            viewport={{once: true}}
                            className="flex flex-col gap-4 justify-between p-4"
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-lilitaone text-center">
                                    Notes App
                                </h1>
                                <p className="text-xl">
                                    &quot;A notes application with local CRUD functionality,
                                    storing data in a temporary array instead of a database, built
                                    using React.js, vanilla JavaScript, and CSS.&quot;
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 bg-cyan-600 p-4 rounded-lg">
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <motion.hr initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
                           viewport={{once: true}}
                           className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 4}}
                            variants={animateDescription}
                            viewport={{once: true}}
                            className="flex flex-col gap-4 justify-between p-4"
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-lilitaone text-center">
                                    Inventory Application
                                </h1>
                                <p className="text-xl">
                                    &quot;An inventory management application developed from the
                                    ground up, featuring a React.js frontend styled with Tailwind
                                    CSS, an Express.js backend, and PostgreSQL for the
                                    database.&quot;
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 bg-amber-500 p-4 rounded-lg">
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 2}}
                            variants={rightSlide}
                            viewport={{once: true}}
                            className="h-full w-full rounded-xl shadow-2xl self-start"
                        >
                            <img src={inventory} alt="" className="h-[28rem] w-full rounded-xl"/>
                            <motion.span
                                whileHover={{
                                    cursor: "pointer",
                                    opacity: 1,
                                    backgroundColor: "rgba(0, 0, 0, .5)",
                                }}
                                transition={{duration: 1}}
                                className="absolute text-white inset-0 flex justify-center items-center gap-4 opacity-0"
                            >
                                <img src={githubwhite} alt="" width={30}/>
                                <a
                                    href="https://github.com/hangodek/project_inventoryApplication"
                                    target="_blank"
                                >
                                    Go to Github
                                </a>
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
                <motion.hr initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}
                           viewport={{once: true}}
                           className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 2}}
                            variants={leftSlide}
                            viewport={{once: true}}
                            className="h-full w-full rounded-xl shadow-2xl self-start"
                        >
                            <img src={todolist} alt="" className="h-[28rem] w-full rounded-xl"/>
                            <motion.span
                                whileHover={{
                                    cursor: "pointer",
                                    opacity: 1,
                                    backgroundColor: "rgba(0, 0, 0, .5)",
                                }}
                                transition={{duration: 1}}
                                className="absolute text-white inset-0 flex justify-center items-center gap-4 opacity-0"
                            >
                                <img src={githubwhite} alt="" width={30}/>
                                <a
                                    href="https://github.com/hangodek/project_ToDoList"
                                    target="_blank"
                                >
                                    Go to Github
                                </a>
                            </motion.span>
                        </motion.div>
                        <motion.div
                            initial="initial"
                            whileInView="whileInView"
                            transition={{duration: 4}}
                            variants={animateDescription}
                            viewport={{once: true}}
                            className="flex flex-col gap-4 justify-between p-4"
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl font-lilitaone text-center">
                                    ToDoList
                                </h1>
                                <p className="text-xl">
                                    &quot;A fully custom-built To-Do List application, featuring a
                                    TypeScript and React Next.js frontend, a Go (Golang) backend,
                                    and styled with Tailwind CSS.&quot;
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 bg-red-500 p-4 rounded-lg">
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                                <motion.img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt=""
                                    whileHover={{scale: 1.2, cursor: "pointer"}}
                                    width={40}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
