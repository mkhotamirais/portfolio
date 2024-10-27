import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="min-h-[50vh] py-16 bg-secondary">
      <article className="prose min-w-full">
        <div className="container max-w-6xl mx-auto">
          <h1 className="font-barlowCondensed text-center">Experience</h1>
          <ExperienceCard />
        </div>
      </article>
    </section>
  );
}
