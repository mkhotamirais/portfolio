import { projects } from "@/lib/projects";
import { Button } from "./ui/button";

export default function HeroRight() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="prose">
        <h1 className="font-barlowCondensed text-center text-3xl lg:text-xl mb-8 lg:mb-auto">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((item, i) => (
          <div key={i} className="relative group hover:scale-105 transition">
            <div className="scale-0 group-hover:scale-100 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 *:text-white flex gap-4">
              <Button variant={"link"} size="sm">
                View
              </Button>
              <Button variant={"link"} size="sm">
                Detail
              </Button>
            </div>
            <img src={item.imagePath} alt={"halo semua"} className="rounded-lg" />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="link">View More</Button>
      </div>
    </div>
  );
}
