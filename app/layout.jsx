import Navbar from './Navbar'
import './globals.css'

export const metadata = {
  title: 'Predict',
  description: 'Results of all matches in the best football leagues around the world.',
  keywords: 'football,results,fixtures,odds,soccer,Champions League,La Liga, Premier League',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
