import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";


const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pierre N. Smith | Kipp0 - Projects</title>
                <meta name="Porfolio by Pierre N. Smith" content="Created with love by Pierre N. Smith A.K.A kipp0" />
            </Head>
            <Header />
            <main className="relative ring ring-zinc-100 inset-0 bg-white max-w-6xl m-auto flex flex-col items-center justify-center min-h-screen p-4 rounded">
                <p className="text-2xl text-gray-700">Github Projects comming soon..</p>
            </main>
            <Footer />
        </>
    );
};

export default Projects;