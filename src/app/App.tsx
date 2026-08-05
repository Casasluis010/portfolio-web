import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, Monitor, Smartphone, Zap } from "lucide-react";

//@ts-ignore
import demoCartelera from "../assets/demo_cartelera.mp4";

// @ts-ignore
import demoGif from "../assets/demo-final.gif";

// @ts-ignore
import miFoto from "../assets/foto_perfil (2).jpg";

const PROFILE_IMG = miFoto;

const skills = [
  {
    category: "Core",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5 semántico", "CSS3 / SCSS"],
  },
  {
    category: "Framework",
    items: ["React", "FastAPI.js", "Flask Router", "Integración de APIs REST / Redux"],
  },
  {
    category: "Estilos",
    items: ["Tailwind CSS", "Styled Diseño Responsive / Mobile First", "CSS Librerías UI (ej. Recharts)", "CSS3 Nativo"],
  },
  {
    category: "Herramientas",
    items: ["Git & GitHub", "Vite", "Figma"],
  },
];

const experience = [
  {
    period: "Marzo 2026 — Junio 2026",
    role: "Becario en IA Multiagente",
    company: "DataQuantum",
    desc: "Desarrollo backend y de APIs utilizando FastAPI para ecosistemas de IA multiagente (LangChain/LangGraph) conectados a bases de datos SQL y vectoriales. Trabajo estructurado bajo metodologías ágiles (Scrum)."
  },
  {
    period: "Enero 2026 — Junio 2026",
    role: "Desarrollo Full-Stack (TFG)",
    company: "Metrodora",
    desc: "Diseño y desarrollo integral de HospitalSys. Implementación de frontend con React y backend utilizando Flask y MySQL. El sistema incluye gestión de usuarios, manejo seguro de documentos y la integración de un chatbot de asistencia."
  }
];

const pillars = [
  {
    icon: Monitor,
    title: "UI de calidad",
    desc: "Interfaces pixel-perfect, traduciendo fielmente los diseños de Figma a código limpio y mantenible.",
  },
  {
    icon: Smartphone,
    title: "Responsive primero",
    desc: "Cada proyecto funciona impecablemente en mobile, tablet y desktop. Mobile-first es el punto de partida.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    desc: "Code splitting, lazy loading y optimización de assets para scores altos en Core Web Vitals.",
  },
];

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-primary tracking-widest">{number}</span>
      <div className="h-px w-8 bg-border" />
      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-xs text-primary tracking-widest">FRONTEND DEV / 2026</span>
          <nav className="hidden md:flex items-center gap-8">
            {["Sobre mí", "Proyectos", "Experiencia", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-").replace("í", "i")}`}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>
          <a
            href="mailto:tu@email.com"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs px-4 py-2 hover:bg-primary/90 transition-colors tracking-wider"
          >
            DISPONIBLE <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <p className="font-mono text-xs text-muted-foreground tracking-widest mb-6">
              FRONTEND DEVELOPER — REACT · JAVASCRIPT · RESPONSIVE WEB
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Luis
              <br />
              <span className="text-primary">Casas.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed text-lg mb-10">
              Soy Desarrollador Frontend especializado en React y JavaScript, recientemente titulado como Técnico Superior en DAM en Metrodora. Tras mi experiencia práctica en el sector tecnológico, me dedico a crear experiencias web dinámicas, transformando diseños en código limpio y funcional, y cuidando cada detalle visual y de interacción.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#proyectos"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                Ver proyectos <ArrowUpRight size={16} />
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 border border-border px-6 py-3 font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="relative mx-auto md:mx-0">
            <div className="w-52 h-52 md:w-64 md:h-64 border border-border overflow-hidden relative bg-muted">
              <img
                src={PROFILE_IMG}
                alt="Foto de perfil"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border border-primary/20 pointer-events-none" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/30 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel number="01" label="Sobre mí" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Como Desarrollador Frontend (React/JavaScript), mi objetivo es construir productos digitales donde la estética y el rendimiento funcionen en armonía. Fuera de la programación, soy un gran aficionado al audio de alta calidad; esa misma búsqueda de la 'fidelidad' y la atención al detalle es la que aplico cuando transformo un diseño en código interactivo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              El responsive web design no es un extra para mí — es el punto de partida.
              Trabajo con Figma para colaborar con diseñadores y entrego componentes
              reutilizables, accesibles y optimizados para cualquier dispositivo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border">
            {[
              { value: "1 Año", label: "Experiencia en DataQuantum como becario" },
              { value: "Proyecto TFG", label: "Sistema Full Stack" },
              { value: "100%", label: "Responsive siempre" },
              { value: "95+", label: "Lighthouse score" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card p-6">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">
                  {stat.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-12">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-6 group hover:bg-secondary transition-colors">
              <Icon size={20} className="text-primary mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel number="02" label="Stack técnico" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {skills.map((group) => (
            <div key={group.category} className="bg-card p-6">
              <p className="font-mono text-xs text-primary tracking-widest mb-4">
                {group.category.toUpperCase()}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel number="03" label="Proyectos" />
        
        <div className="space-y-4">
          
          {/* Proyecto 1: HospitalSys */}
          <div
            className="bg-card group cursor-pointer border border-transparent hover:border-border transition-colors"
            onMouseEnter={() => setActiveProject("hospitalsys")}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  
                  {/* Etiquetas Superiores */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-xs text-primary">01</span>
                    <span className="font-mono text-xs text-muted-foreground">2026</span>
                    
                    {/* Tecnologías */}
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">React</span>
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">Flask</span>
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">MySQL</span>
                    
                    {/* Highlight */}
                    <span className="font-mono text-xs text-primary/70 border border-primary/30 px-2 py-0.5">
                      Proyecto TFG
                    </span>
                  </div>
                  
                  {/* Título y Enlaces (GitHub) */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      HospitalSys - Sistema Integral de Gestión Hospitalaria
                    </h3>
                    <div className="flex items-center gap-2 ml-2">
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Repositorio en GitHub (Próximamente)"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Descripción Desplegable (Animación) */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: activeProject === "hospitalsys" ? "500px" : "0",
                      opacity: activeProject === "hospitalsys" ? 1 : 0,
                    }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-4">
                      Desarrollo Full-Stack que incluye un dashboard interactivo, centro de notificaciones, y gestión completa de pacientes y personal. Implementa manejo seguro de subida de archivos (documentos médicos/imágenes), sistema de autenticación y la integración de un chatbot de asistencia.
                    </p>
                    
                    {/* Demo Visual GIF */}
                    <div className="mt-4 rounded-lg overflow-hidden border border-border bg-black/20 aspect-video relative max-w-2xl">
                      <img 
                        src={demoGif} 
                        alt="Demo interactiva de HospitalSys" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 2: Cartelera de Cine */}
          <div
            className="bg-card group cursor-pointer border border-transparent hover:border-border transition-colors"
            onMouseEnter={() => setActiveProject("cartelera")}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  
                  {/* Etiquetas Superiores */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="font-mono text-xs text-primary">02</span>
                    <span className="font-mono text-xs text-muted-foreground">2026</span>
                    
                    {/* Tecnologías */}
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">React</span>
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">JavaScript</span>
                    <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5">Tailwind CSS</span>
                  </div>
                  
                  {/* Título y Enlaces (GitHub + Demo) */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Movie Tracker - Cartelera Interactiva
                    </h3>
                    <div className="flex items-center gap-2 ml-2">
                      <a 
                        href="https://github.com/Casasluis010/proyecto_cine.git" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Código en GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="https://proyecto-cine-green.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Ver Demo en Vivo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Descripción Desplegable (Animación) */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: activeProject === "cartelera" ? "500px" : "0",
                      opacity: activeProject === "cartelera" ? 1 : 0,
                    }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-4">
                      Aplicación web para explorar carteleras de cine en tiempo real. Desarrollada con enfoque en UI/UX, permite a los usuarios buscar películas, ver detalles y navegar por catálogos inspirados en la experiencia de Letterboxd.
                    </p>
                    
                    {/* Demo Visual Video */}
                      <div className="mt-4 rounded-lg overflow-hidden border border-border bg-black/20 aspect-video relative max-w-2xl">
                        <video 
                          src={demoCartelera} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover" 
                        />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel number="04" label="Experiencia" />
        <div>
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-border last:border-0 group hover:bg-card/50 px-4 -mx-4 transition-colors"
            >
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">{exp.period}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </p>
                <p className="font-mono text-xs text-primary mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 max-w-5xl mx-auto px-6">
        <SectionLabel number="05" label="Contacto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ¿Necesitas un<br />
              <span className="text-primary">Frontend dev?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Enfocado en dar el salto a entornos corporativos y proyectos tecnológicos de alto impacto. Busco integrarme a equipos multidisciplinares donde pueda aportar mi base técnica sólida, trabajar bajo metodologías ágiles y seguir creciendo profesionalmente. ¿Hablamos?
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=luiscasas10102@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Escribime <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="space-y-4">
            {[
              { 
                label: "Email", 
                value: "luiscasas10102@gmail.com", 
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=luiscasas10102@gmail.com",
                external: true 
              },
              { 
                label: "LinkedIn", 
                value: "linkedin.com/in/luis-casas", 
                href: "https://www.linkedin.com/in/luis-casas-b4919a397", 
                external: true 
              },
              { 
                label: "GitHub", 
                value: "github.com/Casasluis010", 
                href: "https://github.com/Casasluis010", 
                external: true 
              },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between p-4 border border-border hover:border-primary hover:bg-card transition-all group"
              >
                <span className="font-mono text-xs text-muted-foreground tracking-widest">
                  {contact.label.toUpperCase()}
                </span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {contact.value}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            © 2026 LUIS CASAS — FRONTEND DEVELOPER
          </span>
        </div>
      </footer>
    </div>
  );
}