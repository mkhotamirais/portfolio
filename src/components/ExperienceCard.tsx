import { FaReact, FaMicrosoft, FaGlobe } from "react-icons/fa6";

const experiences = [
  {
    title: "Freelance Web Developer",
    by: "Tamionweb",
    place: "Tangerang",
    year: "2024-now",
    description: `As a freelancer, I’ve worked on several website projects for various clients. Among these are a corporate website with the domain saikindo.co.id and a school website with the domain handinalmusri.com.`,
    icon: FaGlobe,
  },
  {
    title: "ReactJs and NodeJs (Bootcamp)",
    by: "Eduwork",
    place: "Jogjakarta",
    year: "2023-2024",
    description: `I graduated after 5 months of studying in a React and Node.js class, covering topics from basic web programming to project development, including building an online store using various React libraries.`,
    icon: FaReact,
  },
  {
    title: "Ultimate Microsoft Office (Pre-Recorded Videos)",
    by: "Eduwork",
    place: "Bandung",
    year: "2021-2022",
    description: `I have completed the course material delivered in the form of pre-recorded videos from Udemy, covering Microsoft Office, particularly Microsoft Word and Excel, from basic to advanced levels.`,
    icon: FaMicrosoft,
  },
];

export default function ExperienceCard() {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map(({ icon: Icon, title, by, place, year, description }, i) => (
        <div key={i} className="flex gap-4">
          <div className="p-4 bg-woven h-fit rounded-full border shadow-lg hidden lg:block">
            <Icon className="text-2xl" />
          </div>
          <div className="w-full bg-woven border-l-4 border-blue-500 p-4 rounded-lg">
            <h3 className="mt-0">{title}</h3>
            <h4 className="mb-0">{by}</h4>
            <h5>
              {place}, {year}
            </h5>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
