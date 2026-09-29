import Link from 'next/link';
import { Brand } from './SiteChrome';
export function LegalPage({ title, text }: { title: string; text: string }) {
  return <><header className="simple-header container"><Link href="/" aria-label="Marques Works, volver al inicio"><Brand /></Link><Link href="/">Volver al inicio</Link></header><main className="legal-page"><div className="container"><p className="eyebrow">Información legal</p><h1>{title}</h1><p>{text}</p><div className="legal-note">Contenido pendiente de completar con los datos reales antes del lanzamiento público.</div></div></main></>;
}
