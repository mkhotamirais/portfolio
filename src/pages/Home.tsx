import { useTranslation, Trans } from "react-i18next";
import Section from "../components/Section";
import Button from "../components/Button";
import { Exp, ProjectData } from "../types";
import { SiLaravel, SiWordpress, SiReact, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaChevronUp, FaDownload, FaEye } from "react-icons/fa6";
import { skills } from "../locales/all/common";
import SkillCard from "../components/SkillCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const aboutDescription = t("home.about.description", { returnObjects: true }) as string[];

  const projectData = t("home.project.project-data", { returnObjects: true }) as ProjectData[];

  const feSkills = skills.filter((skill) => skill.type === "front-end").sort((a, b) => a.title.localeCompare(b.title));
  const beSkills = skills.filter((skill) => skill.type === "back-end").sort((a, b) => a.title.localeCompare(b.title));
  const fsSkills = skills.filter((skill) => skill.type === "fullstack").sort((a, b) => a.title.localeCompare(b.title));
  const dbSkills = skills.filter((skill) => skill.type === "database").sort((a, b) => a.title.localeCompare(b.title));

  const expData = t("home.experience.exp-data", { returnObjects: true }) as Exp[];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      {/* hero */}
      <Section id="home" className="relative">
        <div className="flex gap-8 lg:gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 opacity-5">
          <SiReact size={80} />
          <SiLaravel size={80} />
          <SiWordpress size={80} />
        </div>
        <div className="flex flex-col items-center space-y-4 max-w-xl mx-auto">
          <img
            src="https://avatars.githubusercontent.com/u/129278280?v=4"
            alt="mkhotami foto profile"
            className="size-28 rounded-full shadow-lg"
          />
          <h1 className="text-2xl lg:text-3xl text-center">
            <Trans i18nKey={"home.hero.title"} components={{ span: <span /> }} />
          </h1>
          <p className="text-center">{t("home.hero.description")}</p>
          <div className="flex gap-6">
            <a title="send me an email" href="mailto:tami01.job@gmail.com" className="hover:text-blue-500">
              <FaRegEnvelope className="text-xl" />
            </a>
            <a title="github profile" href="https://github.com/mkhotamirais" className="hover:text-blue-500">
              <FaGithub className="text-xl" />
            </a>
            <a
              title="linkedin profile"
              href="https://www.linkedin.com/in/mkhotami-rais/"
              className="hover:text-blue-500"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
          <div className="pt-4 flex flex-col items-center sm:flex-row gap-2">
            <div className="relative group">
              <Button className="lg:px-6 lg:py-3">{t("home.hero.hero-btn.download.0")}</Button>
              <div className="pt-2 scale-0 group-hover:scale-100 origin-top absolute transition w-full">
                <div className="flex border p-4 bg-white rounded-xl z-50 flex-col items-center gap-2">
                  <a
                    title="cv mkhotami"
                    href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/export?format=pdf"
                    className="flex hover:text-blue-500 items-center"
                  >
                    <FaDownload className="size-4 mr-2" /> {t("home.hero.hero-btn.download.1")}
                  </a>
                  <a
                    title="cv mkhotami"
                    href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/preview"
                    className="flex hover:text-blue-500 items-center"
                  >
                    <FaEye className="size-4 mr-2" /> {t("home.hero.hero-btn.download.2")}
                  </a>
                </div>
              </div>
            </div>
            <a href="#contact">
              <Button className="lg:px-6 lg:py-3" variant="bordered">
                {t("home.hero.hero-btn.contact")}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* project */}
      <Section id="project" bg="bg-gray-50">
        <h1 className="top-title">{t("home.project.top-title")}</h1>
        <h1 className="title">{t("home.project.title")}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectData.map((item, i) => (
            <div key={i} className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition p-8 bg-white">
              {/* top logo */}
              <a href={`https://${item["domain-name"]}`} className="flex gap-2 mb-4 group">
                <img src={item["logo-url"]} alt={item["domain-name"]} className="size-12" />
                <div>
                  <h2 className="group-hover:underline font-bold text-xl">{item["domain-name"]}</h2>
                  <div className="text-sm text-gray-500">{item["company-name"]}</div>
                </div>
              </a>
              <div className="space-y-3 grow">
                <div className="text-xs bg-blue-500 text-white rounded-full w-fit px-2 py-[.20rem]">
                  {item["website-type"]}
                </div>
                <details>
                  <summary className="text-blue-600 w-fit cursor-pointer">{t("home.project.detail-btn")}</summary>
                  <p>{item["web-description"]}</p>
                </details>
                <div className="text-sm">
                  <b>Tools :</b> {item["tools"].join(" - ")}
                </div>
                <div className="text-sm">
                  <b>Hosting :</b> {item["hosting"]}
                </div>

                <p>{item["jobdesk"]}</p>
              </div>

              <br />
              <a href={`https://${item["domain-name"]}`}>
                <Button className="w-full">Visit</Button>
              </a>
            </div>
          ))}
          <div>
            <Link to="/projects">
              <Button className="lg:px-6 lg:py-3">{t("home.project.all-project-btn")}</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* about */}
      <Section id="about">
        <h1 className="top-title">{t("home.about.top-title")}</h1>
        <h1 className="title">{t("home.about.title")}</h1>
        {aboutDescription.map((item, i) => (
          <p key={i} className="leading-7 mb-2 max-w-4xl">
            <Trans components={{ span: <span /> }}>{item}</Trans>
          </p>
        ))}
      </Section>

      {/* skill */}
      <Section id="skill" bg="bg-gray-50">
        <h1 className="top-title">{t("home.skill.top-title")}</h1>
        <h1 className="title">{t("home.skill.title")}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SkillCard title="Front-End" skills={feSkills} />
          <SkillCard title="Back-End" skills={beSkills} />
          <SkillCard title="Fullstack" skills={fsSkills} />
          <SkillCard title="Database" skills={dbSkills} />
        </div>
      </Section>

      {/* experience */}
      <Section id="experience">
        <h1 className="top-title">{t("home.experience.top-title")}</h1>
        <h1 className="title">{t("home.experience.title")}</h1>
        <div>
          {expData.map((item, i) => (
            <div key={i} className="border-l-4 mb-8 border-blue-500 pl-6 space-y-4">
              <h2 className="title">{item.job}</h2>
              <div>
                <div>{item.company}</div>
                <p className="!text-gray-500 text-sm">{item.date}</p>
              </div>
              <p className="max-w-4xl leading-relaxed">
                <Trans components={{ a: <a /> }}>{item.description}</Trans>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* contact */}
      <Section id="contact" bg="bg-gray-50">
        <h1 className="top-title">{t("home.contact.top-title")}</h1>
        <h1 className="title">{t("home.contact.title")}</h1>
        <div className="space-y-4 text-lg text-blue-500">
          <a href="mailto:tami01.job@gmail.com" className="w-fit flex gap-2 items-center hover:underline">
            <FaRegEnvelope size={24} />
            tami01.job@gmail.com
          </a>
          <a href="wa.me/6287766606133" className="w-fit flex gap-2 items-center hover:underline">
            <SiWhatsapp size={24} />
            087766606133
          </a>
        </div>
      </Section>

      {/* scroll to top */}
      <div className={`${show ? "flex scale-100" : "scale-0"} fixed right-4 bottom-20 lg:bottom-8 transition`}>
        <a
          title="scroll to top"
          href="#"
          target="_top"
          className="z-50 flex hover:bg-gray-100 transition p-2 rounded-full"
        >
          <FaChevronUp className="text-2xl text-blue-500 hover:text-blue-400 cursor-pointer" />
        </a>
      </div>

      {/* contact whatsapp */}
      <div className="flex lg:hidden fixed bottom-8 right-4 z-50">
        <a href="https://wa.me/6287766606133">
          <img
            src="https://raw.githubusercontent.com/grommet/grommet-icons/master/public/img/whatsapp.svg"
            alt="contact me"
            className="size-10"
          />
        </a>
      </div>
    </>
  );
}
