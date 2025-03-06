import NavBar from "@/components/NavBar";

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
      <main>{children}</main>
    </>
  );
}
