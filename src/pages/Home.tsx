import { useTranslation, Trans } from "react-i18next";
import Button from "../components/Button";
import { Exp, ProjectData } from "../types";
import { SiLaravel, SiWordpress, SiReact, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaDownload, FaEye } from "react-icons/fa6";
import SkillCard from "../components/SkillCard";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import { skills } from "../lib";
import common from "../locales/all/common.json";

export default function Home() {
  const { t } = useTranslation();

  const aboutDescription = t("home.about.description", { returnObjects: true }) as string[];

  const projectData = t("home.project.project-data", { returnObjects: true }) as ProjectData[];

  const feSkills = skills.filter((skill) => skill.type === "front-end").sort((a, b) => a.title.localeCompare(b.title));
  const beSkills = skills.filter((skill) => skill.type === "back-end").sort((a, b) => a.title.localeCompare(b.title));
  const fsSkills = skills.filter((skill) => skill.type === "fullstack").sort((a, b) => a.title.localeCompare(b.title));
  const dbSkills = skills.filter((skill) => skill.type === "database").sort((a, b) => a.title.localeCompare(b.title));

  const expData = t("home.experience.exp-data", { returnObjects: true }) as Exp[];

  return (
    <Layout>
      <Helmet>
        <title>{t("meta.home.title")}</title>
        <meta name="description" content={`${t("meta.home.description")}`} />
      </Helmet>

      {/* hero */}
      <section id="home" className="relative py-16 scroll-mt-16">
        <div className="container h-full">
          <div className="flex gap-8 lg:gap-16 absolute left-1/2 top-1/2 -translate-x-1/2 opacity-5">
            <SiReact size={80} />
            <SiLaravel size={80} />
            <SiWordpress size={80} />
          </div>
          <div className="flex flex-col items-center space-y-4 max-w-xl mx-auto">
            <img
              src={`${common.hero["img-me"]}`}
              alt="mkhotami foto profile"
              className="size-28 rounded-full shadow-lg"
            />
            <h1 className="text-2xl lg:text-3xl text-center">
              <Trans i18nKey={"home.hero.title"} components={{ span: <span /> }} />
            </h1>
            <p className="text-center">{t("home.hero.description")}</p>
            <div className="flex gap-6">
              <a title="send me an email" href={`${common.links.mail}`} className="hover:text-blue-500">
                <FaRegEnvelope className="text-xl" />
              </a>
              <a title="github profile" href={`${common.links.github}`} className="hover:text-blue-500">
                <FaGithub className="text-xl" />
              </a>
              <a title="linkedin profile" href={`${common.links.linkedin}`} className="hover:text-blue-500">
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
                      href={`${common.links["cv-download-pdf"]}`}
                      className="flex hover:text-blue-500 items-center"
                    >
                      <FaDownload className="size-4 mr-2" /> {t("home.hero.hero-btn.download.1")}
                    </a>
                    <a
                      title="cv mkhotami"
                      href={`${common.links["cv-preview"]}`}
                      className="flex hover:text-blue-500 items-center"
                    >
                      <FaEye className="size-4 mr-2" /> {t("home.hero.hero-btn.download.2")}
                    </a>
                  </div>
                </div>
              </div>
              <a href="/projects">
                <Button className="lg:px-6 lg:py-3" variant="bordered">
                  {t("home.hero.hero-btn.project-btn")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* project */}
      <section id="project" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="container h-full">
          <div className="mb-12">
            <h2 className="top-title">{t("home.project.top-title")}</h2>
            <h3 className="title">{t("home.project.title")}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projectData.map((item, i) => (
              <div key={i} className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition p-8 bg-white">
                {/* top logo */}
                <a href={`https://${item["domain-name"]}`} className="flex gap-2 mb-4 group">
                  <img src={`${item["logo-url"]}`} alt={item["domain-name"]} className="size-12" />
                  <div>
                    <h4 className="group-hover:underline font-bold text-xl">{item["domain-name"]}</h4>
                    <div className="text-sm text-gray-500">{item["company-name"]}</div>
                  </div>
                </a>
                <article className="space-y-3 grow">
                  <div className="text-xs bg-blue-500 text-white rounded-full w-fit px-2 py-[.20rem]">
                    {item["website-type"]}
                  </div>
                  <details>
                    <summary className="text-blue-600 w-fit cursor-pointer">{t("home.project.detail-btn")}</summary>
                    <p>{item["web-description"]}</p>
                  </details>
                  <p className="text-sm">
                    <b>Tools :</b> {item["tools"].join(" - ")}
                  </p>

                  <p>{item["jobdesk"]}</p>
                </article>

                <br />
                <a href={`https://${item["domain-name"]}`}>
                  <Button className="w-full">Visit</Button>
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mt-8">
            <Link to="/projects">
              <Button className="lg:px-6 lg:py-3">{t("home.project.all-project-btn")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="py-16 scroll-mt-16">
        <div className="container h-full">
          <div className="mb-12">
            <h2 className="top-title">{t("home.about.top-title")}</h2>
            <h3 className="title">{t("home.about.title")}</h3>
          </div>
          <article className="max-w-2xl mx-auto text-justify">
            {aboutDescription.map((item, i) => (
              <p key={i} className="leading-7 mb-2 max-w-4xl">
                <Trans components={{ span: <span /> }}>{item}</Trans>
              </p>
            ))}
          </article>
        </div>
      </section>

      {/* skill */}
      <section id="skill" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="container h-full">
          <div className="mb-12">
            <h2 className="top-title">{t("home.skill.top-title")}</h2>
            <h3 className="title">{t("home.skill.title")}</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SkillCard title="Front-End" skills={feSkills} />
            <SkillCard title="Back-End" skills={beSkills} />
            <SkillCard title="Fullstack" skills={fsSkills} />
            <SkillCard title="Database" skills={dbSkills} />
          </div>
        </div>
      </section>

      {/* experience */}
      <section id="experience" className="py-16 scroll-mt-16">
        <div className="container h-full">
          <div className="mb-12">
            <h2 className="top-title">{t("home.experience.top-title")}</h2>
            <h3 className="title">{t("home.experience.title")}</h3>
          </div>
          <article className="max-w-4xl mx-auto">
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
          </article>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="container h-full">
          <div className="mb-12">
            <h2 className="top-title">{t("home.contact.top-title")}</h2>
            <h3 className="title">{t("home.contact.title")}</h3>
          </div>
          <article className="space-y-4 text-lg text-blue-500 flex flex-col items-center justify-center">
            <a href="https://mailto:tami01.job@gmail.com" className="w-fit flex gap-2 items-center hover:underline">
              <FaRegEnvelope size={24} />
              tami01.job@gmail.com
            </a>
            <a href="https://wa.me/6287766606133" className="w-fit flex gap-2 items-center hover:underline">
              <SiWhatsapp size={24} />
              087766606133
            </a>
          </article>
        </div>
      </section>
    </Layout>
  );
}
