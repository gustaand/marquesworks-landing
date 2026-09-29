import Image from 'next/image';
import { siteConfig } from '@/lib/site-config';
import { ProductPreview } from './ProductPreview';
import { TrackLink } from './SiteChrome';

export function Hero() {
  return <section className="hero section" id="plataforma"><div className="container"><div className="hero-intro"><p className="eyebrow hero-enter delay-1">MARQUES WORKS <span className="eyebrow-rule" /></p><h1 className="hero-enter delay-2">Tu negocio, más fácil<br className="desktop-break" /> de <em>gestionar.</em></h1><div className="hero-under"><div className="hero-copy hero-enter delay-3"><p className="hero-lead">Web, reservas y gestión en un mismo lugar.</p><p className="hero-subline">Tus clientes reservan. Tú tienes todo organizado.</p></div><div className="hero-actions hero-enter delay-4"><TrackLink href="#demo" event="view_demo" className="button button-sand">Ver demo <span aria-hidden="true">↗</span></TrackLink><TrackLink href={siteConfig.whatsappUrl} event="click_whatsapp" className="button button-ghost" target="_blank" rel="noopener noreferrer">Hablar con nosotros <span aria-hidden="true">↗</span></TrackLink></div></div></div><div className="hero-product hero-enter delay-5"><ProductPreview /></div></div></section>;
}

export function Connected() {
  const steps = [
    { number: '01', name: 'WEB', title: 'Tu cliente entra.', detail: 'Encuentra tus servicios y toda la información que necesita.' },
    { number: '02', name: 'RESERVA', title: 'Elige su cita.', detail: 'Selecciona servicio, día y hora sin llamadas.' },
    { number: '03', name: 'GESTIÓN', title: 'Tú lo tienes organizado.', detail: 'La cita aparece en tu panel y en tu agenda.' },
  ];
  return <section className="connected section" id="conectado"><div className="container connected-layout"><div className="connected-intro" data-reveal><p className="eyebrow">01 / CÓMO FUNCIONA</p><h2>Todo<br /><em>conectado.</em></h2><p>Desde que el cliente descubre tu negocio hasta que la cita aparece en tu agenda.</p></div><div className="connected-steps">{steps.map((step, index) => <div className="connected-step" data-reveal style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties} key={step.number}><span className="connected-number">{step.number}</span><div><span className="step-label">{step.name}</span><h3>{step.title}</h3><p>{step.detail}</p></div><span className="step-end" aria-hidden="true">↗</span></div>)}</div></div></section>;
}

export function Benefits() {
  const benefits = ['Menos llamadas para gestionar citas.', 'Reservas disponibles incluso cuando estás cerrado.', 'Tu agenda siempre organizada.', 'Todo desde un mismo sitio.'];
  return <section className="benefits section"><div className="container benefit-layout"><div data-reveal><p className="eyebrow">02 / EN EL DÍA A DÍA</p><h2>Menos vueltas.<br /><em>Más tiempo para tu negocio.</em></h2></div><div className="benefit-list" data-reveal>{benefits.map((text, i) => <div className="benefit-line" key={text}><span>{String(i + 1).padStart(2, '0')}</span><p>{text}</p></div>)}</div></div></section>;
}

function DemoRow({ kind, image, alt, href, reverse = false }: { kind: 'BELLEZA' | 'BARBERÍA'; image: string; alt: string; href: string; reverse?: boolean }) {
  return <div className={`demo-row ${reverse ? 'reverse' : ''}`} data-reveal><div className="demo-visual"><div className="demo-browser"><div className="demo-browser-bar"><span><i /><i /><i /></span><span>Vista pública · {kind === 'BELLEZA' ? 'Belleza' : 'Barbería'}</span></div><Image src={image} alt={alt} width={kind === 'BELLEZA' ? 957 : 962} height={kind === 'BELLEZA' ? 721 : 718} loading="lazy" sizes="(max-width: 760px) 100vw, 60vw" /></div></div><div className="demo-description"><span className="demo-kicker">DEMO PÚBLICA / {kind}</span><h3>{kind === 'BELLEZA' ? 'Belleza, a tu manera.' : 'Un estilo propio.'}</h3><p>Explora la web y prueba el proceso de reserva desde el punto de vista de tus clientes.</p><TrackLink href={href} event={kind === 'BELLEZA' ? 'click_demo_beauty' : 'click_demo_barber'} className="demo-action" target="_blank" rel="noopener noreferrer">Abrir demo <span aria-hidden="true">↗</span></TrackLink></div></div>;
}
export function DemoSection() {
  return <section className="demo-section section" id="demo"><div className="container"><div className="demo-heading" data-reveal><p className="eyebrow">03 / EN ACCIÓN</p><h2>Pruébalo.</h2><p>Descubre cómo funciona Marques Works desde el punto de vista de tus clientes.</p></div>
    <DemoRow kind="BELLEZA" image="/screenshots/beauty-web.png" alt="Web pública de MW Beauty Studio con botón de reserva" href={siteConfig.demoBeautyUrl} />
    <div className="panel-gallery" data-reveal><div className="panel-gallery-copy"><span>Y DETRÁS DE CADA RESERVA</span><h3>La gestión, en tus manos.</h3><p>Una vista real del panel para organizar las citas y el día a día. Estas imágenes son solo una muestra; el panel no tiene acceso desde esta página.</p></div><div className="panel-shots" aria-label="Capturas reales del panel de gestión, no interactivas"><div className="panel-shot"><Image src="/screenshots/beauty-agenda.png" alt="Panel de belleza: resumen de citas de hoy" width={447} height={802} loading="lazy" sizes="(max-width: 760px) 38vw, 180px" /></div><div className="panel-shot"><Image src="/screenshots/barber-agenda.png" alt="Panel de barbería: agenda con reservas del día" width={450} height={798} loading="lazy" sizes="(max-width: 760px) 38vw, 180px" /></div><div className="panel-shot"><Image src="/screenshots/barber-booking.png" alt="Panel de barbería: detalle de una reserva" width={446} height={802} loading="lazy" sizes="(max-width: 760px) 38vw, 180px" /></div></div></div>
    <DemoRow kind="BARBERÍA" image="/screenshots/barber-web.png" alt="Web pública de MW BarberShop con botón Reservar cita" href={siteConfig.demoBarberUrl} reverse />
  </div></section>;
}

export function Contact() {
  return <section className="contact section" id="contacto"><div className="container contact-layout"><div data-reveal><p className="eyebrow">04 / CONTACTO</p><h2>¿Hablamos?</h2><p className="contact-lead">Cuéntanos cómo trabajas y vemos si Marques Works puede encajar en tu negocio.</p><div className="contact-actions"><TrackLink href={siteConfig.whatsappUrl} event="click_whatsapp" className="button button-sand" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp <span aria-hidden="true">↗</span></TrackLink><TrackLink href={`mailto:${siteConfig.contactEmail}`} event="click_contact" className="button button-ghost">Enviar email <span aria-hidden="true">↗</span></TrackLink></div></div><div className="contact-details" data-reveal><div><span>WHATSAPP</span><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">+34 603 97 69 85 ↗</a></div><div><span>EMAIL</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail} ↗</a></div></div></div></section>;
}
