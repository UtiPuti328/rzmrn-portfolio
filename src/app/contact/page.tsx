import { createMetadata } from "@/lib/metadata";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch for collaborations, commissions, and creative projects.",
  path: "/contact",
  ogImage: "/og/contact.jpg",
});

export default function ContactPage() {
  return <ContactForm />;
}
