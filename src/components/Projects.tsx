import { useState } from 'react';
import { Bot, Brain, Globe, Smartphone, Database, Zap, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    category: 'IA & Automação',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Agentes IA Conversacionais',
        description: 'Sistema completo de chatbots inteligentes com OpenAI, processamento de linguagem natural e aprendizado contínuo.',
        tech: ['Python', 'OpenAI', 'FastAPI', 'WebSocket'],
      },
      {
        title: 'Visão Computacional OCR',
        description: 'Extração inteligente de dados de documentos fiscais com reconhecimento óptico e validação automática.',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Azure'],
      },
      {
        title: 'Automação RPA Empresarial',
        description: 'Robôs para automação de processos corporativos, integrando múltiplos sistemas e APIs.',
        tech: ['Python', 'Selenium', 'APIs REST', 'MySQL'],
      },
    ],
  },
  {
    category: 'Bots & Integrações',
    icon: Bot,
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'WhatsApp Business Bot',
        description: 'Bot inteligente para atendimento automatizado, vendas e suporte via WhatsApp com IA integrada.',
        tech: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB'],
      },
      {
        title: 'Discord Bot Multiuso',
        description: 'Bot com mais de 50 comandos personalizados, moderação automática e integrações com APIs externas.',
        tech: ['Python', 'Discord.py', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'Sistema de Notificações',
        description: 'Plataforma para envio massivo de notificações via múltiplos canais (WhatsApp, Email, SMS).',
        tech: ['Python', 'FastAPI', 'Celery', 'RabbitMQ'],
      },
    ],
  },
  {
    category: 'Web Full Stack',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'Plataforma de E-commerce',
        description: 'Sistema completo de vendas online com carrinho, pagamentos, gestão de estoque e painel administrativo.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      },
      {
        title: 'Dashboard Analítico',
        description: 'Interface de visualização de dados em tempo real com gráficos interativos e exportação de relatórios.',
        tech: ['React', 'TypeScript', 'Python', 'D3.js'],
      },
      {
        title: 'Sistema NFe',
        description: 'Módulo completo para emissão e gerenciamento de notas fiscais eletrônicas com validação fiscal.',
        tech: ['React', 'Node.js', 'Python', 'XML'],
      },
    ],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    items: [
      {
        title: 'App de Delivery',
        description: 'Aplicativo para pedidos online com rastreamento em tempo real e integração com pagamentos.',
        tech: ['FlutterFlow', 'Firebase', 'Google Maps', 'Stripe'],
      },
      {
        title: 'App de Marketing com IA',
        description: 'Aplicativo Android com recursos de IA para geração de conteúdo e análise de campanhas.',
        tech: ['FlutterFlow', 'OpenAI', 'Analytics', 'Cloud'],
      },
    ],
  },
  {
    category: 'Dados & APIs',
    icon: Database,
    color: 'from-yellow-500 to-orange-500',
    items: [
      {
        title: 'API de Scraping Fiscal',
        description: 'Sistema de extração automatizada de dados fiscais e tributários de múltiplas fontes oficiais.',
        tech: ['Python', 'FastAPI', 'BeautifulSoup', 'PostgreSQL'],
      },
      {
        title: 'Pipeline de Dados ETL',
        description: 'Sistema de extração, transformação e carga de dados corporativos com validação e logs.',
        tech: ['Python', 'Pandas', 'Airflow', 'SQL'],
      },
    ],
  },
  {
    category: 'WordPress & CMS',
    icon: Zap,
    color: 'from-indigo-500 to-purple-500',
    items: [
      {
        title: 'Sites Institucionais Premium',
        description: 'Desenvolvimento de sites corporativos com design moderno, SEO otimizado e alta performance.',
        tech: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
      },
      {
        title: 'Plugins Personalizados',
        description: 'Criação de plugins WordPress sob medida para funcionalidades específicas e integrações.',
        tech: ['PHP', 'JavaScript', 'WordPress API', 'MySQL'],
      },
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Showroom de Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mais de 344 projetos desenvolvidos • Experiência em múltiplos domínios
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((category, index) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeCategory].items.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${projects[activeCategory].color} mb-4`}>
                  {(() => {
                    const Icon = projects[activeCategory].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Ver Detalhes
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/juliocamposmachado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <Github className="w-5 h-5" />
            Ver Todos os 344+ Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
