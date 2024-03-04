"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  phone_no: z.string().min(1).max(10),
});

export async function buyrequest(prevState: any, formData: any) {
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_URL) throw new Error("Missing STRAPI_URL environment variable.");
  const url = `${STRAPI_URL}/api/buy-enquiries`;

  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone_no: formData.get("phone_no"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const { name, email, phone_no } = validatedFields.data;
  const review = { name, email, phone_no };
  try {
    const response: any = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data:{Name:name, Email:email, PhoneNo:phone_no }}),
      cache: "no-cache",
    });

    const data = await response.json();
    if (!response.ok && data.error)
      return { ...prevState, message: data.error.message, errors: null };
    if (response.ok && data.jwt) cookies().set("jwt", data.jwt);
  } catch (error) {
    console.log(error);
    return { error: "Server error please try again later." };
  }
  redirect("/home/courses");
}
