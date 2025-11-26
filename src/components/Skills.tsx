import { useEffect, useState, useRef } from 'react';
import { Code, Database, Brain, Zap, Globe, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Desenvolvimento Full Stack',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/Node.js', level: 90 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 85 },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    skills: [
      { name: 'OpenAI API', level: 92 },
      { name: 'Agentes IA', level: 90 },
      { name: 'Visão Computacional', level: 85 },
      { name: 'Azure Speech', level: 82 },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Automação & Bots',
    skills: [
      { name: 'RPA', level: 93 },
      { name: 'WhatsApp Bots', level: 90 },
      { name: 'Web Scraping', level: 88 },
      { name: 'Discord/Telegram', level: 85 },
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Supabase', level: 87 },
      { name: 'MongoDB', level: 80 },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Web & APIs',
    skills: [
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'WordPress', level: 85 },
    ],
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: [
      { name: 'FlutterFlow', level: 85 },
      { name: 'App Publishing', level: 83 },
      { name: 'Mobile APIs', level: 87 },
      { name: 'Responsive Design', level: 90 },
    ],
    color: 'from-indigo-500 to-blue-500',
  },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(level);
          }, index * 100);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, index]);

  return (
    <div ref={barRef} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300">{name}</span>
        <span className="text-blue-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Arsenal Tecnológico
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Domínio comprovado em múltiplas tecnologias e frameworks modernos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${catIndex * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
