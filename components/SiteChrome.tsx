'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import { track, type AnalyticsEvent } from '@/lib/analytics';

export function Brand() {
  return <span className="brand"><span className="brand-mark"><Image src="/marques-works-mark.jpg" width={44} height={44} alt="" priority /></span><span className="brand-name">MARQUES <b>WORKS</b></span></span>;
}
export function TrackLink({ href, event, children, className, target, rel, label }: { href: string; event: AnalyticsEvent; children: React.ReactNode; className?: string; target?: string; rel?: string; label?: string }) {
  return <a href={href} className={className} target={target} rel={rel} aria-label={label} onClick={() => track(event)}>{children}</a>;
}
const nav = [
  { label: 'Plataforma', href: '#plataforma' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contacto', href: '#contacto' },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand-link" aria-label="Marques Works, inicio"><Brand /></Link>
    <nav className="desktop-nav" aria-label="Navegación principal">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <TrackLink href="#demo" event="view_demo" className="header-cta">Ver demo <span aria-hidden="true">↗</span></TrackLink>
    <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /></button>
  </div><nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Navegación móvil" inert={!open}>{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<TrackLink href="#demo" event="view_demo" className="mobile-demo">Ver demo ↗</TrackLink></nav></header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Link href="/" aria-label="Marques Works, inicio"><Brand /></Link><div className="footer-meta"><span>marquesworks.com</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></div><nav aria-label="Enlaces del pie"><a href="#demo">Demo</a><a href="#contacto">Contacto</a><Link href="/privacidad">Privacidad</Link><Link href="/cookies">Cookies</Link><Link href="/aviso-legal">Aviso legal</Link></nav></div></footer>;
}
