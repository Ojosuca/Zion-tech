import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { X, Github, Linkedin, Mail, Code, Palette, MapPin, Calendar, Star, Coffee } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  gradient: string;
  description: string;
  skills: string[];
  experience: string;
  location: string;
  age: string;
  email: string;
  github: string;
  linkedin: string;
  favoriteStack: string[];
  funFact: string;
  projects: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'carlos',
    name: 'Carlos Josué',
    role: 'Frontend Developer & UX Designer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
    gradient: 'from-blue-500 via-purple-500 to-cyan-500',
    description: 'Especialista em desenvolvimento frontend e experiência do usuário, criando interfaces que encantam e convertem.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    experience: '3+ anos',
    location: 'São Paulo, SP',
    age: '24 anos',
    email: 'carlos@ziontech.dev',
    github: 'github.com/carlosjosue',
    linkedin: 'linkedin.com/in/carlosjosue',
    favoriteStack: ['React', 'TypeScript', 'Tailwind'],
    funFact: 'Viciado em café e perfeccionista com pixels',
    projects: '25+ projetos concluídos'
  },
  {
    id: 'amir',
    name: 'Amir de Bulhões',
    role: 'Backend Developer & DevOps',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format',
    gradient: 'from-emerald-500 via-teal-500 to-blue-500',
    description: 'Expert em arquitetura de sistemas e infraestrutura, garantindo performance e escalabilidade máxima.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes'],
    experience: '4+ anos',
    location: 'Rio de Janeiro, RJ',
    age: '26 anos',
    email: 'amir@ziontech.dev',
    github: 'github.com/amirbulhoes',
    linkedin: 'linkedin.com/in/amirbulhoes',
    favoriteStack: ['Node.js', 'PostgreSQL', 'Docker'],
    funFact: 'Consegue debuggar código dormindo',
    projects: '30+ sistemas em produção'
  }
];

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="sobre" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Conheça a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ZionTech</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Somos uma dupla de jovens desenvolvedores apaixonados por tecnologia, 
            unidos pela visão de criar soluções digitais que fazem a diferença.
          </p>
        </motion.div>

        {/* Team Members Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative cursor-pointer select-none"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedMember(member);
              }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-3xl"></div>
                </div>

                {/* Card Content */}
                <div className="relative p-8 pointer-events-none">
                  {/* Header with floating elements */}
                  <div className="relative mb-6">
                    {/* Floating Icons */}
                    <div className="absolute -top-2 -right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
                      <Code className="w-8 h-8 text-blue-500 transform rotate-12" />
                    </div>
                    <div className="absolute top-8 -left-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none">
                      <Palette className="w-6 h-6 text-purple-500 transform -rotate-12" />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${member.gradient} p-[2px] group-hover:scale-105 transition-transform duration-300`}>
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-2xl"
                            draggable={false}
                          />
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-3 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {member.description}
                  </p>

                  {/* Skills Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${member.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{member.skills.length - 3}
                    </span>
                  </div>

                  {/* Action Button */}
                  <div className={`w-full py-3 rounded-xl bg-gradient-to-r ${member.gradient} text-white font-semibold shadow-lg text-center opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-xl pointer-events-none`}>
                    Ver Detalhes Completos
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${selectedMember.gradient} rounded-2xl blur-2xl opacity-20`}></div>
                    <div className="relative flex items-center space-x-6">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${selectedMember.gradient} p-[3px]`}>
                        <img
                          src={selectedMember.photo}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${selectedMember.gradient} bg-clip-text text-transparent`}>
                          {selectedMember.name}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                          {selectedMember.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-500">Idade</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{selectedMember.age}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="text-sm text-gray-500">Localização</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{selectedMember.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="text-sm text-gray-500">Experiência</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{selectedMember.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Coffee className="w-5 h-5 text-orange-500" />
                        <div>
                          <p className="text-sm text-gray-500">Projetos</p>
                          <p className="font-semibold text-gray-900 dark:text-white">{selectedMember.projects}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-green-500" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm">{selectedMember.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Habilidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedMember.gradient} text-white font-medium text-sm shadow-lg`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stack Favorito */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Stack Favorito</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.favoriteStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fun Fact */}
                  <div className="mb-8 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Curiosidade</h4>
                    <p className="text-gray-600 dark:text-gray-400 italic">"{selectedMember.funFact}"</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a
                      href={`https://${selectedMember.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={`https://${selectedMember.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Card className="h-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-0 relative h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-2xl">🎯</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Nossa Missão</h3>
                  <p className="text-lg leading-relaxed">
                    Democratizar o acesso à tecnologia de ponta, criando sites modernos 
                    que elevam negócios e conectam marcas aos seus clientes de forma única e impactante.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Card className="h-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-0 relative h-full">
                <div className="absolute top-0 left-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 -translate-x-14"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 translate-x-10"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-2xl">👁️</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Nossa Visão</h3>
                  <p className="text-lg leading-relaxed">
                    Ser reconhecida como a principal referência em soluções digitais inovadoras, 
                    transformando a forma como empresas se conectam com seus clientes através da tecnologia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
            <p className="text-gray-600 dark:text-gray-400">Projetos Entregues</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100%</div>
            <p className="text-gray-600 dark:text-gray-400">Satisfação dos Clientes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent mb-2">2+</div>
            <p className="text-gray-600 dark:text-gray-400">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">24/7</div>
            <p className="text-gray-600 dark:text-gray-400">Suporte Técnico</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
