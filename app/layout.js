import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "@/components/AppShell";
import { SnackbarProvider } from "@/hooks/Snackbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "accenly",
  description: "Focus on your business, we will take care of your project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SnackbarProvider>
          <AppShell>{children}</AppShell>
        </SnackbarProvider>
      </body>
    </html>
  );
}
