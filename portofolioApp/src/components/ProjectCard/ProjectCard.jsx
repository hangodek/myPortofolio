function ProjectCard() {
    return (
        <>
            <div className="flex flex-col gap-4 p-4">
                <div>
                    <h1 className="text-5xl text-center font-edu underline">
                        Some of my <span className="text-green-500">works</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-28 mt-16">
                    <div className="min-h-96 w-full max-w-4xl p-4 rounded-xl bg-red-400 self-start">
                        <h1 className="text-4xl text-center">Notes App</h1>
                    </div>
                    <div className="min-h-96 w-full max-w-4xl p-4 rounded-xl bg-red-400 self-end">
                        <h1 className="text-4xl text-center">Notes App</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProjectCard;
