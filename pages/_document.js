import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <Script
                    id="usercentrics-cmp"
                    strategy="beforeInteractive"
                    src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
                    data-settings-id="FTCT55YTW"
                     />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}