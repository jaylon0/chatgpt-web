import "./styles/globals.scss";
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'OpenAI - JayLon',
    description: '您的 OpenAi 贴心助手！',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?59b1c03e89ca78358b9dcd9d7327a300";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
                }}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
