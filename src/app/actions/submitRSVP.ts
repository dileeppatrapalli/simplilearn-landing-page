"use server";

import { createRSVP } from "@/lib/airtable";

export async function submitRSVP(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || !email) {
    throw new Error("Name and Email are required");
  }

  await createRSVP(name, email);
}
