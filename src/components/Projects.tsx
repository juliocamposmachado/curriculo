import { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import { RestEndpointMethodTypes } from '@octokit/types';
import { Github, Loader } from 'lucide-react'; // Changed 'GitHub' back to 'Github'
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import QuoteModal from './QuoteModal';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

const TECH_KEYWORDS = [
  'react', 'vue', 'angular', 'typescript', 'javascript',
  'python', 'java', 'php', 'go', 'node',
  'mongodb', 'postgresql', 'mysql', 'redis',
  'docker', 'kubernetes', 'aws', 'firebase',
  'machine-learning', 'ai', 'tensorflow',
  'api', 'rest', 'graphql', 'fullstack'
];

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users/juliocamposmachado/repos', {
          username: 'juliocamposmachado',
          sort: 'updated',
          per_page: 100,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        const repos = response.data
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'Sem descrição disponível',
            html_url: repo.html_url,
            homepage: repo.homepage || repo.html_url,
            topics: repo.topics || [],
            stargazers_count: repo.stargazers_count,
            language: repo.language || 'JavaScript',
          }))
          .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count) // Explicitly type 'a' and 'b'
          .slice(0, 30);

        // Collect unique technologies
        const techs = new Set<string>();
        repos.forEach((repo: Repository) => { // Explicitly type 'repo'
          if (repo.language) techs.add(repo.language);
          repo.topics.forEach((topic: string) => { // Explicitly type 'topic'
            if (TECH_KEYWORDS.includes(topic.toLowerCase())) {
              techs.add(formatTech(topic));
            }
          });
        });

        setTechnologies(Array.from(techs).sort());
        setRepositories(repos);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

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

  const filteredRepositories = repositories.filter(repo => {
    const matchesTech = selectedTechnologies.length === 0 ||
      selectedTechnologies.some(tech => {
        const normalized = tech.toLowerCase();
        return repo.language?.toLowerCase() === normalized ||
          repo.topics.some(topic => topic.toLowerCase() === normalized);
      });

    const matchesSearch = searchTerm === '' ||
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesTech && matchesSearch;
  });

  const handleQuote = (repo: Repository) => {
    setSelectedRepo(repo);
    setShowQuoteModal(true);
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center min-h-screen"> {/* Removed id="projects" */}
        <div className="flex flex-col items-center gap-4">
          <Loader className="w-12 h-12 text-blue-400 animate-spin" />
          <p className="text-gray-400">Carregando projetos...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" id="projects"> {/* Keep id="projects" here */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Showroom de Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {repositories.length}+ projetos desenvolvidos com as melhores tecnologias
          </p>
        </div>

        <ProjectFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          onTechToggle={(tech) =>
            setSelectedTechnologies(prev =>
              prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
            )
          }
        />

        {filteredRepositories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.map((repo) => (
              <ProjectCard
                key={repo.id}
                id={repo.id}
                name={repo.name}
                description={repo.description}
                htmlUrl={repo.html_url}
                topics={repo.topics}
                stars={repo.stargazers_count}
                language={repo.language}
                onQuote={() => handleQuote(repo)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum projeto encontrado. Tente ajustar seus filtros.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <a
            href="https://github.com/juliocamposmachado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            <Github className="w-5 h-5" /> {/* Changed 'GitHub' back to 'Github' */}
            Ver Todos os Projetos no GitHub
          </a>
        </div>
      </div>

      {selectedRepo && (
        <QuoteModal
          projectName={selectedRepo.name}
          projectUrl={selectedRepo.html_url}
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
        />
      )}
    </section>
  );
}
