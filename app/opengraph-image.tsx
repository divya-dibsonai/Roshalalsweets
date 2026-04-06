import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Roshan Lal Ji Sweets & Restaurant — Authentic Indian Sweets Since Independence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: 'linear-gradient(135deg, #6B0F0F 0%, #8B1A1A 50%, #A0200F 100%)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'serif',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', right: '-60px', top: '50%',
          transform: 'translateY(-50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '380px', height: '380px', borderRadius: '50%',
            background: 'rgba(201,146,10,0.18)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '180px',
          }}>
            🍬
          </div>
        </div>

        {/* Dot pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '70px 80px',
          maxWidth: '680px',
        }}>
          {/* Badge */}
          <div style={{
            display: 'flex', alignItems: 'center',
            background: '#C9920A', color: '#1A0A00',
            padding: '8px 20px', borderRadius: '50px',
            fontSize: '14px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase',
            marginBottom: '28px', width: 'fit-content',
          }}>
            🇮🇳 &nbsp; EST. BEFORE INDEPENDENCE
          </div>

          {/* Logo block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
            <div style={{
              width: '64px', height: '64px', background: '#f5d77e',
              borderRadius: '14px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '26px', fontWeight: 900,
              color: '#8B1A1A',
            }}>
              RLJ
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#FFF8EE', lineHeight: 1.1 }}>Roshan Lal Ji</span>
              <span style={{ fontSize: '12px', color: '#f5d77e', letterSpacing: '2px', textTransform: 'uppercase' }}>Sweets & Restaurant</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: '64px', fontWeight: 800,
            color: '#FFF8EE', lineHeight: 1.05, marginBottom: '20px',
          }}>
            All Things<br />
            <span style={{ color: '#f5d77e', fontStyle: 'italic' }}>Sweet &amp; Pure</span>
          </div>

          {/* Subtitle */}
          <div style={{
            fontSize: '18px', color: 'rgba(255,248,238,0.75)',
            lineHeight: 1.5, marginBottom: '32px', maxWidth: '520px',
          }}>
            Authentic Indian sweets made with pure desi ghee — Son Papdi, Kaju Katli, Mawa Barfi & more.
          </div>

          {/* Address pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '50px', padding: '10px 20px',
            width: 'fit-content',
          }}>
            <span style={{ fontSize: '16px' }}>📍</span>
            <span style={{ fontSize: '14px', color: 'rgba(255,248,238,0.85)', fontWeight: 500 }}>
              Nadrai Gate, Kasganj, Uttar Pradesh
            </span>
          </div>
        </div>

        {/* Stars */}
        <div style={{ position: 'absolute', top: '80px', left: '680px', fontSize: '28px', color: '#C9920A', opacity: 0.7 }}>✦</div>
        <div style={{ position: 'absolute', top: '180px', left: '730px', fontSize: '16px', color: '#C9920A', opacity: 0.5 }}>✦</div>
        <div style={{ position: 'absolute', bottom: '100px', left: '660px', fontSize: '22px', color: '#C9920A', opacity: 0.6 }}>✦</div>
      </div>
    ),
    { ...size }
  );
}
