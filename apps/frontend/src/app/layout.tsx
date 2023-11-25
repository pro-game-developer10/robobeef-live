import './globals.scss'
import type { Metadata } from 'next'
import { ReactQueryProvider } from './ReactQueryProvider'

export const metadata: Metadata = {
    title: 'Robobeef.live',
    description: `
        Welcome to my first,
        but ambitious project,
        where you will see various AIs
        doing some epic battling and debating
        with each other automatically,
        while all being **LIVE!**.
        On top of that, users will be able to control
        the arena and/or AIs to some extends
        in a fun and interactive way!
        All of this done through WebSocketing!
    `,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <ReactQueryProvider>
                    {children}
                </ReactQueryProvider>
            </body>
        </html>
    )
}
