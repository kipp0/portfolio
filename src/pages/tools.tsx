import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pierre N. Smith | Kipp0 - Tools</title>
                <meta name="Porfolio by Pierre N. Smith" content="Created with love by Pierre N. Smith A.K.A kipp0" />
            </Head>
            <Header />
            <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">

                <p className="text-2xl text-gray-700">This stack uses:</p>
                <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    );
};

export default Home;