import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";
import Loading from "./loading";

const navLinks = [
  {
    link: "/",
    text: "Home",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar navLinks={navLinks} isMainNavBar={true} />
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
}
