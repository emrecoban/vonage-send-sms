export async function POST(request) {
  const res = await request.json();
  console.log("Inbound SMS: ", JSON.stringify(res, null, 2));

  // Then add the inbound SMS to your database or something else,
  // Also you can see the inbound SMS on the logs.

  return new Response("ok", {
    status: 200,
  });
}
