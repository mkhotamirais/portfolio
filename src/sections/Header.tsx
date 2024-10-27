import { menu } from "@/lib/menu";

export default function Header() {
  return (
    <header className="z-50 fixed h-20 w-full flex items-center justify-center">
      <div className="absolute border rounded">
        <div className="flex gap-1 p-1 bg-background z-50 text-sm">
          {menu.map((item, i) => (
            <a href={`#${item}`} key={i} className="border rounded px-4 py-2">
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
