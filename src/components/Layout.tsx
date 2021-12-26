import Head from 'next/head'
import * as React from "react";

const Layout = ({
                    children,
                    title = 'Radio Biserica Nr.2 Chisinau',
                }: { children: any, title: string }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta property="og:image" content={`/images/preview.png`}/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {children}
    </div>
);

export default Layout