"use client";

import { sendSMS } from "@/lib/send-sms";
import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  response: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="border rounded-md hover:bg-slate-50 p-2"
    >
      {pending ? "Sending message..." : "Send"}
    </button>
  );
}

export function SendForm() {
  const [state, formAction] = useFormState(sendSMS, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-y-2">
      <label htmlFor="number">Phone number:</label>
      <input
        name="number"
        id="number"
        type="number"
        placeholder="909009009099"
        autoComplete="off"
        className="border rounded p-2"
        required
      />
      <label htmlFor="text">Message:</label>
      <textarea
        name="text"
        id="text"
        rows={4}
        cols={40}
        placeholder="Hello from Next.js App!"
        className="border rounded p-2"
        required
      />
      <SubmitButton />
      <p aria-live="polite">{state?.response}</p>
    </form>
  );
}
