import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, 'Name must at least be 2 charecter'),
  number: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email')
});