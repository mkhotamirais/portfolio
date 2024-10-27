import SkillsCard from "@/components/SkillsCard";
import { skills } from "@/lib/skills";

export default function Skills() {
  const frontEnd = skills.filter((item) => item.type === "front-end");
  const backEnd = skills.filter((item) => item.type === "back-end");
  const fullstack = skills.filter((item) => item.type === "fullstack");
  const database = skills.filter((item) => item.type === "database");

  return (
    <section id="skills" className="min-h-[50vh] py-16">
      <div className="container *:font-barlowCondensed *:text-center">
        <article className="prose min-w-full">
          <h1 className="">Skills</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillsCard skills={frontEnd} title="Front-End" />
            <SkillsCard skills={backEnd} title="Back-End" />
            <SkillsCard skills={fullstack} title="Fullstack" />
            <SkillsCard skills={database} title="Database" />
          </div>
        </article>
      </div>
    </section>
  );
}
