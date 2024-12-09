import { z } from 'zod';

export const Gender = z.enum(['M', 'F', 'O']);
export const PersonSchema = z.object({
  id: z.number().int().nonnegative().optional(), // id should be an integer and non-negative
  firstname: z.string().min(1), // Required string, must have at least 1 character
  lastname: z.string().min(1), // Required string, must have at least 1 character
  middlename: z.string().optional().nullable(), // Optional string
  dateofbirth: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
  phonenumber: z.string().min(1), // Required string for phone number
  email: z.string().email(), // Email must be a valid email address
  address: z.string().min(1), // Required string for address
  gender: Gender // Required string for gender
});
export type Person = z.infer<typeof PersonSchema>;

export const PatientSchema = z.object({
  id: z.number().int().nonnegative().optional(),
  person: PersonSchema,
  insurancepolicynumber: z.string().min(1).optional()
});
export type Patient = z.infer<typeof PatientSchema>;

export const UserSchema = z.object({
  id: z.number().int().nonnegative().optional(),
  person: PersonSchema,
  username: z.string().min(1)
});
export type User = z.infer<typeof UserSchema>;

export const DeviceStatus = z.enum(['Работает', 'Неисправно', 'В обслуживании']);
export const DeviceSchema = z.object({
  id: z.number().int().nonnegative().optional(),
  devicesn: z.string().min(1),
  location: z.string().min(1),
  status: DeviceStatus
});
export type Device = z.infer<typeof DeviceSchema>;

export const ScheduleSchema = z.object({
  id: z.number().int().nonnegative().optional(),
  starttime: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
  endtime: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
  studyid: z.number().int().nonnegative(),
  scheduledbyuserid: z.number().int().nonnegative(),
  comments: z.string().min(1)
});
export type Schedule = z.infer<typeof ScheduleSchema>;

export const StudyStatus = z.enum(['Planned', 'Canceled', 'Successed']);
export const StudySchema = z.object({
  id: z.number().int().nonnegative().optional(),

  patientid: z.number().int().positive('Patient must be selected'),
  patient: PatientSchema.optional(),

  userid: z.number().int().positive('User must be selected'),
  user: UserSchema.optional(),

  deviceid: z.number().int().positive('Device must be selected'),
  device: DeviceSchema.optional(),

  status: StudyStatus,
  notes: z.string()
});
export type Study = z.infer<typeof StudySchema>;
