import { contact, projectLinks, skills, stacks } from "./shared";
import type { Content } from "./types";

export const pt: Content = {
  lang: "pt",
  htmlLang: "pt-BR",
  locale: "pt_BR",
  base: "",
  projectsPath: "/projetos",
  seo: {
    title: "Vitor Valentim — Desenvolvedor full stack para sites e sistemas web",
    description:
      "Crio sites, sistemas de agendamento, painéis de estoque e vendas e integrações (WhatsApp, Pix) para pequenos negócios. React, Next.js, NestJS, .NET e Blazor.",
    keywords: [
      "desenvolvedor freelancer",
      "desenvolvedor full stack",
      "criação de sites",
      "landing page",
      "sistema de agendamento",
      "sistema de estoque",
      "Next.js",
      "React",
      ".NET",
      "Blazor",
    ],
  },
  person: { name: "Vitor Valentim", role: "Desenvolvedor full stack", location: "Presidente Prudente – SP · remoto", initials: "VV" },
  contact: {
    ...contact,
    whatsappMessage: "Olá, Vitor! Vi seu portfólio e quero conversar sobre um projeto.",
  },
  nav: { projects: "Projetos", services: "Serviços", process: "Como trabalho", about: "Sobre", contact: "Contato" },
  ui: {
    skipToContent: "Pular para o conteúdo",
    switchLanguage: "Ver o site em inglês",
    otherLanguageLabel: "EN",
    theme: { toggle: "Tema: {mode}. Clique para trocar", light: "claro", dark: "escuro", system: "do sistema" },
    viewDemo: "Ver demo",
    viewCode: "Ver código",
    viewProject: "Ver detalhes",
    backToProjects: "Voltar para os projetos",
    features: "O que o sistema faz",
    highlights: "Por baixo do capô",
    stack: "Tecnologias",
    gallery: "Telas",
    forWho: "Para quem",
    talkWhatsapp: "Falar no WhatsApp",
    sendEmail: "Enviar e-mail",
    menu: "Menu",
    notFoundTitle: "Página não encontrada",
    notFoundText: "O endereço pode ter mudado ou não existe.",
    goHome: "Voltar ao início",
    rights: "Todos os direitos reservados.",
    builtWith: "Feito com Next.js e Tailwind CSS, hospedado na Cloudflare.",
  },
  hero: {
    badge: "Disponível para projetos freelance",
    title: "Sites e sistemas web que fazem o seu negócio funcionar",
    subtitle:
      "Sou desenvolvedor full stack. Crio sites rápidos, sistemas de agendamento, painéis de estoque e vendas e integrações com WhatsApp e Pix, do jeito que pequenos negócios precisam.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Falar comigo",
    facts: ["React · Next.js · NestJS", "C# · .NET · Blazor", "Entrega com testes e demo online"],
  },
  services: {
    eyebrow: "Serviços",
    title: "O que eu posso fazer por você",
    description: "Do site de apresentação ao sistema interno, com código limpo, rápido e fácil de manter.",
    items: [
      {
        icon: "globe",
        title: "Sites e landing pages",
        description:
          "Páginas rápidas e bonitas no celular para clínicas, restaurantes e negócios locais, com botão de WhatsApp e boa posição no Google.",
      },
      {
        icon: "calendar",
        title: "Sistemas de agendamento",
        description:
          "Agenda online com horários livres, confirmação e lembrete pelo WhatsApp, pagamento por Pix e painel para o dono do negócio.",
      },
      {
        icon: "boxes",
        title: "Painéis e sistemas internos",
        description:
          "Controle de estoque, pedidos, clientes e relatórios em PDF e Excel, com acesso por perfil (dono, gerente, vendedor).",
      },
      {
        icon: "plug",
        title: "APIs e integrações",
        description:
          "Conexão com WhatsApp, Mercado Pago (Pix), Google Agenda e outros serviços, além de APIs documentadas para o seu sistema.",
      },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "Projetos completos, com demo para testar",
    description:
      "Cada projeto foi feito como um produto de verdade: funciona no celular, tem testes automatizados e dados de demonstração.",
    items: [
      {
        slug: "agendai",
        name: "Agendaí",
        tagline: "Sistema de agendamento online para barbearias, salões e clínicas",
        audience: "Barbearias, salões de beleza, estúdios e clínicas que hoje marcam horário pelo WhatsApp.",
        summary:
          "O cliente escolhe o serviço, o profissional e o horário em poucos toques. O dono acompanha a agenda, recebe por Pix e o sistema manda lembretes no WhatsApp. Um mesmo sistema atende vários negócios, cada um com o seu link.",
        features: [
          "Agendamento em 5 etapas, com horários livres calculados na hora",
          "Lembretes e confirmação pelo WhatsApp",
          "Pagamento antecipado por Pix (Mercado Pago)",
          "Sincronização com o Google Agenda e arquivo .ics",
          "Fila de espera quando o horário está cheio",
          "Painel do dono com agenda do dia, relatórios e exportação CSV",
          "Perfil de profissional que só vê a própria agenda",
          "Vários negócios no mesmo sistema (cada um com subdomínio ou link)",
        ],
        highlights: [
          "Impossível marcar dois clientes no mesmo horário: a regra fica no próprio banco de dados",
          "Regras de horário testadas com testes automatizados, respeitando o fuso de cada negócio",
          "API documentada (Swagger) e tipos gerados automaticamente para o site",
          "Dados de demonstração recriados todos os dias",
        ],
        stack: stacks.agendai,
        cover: { src: "/projects/agendai-cover.webp", alt: "Página pública da barbearia de demonstração no Agendaí" },
        gallery: [
          { src: "/projects/agendai-booking.webp", alt: "Escolha de data e horário no agendamento" },
          { src: "/projects/agendai-dashboard.webp", alt: "Painel do dono com o resumo do dia" },
          { src: "/projects/agendai-pix.webp", alt: "Pagamento por Pix com QR Code" },
        ],
        demo: { label: "Ver demo", href: projectLinks.agendai.demo },
        demoNote: "Painel de teste: demo@agendai.app · senha demo1234",
        code: { label: "Ver código", href: projectLinks.agendai.code },
      },
      {
        slug: "estoka",
        name: "Estoka",
        tagline: "Sistema de estoque e vendas para pequenas empresas",
        audience: "Distribuidoras, lojas e pequenas empresas que controlam estoque e pedidos em planilha.",
        summary:
          "Cadastro de produtos, clientes e fornecedores, pedidos de venda com baixa automática no estoque, leitor de código de barras pela câmera do celular, relatórios e histórico de tudo o que foi alterado.",
        features: [
          "Pedidos de venda que dão baixa no estoque automaticamente",
          "Leitor de código de barras (leitor USB ou câmera do celular)",
          "Dashboard com vendas, margem e produtos com estoque baixo",
          "Relatórios em PDF e Excel (vendas, curva ABC, estoque)",
          "Acesso por perfil: vendedor não vê custo nem margem",
          "Histórico de alterações (quem mudou o quê e quando)",
          "Tema claro e escuro",
        ],
        highlights: [
          "O estoque nunca fica negativo, nem com dois vendedores vendendo a última unidade ao mesmo tempo",
          "122 testes automatizados com banco de dados real, mais testes de ponta a ponta no navegador",
          "Arquitetura em camadas (Clean Architecture), fácil de evoluir",
          "Pronto para Docker, com monitoramento (OpenTelemetry) e proteção contra abuso",
        ],
        stack: stacks.estoka,
        cover: { src: "/projects/estoka-cover.webp", alt: "Dashboard de vendas e estoque do Estoka" },
        gallery: [
          { src: "/projects/estoka-order.webp", alt: "Tela de pedido de venda" },
          { src: "/projects/estoka-products.webp", alt: "Lista de produtos com estoque e preço" },
          { src: "/projects/estoka-dark.webp", alt: "Dashboard no tema escuro" },
        ],
        demo: projectLinks.estoka.demo ? { label: "Ver demo", href: projectLinks.estoka.demo } : undefined,
        demoNote: "Login de teste: admin@estoka.app · senha Demo@1234",
        code: { label: "Ver código", href: projectLinks.estoka.code },
        status: "Demo online em breve",
      },
      {
        slug: "landing-pages",
        name: "Landing pages para negócios locais",
        tagline: "Um template, vários negócios: clínica odontológica e restaurante",
        audience: "Clínicas, restaurantes, consultórios e negócios locais que precisam aparecer bem no Google e no celular.",
        summary:
          "Uma landing page completa (serviços, equipe, depoimentos, localização e contato pelo WhatsApp) feita como template: a mesma base virou a clínica Odonto Aurora e o restaurante Alecrim & Brasa só trocando textos, cores e ilustração. Isso deixa um site novo mais rápido e mais barato.",
        features: [
          "Botão e formulário que abrem o WhatsApp com a mensagem pronta",
          "Português e inglês",
          "Tema claro e escuro",
          "Página própria para cada serviço ou prato",
          "Política de privacidade e dados estruturados para o Google",
          "Animações leves que respeitam quem prefere menos movimento",
        ],
        highlights: [
          "Nota alta no Lighthouse (velocidade, acessibilidade e SEO) conferida a cada mudança",
          "Testes de acessibilidade e de layout em 5 tamanhos de tela",
          "Sem servidor nem banco: hospedagem grátis e nada para manter",
          "Todo o conteúdo em um único arquivo de configuração",
        ],
        stack: stacks.landing,
        cover: { src: "/projects/clinic-cover.webp", alt: "Landing page da clínica odontológica Odonto Aurora" },
        gallery: [
          { src: "/projects/landing-cover.webp", alt: "Landing page do restaurante Alecrim & Brasa" },
          { src: "/projects/landing-dark.webp", alt: "O restaurante no tema escuro" },
        ],
        demo: projectLinks.landing.demo ? { label: "Ver demo", href: projectLinks.landing.demo } : undefined,
        code: { label: "Ver código", href: projectLinks.landing.code },
        status: "Demo online em breve",
      },
    ],
  },
  process: {
    eyebrow: "Como trabalho",
    title: "Um processo simples e transparente",
    description: "Você acompanha tudo e testa o projeto antes da entrega final.",
    steps: [
      { title: "Conversa", description: "Entendo o seu negócio, o problema e o que precisa ficar pronto primeiro." },
      { title: "Proposta", description: "Envio escopo, prazo e valor fechados, sem surpresas no meio do caminho." },
      {
        title: "Entregas semanais",
        description: "Você recebe um link para testar o andamento e pode pedir ajustes a cada etapa.",
      },
      { title: "Entrega e suporte", description: "Publico o projeto, passo os acessos e dou suporte depois da entrega." },
    ],
  },
  skills: {
    eyebrow: "Tecnologias",
    title: "Ferramentas que uso no dia a dia",
    groups: [
      { title: "Front-end", items: skills.front },
      { title: "Back-end", items: skills.back },
      { title: "Banco de dados", items: skills.data },
      { title: "Ferramentas", items: skills.tools },
    ],
  },
  about: {
    eyebrow: "Sobre",
    title: "Prazer, Vitor Valentim",
    paragraphs: [
      "Sou desenvolvedor full stack e trabalho com o ecossistema JavaScript/TypeScript (React, Next.js, NestJS) e com C#/.NET (ASP.NET Core, Blazor, Entity Framework).",
      "Gosto de transformar processos manuais, como agenda no caderno e estoque em planilha, em sistemas simples de usar. Me preocupo com velocidade, segurança e com deixar o código pronto para crescer.",
      "Atendo de forma remota, com comunicação direta e prazos combinados desde o início.",
    ],
  },
  cta: {
    title: "Tem um projeto em mente?",
    description: "Me conte o que você precisa. Respondo rápido, com uma ideia de prazo e valor.",
  },
};
