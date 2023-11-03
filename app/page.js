import { SendForm } from "./send-form";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl my-3 p-3 border border-slate-300 shadow rounded-lg divide-y divide-solid">
      <header className="flex flex-row p-3 items-center justify-between">
        <img src="/vonage.svg" alt="Vonage" />
        <h2 className="text-lg font-medium">Send SMS with the Vonage APIs</h2>
      </header>
      <section className="pt-3">
        <SendForm />
      </section>
    </main>
  );
}
