// Server component — runs on Cloudflare Worker at request time.
// Reads bindings from the Cloudflare runtime via OpenNext:
//   - env.APP_NAME      : from wrangler.jsonc `vars` (build-time, plaintext)
//   - env.SECRET_VALUE  : from `wrangler secret bulk` pushed by GH Action (runtime, encrypted at rest in CF)
import { getCloudflareContext } from "@opennextjs/cloudflare";

export default async function Page() {
  const { env } = await getCloudflareContext();

  // APP_NAME is set in wrangler.jsonc vars, differs per worker (dev/prod)
  // SECRET_VALUE is pushed at deploy time from the chosen GH Environment
  const appName = (env.APP_NAME as string) ?? "unknown";
  const secret = (env.SECRET_VALUE as string) ?? "(no secret)";

  return (
    <main>
      <h1 style={{ fontSize: 18, margin: 0, color: "#7ee787" }}>
        Secrets Demo
      </h1>
      <p style={{ margin: "24px 0 8px", color: "#9ca3af", fontSize: 12 }}>
        App
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 20,
          color: "#e6e6e6",
        }}
      >
        {appName}
      </p>
      <p style={{ margin: "24px 0 8px", color: "#9ca3af", fontSize: 12 }}>
        Secret (from GH env: dev | prod)
      </p>
      <p
        style={{
          margin: 0,
          fontSize: 20,
          color: "#ffd479",
        }}
      >
        {secret}
      </p>
    </main>
  );
}
