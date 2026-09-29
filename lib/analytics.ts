export type AnalyticsEvent = 'view_demo' | 'click_demo_beauty' | 'click_demo_barber' | 'click_whatsapp' | 'click_contact';
export function track(event: AnalyticsEvent) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('marquesworks:analytics', { detail: { event } }));
  // Conecta aquí tu proveedor cuando esté configurado.
}
