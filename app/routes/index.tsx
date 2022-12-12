import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/server/auth.server";

export let loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
  return user;
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome!</h1>
      <p><a href="/login">Please log in</a></p>
    </div>
  );
}