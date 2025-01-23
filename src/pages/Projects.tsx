import { FaMagnifyingGlass } from "react-icons/fa6";
import { projects } from "../locales/all/common";
import { ProjectsData } from "../types";
import React, { ChangeEvent, MouseEvent, useState } from "react";

const badges = Array.from(new Set(projects.flatMap((project) => project.tools)));
const categories = ["all categories", "laravel", "wordpress", "reactjs"];

export default function Projects() {
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProjects = projects
    .filter((item) => item["domain-name"].toLowerCase().includes(cari.toLowerCase()))
    .filter((item) => item.tools[0].toLowerCase().includes(selectedCategory.toLowerCase()))
    .filter((item) => selectedBadge.every((badge) => item.tools.includes(badge)))
    .sort((a, b) => a["domain-name"].toLowerCase().localeCompare(b["domain-name"].toLowerCase()));

  const onBadge = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const badge: string = target?.innerText;
    if (selectedBadge.includes(badge)) {
      setSelectedBadge((prev) => prev.filter((p) => p !== badge));
    } else setSelectedBadge((prev) => [...prev, badge]);
  };

  const onCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value as (typeof categories)[number]);
  };

  return (
    <div>
      <div className="container py-8">
        <h1 className="title">All Projects</h1>
        <div className="space-y-2">
          <div className="relative flex items-center gap-4 w-full sm:w-64">
            <input
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              type="text"
              className="border rounded-lg py-2 px-4 pr-10 focus:outline-none w-full"
              placeholder="Search here.."
            />
            <FaMagnifyingGlass className="absolute text-gray-300 text-lg m-3 right-0" />
          </div>
          <div className="flex items-center overflow-x-scroll gap-1">
            <div className="flex gap-1">
              {categories.map((item, i) => (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    name="category"
                    value={item === "all categories" ? "" : item}
                    id={item}
                    onChange={onCategory}
                    className="hidden"
                  />
                  <label
                    htmlFor={item}
                    className={`${
                      selectedCategory === (item === "all categories" ? "" : item) ? "bg-blue-500 text-white" : ""
                    } badge`}
                  >
                    {item}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center overflow-x-scroll gap-1">
            <button type="button" onClick={() => setSelectedBadge([])} className="badge">
              Reset Tags
            </button>{" "}
            :
            <div className="gap-1 flex">
              {badges.map((item, i) => (
                <button
                  type="button"
                  key={i}
                  className={`${selectedBadge.includes(item) ? "bg-blue-500 text-white" : ""} badge`}
                  onClick={onBadge}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          {filteredProjects.map((project: ProjectsData, i) => (
            <div key={i} className="border rounded-md p-4 overflow-x-scroll">
              <h3 className="text-2xl font-semibold ">{project["domain-name"]}</h3>
              <p className="hidden">{project["web-description"]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
