import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = { title: 'Privacidad', alternates: { canonical: '/privacidad' }, robots: { index: false, follow: false } };
export default function Page() { return <LegalPage title="Privacidad" text="Esta política debe completarse antes de recoger datos personales: responsable real, finalidades, base jurídica, conservación, destinatarios, derechos y canal de contacto. La landing no almacena formularios en un servidor; el contacto por correo abre la aplicación de correo del visitante." />; }
