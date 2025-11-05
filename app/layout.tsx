import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Flavored Whiskey Forecast',
  description: 'Forecast demand for flavored whiskey varieties'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>Flavored Whiskey Forecast</header>
          {children}
          <footer>Built with Next.js</footer>
        </div>
      </body>
    </html>
  );
}
