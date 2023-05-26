import Providers from "@/components/Providers";
import { cn } from "@/lib/util";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

import { Inter } from "next/font/google";
import { Toast, Toaster } from "@/components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          {children}
        
          <Toaster position="bottom-center"/>

          { /* @ts-expect-error Server Component */}
          <Navbar />
          

        </Providers>
        {/* Allow for more height on mobile devices*/}
        <div className="h-40 md:hidden"/>
        </body>
    </html>
  );
}
