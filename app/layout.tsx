import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mohand Amged",
  description: "Welcome to my personal website !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        {/* Background grid */}
        <div>
          <div
            className={cn(
              "fixed inset-0 -z-10 dark:opacity-30",
              "[background-size:50px_50px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              "animate-grid-pulse"
            )}
          />

          {/* Radial gradient overlay */}
          <div className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-main"></div>
        </div>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
