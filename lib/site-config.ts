const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '34603976985';
export const siteConfig = {
  name: 'Marques Works',
  url: 'https://marquesworks.com',
  title: 'Marques Works | Web, reservas y gestión para tu negocio',
  description: 'Marques Works reúne web, reservas online y gestión de citas para negocios de servicios. Tus clientes reservan y tú mantienes tu agenda organizada.',
  demoBeautyUrl: process.env.NEXT_PUBLIC_DEMO_BEAUTY_URL?.trim() || 'https://mw-demo-six.vercel.app/demo/belleza',
  demoBarberUrl: process.env.NEXT_PUBLIC_DEMO_BARBER_URL?.trim() || 'https://mw-demo-six.vercel.app/demo/barberia',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'marquesworks.mw@gmail.com',
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
} as const;
