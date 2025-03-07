import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {message: 'Name must at least be 2 charecter'}),
  number: z.string().min(10, {message: 'Please enter a valid phone number'}),
  email: z.string().email({message: 'Please enter a valid email'})
});