import './globals.css';

export const metadata = {
  title: 'ASPI Engineering & Interiors | Premium Smart Office Fit-Outs & MEP Turnkey Delivery',
  description: 'ASPI (aspi.in) specializes in premium smart office fit-outs, workplace MEP engineering, compliance management, and single-team turnkey project delivery across Gurugram, New Delhi (NCR) and pan-India.',
  keywords: 'smart office fit outs, workplace engineering, MEP coordination, turnkey interior fitout, compliance management, testing and commissioning, Gurugram, Delhi NCR, aspi.in',
  openGraph: {
    title: 'ASPI Engineering & Interiors | SmartOffice Turnkey Fit-Outs & MEP',
    description: 'Single-team turnkey workplace delivery integrating mechanical, electrical, and plumbing engineering into premium architectural interiors.',
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
