import Info from "@/app/components/info/Info";
import ContactComponent from "../../components/contactComponents/ContactComponent";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";
import Hero from "@/app/components/hero/Hero";

export default function Contact() {
  return (
    <main>
      <Hero />
      <ContactComponent />
      <Info />
    </main>
  );
}
