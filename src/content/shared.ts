/** Dados que não mudam entre idiomas (links, stack, caminhos de imagem). */
export const contact = {
  // Só dígitos, com DDI e DDD. Vazio = botão escondido.
  whatsapp: "5518996991108",
  // Vazio = botão escondido.
  email: "vitor.valentim.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/vitor-valentim-desenvolvedor/",
  github: "https://github.com/VitorValentimSilva",
};

const gh = (repo: string) => `${contact.github}/${repo}`;

export const projectLinks = {
  agendai: { demo: "https://agendai-glev.vercel.app", code: gh("agendai") },
  // TODO: preencher quando as demos forem publicadas.
  estoka: { demo: "", code: gh("estoka") },
  landing: { demo: "", code: gh("odonto-aurora") },
};

export const stacks = {
  agendai: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "NestJS", "Prisma", "PostgreSQL", "Vercel"],
  estoka: [".NET 10", "C#", "Blazor Server", "MudBlazor", "EF Core", "PostgreSQL", "Docker", "xUnit", "Playwright"],
  landing: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Playwright", "Lighthouse CI"],
};

export const skills = {
  front: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "React Native"],
  back: ["C#", "ASP.NET Core", "Blazor Server", "NestJS", "Node.js", "REST APIs"],
  data: ["PostgreSQL", "Prisma", "Entity Framework Core"],
  tools: ["Git", "GitHub", "GitHub Actions", "Docker", "Vercel", "Cloudflare"],
};
