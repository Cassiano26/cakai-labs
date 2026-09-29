export type Language = "en" | "pt";

export const translations = {
  en: {
    // Header / Nav
    nav: {
      services: "Services",
      caseStudies: "Case Studies",
      aiDemo: "AI Demo",
      about: "About",
      contact: "Contact",
      startProject: "Start a project",
    },

    // Footer
    footer: {
      tagline: "AI strategy, models and production-grade MLOps.",
      services: "Services",
      company: "Company",
      servicesLinks: {
        aiConsulting: "AI Consulting",
        llmAssistants: "LLM & Assistants",
        mlopsData: "MLOps & Data",
        aiAutomation: "AI Automation",
      },
      companyLinks: {
        about: "About",
        contact: "Contact",
      },
      copyright: "© 2026 Cakai Labs. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },

    // Hero Section
    hero: {
      badge: "AI Strategy & Consulting",
      heading1: "From idea to",
      headingHighlight: "impact,",
      heading2: "with AI.",
      subheading: "Cakai Labs partners with companies and product teams to define AI strategy, design responsible models, and deliver practical AI solutions that drive measurable business value.",
      cta1: "Start an AI engagement",
      cta2: "View case studies",
      stats: [
        { value: "50+", label: "AI projects delivered" },
        { value: "3×", label: "avg. ROI for clients" },
        { value: "12+", label: "industries served" },
        { value: "100%", label: "production-ready" },
      ],
    },

    // Services Section
    services: {
      sectionLabel: "What we do",
      heading1: "AI Consulting",
      heading2: "Services",
      subheading:
        "Strategy, model design, data and MLOps guidance to turn AI into measurable outcomes.",
      items: [
        {
          title: "AI Strategy & Roadmaps",
          description:
            "Identify high-impact AI opportunities, define value-driven roadmaps and phased delivery plans.",
        },
        {
          title: "LLM & Assistant Design",
          description:
            "Design conversational flows, prompt engineering, safety and guardrails for reliable assistants.",
        },
        {
          title: "Custom ML & Models",
          description:
            "Advisory on model selection, training strategy, evaluation and prototyping for production-ready models.",
        },
        {
          title: "Data & MLOps Consulting",
          description:
            "Data strategy, pipeline design, deployment, monitoring and observability for ML systems.",
        },
        {
          title: "AI-Powered Automation",
          description:
            "Automate decision-making and operational workflows using responsible AI techniques.",
        },
        {
          title: "Technical AI Consulting",
          description:
            "Architecture reviews, governance, cost optimisation and strategic technical guidance for AI initiatives.",
        },
      ],
    },

    // Work Section
    work: {
      badge: "Selected Work",
      heading: "Projects we're building",
      subheading:
        "From AI brand strategy to generative engine optimisation — real products solving real problems.",
      moreEngagements: "More engagements",
      featuredProjects: [
        {
          name: "Yetiman",
          label: "AI Agency",
          description:
            "Yetiman is the AI brand powering Hypnotic Agency — bringing artificial intelligence into every layer of brand strategy, creative production, and digital marketing.",
          longDescription:
            "From AI-assisted copywriting and visual direction to intelligent campaign optimisation, Yetiman defines what a future-ready creative agency looks like.",
          tags: ["AI Strategy", "Brand Identity", "Creative AI", "Agency"],
          href: "https://www.yetiman.ai/",
        },
        {
          name: "Yetify",
          label: "Brand & GEO Platform",
          description:
            "Yetify is a platform for brand evaluation and Generative Engine Optimisation (GEO) — helping brands understand how they appear in AI-generated answers across ChatGPT, Gemini, and Perplexity.",
          longDescription:
            "As search shifts from links to AI-generated answers, Yetify gives brands the visibility and tools to shape their narrative in the generative web.",
          tags: ["GEO", "Brand Audit", "AI Visibility", "LLM Optimisation"],
          href: "https://yetify.ai/",
        },
      ],
      otherProjects: [
        {
          name: "Customer Insights AI",
          description:
            "AI strategy and recommendation system that improved customer retention through personalised insights.",
          tags: ["AI Strategy", "Recommendations", "LLM"],
          href: "#",
        },
        {
          name: "Support Assistant",
          description:
            "LLM-powered support assistant that reduced first-response time and deflected common tickets.",
          tags: ["LLM", "Prompting", "Automation"],
          href: "#",
        },
        {
          name: "Document Understanding",
          description:
            "RAG-based document search and summarisation pipeline for faster decision-making.",
          tags: ["RAG", "Search", "Summarisation"],
          href: "#",
        },
        {
          name: "Operational AI",
          description:
            "MLOps and monitoring implementation to deploy models reliably in production.",
          tags: ["MLOps", "Monitoring", "Deployment"],
          href: "#",
        },
      ],
    },

    // AI Demo Section
    aiDemo: {
      badge: "AI-Powered",
      heading: "AI Project Brief Assistant",
      subheading:
        "Describe your project idea and get an instant estimate and consultation roadmap.",
    },

    // About Hero
    aboutHero: {
      badge: "About Cakai Labs",
      heading: "A strategic partner for organizations adopting AI.",
      subheading:
        "Cakai Labs is an AI consulting firm focused on strategy, responsible model design, and operationalizing AI to solve real business problems.",
      cta: "Start an AI engagement",
    },

    // Cakai Meaning Section
    cakaiMeaning: {
      badge: "The idea behind the name",
      heading: "Cakai means Cake + AI.",
      p1: "The name Cakai Labs comes from a simple idea: strong digital products are not built in one block. They are built in layers. Like a cake, each layer needs structure, balance and purpose.",
      p2: "At Cakai Labs, those layers can include software engineering, interface design, backend systems, APIs, data pipelines, automation workflows and AI capabilities. The result is not just a feature — it is a complete technical solution designed to work",
      p3: "At Cakai Labs, those layers focus on AI adoption: understanding business goals, preparing data, prototyping models, deploying with MLOps, and maintaining responsible AI systems.",
      layers: [
        { num: "01", title: "Understand", desc: "Business goals, users and technical context." },
        { num: "02", title: "Design", desc: "Solution design: model architecture, prompts, data flows and product logic." },
        { num: "03", title: "Prepare Data", desc: "Data collection, cleaning, labeling and pipelines for reliable AI outcomes." },
        { num: "04", title: "Model & Prototype", desc: "Rapid model prototyping, evaluation and iteration to validate value." },
        { num: "05", title: "Deploy & MLOps", desc: "Deploy models, monitoring, retraining and operational processes for production." },
        { num: "06", title: "Support", desc: "Testing, documentation, deployment and continuous improvement." },
      ],
    },

    // AI Approach Section
    aiApproach: {
      badge: "How we use AI",
      heading: "AI-assisted development, supervised by professionals.",
      p1: "We use AI as part of our engineering process to accelerate research, programming, documentation, testing, prototyping and analysis. But every decision, implementation and delivery is guided by technical professionals.",
      p2: "Our approach combines human judgment with AI-assisted execution. This allows us to move faster without losing quality, context, maintainability or responsibility.",
      cards: [
        {
          title: "AI in the process",
          description: "We use AI tools to support coding, documentation, debugging, planning and implementation.",
        },
        {
          title: "Human supervision",
          description: "Every solution is reviewed, structured and validated by professionals with technical responsibility.",
        },
        {
          title: "Better delivery",
          description: "The goal is not automation for its own sake. The goal is faster, clearer and more reliable technical execution.",
        },
      ],
    },

    // About CTA Section
    aboutCTA: {
      heading: "Need an AI partner to define your next move?",
      subheading:
        "Whether you need an AI strategy, model prototyping, data and MLOps guidance, or governance and audits, Cakai Labs helps you structure and deliver practical AI outcomes.",
      cta: "Start a project",
    },

    // Contact Hero
    contactHero: {
      badge: "Start a project",
      heading: "Let's design your AI solution.",
      subheading:
        "Describe the AI outcome you want — whether it is strategy, prototyping, or production deployment — and we'll help define the next steps.",
      cta: "Start your brief",
      tagline: "For AI strategy, model design, data pipelines, automation and MLOps.",
      tags: [
        "AI strategy",
        "LLM & Assistants",
        "MLOps & Data",
        "AI automation",
        "Model audits",
        "Technical AI consulting",
      ],
    },

    // Project Brief Section
    projectBrief: {
      badge: "Project brief",
      heading: "Share the context. We'll help shape the technical path.",
      p1: "You do not need to have the full scope ready. A short description of the problem, data sources and desired outcome is enough to start.",
      p2: "Cakai Labs works as an AI consulting partner for companies and product teams seeking strategy, prototyping and production-ready AI solutions.",
      whatHappensNext: "What happens next",
      steps: [
        {
          step: "1",
          title: "We review your request",
          desc: "We look at your goals, data, project stage, and technical needs.",
        },
        {
          step: "2",
          title: "We define a possible direction",
          desc: "We outline a likely approach, scope, data needs and priorities.",
        },
        {
          step: "3",
          title: "We get back to you",
          desc: "You receive a clear next step for discovery, prototyping or engagement.",
        },
      ],
      formTitle: "Start your project brief",
      formSubtitle: "Tell us a little about the AI problem you want to solve.",
      aiPrefillNote: "Pre-filled from your AI consultation — feel free to adjust.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        country: "Country",
        website: "Website",
        namePlaceholder: "Your name",
        companyPlaceholder: "Company name",
        emailPlaceholder: "you@company.com",
        countryPlaceholder: "Where are you based?",
        websitePlaceholder: "https://your-site.com (optional)",
        services: "Services you're interested in",
        projectStage: "Project stage",
        timeline: "Timeline",
        budgetRange: "Budget range",
        message: "Message",
        messagePlaceholder: "Describe the AI outcome you want (strategy, prototype, production)...",
        required: "required",
        projectStageOptions: ["Idea", "Proof of concept", "Pilot", "Production", "Improvement", "Not sure yet"],
        timelineOptions: ["Urgent", "1–3 months", "3–6 months", "Flexible"],
        budgetRangeOptions: ["Not defined yet", "Small project", "Medium project", "Larger project", "Prefer to discuss"],
      },
      services: [
        "AI strategy",
        "LLM & assistant design",
        "Custom ML & models",
        "Data & MLOps",
        "AI automation",
        "Technical AI consulting",
        "Not sure yet",
      ],
      aiEstimateLabel: "AI estimate",
      submit: "Send project brief",
      submitting: "Sending…",
      successTitle: "Brief sent!",
      successMessage: "Thanks! We'll review your request and get back to you shortly.",
      privacyNote: "We'll only use your information to respond to your request.",
      recaptchaNote: "This site is protected by reCAPTCHA and the Google",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      apply: "apply.",
      validationError: "Please fill in all required fields.",
      networkError: "Network error. Please try again.",
    },

    // Quick Start Section
    quickStart: {
      badge: "Not sure what to write?",
      heading: "Start with the problem, not the solution.",
      subheading:
        "If you are not sure about the scope, just describe what is slow, manual, disconnected or missing in your current process.",
      prompts: [
        {
          title: "I need an AI strategy",
          desc: "Define where AI adds value and build a phased roadmap.",
          message: "I need an AI strategy. I want to identify high-impact use cases, prioritize them and define a phased roadmap to deliver value with minimal risk.",
        },
        {
          title: "I want an assistant or chatbot",
          desc: "Design conversational flows, safety and prompt strategy.",
          message: "I want an AI assistant. I'm interested in a conversational assistant to help users or employees, and I need help designing prompts, safety, and UX.",
        },
        {
          title: "I want to automate decisions",
          desc: "Use AI to automate repetitive decisions and workflows.",
          message: "I want to automate decisions with AI. There are repetitive decisions in our process that could be improved by models or ML-driven automation.",
        },
        {
          title: "I need MLOps & deployment",
          desc: "Deploy, monitor and maintain models in production.",
          message: "I need MLOps help. I want guidance on deploying models reliably, monitoring performance and setting up retraining pipelines.",
        },
        {
          title: "I need data & labeling",
          desc: "Data collection, labeling and pipelines for model training.",
          message: "I need help with data. I want to prepare datasets, labeling workflows and pipelines to train and evaluate models.",
        },
        {
          title: "I need governance or audits",
          desc: "Bias analysis, risk assessment and governance recommendations.",
          message: "I need an AI governance review. I want a bias check, risk assessment and recommendations for safer deployment.",
        },
      ],
    },

    // Contact CTA Section
    contactCTA: {
      heading: "Ready to turn the idea into a working system?",
      subheading:
        "Send a short brief and we'll help you understand the best next step.",
      cta: "Start your brief",
    },

    // AI Chat Box
    aiChat: {
      quickReplies: [
        "I need an AI strategy",
        "I want an AI assistant",
        "I need MLOps & deployment help",
      ],
    },
  },

  pt: {
    // Header / Nav
    nav: {
      services: "Serviços",
      caseStudies: "Casos de Uso",
      aiDemo: "Demo de IA",
      about: "Sobre",
      contact: "Contato",
      startProject: "Iniciar projeto",
    },

    // Footer
    footer: {
      tagline: "Estratégia de IA, modelos e MLOps prontos para produção.",
      services: "Serviços",
      company: "Empresa",
      servicesLinks: {
        aiConsulting: "Consultoria em IA",
        llmAssistants: "LLM & Assistentes",
        mlopsData: "MLOps & Dados",
        aiAutomation: "Automação com IA",
      },
      companyLinks: {
        about: "Sobre",
        contact: "Contato",
      },
      copyright: "© 2026 Cakai Labs. Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
    },

    // Hero Section
    hero: {
      badge: "Estratégia & Consultoria em IA",
      heading1: "Da ideia ao",
      headingHighlight: "impacto,",
      heading2: "com IA.",
      subheading: "A Cakai Labs faz parceria com empresas e equipes de produto para definir estratégia de IA, projetar modelos responsáveis e entregar soluções práticas de IA que geram valor mensurável de negócio.",
      cta1: "Iniciar um engajamento de IA",
      cta2: "Ver casos de uso",
      stats: [
        { value: "50+", label: "projetos de IA entregues" },
        { value: "3×", label: "ROI médio para clientes" },
        { value: "12+", label: "indústrias atendidas" },
        { value: "100%", label: "prontos para produção" },
      ],
    },

    // Services Section
    services: {
      sectionLabel: "O que fazemos",
      heading1: "Consultoria",
      heading2: "em IA",
      subheading:
        "Estratégia, design de modelos, dados e MLOps para transformar IA em resultados mensuráveis.",
      items: [
        {
          title: "Estratégia & Roadmaps de IA",
          description:
            "Identifique oportunidades de alto impacto, defina roadmaps orientados a valor e planos de entrega faseados.",
        },
        {
          title: "Design de LLM & Assistentes",
          description:
            "Design de fluxos conversacionais, engenharia de prompts, segurança e guardrails para assistentes confiáveis.",
        },
        {
          title: "ML Personalizado & Modelos",
          description:
            "Consultoria em seleção de modelos, estratégia de treinamento, avaliação e prototipagem para modelos prontos para produção.",
        },
        {
          title: "Dados & MLOps",
          description:
            "Estratégia de dados, design de pipelines, deploy, monitoramento e observabilidade para sistemas de ML.",
        },
        {
          title: "Automação com IA",
          description:
            "Automatize tomadas de decisão e fluxos operacionais usando técnicas responsáveis de IA.",
        },
        {
          title: "Consultoria Técnica em IA",
          description:
            "Revisões de arquitetura, governança, otimização de custos e orientação técnica estratégica para iniciativas de IA.",
        },
      ],
    },

    // Work Section
    work: {
      badge: "Trabalhos Selecionados",
      heading: "Projetos que estamos construindo",
      subheading:
        "De estratégia de marca com IA à otimização em mecanismos generativos — produtos reais resolvendo problemas reais.",
      moreEngagements: "Mais projetos",
      featuredProjects: [
        {
          name: "Yetiman",
          label: "Agência de IA",
          description:
            "Yetiman é a marca de IA que alimenta a Hypnotic Agency — integrando inteligência artificial em todas as camadas de estratégia de marca, produção criativa e marketing digital.",
          longDescription:
            "Da redação assistida por IA e direção visual à otimização inteligente de campanhas, Yetiman define como é uma agência criativa preparada para o futuro.",
          tags: ["Estratégia de IA", "Identidade de Marca", "IA Criativa", "Agência"],
          href: "https://www.yetiman.ai/",
        },
        {
          name: "Yetify",
          label: "Plataforma de Marca & GEO",
          description:
            "Yetify é uma plataforma de avaliação de marca e Otimização para Mecanismos Generativos (GEO) — ajudando marcas a entender como aparecem nas respostas geradas por IA no ChatGPT, Gemini e Perplexity.",
          longDescription:
            "Com a busca migrando de links para respostas geradas por IA, o Yetify oferece às marcas a visibilidade e as ferramentas para moldar sua narrativa na web generativa.",
          tags: ["GEO", "Auditoria de Marca", "Visibilidade em IA", "Otimização LLM"],
          href: "https://yetify.ai/",
        },
      ],
      otherProjects: [
        {
          name: "Customer Insights AI",
          description:
            "Estratégia de IA e sistema de recomendação que melhorou a retenção de clientes por meio de insights personalizados.",
          tags: ["Estratégia de IA", "Recomendações", "LLM"],
          href: "#",
        },
        {
          name: "Assistente de Suporte",
          description:
            "Assistente de suporte com LLM que reduziu o tempo de primeira resposta e desviou tickets comuns.",
          tags: ["LLM", "Prompting", "Automação"],
          href: "#",
        },
        {
          name: "Compreensão de Documentos",
          description:
            "Pipeline de busca e sumarização de documentos baseado em RAG para tomadas de decisão mais rápidas.",
          tags: ["RAG", "Busca", "Sumarização"],
          href: "#",
        },
        {
          name: "IA Operacional",
          description:
            "Implementação de MLOps e monitoramento para deploy confiável de modelos em produção.",
          tags: ["MLOps", "Monitoramento", "Deploy"],
          href: "#",
        },
      ],
    },

    // AI Demo Section
    aiDemo: {
      badge: "Powered by IA",
      heading: "Assistente de Brief de Projeto com IA",
      subheading:
        "Descreva a ideia do seu projeto e receba uma estimativa instantânea e um roadmap de consultoria.",
    },

    // About Hero
    aboutHero: {
      badge: "Sobre a Cakai Labs",
      heading: "Um parceiro estratégico para organizações que adotam IA.",
      subheading:
        "A Cakai Labs é uma consultoria de IA focada em estratégia, design responsável de modelos e operacionalização de IA para resolver problemas reais de negócio.",
      cta: "Iniciar um engajamento de IA",
    },

    // Cakai Meaning Section
    cakaiMeaning: {
      badge: "A ideia por trás do nome",
      heading: "Cakai significa Bolo + IA.",
      p1: "O nome Cakai Labs vem de uma ideia simples: produtos digitais sólidos não são construídos em um único bloco. Eles são construídos em camadas. Como um bolo, cada camada precisa de estrutura, equilíbrio e propósito.",
      p2: "Na Cakai Labs, essas camadas podem incluir engenharia de software, design de interfaces, sistemas backend, APIs, pipelines de dados, fluxos de automação e capacidades de IA. O resultado não é apenas uma funcionalidade — é uma solução técnica completa projetada para funcionar",
      p3: "Na Cakai Labs, essas camadas focam na adoção de IA: compreender objetivos de negócio, preparar dados, prototipar modelos, realizar deploy com MLOps e manter sistemas de IA responsáveis.",
      layers: [
        { num: "01", title: "Compreender", desc: "Objetivos de negócio, usuários e contexto técnico." },
        { num: "02", title: "Projetar", desc: "Design da solução: arquitetura do modelo, prompts, fluxos de dados e lógica do produto." },
        { num: "03", title: "Preparar Dados", desc: "Coleta, limpeza, rotulagem e pipelines para resultados confiáveis de IA." },
        { num: "04", title: "Modelar & Prototipar", desc: "Prototipagem rápida de modelos, avaliação e iteração para validar valor." },
        { num: "05", title: "Deploy & MLOps", desc: "Deploy de modelos, monitoramento, retreinamento e processos operacionais para produção." },
        { num: "06", title: "Suporte", desc: "Testes, documentação, deploy e melhoria contínua." },
      ],
    },

    // AI Approach Section
    aiApproach: {
      badge: "Como usamos IA",
      heading: "Desenvolvimento assistido por IA, supervisionado por profissionais.",
      p1: "Usamos IA como parte do nosso processo de engenharia para acelerar pesquisa, programação, documentação, testes, prototipagem e análise. Mas cada decisão, implementação e entrega é guiada por profissionais técnicos.",
      p2: "Nossa abordagem combina julgamento humano com execução assistida por IA. Isso nos permite avançar mais rápido sem perder qualidade, contexto, manutenibilidade ou responsabilidade.",
      cards: [
        {
          title: "IA no processo",
          description: "Usamos ferramentas de IA para apoiar codificação, documentação, depuração, planejamento e implementação.",
        },
        {
          title: "Supervisão humana",
          description: "Toda solução é revisada, estruturada e validada por profissionais com responsabilidade técnica.",
        },
        {
          title: "Melhor entrega",
          description: "O objetivo não é automação pela automação. O objetivo é uma execução técnica mais rápida, clara e confiável.",
        },
      ],
    },

    // About CTA Section
    aboutCTA: {
      heading: "Precisa de um parceiro de IA para definir seu próximo passo?",
      subheading:
        "Seja para estratégia de IA, prototipagem de modelos, orientação em dados e MLOps, ou governança e auditorias, a Cakai Labs ajuda você a estruturar e entregar resultados práticos com IA.",
      cta: "Iniciar um projeto",
    },

    // Contact Hero
    contactHero: {
      badge: "Iniciar um projeto",
      heading: "Vamos projetar sua solução de IA.",
      subheading:
        "Descreva o resultado de IA que você deseja — seja estratégia, prototipagem ou deploy em produção — e ajudaremos a definir os próximos passos.",
      cta: "Começar seu brief",
      tagline: "Para estratégia de IA, design de modelos, pipelines de dados, automação e MLOps.",
      tags: [
        "Estratégia de IA",
        "LLM & Assistentes",
        "MLOps & Dados",
        "Automação com IA",
        "Auditorias de modelos",
        "Consultoria técnica em IA",
      ],
    },

    // Project Brief Section
    projectBrief: {
      badge: "Brief do projeto",
      heading: "Compartilhe o contexto. Ajudaremos a definir o caminho técnico.",
      p1: "Você não precisa ter o escopo completo pronto. Uma breve descrição do problema, fontes de dados e resultado desejado já é suficiente para começar.",
      p2: "A Cakai Labs atua como parceiro de consultoria em IA para empresas e equipes de produto que buscam estratégia, prototipagem e soluções de IA prontas para produção.",
      whatHappensNext: "O que acontece a seguir",
      steps: [
        {
          step: "1",
          title: "Analisamos sua solicitação",
          desc: "Avaliamos seus objetivos, dados, estágio do projeto e necessidades técnicas.",
        },
        {
          step: "2",
          title: "Definimos uma direção possível",
          desc: "Delineamos uma abordagem provável, escopo, necessidades de dados e prioridades.",
        },
        {
          step: "3",
          title: "Retornamos o contato",
          desc: "Você recebe um próximo passo claro para descoberta, prototipagem ou engajamento.",
        },
      ],
      formTitle: "Inicie o brief do seu projeto",
      formSubtitle: "Conte um pouco sobre o problema de IA que você quer resolver.",
      aiPrefillNote: "Preenchido a partir da sua consulta de IA — fique à vontade para ajustar.",
      fields: {
        name: "Nome",
        company: "Empresa",
        email: "E-mail",
        country: "País",
        website: "Site",
        namePlaceholder: "Seu nome",
        companyPlaceholder: "Nome da empresa",
        emailPlaceholder: "voce@empresa.com",
        countryPlaceholder: "Onde você está localizado?",
        websitePlaceholder: "https://seu-site.com (opcional)",
        services: "Serviços de interesse",
        projectStage: "Estágio do projeto",
        timeline: "Prazo",
        budgetRange: "Faixa de orçamento",
        message: "Mensagem",
        messagePlaceholder: "Descreva o resultado de IA que você quer (estratégia, protótipo, produção)...",
        required: "obrigatório",
        projectStageOptions: ["Ideia", "Prova de conceito", "Piloto", "Produção", "Melhoria", "Ainda não sei"],
        timelineOptions: ["Urgente", "1–3 meses", "3–6 meses", "Flexível"],
        budgetRangeOptions: ["Ainda não definido", "Projeto pequeno", "Projeto médio", "Projeto maior", "Prefiro discutir"],
      },
      services: [
        "Estratégia de IA",
        "Design de LLM & assistentes",
        "ML personalizado & modelos",
        "Dados & MLOps",
        "Automação com IA",
        "Consultoria técnica em IA",
        "Ainda não sei",
      ],
      aiEstimateLabel: "Estimativa de IA",
      submit: "Enviar brief do projeto",
      submitting: "Enviando…",
      successTitle: "Brief enviado!",
      successMessage: "Obrigado! Vamos analisar sua solicitação e retornaremos em breve.",
      privacyNote: "Usaremos suas informações apenas para responder à sua solicitação.",
      recaptchaNote: "Este site é protegido pelo reCAPTCHA e pela",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço",
      apply: "do Google.",
      validationError: "Por favor, preencha todos os campos obrigatórios.",
      networkError: "Erro de rede. Por favor, tente novamente.",
    },

    // Quick Start Section
    quickStart: {
      badge: "Não sabe o que escrever?",
      heading: "Comece pelo problema, não pela solução.",
      subheading:
        "Se não tem certeza sobre o escopo, descreva o que está lento, manual, desconexo ou ausente no seu processo atual.",
      prompts: [
        {
          title: "Preciso de uma estratégia de IA",
          desc: "Defina onde a IA agrega valor e construa um roadmap faseado.",
          message: "Preciso de uma estratégia de IA. Quero identificar casos de uso de alto impacto, priorizá-los e definir um roadmap faseado para entregar valor com risco mínimo.",
        },
        {
          title: "Quero um assistente ou chatbot",
          desc: "Design de fluxos conversacionais, segurança e estratégia de prompt.",
          message: "Quero um assistente de IA. Tenho interesse em um assistente conversacional para ajudar usuários ou colaboradores, e preciso de apoio no design de prompts, segurança e UX.",
        },
        {
          title: "Quero automatizar decisões",
          desc: "Use IA para automatizar decisões e fluxos repetitivos.",
          message: "Quero automatizar decisões com IA. Existem decisões repetitivas no nosso processo que poderiam ser melhoradas por modelos ou automação orientada por ML.",
        },
        {
          title: "Preciso de MLOps & deploy",
          desc: "Deploy, monitoramento e manutenção de modelos em produção.",
          message: "Preciso de ajuda com MLOps. Quero orientação para fazer deploy confiável de modelos, monitorar performance e configurar pipelines de retreinamento.",
        },
        {
          title: "Preciso de dados & rotulagem",
          desc: "Coleta de dados, rotulagem e pipelines para treinamento de modelos.",
          message: "Preciso de ajuda com dados. Quero preparar datasets, fluxos de rotulagem e pipelines para treinar e avaliar modelos.",
        },
        {
          title: "Preciso de governança ou auditoria",
          desc: "Análise de viés, avaliação de riscos e recomendações de governança.",
          message: "Preciso de uma revisão de governança de IA. Quero uma verificação de viés, avaliação de riscos e recomendações para um deploy mais seguro.",
        },
      ],
    },

    // Contact CTA Section
    contactCTA: {
      heading: "Pronto para transformar a ideia em um sistema funcional?",
      subheading:
        "Envie um brief resumido e ajudaremos você a entender o melhor próximo passo.",
      cta: "Começar seu brief",
    },

    // AI Chat Box
    aiChat: {
      quickReplies: [
        "Preciso de uma estratégia de IA",
        "Quero um assistente de IA",
        "Preciso de ajuda com MLOps & deploy",
      ],
    },
  },
} as const;

export type Translations = {
  nav: { services: string; caseStudies: string; aiDemo: string; about: string; contact: string; startProject: string };
  footer: {
    tagline: string; services: string; company: string;
    servicesLinks: { aiConsulting: string; llmAssistants: string; mlopsData: string; aiAutomation: string };
    companyLinks: { about: string; contact: string };
    copyright: string; privacyPolicy: string; termsOfService: string;
  };
  hero: { badge: string; heading1: string; headingHighlight: string; heading2: string; subheading: string; cta1: string; cta2: string; stats: { value: string; label: string }[] };
  services: { sectionLabel: string; heading1: string; heading2: string; subheading: string; items: { title: string; description: string }[] };
  work: { badge: string; heading: string; subheading: string; moreEngagements: string; featuredProjects: { name: string; label: string; description: string; longDescription: string; tags: string[]; href: string }[]; otherProjects: { name: string; description: string; tags: string[]; href: string }[] };
  aiDemo: { badge: string; heading: string; subheading: string };
  aboutHero: { badge: string; heading: string; subheading: string; cta: string };
  cakaiMeaning: { badge: string; heading: string; p1: string; p2: string; p3: string; layers: { num: string; title: string; desc: string }[] };
  aiApproach: { badge: string; heading: string; p1: string; p2: string; cards: { title: string; description: string }[] };
  aboutCTA: { heading: string; subheading: string; cta: string };
  contactHero: { badge: string; heading: string; subheading: string; cta: string; tagline: string; tags: string[] };
  projectBrief: {
    badge: string; heading: string; p1: string; p2: string; whatHappensNext: string;
    steps: { step: string; title: string; desc: string }[];
    formTitle: string; formSubtitle: string; aiPrefillNote: string;
    fields: { name: string; company: string; email: string; country: string; website: string; namePlaceholder: string; companyPlaceholder: string; emailPlaceholder: string; countryPlaceholder: string; websitePlaceholder: string; services: string; projectStage: string; timeline: string; budgetRange: string; message: string; messagePlaceholder: string; required: string; projectStageOptions: string[]; timelineOptions: string[]; budgetRangeOptions: string[] };
    services: string[];
    aiEstimateLabel: string; submit: string; submitting: string; successTitle: string; successMessage: string;
    privacyNote: string; recaptchaNote: string; privacyPolicy: string; termsOfService: string; apply: string;
    validationError: string; networkError: string;
  };
  quickStart: { badge: string; heading: string; subheading: string; prompts: { title: string; desc: string; message: string }[] };
  contactCTA: { heading: string; subheading: string; cta: string };
  aiChat: { quickReplies: string[] };
};
