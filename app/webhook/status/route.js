import { headers } from "next/headers";

export async function POST(request) {
  const headersList = headers();
  const authorization = headersList.get("Authorization");

  console.log("Signature secret: ", authorization);

  const res = await request.json();
  console.log("SMS Status: ", JSON.stringify(res, null, 2));

  // Then add the message status to your database or something else,
  // Also you can see the message status on the logs.

  return new Response("ok", {
    status: 200,
  });
}
