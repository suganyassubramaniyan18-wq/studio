'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  // In a real application, you would handle the form data here,
  // e.g., send an email, save to a database, etc.
  
  // For this example, we'll just log it to the console.
  console.log('Contact form submitted:', data);

  // You can add validation and error handling here.
  if (!data.name || !data.email || !data.message) {
    return { success: false, message: 'All fields are required.' };
  }

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: 'Form submitted successfully!' };
}
