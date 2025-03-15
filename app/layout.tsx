import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
// import { ToastProvider } from "./components/context/ToastCardContext";
import Layout from "./component/Layout";

export const metadata: Metadata = {
  title: "Ohwambe website",
  description: "The best website for your event",
};


const albertFont = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body   className={albertFont.className}
       suppressHydrationWarning>
        <NextTopLoader
          color="#F3F3F3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #F5888E,0 0 5px #F5888E"
        />
        {/* <ToastProvider> */}
        <Layout>{children}</Layout>
        {/* </ToastProvider> */}
      </body>
    </html>
  );
}
