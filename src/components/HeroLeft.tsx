import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Button } from "./ui/button";
import HeroCvBtn from "./HeroCvBtn";

const socials = [
  { title: "Github Homepage", href: "https://github.com/mkhotamirais", Icon: SiGithub },
  { title: "LinkedIn Profile", href: "https://www.linkedin.com/in/mkhotami-rais/", Icon: SiLinkedin },
  { title: "Email me", href: "mailto:tami01.job@gmail.com", Icon: SiGmail },
];

export default function HeroLeft() {
  return (
    <div className="flex flex-col justify-between text-center lg:text-left space-y-6 lg:space-y-4 py-4">
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <img
            src="https://github.com/mkhotamirais.png"
            alt="mkhotami github profile foto"
            className="size-24 rounded-full shadow"
          />
          <span className="absolute text-3xl -bottom-2 left-0">👋</span>
        </div>
      </div>
      <div className="prose">
        <h1 className="font-barlowCondensed">I am Mkhotami, a Web Developer</h1>
        <p>I Built dynamic, responsive web applications and created seamless user experiences with efficient code.</p>
      </div>
      <div className="flex gap-4 justify-center lg:justify-start">
        {socials.map(({ title, href, Icon }, i) => (
          <a key={i} title={title} href={href} target="_blank" rel="noopener">
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
        <HeroCvBtn />
        <Button variant={"outline"} asChild className="w-44">
          <a href="#contact">Contact me</a>
        </Button>
      </div>
    </div>
  );
}
