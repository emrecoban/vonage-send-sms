export async function POST(request) {
  const res = await request.json();
  console.log("SMS Status: ", JSON.stringify(res, null, 2));

  // Then add the message status to your database or something else,
  // Also you can see the message status on the logs.

  return new Response("ok", {
    status: 200,
  });
}
