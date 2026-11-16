import type { Content } from "@/content";

import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Process } from "./process";
import { Projects } from "./projects";
import { Services } from "./services";
import { Skills } from "./skills";

/** Ordem das seções da página inicial (cada uma em seu arquivo). */
export function HomePage({ c }: { c: Content }) {
  return (
    <>
      <Hero c={c} />
      <Projects c={c} />
      <Services c={c} />
      <Process c={c} />
      <Skills c={c} />
      <About c={c} />
      <Contact c={c} />
    </>
  );
}
