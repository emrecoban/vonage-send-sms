export async function POST(request) {
  const res = await request.json();
  console.log("Gelen yanıt: ", JSON.stringify(res, null, 2));
  return new Response("ok", {
    status: 200,
  });
}
