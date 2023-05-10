import PrimaryLayout from "@/components/PrimaryLayout";
import "./globals.css";
import { Inter } from "next/font/google";
import { RootProvider } from "./RootProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Listing",
  description: "Movie Listing Web App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <RootProvider>
          <PrimaryLayout>{children}</PrimaryLayout>
        </RootProvider>
      </body>
    </html>
  );
}
