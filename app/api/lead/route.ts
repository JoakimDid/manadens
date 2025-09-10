export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { name = "", email = "", company = "" } = await req.json();
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Valid email required" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    const body = {
      type: "lead",
      source: "landing",
      name, email, company,
      timestamp: new Date().toISOString()
    };
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Bad request" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }
}
