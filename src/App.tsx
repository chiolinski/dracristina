import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = {
  blue: "#69A9D1",
  blueDark: "#4D8CB8",
  gold: "#CFA640",
  goldDeep: "#B0882E",
  ink: "#1F2937",
  paper: "#F8FAFC",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#tecnologia", label: "Tecnología" },
    { href: "#testimonios", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="Logo Dra. Cristina Urrutia — Estética Orofacial"
                className="w-10 h-10 rounded-full object-cover"
                style={{ boxShadow: "inset 0 0 0 2px #69A9D1", background: "#fff" }}
              />
              <div className="leading-tight">
                <p className="font-extrabold tracking-tight text-[15px]" style={{ color: COLORS.gold }}>
                  DRA. CRISTINA URRUTIA
                </p>
                <p className="text-[12px] text-gray-500">Endodoncia • Estética Orofacial</p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((it) => (
                <a key={it.href} href={it.href} className="text-sm font-medium hover:opacity-80">
                  {it.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition"
                style={{ background: COLORS.gold, color: "#fff" }}
              >
                Reservar hora
              </a>
            </nav>

            {/* Mobile menu btn */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              <div className="space-y-1.5">
                <span className="block w-5 h-[2px] bg-gray-800" />
                <span className="block w-5 h-[2px] bg-gray-800" />
                <span className="block w-5 h-[2px] bg-gray-800" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="py-2 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {it.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="mt-1 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold shadow-sm"
                style={{ background: COLORS.gold, color: "#fff" }}
                onClick={() => setMenuOpen(false)}
              >
                Reservar hora
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            background:
              `radial-gradient(1200px 500px at 10% -10%, ${COLORS.blue} 0%, transparent 60%), radial-gradient(1000px 400px at 90% -20%, ${COLORS.gold} 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]"
              >
                Sonríe con confianza
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.gold})` }}
                >
                  Endodoncia & Estética Facial de Alto Nivel
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-gray-600 text-base sm:text-lg max-w-prose"
              >
                Atención cálida, resultados precisos y una experiencia cuidada de principio a fin. Agenda tu tratamiento con la Dra. Cristina Urrutia en Concepción.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition"
                  style={{ background: COLORS.gold, color: "#fff" }}
                >
                  Agendar hora
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border"
                  style={{ borderColor: COLORS.blue, color: COLORS.blue }}
                >
                  Ver servicios
                </a>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-500">
                <Badge text="Videoconsulta disponible" />
                <Badge text="Atención en IntegraMédica (Bupa)" />
                <Badge text="Garantía de tratamientos" />
              </div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full max-w-md lg:max-w-none mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gray-50">
                <img
                  src="/hero.jpeg"
                  alt="Atención de rinomodelación — Dra. Cristina Urrutia"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 sm:py-24 bg-[radial-gradient(1200px_400px_at_50%_-20%,#f1f5f9,transparent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Servicios</h2>
            <p className="mt-2 text-gray-600">Calidad clínica, precisión y estética en cada tratamiento.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <MotionCard key={i} {...c} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Dra. Cristina Urrutia</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Especialista en Endodoncia (Universidad del Desarrollo) y Cirujano Dentista (Universidad de Concepción), con
              formación complementaria en Enfermería. Me distinguen la calidez, la responsabilidad y la rapidez del tratamiento,
              con procedimientos garantizados y foco en tu bienestar.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Feature icon="🪥" title="Atención amable" subtitle="Acompañamiento respetuoso en cada paso" />
              <Feature icon="🩺" title="Precisión clínica" subtitle="Protocolos seguros y actualizados" />
              <Feature icon="✨" title="Resultados estéticos" subtitle="Naturalidad y armonía facial" />
              <Feature icon="⏱️" title="Eficiencia" subtitle="Citas puntuales y tiempos optimizados" />
            </div>
          </div>
          <div className="rounded-3xl ring-1 ring-gray-200 p-1 bg-white shadow-xl">
            <div className="aspect-[16/11] w-full rounded-2xl overflow-hidden" style={{ background: COLORS.paper }}>
              <div className="h-full w-full grid place-items-center text-center p-8">
                <p className="text-sm text-gray-500">Aquí puedes colocar una foto profesional o de la clínica.</p>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between text-sm">
              <span className="text-gray-500">IntegraMédica • Bupa</span>
              <span className="font-semibold" style={{ color: COLORS.blue }}>Concepción</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA */}
      <section id="tecnologia" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tecnología & Calidad</h2>
            <p className="mt-2 text-gray-600">Equipamiento moderno y técnicas actuales para soluciones predecibles.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Imágenes diagnósticas", s: "Radiografías/CBCT cuando corresponde" },
              { t: "Instrumentación moderna", s: "Rotatoria y reciprocante" },
              { t: "Sellado termoplástico", s: "Materiales biocerámicos" },
              { t: "Control de esterilización", s: "Protocolos validados" },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white shadow-sm"
              >
                <div className="text-3xl" style={{ color: COLORS.blue }}>●</div>
                <h3 className="mt-2 font-semibold">{x.t}</h3>
                <p className="text-sm text-gray-600">{x.s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="testimonios" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Opiniones</h2>
            <p className="mt-2 text-gray-600">Pronto, reseñas verificadas de pacientes.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white shadow-sm"
              >
                <div className="text-yellow-500">★★★★★</div>
                <p className="mt-2 text-sm text-gray-700">
                  "Excelente atención, trato muy humano y resultados impecables."
                </p>
                <p className="mt-3 text-xs text-gray-500">Paciente verificado</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Agenda tu hora</h2>
              <p className="mt-2 text-gray-600">Te responderemos con opciones de fecha y hora.</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/56988656070"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition"
                  style={{ background: COLORS.gold, color: "#fff" }}
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+56988656070"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border"
                  style={{ borderColor: COLORS.blue, color: COLORS.blue }}
                >
                  Llamar
                </a>
              </div>

              <ul className="mt-6 text-sm text-gray-700 space-y-2">
                <li><strong>Dirección:</strong> Cochrane 635 B of 1501, Concepción</li>
                <li><strong>Centro:</strong> IntegraMédica (Bupa)</li>
                <li><strong>Videoconsulta:</strong> Sí</li>
                <li><strong>Medios de pago:</strong> Crédito/Débito · Transferencia · Efectivo</li>
              </ul>

              <form className="mt-8 grid gap-3 max-w-lg" action="https://formspree.io/f/your-id" method="POST">
                <input name="nombre" required placeholder="Nombre y Apellido" className="w-full rounded-xl border px-4 py-3" />
                <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border px-4 py-3" />
                <input name="telefono" placeholder="Teléfono (opcional)" className="w-full rounded-xl border px-4 py-3" />
                <select name="servicio" className="w-full rounded-xl border px-4 py-3">
                  <option>Endodoncia</option>
                  <option>Extracción dental</option>
                  <option>Blanqueamiento</option>
                  <option>Estética orofacial</option>
                  <option>Otra consulta</option>
                </select>
                <textarea name="mensaje" placeholder="Cuéntanos brevemente tu caso" rows={4} className="w-full rounded-xl border px-4 py-3" />
                <button type="submit" className="rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition" style={{ background: COLORS.blue, color: "#fff" }}>
                  Enviar solicitud
                </button>
                <p className="text-xs text-gray-500">Al enviar, aceptas ser contactad@ para coordinar tu atención.</p>
              </form>
            </div>

            {/* Mapa + horarios */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
                <iframe
                  title="Mapa: Cochrane 635, Concepción"
                  src="https://www.google.com/maps?q=Cochrane+635,+Concepci%C3%B3n,+Chile&output=embed"
                  className="w-full h-72 sm:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white">
                  <h3 className="font-semibold">Horarios</h3>
                  <ul className="mt-2 text-sm text-gray-700 space-y-1">
                    <li>Lun a Vie: 09:00 – 19:00</li>
                    <li>Sáb: 09:00 – 13:00</li>
                    <li>Domingo y festivos: Cerrado</li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white">
                  <h3 className="font-semibold">Medios de pago</h3>
                  <p className="mt-2 text-sm text-gray-700">Crédito/Débito · Transferencia · Efectivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Dra. Cristina Urrutia. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#inicio" className="hover:opacity-80">Inicio</a>
            <a href="#privacidad" className="hover:opacity-80">Privacidad</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs" style={{ borderColor: COLORS.blue, color: COLORS.blue }}>
      {text}
    </span>
  );
}

function MotionCard({
  title, desc, bullets, delay = 0,
}: { title: string; desc: string; bullets: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl p-6 ring-1 ring-gray-200 bg-white shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold text-lg" style={{ color: COLORS.ink }}>{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc pl-4">
        {bullets.map((b, i) => (<li key={i}>{b}</li>))}
      </ul>
    </motion.div>
  );
}

function Feature({ icon, title, subtitle }: { icon: string; title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl p-4 ring-1 ring-gray-200 bg-white shadow-sm">
      <div className="text-2xl" aria-hidden>{icon}</div>
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

const cards = [
  {
    title: "Endodoncia (Tratamiento de Conducto)",
    desc: "Extirpación de pulpa y sellado biocompatible para conservar tu pieza dental con el máximo confort y durabilidad.",
    bullets: ["Diagnóstico con imágenes", "Anestesia asistida", "Sellado termoplástico"],
  },
  {
    title: "Extracción Dental de Baja Invasión",
    desc: "Avulsión controlada con instrumental de última generación para un postoperatorio más cómodo.",
    bullets: ["Evaluación previa completa", "Cirugía mínimamente invasiva", "Indicaciones claras de cuidado"],
  },
  {
    title: "Blanqueamiento Dental Profesional",
    desc: "Reduce varios tonos con seguridad y resultados luminosos, reforzando el esmalte y tu rutina de higiene.",
    bullets: ["Técnica en consulta", "Kits supervisados", "Control de sensibilidad"],
  },
  {
    title: "Estética Orofacial",
    desc: "Armonización facial suave y natural con enfoque médico y proporciones estéticas.",
    bullets: ["Evaluación facial integral", "Plan a medida", "Resultados naturales"],
  },
  {
    title: "Urgencias Odontológicas",
    desc: "Atención oportuna para dolor agudo, fracturas o infecciones.",
    bullets: ["Respuesta rápida", "Protocolos de analgesia", "Derivación si corresponde"],
  },
  {
    title: "Videoconsulta",
    desc: "Orientación inicial y seguimiento desde casa cuando lo necesites.",
    bullets: ["Teleorientación", "Revisión de exámenes", "Planificación de visita"],
  },
];
