import { Button } from "@/components/ui/button";
import { menu } from "@/lib/menu";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function NavBottom() {
  const location = useLocation();
  const menuRef = useRef(null);

  return (
    <div id="nav-bottom" className="z-50w-full fixed bottom-0 left-0 right-0 bg-background">
      <div className="container h-16 flex items-center justify-center">
        <div ref={menuRef} className="menu flex overflow-x-scroll">
          {menu.map((item, i) => (
            <div key={i} className="relative">
              <Button variant="link" asChild className="capitalize">
                <a href={`#${item}`} key={i} className="">
                  {item}
                </a>
              </Button>
              {location.hash === `#${item}` && <div className="bg-primary/15 rounded-lg absolute inset-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
