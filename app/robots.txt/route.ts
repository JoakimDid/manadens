import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://${site.domain}/sitemap.xml`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
