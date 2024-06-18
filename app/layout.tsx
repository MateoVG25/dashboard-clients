import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/utils/Provider";
import { ThemeProvider } from "next-themes";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard usuarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "#edf6f9" }}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
