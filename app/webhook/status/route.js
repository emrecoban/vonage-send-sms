import auth from "basic-auth";
import { headers } from "next/headers";

export async function POST(request) {
  const headersList = headers();
  const authorization = headersList.get("Authorization");
  const { name, pass } = auth.parse(authorization);
  console.log("Signature secret: ", name, pass);

  if (
    name === process.env.BASIC_AUTH_NAME &&
    pass === process.env.BASIC_AUTH_PASS
  ) {
    const res = await request.json();
    console.log("SMS Status: ", JSON.stringify(res, null, 2));

    // Then add the message status to your database or something else,
    // Also you can see the message status on the logs.

    return new Response("ok", {
      status: 200,
    });
  } else {
    return new Response("No Authorization", {
      status: 401,
    });
  }
}
