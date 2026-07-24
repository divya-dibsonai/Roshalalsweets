import Mux from '@mux/mux-node';

export const dynamic = 'force-dynamic';

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function GET() {
  const { data: assets } = await mux.video.assets.list({ limit: 100 });

  const result: Record<string, string | null> = {
    journey: null,
    domains: null,
  };

  for (const asset of assets) {
    if (asset.status !== 'ready') continue;
    const category = asset.meta?.creator_id;
    const playbackId = asset.playback_ids?.[0]?.id;
    if (!playbackId) continue;

    if (category === 'About Us - Journey') result.journey = playbackId;
    if (category === 'About Us - Domains') result.domains = playbackId;
  }

  return Response.json(result);
}
