import Button from "../Button/Button"


function Footer() {
    const date = new Date()
    return (
        <footer>
            <div className="sm:px-8">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="pt-10 pb-16 dark:border-zinc-700/40">
                        <div className="relative px-4 sm:px-8 lg:px-12">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                    <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        <Button className="transition hover:text-gray-900" href="/">Home</Button>
                                        <Button className="transition hover:text-gray-900" href="/projects">Projects</Button>
                                        <Button className="transition hover:text-gray-900" href="/tools">Tools</Button>
                                    </div>
                                    <p className="text-sm text-zinc-400 dark:text-zinc-500">© {`${date.getFullYear()}`} Kipp0. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer