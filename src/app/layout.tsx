import './globals.css'
import { Inter } from 'next/font/google'
import { NowPlayingBar } from '@/components/now-playing-bar'
import { Dashboard } from '@/components/dashboard'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beat Remedy',
  description: 'A Spotify clone app that will soothe all your distress away with smooth tunes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="select-none">
      <body className={inter.className}>
        <div className="flex flex-col h-screen p-2 text-white bg-black">
          <div className="grow">
            <Dashboard />
          </div>
          <div className="flex-none">
            <NowPlayingBar />
          </div>
        </div>
      </body>
    </html>
  )
}
