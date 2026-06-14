// Default Next.js server component.
// - NEXT_PUBLIC_ENV_NAME: from wrangler.jsonc `vars` (build-time inlined, public)
// - SECRET_VALUE: from `wrangler secret bulk` pushed by GH Action at deploy (runtime)
import { getCloudflareContext } from "@opennextjs/cloudflare";

// Opt out of static prerender so we can read runtime env on each request.
export const dynamic = "force-dynamic";

export default async function Page() {
  const envName = process.env.NEXT_PUBLIC_ENV_NAME ?? "unknown";

  const { env } = await getCloudflareContext({ async: true });
  const secret = (env.SECRET_VALUE as string | undefined) ?? "(no secret)";

  return (
    <main>
      <h1 style={{ fontSize: 24, margin: 0 }}>Env: {envName}</h1>
      <p style={{ marginTop: 16, fontSize: 18 }}>Secret: {secret}</p>
    </main>
  );
}
