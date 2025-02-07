import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-blue-500">Bulbul</h1>
    </div>
  );
}
