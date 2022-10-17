import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from 'next/future/image'

import geekpower from '../assets/geekpower.svg'
import innovatebyday from '../assets/innovatebyday.jpeg'
import webbly from '../assets/webbly.jpg'
import Me from '../assets/me.jpeg'
import image1 from '../assets/carousel/site1.png'
import image2 from '../assets/carousel/site2.png'
import image3 from '../assets/carousel/site5.png'
import image4 from '../assets/carousel/site3.png'
import image5 from '../assets/carousel/site4.png'

import WorkHistoryCards from "../components/WorkHistoryCards";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
const work: WorkHistoryCards.WorkHistory[] = [
  {
    logo: webbly,
    company: 'Webbly',
    role: 'Software Engineer',
    startDate: '2020',
    endDate: null,
  },
  {
    logo: geekpower,
    company: 'GeekPower',
    role: 'Web Developer',
    startDate: '2017',
    endDate: '2018',
  },
  {
    logo: innovatebyday,
    company: 'Innovate By Day',
    role: 'Full Stack Developer',
    startDate: '2016',
    endDate: '2017',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pierre N. Smith | Kipp0</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/assets/me.jpeg" />
      </Head>
      <Header />
      <main className="relative ring ring-zinc-100 inset-0 bg-white max-w-6xl m-auto flex flex-col items-center justify-center min-h-screen p-4 rounded ">
        <section className="mt-16 sm:mt-20">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">

              <Image alt=""
                src={image1}
                sizes="(min-width: 640px) 18rem, 11rem"
                width="3744"
                height="5616"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy" />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <Image alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                src={image2}
                width="3936"
                height="2624"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <Image alt="" sizes="(min-width: 640px) 18rem, 11rem"
                src={image3}
                width="5760"
                height="3840"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
              <Image alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                src={image4}
                width="2400"
                height="3000"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
              <Image alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                src={image5}
                width="4240"
                height="2384"
                decoding="async"
                data-nimg="future"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

          </div>
        </section>
        <section className="mt-16 sm:mt-20 px-10 sm:px-8">
          <div className="grid gid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-sm px-2.5 lg:max-w-none">
                <Image
                  src={Me}
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  width={800}
                  height={800}
                  decoding='async'
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  loading="lazy"
                  alt="Picture of Pierre" />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-gray-700">Pierre N. Smith</h1>
              <h2 className="font-bold text-xl md:text-2xl tracking-tight text-gray-700">Entreprenueur & Software Engineer by day.</h2>
              <h2 className="font-bold text-xl md:text-2xl tracking-tight text-gray-700 mb-1">Amateur Artist By Night.</h2>
              <p className="text-md md:text-lg tracking-tight text-gray-700">Developing technologies that empower clients to reach for the stars!</p>
            </div>
          </div>
        </section>
        <section className="w-full px-10">
          <div className="rounded p-10 border border-zinc-100">

            <h3 className="flex text-lg font-semibold text-zinc-900">Work</h3>
            <ol className="mt-6 space-y-4">
              {
                work.map( work => (
                  <li className="flex gap-4" key={work.company}>
                    <WorkHistoryCards.default
                      work={work} />
                  </li>

                ) )
              }

            </ol>
            <div className="py-5">
              <Button className="block rounded text-center py-1 w-full font-medium bg-zinc-50 text-gray-900 transition active:transition-none hover:bg-zinc-100 active:text-gray-900/60" href={""} >Download CV</Button>
            </div>
          </div>
        </section>
        {/* <section className="mt-16 sm:mt-20 px-10 w-full">
          <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
            <TechCard
              name="Frontend"
              description="frontend stuff"
            />
            <TechCard name="Backend"
              description="Backend stuff"
            />
            <TechCard
              name="Development"
              description=""
            />
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
