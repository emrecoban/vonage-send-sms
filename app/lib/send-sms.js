"use server";

import { revalidatePath } from "next/cache";
import { Vonage } from "@vonage/server-sdk";
import { z } from "zod";

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

const from = process.env.VONAGE_VIRTUAL_NUMBER;

const schema = z.object({
  number: z
    .string()
    .regex(new RegExp(/^\d{10,}$|^(\d{1,4}-)?\d{10,}$/), "Invalid Number!"),
  text: z.string().min(1, "Type something, please!").max(140, "Too long text!"),
});

export async function sendSMS(prevState, formData) {
  try {
    const data = schema.parse({
      number: formData.get("number"),
      text: formData.get("text"),
    });

    /*     const vonage_response = await vonage.sms.send({
      to: data.number,
      from,
      text: data.text,
    }); */

    revalidatePath("/");
    return {
      response:
        vonage_response.messages[0].status === "0"
          ? `🎉 Message sent successfully.`
          : `There was an error sending the SMS. ${
              // prettier-ignore
              vonage_response.messages[0].error-text
            }`,
    };
  } catch (e) {
    return {
      response: `There was an error sending the SMS. The error message: ${e.message}`,
    };
  }
}
