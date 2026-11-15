import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Monitor,
  Moon,
  Smartphone,
  Sun,
  Zap,
} from "lucide-react";

// @ts-ignore
import cvPdf from "../assets/C.V_Luis_dev.pdf";

//@ts-ignore
import videoPortfolio from "../assets/portfolio_audiovisuales.mp4";

//@ts-ignore
import videoAurora from "../assets/video_Aurora.mp4";

//@ts-ignore
import videoBiblioteca from "../assets/Video_biblioteca.mp4";

//@ts-ignore
import demoCartelera from "../assets/demo_cartelera.mp4";

// @ts-ignore
import miFoto from "../assets/foto_perfil.png";


type LighthouseScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

const PROFILE_IMG = miFoto;


const CV_URL = cvPdf;
const CV_FILENAME = "CV-Luis-Casas.pdf";

const EMAIL = "luiscasas10102@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/luis-casas-b4919a397";
const GITHUB_USER = "Casasluis010";


const AVAILABILITY = "Disponible de inmediato · Madrid";


const LIGHTHOUSE = null as LighthouseScores | null;


const NAV_ITEMS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

const TYPED_PHRASES = [
  "React · JavaScript · TypeScript",
  "Interfaces responsive y accesibles",
  "Consumo de APIs REST y FastAPI",
];

type Skill = { name: string; icon?: string };

const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Core",
    items: [
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5 semántico", icon: "html5" },
      { name: "CSS3 nativo", icon: "css3" },
      { name: "SQL" },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "React", icon: "react" },
      { name: "Vite", icon: "vitejs" },
      { name: "Consumo de APIs REST" },
      { name: "Integración con FastAPI", icon: "fastapi" },
      { name: "LangChain / LangGraph" },
    ],
  },
  {
    category: "Estilos",
    items: [
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Diseño responsive / Mobile First" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Scrum / Metodologías ágiles" },
    ],
  },
];

const pillars = [
  {
    icon: Monitor,
    title: "UI de calidad",
    desc: "Interfaces pixel-perfect, que traducen fielmente los diseños de Figma a código limpio y mantenible.",
  },
  {
    icon: Smartphone,
    title: "Responsive primero",
    desc: "Cada proyecto funciona correctamente en móvil, tablet y escritorio. Mobile first es el punto de partida.",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    desc: "Code splitting, lazy loading y optimización de assets para lograr buenos resultados en Core Web Vitals.",
  },
];

type Project = {
  id: string;
  number: string;
  year: string;
  tags: string[];
  badge: string;
  title: string;
  description: string;
  github: string;
  demo: string;
  video: string;
};

const projects: Project[] = [
  {
    id: "cartelera",
    number: "01",
    year: "2026",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    badge: "Proyecto propio · Diseño y desarrollo",
    title: "Cinema Showtimes — Cartelera interactiva",
    description:
      "Aplicación web para explorar carteleras de cine en tiempo real. Desarrollada con foco en UI/UX, permite buscar películas, ver detalles y navegar por catálogos, con una experiencia inspirada en Letterboxd.",
    github: "https://github.com/Casasluis010/cinema_proyect",
    demo: "https://cinema-proyect.vercel.app/",
    video: demoCartelera,
  },
  {
    id: "libroteca",
    number: "02",
    year: "2026",
    tags: ["React", "React Router", "Tailwind CSS", "Open Library API"],
    badge: "Proyecto propio · Diseño y desarrollo",
    title: "Libroteca — Descubrí, valorá y organizá tus lecturas",
    description:
      "Biblioteca personal para descubrir, valorar y organizar libros, construida sobre la API pública de Open Library. Incluye búsqueda por estado de ánimo, góndolas recomendadas, notas y citas por libro, seguimiento del progreso de lectura, listas compartibles, modo oscuro/claro automático y soporte PWA instalable. Todos los datos se guardan localmente en el navegador, sin backend.",
    github: "https://github.com/Casasluis010/Libroteca.git",
    demo: "https://libroteca-theta.vercel.app/",
    video: videoBiblioteca,
  },
  {
    id: "aurora",
    number: "03",
    year: "2026",
    tags: ["React", "Framer Motion", "Context API", "Local Storage"],
    badge: "Proyecto propio · Diseño y desarrollo",
    title: "Aurora Rail — Plataforma premium de reserva de trenes",
    description:
      "Aplicación web simulada para la reserva de billetes de tren de alta velocidad. Centrada en ofrecer una experiencia de usuario fluida, animaciones de nivel nativo y una interfaz glassmorphism altamente interactiva.",
    github: "https://github.com/Casasluis010/aurora-railways.git",
    demo: "https://aurora-railways.vercel.app/",
    video: videoAurora,
  },
  {
    id: "portfolio-audiovisual",
    number: "04",
    year: "2026",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    badge: "Trabajo freelance · Cliente real",
    title: "Portfolio Audiovisuales",
    description:
      "Portfolio web a medida para una profesional del sector audiovisual. El objetivo fue crear una interfaz minimalista e inmersiva que le diera todo el protagonismo al contenido en video y fotografía. Se implementaron transiciones fluidas, galerías responsivas y carga optimizada (lazy loading) para manejar archivos multimedia pesados sin sacrificar el rendimiento.",
    github: "https://github.com/Casasluis010/portfolio-christy",
    demo: "https://portfolio-christy-dun.vercel.app/",
    video: videoPortfolio,
  },
];

const caseStudy = {
  title: "Interfaces para un ecosistema de IA multiagente",
  meta: ["DataQuantum", "Prácticas · Marzo – Junio 2026", "Equipo Scrum"],
  challenge:
    "El equipo de datos desarrollaba un ecosistema de IA multiagente expuesto mediante APIs complejas en FastAPI. Hacía falta una interfaz que permitiera consumir esa información y mostrarla de forma clara al usuario final.",
  built: [
    "Interfaces en React, Vite y Tailwind CSS conectadas a las APIs de FastAPI.",
    "Integración y visualización de los datos del lado del cliente, en coordinación con el equipo de datos.",
    "Trabajo en sprints con metodología Scrum: planificación, revisiones y entregas incrementales.",
  ],
  stack: ["React", "Vite", "Tailwind CSS", "FastAPI", "Git", "Scrum"],
  results: [] as string[],
};

const experience = [
  {
    period: "Marzo 2026 — Junio 2026",
    role: "Becario en IA multiagente",
    company: "DataQuantum",
    desc: "Desarrollo de interfaces y consumo de APIs complejas (FastAPI) para ecosistemas de IA multiagente. Colaboración bajo metodologías ágiles (Scrum) con el equipo de datos, asegurando la correcta integración y visualización de la información del lado del cliente.",
  },
  {
    period: "Diciembre 2025 — Presente",
    role: "Desarrollador frontend independiente",
    company: "Desarrollo autónomo de software",
    desc: "Desarrollo continuo de aplicaciones web interactivas enfocadas en el rendimiento y la experiencia de usuario (UX/UI). Creación de interfaces dinámicas y responsivas con React y JavaScript (ES6+), implementando arquitecturas de componentes y sistemas de filtrado. Experiencia práctica en la integración de APIs REST externas para el renderizado de datos y en el mantenimiento de código con Git y GitHub, aplicando buenas prácticas de desarrollo.",
  },
];

const education = [
  {
    role: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    company: "MetrodoraFP",
  },
];


function usePrefersReducedMotion() {
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  return reduced;
}

function useTheme() {
  
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch {}
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) };
}

function useTypewriter(words: string[], speed = 65, pause = 1700) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[index];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && count === word.length) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && count === word.length) {
        setDeleting(true);
      } else if (deleting && count === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setCount((c) => c + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, deleting, index, words, speed, pause, reduced]);

  return reduced ? words[0] : words[index].slice(0, count);
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function useGithubRepos(user: string) {
  const [repos, setRepos] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.public_repos === "number") {
          setRepos(data.public_repos);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [user]);

  return repos;
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-primary"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-primary tracking-widest">{number}</span>
      <div className="h-px w-8 bg-border" />
      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function SkillIcon({ slug }: { slug?: string }) {
  if (!slug) {
    return <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mx-[6px]" />;
  }
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      className="w-4 h-4 flex-shrink-0"
      onError={(e) => {
        e.currentTarget.style.visibility = "hidden";
      }}
    />
  );
}

function ProjectCard({
  project,
  open,
  canHover,
  onHover,
  onToggle,
}: {
  project: Project;
  open: boolean;
  canHover: boolean;
  onHover: (hovering: boolean) => void;
  onToggle: () => void;
}) {
  const panelId = `panel-${project.id}`;

  return (
    <article
      className="bg-card group border border-transparent hover:border-border transition-colors"
      onMouseEnter={canHover ? () => onHover(true) : undefined}
      onMouseLeave={canHover ? () => onHover(false) : undefined}
    >
      <div className="p-6 md:p-8">
        {/* Etiquetas */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-primary">{project.number}</span>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
          <span className="font-mono text-xs text-primary/70 border border-primary/30 px-2 py-0.5">
            {project.badge}
          </span>
        </div>

        {/* Título + enlaces */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold flex-1 min-w-0">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex items-center gap-3 text-left w-full group-hover:text-primary transition-colors"
            >
              <span>{project.title}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
              <span className="sr-only">{open ? "Ocultar detalles" : "Ver detalles y demo"}</span>
            </button>
          </h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Código en GitHub"
              aria-label={`Código de ${project.title} en GitHub`}
            >
              <Github size={20} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Ver demo en vivo"
              aria-label={`Demo en vivo de ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Panel desplegable: el video solo se monta cuando está abierto */}
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mt-3 mb-4">
              {project.description}
            </p>
            {open && (
              <div className="rounded-lg overflow-hidden border border-border bg-black/20 aspect-video max-w-2xl">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={`Demostración de ${project.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {!open && (
          <button
            type="button"
            onClick={onToggle}
            className="mt-4 md:hidden font-mono text-xs text-primary tracking-wider"
          >
            VER DETALLES Y DEMO →
          </button>
        )}
      </div>
    </article>
  );
}


export default function App() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const { theme, toggle } = useTheme();
  const typed = useTypewriter(TYPED_PHRASES);
  const activeSection = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const repos = useGithubRepos(GITHUB_USER);


  const [canHover] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const stats = [
    { value: "1 año", label: "Desarrollo frontend" },
    { value: String(projects.length), label: "Proyectos desplegados" },
    repos !== null
      ? { value: String(repos), label: "Repositorios públicos" }
      : { value: "Scrum", label: "Metodología en equipo" },
    { value: "Técnico DAM", label: "MetrodoraFP" },
  ];

  const btnBase =
    "transition-all duration-200 active:scale-[0.98] motion-reduce:transform-none";

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-mono text-xs text-primary tracking-widest">
            FRONTEND DEV / 2026
          </span>
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={`font-mono text-xs tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label.toUpperCase()}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={`p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary ${btnBase}`}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className={`flex items-center gap-2 border border-border px-3 py-2 font-mono text-xs tracking-wider text-foreground hover:border-primary hover:text-primary ${btnBase}`}
            >
              <Download size={14} />
              <span className="hidden sm:inline">CV</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className={`hidden sm:flex items-center gap-2 bg-primary text-primary-foreground font-mono text-xs px-4 py-2 hover:bg-primary/90 tracking-wider ${btnBase}`}
            >
              DISPONIBLE{" "}
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse motion-reduce:animate-none" />
            </a>
          </div>
        </div>
        <ScrollProgress />
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 text-border opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 15%, transparent 70%)",
          }}
        />
        <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground tracking-widest mb-6 border border-border px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none" />
                {AVAILABILITY.toUpperCase()}
              </p>
              <p
                className="font-mono text-xs text-muted-foreground tracking-widest mb-6 h-4"
                aria-label="Frontend Developer: React, JavaScript, TypeScript, diseño responsive"
              >
                <span aria-hidden>
                  FRONTEND DEVELOPER — {typed.toUpperCase()}
                  <span className="inline-block w-[2px] h-3 bg-primary align-middle ml-1 animate-pulse motion-reduce:animate-none" />
                </span>
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
                Desarrollador frontend especializado en React y JavaScript. Construyo aplicaciones
                web dinámicas, eficientes y accesibles para todos los usuarios. Aporto experiencia
                técnica en el sector tecnológico, tanto en prácticas como en proyectos propios.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#proyectos"
                  className={`flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${btnBase}`}
                >
                  Ver proyectos <ArrowUpRight size={16} />
                </a>
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  className={`flex items-center gap-2 border border-border px-6 py-3 font-semibold text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${btnBase}`}
                >
                  <Download size={16} /> Descargar CV
                </a>
                <a
                  href="#contacto"
                  className={`flex items-center gap-2 px-2 py-3 font-semibold text-muted-foreground hover:text-primary ${btnBase}`}
                >
                  Contactar
                </a>
              </div>

              {LIGHTHOUSE && (
                <div className="mt-8 flex items-center gap-2 flex-wrap" aria-label="Puntajes de Lighthouse de este sitio">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest mr-1">
                    LIGHTHOUSE
                  </span>
                  {[
                    ["Rendimiento", LIGHTHOUSE.performance],
                    ["Accesibilidad", LIGHTHOUSE.accessibility],
                    ["Buenas prácticas", LIGHTHOUSE.bestPractices],
                    ["SEO", LIGHTHOUSE.seo],
                  ].map(([label, score]) => (
                    <span
                      key={label}
                      className="font-mono text-xs border border-primary/30 text-primary px-2 py-1"
                    >
                      {label} {score}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Foto de perfil */}
            <div className="relative mx-auto md:mx-0">
              <div className="w-52 h-52 md:w-64 md:h-64 border border-border overflow-hidden relative bg-muted">
                <img
                  src={PROFILE_IMG}
                  alt="Retrato de Luis Casas"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border border-primary/20 pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
        <Reveal>
          <SectionLabel number="01" label="Sobre mí" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Como desarrollador frontend, mi objetivo es construir productos digitales donde la
                estética y el rendimiento funcionen en armonía. Fuera de la programación, soy un
                gran aficionado al audio de alta calidad; esa misma búsqueda de fidelidad y
                atención al detalle es la que aplico cuando transformo un diseño en código
                interactivo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para mí, el diseño responsive no es un extra: es el punto de partida. Trabajo con
                Figma para colaborar con diseñadores y entrego componentes reutilizables,
                accesibles y optimizados para cualquier dispositivo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card p-6">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground tracking-wide">
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-12">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 group hover:bg-secondary transition-colors">
                <Icon size={20} className="text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stack */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <SectionLabel number="02" label="Stack técnico" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {skills.map((group) => (
              <div key={group.category} className="bg-card p-6">
                <p className="font-mono text-xs text-primary tracking-widest mb-4">
                  {group.category.toUpperCase()}
                </p>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-2 text-sm text-foreground/80">
                      <SkillIcon slug={item.icon} />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
        <Reveal>
          <SectionLabel number="03" label="Proyectos" />
        </Reveal>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard
                project={project}
                open={pinned === project.id || hovered === project.id}
                canHover={canHover}
                onHover={(h) => setHovered(h ? project.id : null)}
                onToggle={() => setPinned((p) => (p === project.id ? null : project.id))}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Caso de estudio */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <SectionLabel number="04" label="Caso de estudio" />
          <div className="border border-border bg-card p-6 md:p-10">
            <div className="flex items-center gap-3 flex-wrap mb-4">
              {caseStudy.meta.map((m, i) => (
                <span
                  key={m}
                  className={`font-mono text-xs px-2 py-0.5 border ${
                    i === 0
                      ? "text-primary border-primary/30"
                      : "text-muted-foreground border-border"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{caseStudy.title}</h3>

            <div
              className={`grid grid-cols-1 gap-px bg-border ${
                caseStudy.results.length > 0 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              <div className="bg-background p-6">
                <p className="font-mono text-xs text-primary tracking-widest mb-3">EL DESAFÍO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>
              <div className="bg-background p-6">
                <p className="font-mono text-xs text-primary tracking-widest mb-3">
                  QUÉ CONSTRUÍ
                </p>
                <ul className="space-y-2">
                  {caseStudy.built.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {caseStudy.results.length > 0 && (
                <div className="bg-background p-6">
                  <p className="font-mono text-xs text-primary tracking-widest mb-3">RESULTADOS</p>
                  <ul className="space-y-2">
                    {caseStudy.results.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-2" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 flex-wrap mt-6">
              <span className="font-mono text-xs text-muted-foreground tracking-widest mr-1">
                STACK
              </span>
              {caseStudy.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
        <Reveal>
          <SectionLabel number="05" label="Experiencia" />

          <div className="relative border-l border-border ml-1 pl-6 md:pl-8">
            {experience.map((exp) => (
              <div key={exp.role} className="relative pb-10 last:pb-0 group">
                <span className="absolute -left-[30px] md:-left-[38px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                <p className="font-mono text-xs text-muted-foreground tracking-wide mb-2">
                  {exp.period}
                </p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </p>
                <p className="font-mono text-xs text-primary mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-14 mb-6">
            Formación
          </p>
          <div className="relative border-l border-border ml-1 pl-6 md:pl-8">
            {education.map((ed) => (
              <div key={ed.role} className="relative group">
                <span className="absolute -left-[30px] md:-left-[38px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background" />
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ed.role}
                </p>
                <p className="font-mono text-xs text-primary">{ed.company}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 max-w-5xl mx-auto px-6 scroll-mt-24">
        <Reveal>
          <SectionLabel number="06" label="Contacto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                ¿Necesitás un
                <br />
                <span className="text-primary">desarrollador frontend?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Busco sumar valor en entornos corporativos y proyectos tecnológicos de alto impacto.
                Quiero integrarme a equipos multidisciplinarios donde pueda aplicar mi base técnica
                (React, TypeScript, JavaScript), trabajar con metodologías ágiles (Scrum) y
                contribuir a soluciones escalables. ¿Hablamos?
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href={`mailto:${EMAIL}`}
                  className={`inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg hover:bg-primary/90 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${btnBase}`}
                >
                  Contactar <ArrowUpRight size={18} />
                </a>
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  className={`inline-flex items-center gap-2 border border-border px-6 py-4 font-semibold hover:border-primary hover:text-primary ${btnBase}`}
                >
                  <Download size={18} /> Descargar CV
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {/* Email con botón de copiar */}
              <div className="flex items-stretch border border-border hover:border-primary transition-colors group">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 flex items-center justify-between gap-4 p-4 hover:bg-card transition-colors min-w-0"
                >
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground tracking-widest">
                    <Mail size={14} /> EMAIL
                  </span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {EMAIL}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copiado" : "Copiar email"}
                  className="px-4 border-l border-border text-muted-foreground hover:text-primary hover:bg-card transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <span className="sr-only" role="status">
                {copied ? "Email copiado al portapapeles" : ""}
              </span>

              {[
                {
                  label: "LinkedIn",
                  icon: Linkedin,
                  value: LINKEDIN_URL.replace("https://www.", "").replace(/-[a-z0-9]{9,}$/i, ""),
                  href: LINKEDIN_URL,
                },
                {
                  label: "GitHub",
                  icon: Github,
                  value: `github.com/${GITHUB_USER}`,
                  href: `https://github.com/${GITHUB_USER}`,
                },
              ].map(({ label, icon: Icon, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 border border-border hover:border-primary hover:bg-card transition-all group"
                >
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground tracking-widest">
                    <Icon size={14} /> {label.toUpperCase()}
                  </span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {value}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            © 2026 LUIS CASAS — FRONTEND DEVELOPER
          </span>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            HECHO CON REACT, VITE Y TAILWIND CSS
          </span>
        </div>
      </footer>
    </div>
  );
}