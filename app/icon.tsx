import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32, height: 32,
          background: '#8B1A1A',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 900,
          color: '#f5d77e',
          fontFamily: 'serif',
          letterSpacing: '-0.5px',
        }}
      >
        RLJ
      </div>
    ),
    { ...size }
  );
}
