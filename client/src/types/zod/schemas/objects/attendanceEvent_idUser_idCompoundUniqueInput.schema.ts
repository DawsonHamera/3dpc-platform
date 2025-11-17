import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  event_id: z.number().int(),
  user_id: z.number().int()
}).strict();
export const attendanceEvent_idUser_idCompoundUniqueInputObjectSchema: z.ZodType<Prisma.attendanceEvent_idUser_idCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceEvent_idUser_idCompoundUniqueInput>;
export const attendanceEvent_idUser_idCompoundUniqueInputObjectZodSchema = makeSchema();
