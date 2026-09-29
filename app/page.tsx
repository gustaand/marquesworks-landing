import { Header, Footer } from '@/components/SiteChrome';
import { Hero, Connected, Benefits, DemoSection, Contact } from '@/components/Sections';
import { RevealObserver } from '@/components/RevealObserver';
import { siteConfig } from '@/lib/site-config';

const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/marques-works-logo.png`, description: siteConfig.description };
export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }} /><a className="skip-link" href="#contenido">Saltar al contenido</a><RevealObserver /><Header /><main id="contenido"><Hero /><Connected /><Benefits /><DemoSection /><Contact /></main><Footer /></>;
}
