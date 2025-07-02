import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google" 
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer" 
import Navbar from "@/components/navbar"
import StructuredData from "@/components/structured-data"


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ethereumbolivia.org/'),
  title:  {
    default: 'Buildathon ETH Bolivia 2025', 
    template: '%s | Buildathon ETH Bolivia', 
  },
  description: 'Participa en la Buildathon más grande de Bolivia. Tres días de hacking, mentorías y construcción del futuro de Web3. ¡Regístrate ahora!',
    icons: {
      icon: '/favicon.png',  
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },

    openGraph: {
      title: 'Buildathon ETH Bolivia 2025 - ¡Únete al Reto!', 
      description: 'Prepárate para 3 días de innovación y desarrollo en el ecosistema Web3.',
      url: 'https://ethereumbolivia.org/',  
      siteName: 'Buildathon ETH Bolivia',
      images: [ 
        {
          url: '/1200x630.jpg',  
          width: 1200,
          height: 630,
          alt: 'Banner oficial de la Buildathon ETH Bolivia 2025',
        },
      ],
      locale: 'es_BO', // Idioma y región
      type: 'website',
    },

    // --- Metadata para Twitter ---
    twitter: {
      card: 'summary_large_image', 
      title: 'Buildathon ETH Bolivia 2025 - ¡Crea tu Pase de Hacker!',
      description: 'Prepárate para 3 días de innovación y desarrollo en el ecosistema Web3.',
      creator: '@EthereumBo', 
      images: ['/1200x630.jpg'],  
    },

    // --- Otros metadatos ---
    keywords: ['Buildathon', 'Bolivia', 'Ethereum', 'Web3', 'Blockchain', 'Hackathon', 'Programación', 'Cripto'],
    robots: { 
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <StructuredData />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            </div>
           <Footer />  
        </ThemeProvider>
      </body>
    </html>
  );
}
