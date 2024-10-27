import { Button } from "@/components/ui/button";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const contacts = [
  { title: "tami01.job@gmail.com", href: "mailto:tami01.job@gmail.com", Icon: SiGmail },
  { title: "087766606133", href: "https://wa.me/6287766606133", Icon: SiWhatsapp },
];

export default function AboutContact() {
  return (
    <section id="contact" className="py-16">
      <div className="prose min-w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-primary *:text-secondary h-full flex flex-col items-center justify-center py-8 rounded-lg">
              <h2 className="mt-0">Contact Me</h2>
              <div className="flex flex-col gap-4 items-center">
                {contacts.map(({ title, href, Icon }, i) => (
                  <Button key={i} asChild variant={"link"}>
                    <a href={href} className="text-secondary no-underline flex gap-2 items-center">
                      <Icon className="min-w-max" />
                      <span>{title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <h2 className="mt-0">About this website</h2>
            <p>
              This website is developed using React.js, leveraging Vite as the build tool for optimized performance.
              Iconography is implemented through React Icons, while styling is crafted with Tailwind CSS and ShadCN for
              a cohesive and responsive design. Framer Motion enhances the user experience with smooth, dynamic
              animations, providing a seamless and engaging interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
