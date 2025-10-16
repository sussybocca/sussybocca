import "../styles/tailwind/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Vibro",
  description: "Next-gen video platform to vibe, create, and connect",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <header className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-violet-400 tracking-wide">
            Vibro
          </h1>
        </header>

        <main className="p-8">{children}</main>

        <footer className="mt-16 border-t border-gray-800 p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vibro Inc. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
