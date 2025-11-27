import { useState } from 'react';
import { Star, ExternalLink, MessageSquare, ChevronDown, ChevronUp, Code } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  topics: string[];
  stars: number;
  language: string;
  onQuote: () => void;
}

export default function ProjectCard({
  id,
  name,
  description,
  htmlUrl,
  topics,
  stars,
  language,
  onQuote,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatName = (text: string) => {
    return text.replace(/-/g, ' ').split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const truncateName = (text: string) => {
    const formatted = formatName(text);
    if (formatted.length <= 25 || isExpanded) return formatted;
    return formatted.substring(0, 25) + '...';
  };

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'text-yellow-400',
      'TypeScript': 'text-blue-400',
      'Python': 'text-green-400',
      'Java': 'text-orange-400',
      'PHP': 'text-purple-400',
      'SQL': 'text-cyan-400',
      'Go': 'text-teal-400',
    };
    return colors[lang] || 'text-gray-400';
  };

  const formatTech = (tech: string): string => {
    const special: { [key: string]: string } = {
      'cpp': 'C++',
      'nodejs': 'Node.js',
      'nextjs': 'Next.js',
      'reactjs': 'React',
      'postgresql': 'PostgreSQL',
      'mongodb': 'MongoDB',
    };
    if (special[tech.toLowerCase()]) return special[tech.toLowerCase()];
    return tech.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 flex items-start gap-2">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
              {truncateName(name)}
            </h3>
            {name.length > 25 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-400 hover:text-blue-400 transition-colors flex-shrink-0 p-1"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 ml-2 flex-shrink-0">
            <span className="flex items-center text-yellow-400 text-sm">
              <Star className="w-3 h-3 mr-1" />
              {stars}
            </span>
            {language && (
              <span className={`flex items-center ${getLanguageColor(language)} text-sm`}>
                <Code className="w-3 h-3" />
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-lg border border-blue-500/20"
              >
                {formatTech(topic)}
              </span>
            ))}
            {topics.length > 4 && (
              <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg border border-gray-600/30">
                +{topics.length - 4} mais
              </span>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-700">
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 text-gray-300 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Ver</span>
          </a>
          <button
            onClick={onQuote}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 text-gray-300 hover:bg-green-600 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium group/btn"
          >
            <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>Orçar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
