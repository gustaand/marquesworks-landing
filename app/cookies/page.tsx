import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = { title: 'Cookies', alternates: { canonical: '/cookies' }, robots: { index: false, follow: false } };
export default function Page() { return <LegalPage title="Cookies" text="Esta versión no instala herramientas de analítica ni cookies de seguimiento. Si más adelante se activan servicios que utilicen cookies, habrá que actualizar esta política y configurar el consentimiento que corresponda antes de publicarlos." />; }
