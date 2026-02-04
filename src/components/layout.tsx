import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
