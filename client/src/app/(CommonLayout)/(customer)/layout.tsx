import "@/src/styles/globals.css";
import { Navbar } from "@/src/components/navbar";
import "@smastrom/react-rating/style.css";
import Footer from "@/src/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
}
