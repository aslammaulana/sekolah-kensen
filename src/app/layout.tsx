import Head from 'next/head';
import './globals.css';
import Navbar from '@/components/ThemeBuilder/01-Navbar';
import Sidebar from '@/components/ThemeBuilder/02-Sidebar';
import Footer from '@/components/ThemeBuilder/04-Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/KensenLogoRound.png" /> {/* Favicon */}
        <title>Your App Title</title> {/* Optional title */}
        <meta name="description" content="Your description here" /> {/* Optional meta */}
      </Head>
      <body className="bg-[#1c2431]">
        <div className="layout-container">
          <Navbar />
          <Sidebar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
