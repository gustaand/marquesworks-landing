import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return { name: 'Marques Works', short_name: 'Marques Works', description: 'Web, reservas y gestión para negocios de servicios.', start_url: '/', display: 'browser', background_color: '#f7f9fa', theme_color: '#f7f9fa', icons: [{ src: '/marques-works-mark.jpg', sizes: '640x640', type: 'image/jpeg' }] };
}
