import Head from "next/head";
import Image from 'next/image';

const name = "Shin code"
export const siteTitle = "Next.js blog"

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header>
                <Image
                src="/images/profile.png"
                alt="profile"
                width={50}
                height={50}
                />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}
