import Image from 'next/image';

export function ProductPreview() {
  return <div className="product-composition" aria-label="Vistas reales de la web pública y del panel de gestión de Marques Works">
    <div className="hero-browser"><div className="browser-chrome"><span className="chrome-dots"><i /><i /><i /></span><span>Demo web · Barbería</span><span>marquesworks.com</span></div><Image src="/screenshots/barber-web.png" alt="Web pública de la demo de barbería con botón Reservar cita" width={962} height={718} priority sizes="(max-width: 680px) 100vw, (max-width: 1100px) 78vw, 950px" /></div>
    <div className="hero-panel" aria-label="Captura no interactiva del panel"><Image src="/screenshots/beauty-agenda.png" alt="Captura real del panel de gestión: agenda con las citas de hoy" width={447} height={802} sizes="(max-width: 680px) 30vw, 240px" /></div>
    <div className="product-caption"><span>01 / WEB PÚBLICA</span><span>02 / GESTIÓN DE CITAS</span></div>
  </div>;
}
