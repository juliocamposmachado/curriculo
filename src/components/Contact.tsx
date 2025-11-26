import { useState } from 'react';
import { Mail, Phone, Github, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar mensagem. Tente novamente.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
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

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
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
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
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

          <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-4 rounded-full bg-green-500/20">
                  <CheckCircle2 className="w-16 h-16 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
                <p className="text-gray-400">Entrarei em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
