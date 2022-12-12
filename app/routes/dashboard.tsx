import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Form } from '@remix-run/react'
import { authenticator } from "~/server/auth.server";

export let loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/",
  });

  return { user };
};

export default function Dashboard() {
  const { user } = useLoaderData();

  return (
    <div>
      <h1>Welcome {user.displayName}!</h1>
      <p>This is a protected page</p>
      <Form action="/logout" method="post">
        <button>Logout</button>
      </Form>
    </div>
  );
};