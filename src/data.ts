/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProjetctItem, ServiceItem, ProcessSectionItem, TechItem, DifferentialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Estratégica',
    description: 'Páginas essenciais de alta performance focadas em converter visitantes comuns de campanhas em clientes reais.',
    forWhom: 'Profissionais autônomos, clínicas de saúde, academias, restaurantes, prestadores de serviços e lançamento de infoprodutos.',
    benefits: [
      'Velocidade instantânea de carregamento',
      'Design totalmente responsivo (foco especial no mobile)',
      'Escrita focada em vendas estruturada (Copywriting)',
      'Integração direta com o WhatsApp de atendimento',
      'Estrutura pronta para anúncios no Google Ads e Meta Ads'
    ],
    featuresList: [
      'Apresentação clara dos diferenciais',
      'Seção de perguntas frequentes sanando dúvidas',
      'Formulário inteligente com validação imediata',
      'Botões de Ação flutuantes sempre acessíveis'
    ],
    exampleLabel: 'ESTRUTURA PARA ALTA CONVERSÃO',
    exampleImageCode: `// Estrutura focada em Performance
const LandingPage = {
  velocidade: '99% no Mobile speed tests',
  gatilhos: ['Prova Social', 'Escassez', 'Autoridade'],
  conversao: 'Botão de WhatsApp flutuante inteligente',
  SEO: 'Indexação limpa no Google Search Console'
};`
  },
  {
    id: 'clothing-catalog',
    title: 'Catálogo de Produtos Inteligente',
    description: 'Solução sob medida para lojas de roupas e acessórios organizarem seu estoque dinamicamente, permitindo reservas automatizadas.',
    forWhom: 'Lojas de vestuário, boutiques, marcas online e varejistas que desejam parar de disputar espaço em redes sociais.',
    benefits: [
      'Exibição limpa de tamanho, cor, fotos e preço',
      'Carrinho integrado para listar escolhas do cliente',
      'Economia de horas de suporte no WhatsApp',
      'Painel intuitivo de atualização de itens e estoques',
      'Praticidade para o cliente conferir o que quer'
    ],
    featuresList: [
      'Categorias dinâmicas com filtros ágeis',
      'Pesquisa em tempo real de produtos',
      'Seleção interativa de tamanho e cor',
      'Checkout resumido que dispara o pedido pronto para o seu WhatsApp'
    ],
    exampleLabel: 'MÓDULO DE SELEÇÃO DE VENDAS',
    exampleImageCode: `// Sistema de Escolha de Roupas
interface ItemCatalogo {
  tamanho: ['P', 'M', 'G', 'GG'];
  cores: ['Vinho', 'Grafite', 'Preto Deep'];
  carrinho: 'Envia pedido ordenado pelo WhatsApp';
  atualizacao: 'Painel interno de fácil controle'
}`
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Completo',
    description: 'Lojas virtuais robustas e fluidas projetadas para você expor e vender produtos com segurança e escalabilidade.',
    forWhom: 'Negócios físicos expandindo para o digital, marcas locais e lojistas que necessitam de vendas digitais recorrentes.',
    benefits: [
      'Experiência de checkout confiável e simples',
      'Sistemas anti-fraude integráveis',
      'Histórico de pedidos para controle dos clientes',
      'Autonomia de estoque e cadastro de produtos',
      'Fácil mensuração das conversões de pixels e métricas'
    ],
    featuresList: [
      'Carrinho inteligente e Lista de Desejos',
      'Painel de cupons de desconto dinâmicos',
      'Módulo administrativo para faturamento e frete',
      'Painel do cliente com histórico de pedidos'
    ],
    exampleLabel: 'FLUXO DE COMPRA ROBUSTO',
    exampleImageCode: `// Arquitetura de Vendas Online
const EcommerceSystem = {
  seguranca: 'Dados de pagamento criptografados',
  administrativo: 'Gerenciador de cupons e controle de estoque',
  rastreio: 'Códigos de frete gerados automaticamente',
  areaCliente: 'Acompanhamento interativo do pedido'
};`
  },
  {
    id: 'delivery',
    title: 'Sistemas Web de Delivery',
    description: 'Plataforma unificada para gerenciar cardápios digitais, pedidos em tempo real, taxas de frete e comandas integradas.',
    forWhom: 'Restaurantes, lanchonetes, adegas, mercados locais, pizzarias e confeitarias.',
    benefits: [
      'Livre de comissões por vendas a terceiros',
      'Impressão rápida de comandas no balcão',
      'Agilidade total no recebimento de pedidos no WhatsApp',
      'Controle dinâmico de produtos fora de estoque',
      'Relatórios simples de faturamento diário'
    ],
    featuresList: [
      'Cardápio intuitivo dividido por categorias',
      'Módulo de opcionais/adicionais e observações',
      'Configuração dinâmica de taxas de entrega por bairro',
      'Envio do pedido formatado com endereço, troco e pagamento'
    ],
    exampleLabel: 'FLUXO DO PEDIDO ONLINE',
    exampleImageCode: `// Módulo Computado de Delivery
const DeliveryOrder = {
  itens: 'Pizza ½ Muçarela ½ Pepperoni',
  adicionais: ['Borda Recheada de Catupiry'],
  entrega: 'Calculado pelo Endereço inserido',
  comanda: 'Impressão direta + Envio WhatsApp formatado'
};`
  }
];

export const PROCESS_DATA: ProcessSectionItem[] = [
  {
    step: '01',
    title: 'Conversa Inicial',
    description: 'Entendo sua ideia, seu negócio, seu público-alvo e as metas exatas de conversão que você planeja alcançar.',
    highlights: ['Alinhamento de objetivos', 'Briefing sem jargões complexos', 'Compreensão de público']
  },
  {
    step: '02',
    title: 'Planejamento e Arquitetura',
    description: 'Organizamos a estrutura de páginas, funcionalidades obrigatórias, o fluxo de conteúdo e a direção artística.',
    highlights: ['Lista de funcionalidades', 'Estudo de fluidez de páginas', 'Wireframing de ideias']
  },
  {
    step: '03',
    title: 'Design e Experiência (UI/UX)',
    description: 'A interface do sistema é desenhada focando em clareza, modernidade, responsividade perfeita e identidade da marca.',
    highlights: ['Layout de altíssimo contraste', 'Visual único personalizado', 'Design centrado em celular']
  },
  {
    step: '04',
    title: 'Desenvolvimento Técnico',
    description: 'O design aprovado ganha vida com código limpo, rápido e estruturado com tecnologias modernas de mercado.',
    highlights: ['Otimização de performance', 'TypeScript e React fluidos', 'Estrutura leve e adaptativa']
  },
  {
    step: '05',
    title: 'Testes de Qualidade',
    description: 'Verificamos o comportamento do site em dezenas de resoluções de telas reais para assegurar carregamento e funcionamento estáveis.',
    highlights: ['Validação de fluxos de envio', 'Sem travamentos no mobile', 'Otimização com Lighthouse']
  },
  {
    step: '06',
    title: 'Publicação e Deploy',
    description: 'Preparamos tudo para hospedar seu site na web de forma profissional e conectamos canais de captação.',
    highlights: ['Setup de domínio sob medida', 'Configurações básicas de SEO', 'Integração de Pixels de Rastreamento']
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    title: 'Design Exclusivo',
    description: 'Nenhum site é gerado a partir de templates clichês. Criamos visuais memoráveis e calibrados para o seu público.'
  },
  {
    title: 'Foco Total do Usuário (UX)',
    description: 'A navegação conduz o cliente para a ação mais lucrativa de forma suave, natural e fluida.'
  },
  {
    title: 'Desenvolvimento Responsivo',
    description: 'Visual impecável tanto em celulares de entrada quanto nos maiores monitores de computadores de mesa.'
  },
  {
    title: 'Comunicação Transparente',
    description: 'Explicações diretas, honestas, sem rodeios e sem excesso de termos técnicos desnecessários.'
  },
  {
    title: 'Rápido Envio para WhatsApp',
    description: 'Sistemas inteligentes que entregam orçamentos e pedidos já pré-formatados e organizados por mensagem.'
  },
  {
    title: 'Estruturas Expansíveis',
    description: 'Código modular que permite integrar novos botões, páginas ou ferramentas conforme seu negócio expande.'
  }
];

export const TECH_DATA: TechItem[] = [
  // Front-end
  { name: 'HTML5 / Semantic CSS', category: 'Front-end' },
  { name: 'Tailwind CSS (Avançado)', category: 'Front-end' },
  { name: 'JavaScript ES6+', category: 'Front-end' },
  { name: 'TypeScript', category: 'Front-end' },
  { name: 'React', category: 'Front-end' },
  { name: 'Motion (Animações)', category: 'Front-end' },

  // Back-end
  { name: 'Node.js', category: 'Back-end' },
  { name: 'Express', category: 'Back-end' },
  { name: 'Firebase & Firestore', category: 'Back-end' },
  { name: 'API REST Integration', category: 'Back-end' },

  // Ferramentas & Competências
  { name: 'Git & GitHub', category: 'Ferramentas' },
  { name: 'Figma para Layout', category: 'Ferramentas' },
  { name: 'Deploy & Hosting (Vercel, Cloud Run)', category: 'Ferramentas' },
  { name: 'SEO Prático Google', category: 'Habilidades' },
  { name: 'Design Responsivo Líquido', category: 'Habilidades' },
  { name: 'UX/UI focado em Conversão', category: 'Habilidades' }
];

export const PROJECTS_DATA: ProjetctItem[] = [
  {
    id: 'case-ecommerce',
    classNameLabel: 'ARQUIVO DE PROJETO • CASE 01',
    title: 'MB Performance',
    category: 'E-commerces',
    summary: 'E-commerce robusto e de altíssimo desempenho desenvolvido para tuning, remap e e-commerce de peças e acessórios de alta performance automotiva.',
    coverImage: 'https://api.microlink.io/?url=https%3A%2F%2Fmbperfomance.com%2F&screenshot=true&embed=screenshot.url',
    backupImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Stripe'],
    problemDescription: 'A MB Performance precisava de uma presença corporativa focada em vendas que convertesse entusiastas do setor automotivo, integrando um catálogo de produtos avançados, apresentação de remap e canais eficientes de agendamento.',
    solutionDescription: 'Construção de uma plataforma de e-commerce premium com interface ultra-rápida de carregamento sob o padrão "Dark Noir". Permite que o usuário explore autopeças específicas de alta performance automotiva de maneira totalmente fluida e integrada.',
    keyFeatures: [
      'Visualização detalhada de peças e acessórios automotivos premium',
      'Catálogo de produtos filtrável de alta performance com interface intuitiva',
      'Checkout de carregamento instantâneo integrado de forma segura',
      'Direcionamento estratégico para agendamento online de serviços de tuning'
    ],
    liveUrl: 'https://mbperfomance.com/',
    status: 'Completo'
  },
  {
    id: 'case-catalog',
    classNameLabel: 'ARQUIVO DE PROJETO • CASE 02',
    title: 'Loja Emanet',
    category: 'Catálogos',
    summary: 'Catálogo virtual de moda feminina sofisticado com carrinho de compras interativo estruturado para reservas dinâmicas e envio de pedidos direto no WhatsApp.',
    coverImage: 'https://api.microlink.io/?url=https%3A%2F%2Floja-emanet.vercel.app%2F&screenshot=true&embed=screenshot.url',
    backupImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vercel'],
    problemDescription: 'Dificuldade para organizar e apresentar o estoque dinâmico de roupas para clientes do varejo. O suporte perdia horas gerando preço, checando tamanhos e combinando envios de forma manual sob demanda.',
    solutionDescription: 'Uma vitrine digital ágil focada em experiência mobile de alta costura. As clientes filtram peças elegantes por coleções, selecionam tamanhos/cores prediletos em tempo real e de forma prática disparam o carrinho fechado ordenado pelo WhatsApp.',
    keyFeatures: [
      'Filtros inteligentes em tempo real por coleções de moda, cores e tamanhos',
      'Carrinho virtual instantâneo mantendo o progresso localmente',
      'Design responsivo estilizado no padrão premium de alfaiataria e moda',
      'Integração direta com envio automático de pedidos pré-diagramados no WhatsApp'
    ],
    liveUrl: 'https://loja-emanet.vercel.app/',
    status: 'Completo'
  },
  {
    id: 'case-law',
    classNameLabel: 'ARQUIVO DE PROJETO • CASE 03',
    title: 'Alves & Andrade',
    category: 'Landing Pages',
    summary: 'Landing page jurídica de alto padrão técnico desenvolvida para captação de clientes qualificados (leads), quebrando objeções e convertendo tráfego pago.',
    coverImage: 'https://api.microlink.io/?url=https%3A%2F%2Falveseandradeconsultoriajuridica.com%2F&screenshot=true&embed=screenshot.url',
    backupImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Google Ads Tracker', 'SEO'],
    problemDescription: 'A consultoria jurídica Alves & Andrade precisava de uma landing page focada em conversão para absorver tráfego gerado por campanhas de Google Ads, de carregamento rápido e estética profissional que transmitisse confiança absoluta.',
    solutionDescription: 'Construção de uma página web corporativa otimizada que carrega em menos de 1 segundo. Layout sóbrio, com tipografia imponente, seção FAQ de quebra de objeções processuais e chamadas de ação flutuantes focadas no direcionamento direto para advogados.',
    keyFeatures: [
      'Apresentação clara dos ramos de especialização jurídica e profissionais do escritório',
      'Página otimizada com performance nota máxima nos relatórios Lighthouse do Google',
      'Integração de tags de marketing avançadas, incluindo monitoramento de conversões de anúncios',
      'Seções dinâmicas de depoimentos de clientes e perguntas frequentes com animações fluidas'
    ],
    liveUrl: 'https://alveseandradeconsultoriajuridica.com/',
    status: 'Completo'
  },
  {
    id: 'case-vet',
    classNameLabel: 'ARQUIVO DE PROJETO • CASE 04',
    title: 'Dr. Weslley Vet',
    category: 'Landing Pages',
    summary: 'Landing page institucional e de serviços de veterinária, focada em agendamento cirúrgico e consultas domiciliares com excelente design para animais de estimação.',
    coverImage: 'https://api.microlink.io/?url=https%3A%2F%2Fdrweslleyvet.netlify.app%2F&screenshot=true&embed=screenshot.url',
    backupImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'Netlify'],
    problemDescription: 'O profissional necessitava de uma presença web amigável e limpa para organizar a agenda de consultas veterinárias, explicar procedimentos de emergência e construir autoridade digital na região de atendimento.',
    solutionDescription: 'Uma landing page lúdica e profissional com paleta de cores acolhedora. Oferece visualização clara dos serviços prestados, galeria de cuidados, depoimentos reais de tutores de animais e botões de agendamento rápido via telefone/WhatsApp.',
    keyFeatures: [
      'Menu fluido de especialidades médicas veterinárias e exames laboratoriais',
      'Gatilhos de prova social em carrossel com fotos de pets recuperados e tutores gratos',
      'Seção de emergência em destaque oferecendo orientação de primeiros socorros rápida',
      'Botões de chamada direta altamente visíveis otimizados para cliques mobile rápidos'
    ],
    liveUrl: 'https://drweslleyvet.netlify.app/',
    status: 'Completo'
  },
  {
    id: 'case-personal',
    classNameLabel: 'ARQUIVO DE PROJETO • CASE 05',
    title: 'Beto Personal',
    category: 'Landing Pages',
    summary: 'Landing page esportiva e de altíssima performance desenvolvida para consultoria online e treinos de alta performance com foco em captação de alunos.',
    coverImage: 'https://api.microlink.io/?url=https%3A%2F%2Fbeto-personal.vercel.app%2F&screenshot=true&embed=screenshot.url',
    backupImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Motion', 'Vercel'],
    problemDescription: 'O treinador necessitava de uma presença web moderna, agressiva e extremamente rápida no mobile para divulgar seu programa de consultoria fitness presencial e online, estruturar planos e aumentar as inscrições de novos alunos.',
    solutionDescription: 'Desenvolvimento de uma landing page esportiva fardada com alto apelo estético focado em resultados rápidos. Contém menus simplificados de serviços, benefícios de treinos personalizados, blocos de pacotes promocionais com chamadas objetivas e botões de agendamento automático integrados no WhatsApp.',
    keyFeatures: [
      'Visual ousado de alta energia com contraste calibrado para o segmento fitness',
      'Estrutura com benefícios claros do método e da consultoria personalizada',
      'Sessões de preços e planos promocionais estruturadas com gatilhos de conversão',
      'Carregamento instantâneo mobile-first desenvolvido para cliques eficientes no Instagram'
    ],
    liveUrl: 'https://beto-personal.vercel.app/',
    status: 'Completo'
  }
];
