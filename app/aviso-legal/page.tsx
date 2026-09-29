import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = { title: 'Aviso legal', alternates: { canonical: '/aviso-legal' }, robots: { index: false, follow: false } };
export default function Page() { return <LegalPage title="Aviso legal" text="Antes de publicar esta página deben incorporarse los datos identificativos reales del titular, domicilio, contacto y demás información legal aplicable. Hasta entonces no se presenta como aviso legal definitivo." />; }
