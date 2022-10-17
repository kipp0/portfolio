import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='relative h-full w-screen antialiased overflow-x-hidden js-focus-visible'>
            <Head />
            <body className='relative flex h-full w-screen overflow-x-hidden flex-col bg-zinc-50'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}