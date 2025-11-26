import { useEffect, useRef, useState } from 'react';
import { Server, Code, Brain, Rocket } from 'lucide-react';

const timelineData = [
  {
    year: '2004-2024',
    title: 'Infraestrutura & TI',
    icon: Server,
    color: 'from-gray-400 to-gray-600',
    description: 'Mais de 20 anos de experiência sólida em infraestrutura, servidores, redes, data center, CFTV e suporte técnico corporativo.',
    achievements: [
      'Gestão completa de data centers',
      'Cabeamento estruturado e redes',
      'Manutenção e suporte técnico',
      'Sistemas de segurança CFTV',
    ],
  },
  {
    year: '2018-2021',
    title: 'Automação & Scripts',
    icon: Code,
    color: 'from-blue-400 to-blue-600',
    description: 'Início da jornada em desenvolvimento com foco em automações, scripts e RPA para otimização de processos.',
    achievements: [
      'Automação de tarefas repetitivas',
      'Scripts Python para TI',
      'Web scraping empresarial',
      'Primeiras APIs REST',
    ],
  },
  {
    year: '2021-2023',
    title: 'Full Stack Development',
    icon: Rocket,
    color: 'from-green-400 to-emerald-600',
    description: 'Expansão para desenvolvimento completo: front-end, back-end, APIs, bancos de dados e aplicações web.',
    achievements: [
      'React, Node.js, Python APIs',
      'Sistemas completos full stack',
      'WordPress avançado',
      'Apps mobile com FlutterFlow',
    ],
  },
  {
    year: '2023-2025',
    title: 'IA & Tecnologias Avançadas',
    icon: Brain,
    color: 'from-purple-400 to-pink-600',
    description: 'Especialização em IA, agentes inteligentes, visão computacional, bots avançados e soluções de automação com machine learning.',
    achievements: [
      'OpenAI API e modelos generativos',
      'Agentes de IA conversacionais',
      'Visão computacional e OCR',
      'Bots inteligentes multi-plataforma',
    ],
  },
];

function TimelineItem({ item, index }: { item: typeof timelineData[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`flex items-center gap-8 mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}
      >
        <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
            <item.icon className="w-6 h-6 text-white" />
          </div>

          <div className="text-sm font-semibold text-blue-400 mb-2">{item.year}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-gray-400 mb-4">{item.description}</p>

          <ul className="space-y-2">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="flex items-center gap-2 text-gray-300">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg ${
            isVisible ? 'animate-pulse-slow' : ''
          }`}
        >
          <item.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden" id="timeline">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Jornada Profissional
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Evolução contínua: da infraestrutura à inteligência artificial
          </p>
        </div>

        <div className="relative">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
