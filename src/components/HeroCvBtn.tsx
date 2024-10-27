import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { FileDown, ArrowDown, Eye } from "lucide-react";

export default function HeroCvBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a
          title="cv mkhotami"
          href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/preview"
          // href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-44">
            <FileDown className="mr-1" />
            <div>Download CV</div>
          </Button>
        </a>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuItem asChild className="flex justify-center">
          <a
            title="cv mkhotami"
            href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/export?format=pdf"
          >
            <ArrowDown className="size-4 mr-2" />
            Download
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center">
          <a
            title="cv mkhotami"
            href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/preview"
            className="flex items-center justify-center"
          >
            <Eye className="size-4 mr-2" /> Preview
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
