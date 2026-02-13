import type { Config, Context } from "@netlify/edge-functions";

const USERNAME = "student";
const PASSWORD = "Xavier2026";

export default async (request: Request, context: Context) => {
  const auth = request.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(":");
      if (user === USERNAME && pass === PASSWORD) {
        return context.next();
      }
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Student Portal"',
    },
  });
};

export const config: Config = {
  path: ["/teaching/social-ent", "/teaching/social-ent/", "/files/soc-ent/*"],
};
