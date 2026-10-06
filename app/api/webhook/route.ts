import db from '@/utils/db'

export async function POST(req: Request) {
  const payload = await req.json();
  const { requestId, status } = payload;

  await db.order.update({
  where: { qiRequsetId: requestId },
  data: { status: 'PAID' },
});
  return Response.json({ received: true });
}