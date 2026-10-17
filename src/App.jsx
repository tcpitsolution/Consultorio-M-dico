import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Activity, ArrowDownRight, ArrowRight, CalendarDays, Check, ChevronDown, Clock3,
  HeartHandshake, MapPin, Menu, MessageCircle, ShieldCheck, Star, Stethoscope,
  UserRound, X, Facebook, Instagram, Linkedin, ExternalLink, Info, Send
} from 'lucide-react'
import { clinic, whatsappUrl } from './config'

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const services = [
  { icon: Stethoscope, title: 'Consulta médica', text: 'Información sobre consultas y cómo contactar con el consultorio.' },
  { icon: Activity, title: 'Evaluación de salud', text: 'Consulte directamente con el equipo qué evaluaciones están disponibles.' },
  { icon: HeartHandshake, title: 'Orientación médica', text: 'Un primer punto de contacto para resolver dudas sobre la atención.' },
  { icon: UserRound, title: 'Seguimiento del paciente', text: 'Pregunte al consultorio por las opciones de seguimiento disponibles.' },
  { icon: MessageCircle, title: 'Resolución de dudas', text: 'Canalice sus preguntas y solicite información de forma directa.' },
  { icon: CalendarDays, title: 'Información de exámenes', text: 'Confirme con el consultorio la información relacionada con exámenes.' }
]
const reviews = [
  { name: 'Bladimir Vega', age: 'Hace aproximadamente 5 meses', text: 'La atención personalizada y amable me sorprendió; incluso me entregaron los resultados de mis exámenes allí mismo. Muy satisfecho con el servicio de primera.', note: 'Resumen traducido de una reseña de Google.' },
  { name: 'Mari Paz', age: 'Hace aproximadamente 3 años', text: 'Una muy buena experiencia, especialmente por la paciencia y el profesionalismo del Dr. Pascuales.', note: 'Resumen traducido de una reseña de Google.' },
  { name: 'Axel Angulo', age: 'Hace aproximadamente 9 años', text: 'Un médico con mucha experiencia, muy recomendable.', note: 'Resumen traducido de una reseña de Google.' }
]

function Logo() {
  return <a className="brand" href="#inicio" aria-label="Consultorio Médico, inicio">
    <span className="brand-mark"><span className="brand-cross">+</span><span className="brand-ring" /></span>
    <span className="brand-copy"><strong>Consultorio Médico</strong><small>Dr. Álvaro Pascuales</small></span>
  </a>
}
function WhatsAppLink({ children, className = '', message }) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">{children}</a>
}
function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Inicio', '#inicio'], ['Sobre el doctor', '#doctor'], ['Servicios', '#servicios'], ['Opiniones', '#opiniones'], ['Contacto', '#contacto']]
  return <header className="header">
    <div className="nav-wrap">
      <Logo />
      <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <WhatsAppLink className="nav-cta"><MessageCircle size={16} /> Contactar por WhatsApp</WhatsAppLink>
      </nav>
    </div>
  </header>
}
function Hero() {
  return <section className="hero section-shell" id="inicio">
    <div className="hero-copy">
      <motion.div initial="hidden" animate="show" variants={reveal} transition={{ duration: .65 }} className="eyebrow"><span className="eyebrow-line" /> Atención médica personalizada</motion.div>
      <motion.h1 initial="hidden" animate="show" variants={reveal} transition={{ duration: .75, delay: .08 }}>Tu salud merece una atención <em>cercana y profesional.</em></motion.h1>
      <motion.p className="hero-lead" initial="hidden" animate="show" variants={reveal} transition={{ duration: .75, delay: .16 }}>Un espacio dedicado a escucharte, orientarte y acompañarte en el cuidado de tu salud.</motion.p>
      <motion.div className="hero-actions" initial="hidden" animate="show" variants={reveal} transition={{ duration: .75, delay: .24 }}>
        <WhatsAppLink className="button button-primary"><MessageCircle size={18} /> Contactar al consultorio <ArrowRight size={17} /></WhatsAppLink>
        <a className="button button-quiet" href="#doctor">Conocer al doctor <ArrowDownRight size={17} /></a>
      </motion.div>
      <motion.div className="hero-rating" initial="hidden" animate="show" variants={reveal} transition={{ duration: .75, delay: .32 }}>
        <div className="rating-stars" aria-label="5 de 5 estrellas">{[1,2,3,4,5].map(n => <Star key={n} size={15} fill="currentColor" />)}</div>
        <strong>5.0/5 en Google</strong><span className="rating-divider" /> <span>5 reseñas</span>
      </motion.div>
    </div>
    <div className="hero-visual">
      <div className="hero-image-frame">
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=85" alt="Profesional médico en un entorno de consulta" fetchPriority="high" />
        <div className="image-shade" />
        <div className="image-caption"><span className="caption-icon"><ShieldCheck size={19} /></span><span><strong>Atención con confianza</strong><small>Un trato cercano y profesional</small></span></div>
      </div>
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="floating-note"><span className="floating-dot" /><span><strong>Estamos para orientarte</strong><small>Contacta directamente al consultorio</small></span></div>
      <div className="visual-index">JAMA <span>·</span> ECUADOR</div>
    </div>
    <a href="#confianza" className="scroll-cue" aria-label="Desplazarse hacia abajo"><span /> Desliza para descubrir</a>
  </section>
}
function TrustStrip() {
  const items = [
    { icon: Star, title: '5.0 / 5', sub: 'Valoración en Google' },
    { icon: MessageCircle, title: '5 reseñas', sub: 'Opiniones publicadas' },
    { icon: HeartHandshake, title: 'Trato cercano', sub: 'Atención personalizada' },
    { icon: MapPin, title: 'Jama, Ecuador', sub: 'Ubicación del consultorio' }
  ]
  return <section className="trust-strip" id="confianza"><div className="trust-inner">{items.map(({icon: Icon,title,sub}) => <div className="trust-item" key={title}><span className="trust-icon"><Icon size={19} /></span><span><strong>{title}</strong><small>{sub}</small></span></div>)}</div></section>
}
function SectionHeading({ kicker, title, text, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div className="eyebrow"><span className="eyebrow-line" />{kicker}</div><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
function About() {
  return <section className="about section-shell section-pad" id="doctor">
    <motion.div className="about-visual" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={reveal} transition={{ duration: .7 }}>
      <div className="about-photo"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85" alt="Consulta médica en un ambiente luminoso" loading="lazy" /></div>
      <div className="about-seal"><span>ATENCIÓN</span><strong>con<br />humanidad</strong><span className="seal-star">✳</span></div>
      <div className="about-vertical">CUIDADO · CONFIANZA · CERCANÍA</div>
    </motion.div>
    <motion.div className="about-copy" initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={reveal} transition={{ duration: .7, delay: .1 }}>
      <SectionHeading kicker="Conoce el consultorio" title="Una atención médica que comienza escuchándote." />
      <p>En el Consultorio Médico del Dr. Álvaro Pascuales, la atención comienza con escuchar a cada paciente, comprender sus inquietudes y ofrecer una experiencia cercana y profesional.</p>
      <p className="muted-paragraph">Para conocer los servicios disponibles, horarios y opciones de atención, te invitamos a comunicarte directamente con el consultorio.</p>
      <WhatsAppLink className="text-link">Contactar al consultorio <ArrowRight size={17} /></WhatsAppLink>
      <div className="signature-line"><span className="signature-icon"><Stethoscope size={20} /></span><span><strong>Dr. Álvaro Pascuales</strong><small>Consultorio médico · Jama, Ecuador</small></span></div>
    </motion.div>
  </section>
}
function Services() {
  return <section className="services section-pad" id="servicios"><div className="section-shell">
    <SectionHeading kicker="Cómo podemos orientarte" title="Información clara, atención cercana." text="Estas son categorías informativas propuestas. Confirma directamente con el consultorio cuáles servicios se encuentran disponibles." centered />
    <div className="services-grid">{services.map(({icon: Icon,title,text},i) => <motion.article className="service-card" key={title} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={reveal} transition={{ duration: .45, delay: i * .07 }}>
      <div className="service-top"><span className="service-icon"><Icon size={23} strokeWidth={1.6} /></span><span className="service-number">0{i+1}</span></div>
      <h3>{title}</h3><p>{text}</p><WhatsAppLink className="service-link" message={`Hola, quisiera información sobre ${title.toLowerCase()} en el consultorio del Dr. Álvaro Pascuales.`}>Consultar información <ArrowRight size={15} /></WhatsAppLink>
    </motion.article>)}</div>
    <p className="services-disclaimer"><Info size={15} /> Categorías sugeridas pendientes de confirmación por parte del consultorio.</p>
  </div></section>
}
function Reviews() {
  return <section className="reviews section-pad" id="opiniones"><div className="section-shell">
    <div className="reviews-heading"><SectionHeading kicker="Experiencias compartidas" title="La confianza de nuestros pacientes." text="Una selección de reseñas compartidas públicamente en Google, presentada en forma de resumen traducido." />
      <div className="aggregate-rating"><strong>5.0</strong><div><div className="rating-stars">{[1,2,3,4,5].map(n=><Star key={n} size={16} fill="currentColor" />)}</div><span>Basado en 5 reseñas de Google</span></div></div>
    </div>
    <div className="reviews-grid">{reviews.map((r,i)=><motion.article className="review-card" key={r.name} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={reveal} transition={{ duration: .5, delay: i*.1 }}>
      <div className="quote-mark">“</div><div className="rating-stars">{[1,2,3,4,5].map(n=><Star key={n} size={14} fill="currentColor" />)}</div>
      <blockquote>{r.text}</blockquote><p className="review-note">{r.note}</p><div className="review-author"><span className="author-avatar">{r.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><span><strong>{r.name}</strong><small>{r.age}</small></span><span className="google-mark">G</span></div>
    </motion.article>)}</div>
    <div className="reviews-footnote"><Info size={16} /> Se muestran 3 reseñas seleccionadas; la valoración agregada corresponde a 5 reseñas en total.</div>
    <a className="button button-outline" href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">Ver ubicación en Google Maps <ExternalLink size={16} /></a>
  </div></section>
}
function Contact() {
  return <section className="contact section-pad" id="contacto"><div className="section-shell contact-layout">
    <div className="contact-copy"><SectionHeading kicker="Estamos cerca de ti" title="Hablemos sobre cómo podemos orientarte." text="Comunícate directamente con el consultorio para confirmar servicios, horarios y disponibilidad." />
      <WhatsAppLink className="button button-light"><MessageCircle size={18} /> Contactar por WhatsApp <ArrowRight size={17} /></WhatsAppLink>
      <div className="contact-details">
        <div className="contact-detail"><span><MapPin size={19} /></span><div><small>Dirección</small><strong>{clinic.address}</strong><a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowRight size={13} /></a></div></div>
        <div className="contact-detail"><span><MessageCircle size={19} /></span><div><small>Teléfono / WhatsApp</small><strong>{clinic.phoneDisplay}</strong><WhatsAppLink>Enviar un mensaje <ArrowRight size={13} /></WhatsAppLink></div></div>
        <div className="contact-detail"><span><Clock3 size={19} /></span><div><small>Horario publicado</small><strong>Abierto 24 horas*</strong><small className="hours-note">*Horario del listado, pendiente de confirmar.</small></div></div>
      </div>
    </div>
    <div className="map-card"><div className="map-topline"><span className="map-pin"><MapPin size={18} /></span><div><strong>Encuéntranos en Jama</strong><small>Manabí, Ecuador</small></div><span className="map-label">UBICACIÓN</span></div>
      <iframe title="Mapa de referencia de Jama, Ecuador" src="https://maps.google.com/maps?q=Jama%2C%20Ecuador&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="map-bottom"><span><MapPin size={16} /> {clinic.address}</span><a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer">Abrir mapa <ExternalLink size={15} /></a></div>
      <p className="map-disclaimer">Mapa de referencia de la localidad; confirma la ubicación exacta con el consultorio antes de desplazarte.</p>
    </div>
  </div></section>
}
function Footer() {
  const socials = [{label:'Facebook',Icon:Facebook,url:clinic.social.facebook},{label:'Instagram',Icon:Instagram,url:clinic.social.instagram},{label:'LinkedIn',Icon:Linkedin,url:clinic.social.linkedin}]
  return <footer className="footer"><div className="footer-main section-shell"><div className="footer-brand-col"><Logo /><p>Atención cercana, confianza y compromiso con el cuidado de tu salud.</p><WhatsAppLink className="footer-whatsapp"><MessageCircle size={17} /> Escríbenos por WhatsApp <ArrowRight size={15} /></WhatsAppLink></div>
    <div className="footer-links"><h4>Explorar</h4><a href="#inicio">Inicio</a><a href="#doctor">Sobre el doctor</a><a href="#servicios">Servicios propuestos</a><a href="#opiniones">Opiniones</a><a href="#contacto">Contacto</a></div>
    <div className="footer-links"><h4>Contacto</h4><span><MapPin size={15} /> {clinic.address}</span><span><MessageCircle size={15} /> {clinic.phoneDisplay}</span><a href={clinic.mapsUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={14} /> Ver en Google Maps</a><div className="social-row">{socials.filter(s=>s.url).map(({label,Icon,url})=><a key={label} href={url} aria-label={label} target="_blank" rel="noopener noreferrer"><Icon size={17}/></a>)}<WhatsAppLink aria-label="WhatsApp"><MessageCircle size={17}/></WhatsAppLink></div></div>
    <div className="footer-links"><h4>Información</h4><a href="#privacidad" onClick={e=>{e.preventDefault();document.getElementById('privacy-modal')?.showModal()}}>Privacidad</a><a href="#aviso" onClick={e=>{e.preventDefault();document.getElementById('disclaimer-modal')?.showModal()}}>Aviso médico</a><small>La información de este sitio es orientativa y no sustituye una consulta con un profesional de salud.</small></div>
  </div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Consultorio Médico del Dr. Álvaro Pascuales</span><span>Diseñado y desarrollado por <a href="https://www.tcpitsolution.in/" target="_blank" rel="noopener noreferrer">TCP IT Solution <ExternalLink size={12}/></a></span></div>
  <dialog className="info-modal" id="privacy-modal"><button className="modal-close" onClick={()=>document.getElementById('privacy-modal')?.close()} aria-label="Cerrar"><X/></button><h3>Política de privacidad</h3><p>Esta sección debe completarse con la política de privacidad aprobada por el consultorio antes de publicar el sitio. Evita enviar información médica sensible por formularios no verificados.</p></dialog>
  <dialog className="info-modal" id="disclaimer-modal"><button className="modal-close" onClick={()=>document.getElementById('disclaimer-modal')?.close()} aria-label="Cerrar"><X/></button><h3>Aviso médico</h3><p>El contenido de este sitio es informativo y no constituye diagnóstico, tratamiento ni consejo médico personalizado. En caso de emergencia, contacta con los servicios de emergencia locales. Para confirmar servicios y horarios, comunícate directamente con el consultorio.</p></dialog>
  </footer>
}
function ChatWidget() {
  const [open,setOpen] = useState(false)
  const [question,setQuestion] = useState('')
  const [answer,setAnswer] = useState('')
  const reply = (q) => {
    const s=q.toLowerCase()
    if(s.includes('horario') || s.includes('ubicación') || s.includes('direccion') || s.includes('dirección')) return 'La dirección publicada es Av. Jama, Jama, Ecuador. El listado indica atención 24 horas, pero ese horario está pendiente de confirmación. Te recomendamos confirmar directamente por WhatsApp.'
    if(s.includes('whatsapp') || s.includes('contact')) return 'Puedes contactar directamente al consultorio por WhatsApp para consultar servicios, horarios y disponibilidad.'
    if(s.includes('servicio') || s.includes('consulta') || s.includes('examen')) return 'La lista de servicios está pendiente de confirmación por parte del consultorio. Escríbenos por WhatsApp para recibir información verificada.'
    if(s.includes('hola') || s.includes('buenas')) return '¡Hola! Bienvenido al consultorio del Dr. Álvaro Pascuales. Puedo compartir información general del sitio o ayudarte a contactar al consultorio.'
    return 'No tengo información verificada para responder eso con seguridad. Por favor, consulta directamente con el consultorio por WhatsApp.'
  }
  const quick = [{label:'Información del consultorio',q:'Información del consultorio'},{label:'Horarios y ubicación',q:'Horarios y ubicación'},{label:'Servicios disponibles',q:'Servicios disponibles'}]
  return <><button className="chat-launcher" onClick={()=>setOpen(!open)} aria-label={open?'Cerrar asistente virtual':'Abrir asistente virtual'} aria-expanded={open}>{open?<X size={23}/>:<MessageCircle size={23}/>} {!open && <span>Asistente Virtual</span>}</button>
    <AnimatePresence>{open && <motion.div className="chat-panel" initial={{opacity:0,y:16,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12,scale:.98}} transition={{duration:.2}} role="dialog" aria-label="Asistente Virtual">
      <div className="chat-head"><span className="chat-avatar"><Stethoscope size={19}/></span><div><strong>Asistente Virtual</strong><small><span className="online-dot"/> Información general</small></div><button onClick={()=>setOpen(false)} aria-label="Cerrar chat"><X size={18}/></button></div>
      <div className="chat-body"><div className="chat-message">¡Hola! Bienvenido al consultorio del Dr. Álvaro Pascuales. ¿En qué podemos ayudarte?</div>
        <div className="quick-actions">{quick.map(x=><button key={x.q} onClick={()=>{setQuestion(x.q);setAnswer(reply(x.q))}}>{x.label}</button>)}</div>
        {answer && <div className="chat-message answer">{answer}</div>}
        <form className="chat-form" onSubmit={e=>{e.preventDefault();if(question.trim())setAnswer(reply(question));}}><input value={question} onChange={e=>setQuestion(e.target.value)} aria-label="Escribe tu pregunta" placeholder="Escribe tu pregunta..." /><button aria-label="Enviar pregunta" type="submit"><Send size={17}/></button></form>
        <p className="chat-disclaimer">Asistente informativo basado en respuestas predefinidas; no ofrece diagnósticos ni sustituye atención médica.</p>
        <WhatsAppLink className="chat-wa"><MessageCircle size={15}/> Contactar por WhatsApp</WhatsAppLink>
      </div>
    </motion.div>}</AnimatePresence></>
}
function FloatingWhatsApp() {
  return <WhatsAppLink className="floating-whatsapp" aria-label="Contactar por WhatsApp"><MessageCircle size={23}/><span>WhatsApp</span></WhatsAppLink>
}
export default function App() {
  const reduced = useReducedMotion()
  return <><Header/><main><Hero/><TrustStrip/><About/><Services/><Reviews/><Contact/></main><Footer/><FloatingWhatsApp/><ChatWidget/><style>{reduced ? '*{scroll-behavior:auto!important;animation-duration:0.01ms!important;transition-duration:0.01ms!important}' : ''}</style></>
}