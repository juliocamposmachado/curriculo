import { Mail, Phone, Github, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Vamos Conversar
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entre em contato para discutir seu próximo projeto
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:juliocamposmachado@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    juliocamposmachado@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                  <p className="text-gray-300">(11) 99294-6628</p>
                  <p className="text-gray-300">(11) 97060-3441</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
                  <a
                    href="https://github.com/juliocamposmachado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    github.com/juliocamposmachado
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600">
              <div className="flex items-center gap-4">
                <MessageSquare className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5511992946628"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-100 transition-colors font-semibold"
                  >
                    Fale Comigo Agora →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
