import Mux from '@mux/mux-node';

export const dynamic = 'force-dynamic';

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function GET() {
  const { data: assets } = await mux.video.assets.list({ limit: 100 });

  const grouped: Record<string, { id: string; playbackId: string }[]> = {};
  for (const asset of assets) {
    if (asset.status !== 'ready') continue;
    const category = asset.meta?.creator_id || 'Uncategorized';
    const playbackId = asset.playback_ids?.[0]?.id;
    if (!playbackId) continue;
    grouped[category] ??= [];
    grouped[category].push({ id: asset.id, playbackId });
  }
  return Response.json(grouped);
}
