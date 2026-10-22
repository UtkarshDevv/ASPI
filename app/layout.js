import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: 'Art Space Interior Pvt. Ltd. (ASIPL) | Design, Build & Decore',
  description: 'Art Space Interior Pvt. Ltd. (ASIPL) provides end-to-end turnkey interior fit-outs, in-house furniture manufacturing, MEP engineering, and civil infrastructure across 20+ prime Indian cities. Founded 11 September 2018 in Gurugram.',
  keywords: 'Art Space Interior, ASIPL, aspi.in, turnkey solutions, interior fit-outs, MEP services, in-house manufacturing, corporate interiors, retail fitouts, luxury residential, Gurugram, Delhi NCR, Hyderabad, Bengaluru',
  icons: {
    icon: '/images/ASIPL_Logo.jpeg',
    apple: '/images/ASIPL_Logo.jpeg',
  },
  openGraph: {
    title: 'Art Space Interior Pvt. Ltd. (ASIPL) | Design, Build & Decore',
    description: 'Single-team turnkey interior solutions, in-house furniture manufacturing, and robust MEP engineering across India.',
    url: 'https://aspi.in',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
