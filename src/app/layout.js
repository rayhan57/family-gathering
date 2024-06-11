import { Dancing_Script, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const dancing_script = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export const metadata = {
  title: "Family Gathering",
  description: "Family Gathering App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dancing_script.variable}>
      <body className={roboto.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
