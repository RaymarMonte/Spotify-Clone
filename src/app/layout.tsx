import './globals.css'
import localFont from 'next/font/local'
import { NowPlayingBar } from '@/components/now-playing-bar'
import { Dashboard } from '@/components/dashboard'

const circular = localFont({
  src: [
    {
      path: './circular/CircularStd-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './circular/CircularStd-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './circular/CircularStd-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './circular/CircularStd-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './circular/CircularStd-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './circular/CircularStd-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './circular/CircularStd-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './circular/CircularStd-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './circular/CircularStd-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './circular/CircularStd-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
  ]
})

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
      <body className={circular.className}>
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
