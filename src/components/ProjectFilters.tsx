import { Search, Filter } from 'lucide-react';

interface ProjectFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  technologies: string[];
  selectedTechnologies: string[];
  onTechToggle: (tech: string) => void;
}

export default function ProjectFilters({
  searchTerm,
  onSearchChange,
  technologies,
  selectedTechnologies,
  onTechToggle,
}: ProjectFiltersProps) {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 w-5 h-5" />
          <span className="text-gray-300 font-medium">Tecnologias:</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <button
            key={tech}
            onClick={() => onTechToggle(tech)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform active:scale-95 ${
              selectedTechnologies.includes(tech)
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-gray-700 text-gray-300 border border-gray-600 hover:border-blue-500 hover:text-blue-400'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}
