import type { Metadata } from "next";
import { Inter, Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taiba Hospital | Premier Private Healthcare in Kuwait",
  description:
    "Taiba Hospital is a leading private hospital in Kuwait providing world-class healthcare with advanced technology, expert specialists, and compassionate patient care across 23+ specialties.",
  keywords: [
    "Taiba Hospital",
    "Kuwait hospital",
    "private hospital Kuwait",
    "healthcare Kuwait",
    "best hospital Kuwait",
    "doctors Kuwait",
    "medical center Kuwait",
    "JCI accredited",
  ],
  authors: [{ name: "Taiba Hospital" }],
  openGraph: {
    title: "Taiba Hospital | Premier Private Healthcare in Kuwait",
    description:
      "World-class healthcare with advanced technology and expert specialists. Book your appointment today.",
    url: "https://taibahospital.com",
    siteName: "Taiba Hospital",
    type: "website",
    locale: "en_KW",
    alternateLocale: "ar_KW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taiba Hospital | Premier Private Healthcare in Kuwait",
    description:
      "World-class healthcare with advanced technology and expert specialists.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: 'Taiba Hospital',
    alternateName: 'مستشفى طيبة',
    url: 'https://taibahospital.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jabriya',
      addressCountry: 'KW',
    },
    telephone: '+9651808088',
    email: 'info@taibahospital.com',
    medicalSpecialty: [
      'Cardiology',
      'Orthopedics',
      'Pediatrics',
      'Neurology',
      'Dermatology',
      "Women's Health",
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${cairo.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
