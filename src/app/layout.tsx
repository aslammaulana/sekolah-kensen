import Navbar from '@/components/ThemeBuilder/01-Navbar';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1c2431]">
        <div className="layout-container">
          
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
