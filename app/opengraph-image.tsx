import { ImageResponse } from 'next/og';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#07111f', padding: 70, color: '#f7f8fa', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 27, fontWeight: 700, letterSpacing: 2 }}><div style={{ width: 24, height: 24, background: '#cbb898', borderRadius: 3 }} />MARQUES WORKS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><div style={{ display: 'flex', flexDirection: 'column', fontSize: 77, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05 }}><span>Tu negocio, más fácil</span><span>de gestionar.</span></div><div style={{ display: 'flex', fontSize: 30, color: '#b4c0ca' }}>Web, reservas y gestión en un mismo lugar.</div></div>
      <div style={{ display: 'flex', fontSize: 20, color: '#cbb898' }}>marquesworks.com</div>
    </div>, size,
  );
}
