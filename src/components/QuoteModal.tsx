import { X, Mail, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  projectName: string;
  projectUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({
  projectName,
  projectUrl,
  isOpen,
  onClose,
}: QuoteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Solicitar Orçamento</h3>
          <p className="text-gray-400">{projectName}</p>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Descrição do Projeto
            </label>
            <textarea
              placeholder="Descreva o que você precisa..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={`mailto:juliocamposmachado@gmail.com?subject=Orçamento para ${projectName}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://wa.me/5511992946628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold rounded-lg transition-colors border border-gray-600"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
