import { Skill } from "@/lib/skills";

export default function SkillsCard({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="p-4 shadow-xl rounded-xl">
      <h3 className="mt-0">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(({ imgUrl, title }, i) => (
            <div key={i} className="leading-none space-y-0 flex flex-col items-center">
              <img src={imgUrl} alt={title || "skills icon"} className="size-10 space-y-0 my-0" />
              <h4>{title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
