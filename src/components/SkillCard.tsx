import { Skill } from "../types";

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg">
      <h2 className="title">{title}</h2>
      <div className="h-[0.15rem] bg-blue-400 rounded-full w-16 mb-4"></div>
      <div className="flex gap-6 flex-wrap">
        {skills.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={item.imgUrl} alt="" className="size-10" />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
