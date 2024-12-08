import { z } from 'zod';

export const Gender = z.enum(['M', 'F', 'O']);
export const PersonSchema = z.object({
  id: z.number().int().nonnegative().optional(), // id should be an integer and non-negative
  firstname: z.string().min(1), // Required string, must have at least 1 character
  lastname: z.string().min(1), // Required string, must have at least 1 character
  middlename: z.string().optional().nullable(), // Optional string
  dateofbirth: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }), // Valid date string
  phonenumber: z.string().min(1), // Required string for phone number
  email: z.string().email(), // Email must be a valid email address
  address: z.string().min(1), // Required string for address
  gender: Gender // Required string for gender
});
export type Person = z.infer<typeof PersonSchema>;

export const PatientSchema = z.object({
  id: z.number().int().nonnegative().optional(), // id should be an integer and non-negative
  person: PersonSchema, // personid references the Person schema
  insurancepolicynumber: z.string().min(1).optional() // Optional insurance policy number
});
export type Patient = z.infer<typeof PatientSchema>;

export const DeviceStatus = z.enum(['Работает', 'Неисправно', 'В обслуживании']);
export const DeviceSchema = z.object({
  id: z.number().int().nonnegative().optional(), // id should be an integer and non-negative
  devicesn: z.string().min(1), // Required string, must have at least 1 character
  location: z.string().min(1), // Required string, must have at least 1 character
  status: DeviceStatus // Required string for gender
});
export type Device = z.infer<typeof DeviceSchema>;
