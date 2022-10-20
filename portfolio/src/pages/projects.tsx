import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import me from '../assets/me.jpeg'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pierre N. Smith | Kipp0 - Projects</title>
                <meta name="Porfolio by Pierre N. Smith" content="Created with love by Pierre N. Smith A.K.A kipp0" />
            </Head>
            <Header />
            <main className="relative ring ring-zinc-100 inset-0 bg-white max-w-6xl m-auto flex flex-col items-center justify-center min-h-screen p-4 rounded">
                <section className="testimonial-left relative grid grid-rows-[repeat(5,_1fr)] grid-cols-1 w-full h-[700px] pt-14 border rounded border-zinc-100">
                    <div className="relative row-[1_/_3] col-start-1 overflow-hidden px-5 z-10 rounded">
                        <Image
                            src={me}
                            className={`rounded-xl object-fill`}
                            alt={`testimonial`}
                        />
                    </div>
                    <div className="row-[2_/_-1] col-start-1 px-5 bg-emerald-500 pt-44">
                        <p>
                            Pierre was perfessional and
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Projects;