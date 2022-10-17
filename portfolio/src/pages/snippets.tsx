
import type { NextPage } from "next";
import Head from "next/head";

import { createClient } from "next-sanity";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import { Post } from "../types/Post";

type SnippetPageProps = {
    posts: Post[]
}
const client = createClient( {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
} );

export async function getStaticProps() {
    const posts = await client.fetch<Post>( `*[_type == 'post'] {
        _id,title,body,"category": category[]->{id,title},image,slug,publishedAt
    } | order(publishedAt asc)` )

    return {
        props: {
            posts
        }
    };
}

const Snippets: NextPage<SnippetPageProps> = ( { posts } ) => {
    console.log( posts );

    return (
        <>
            <Head>
                <title>Pierre N. Smith | Kipp0 - Snippets</title>
                <meta name="Porfolio by Pierre N. Smith" content="Created with love by Pierre N. Smith A.K.A kipp0" />
            </Head>
            <Header />
            <main className="relative ring ring-zinc-100 inset-0 bg-white max-w-6xl m-auto flex flex-col items-center justify-center min-h-screen p-4 rounded">
                <h2>posts</h2>
                {posts?.length > 0 && (
                    <ul className="w-full">
                        {posts.map( ( post ) => (
                            <li key={post?._id}>
                                <div>
                                    <h1 className="flex justify-between"><span>{post?.title}</span> <span className="text-gray-300">{new Date( post?.publishedAt ).toDateString()}</span></h1>
                                    <div>
                                        <div><img src={'/'} alt={`${post.title} image`} /></div>
                                    </div>
                                </div>
                            </li>
                        ) )}
                    </ul>
                )}
                {!posts?.length && <p>No posts to show</p>}
            </main>
            <Footer />
        </>
    );
};

export default Snippets;