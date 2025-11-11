import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  event_id: z.number().int(),
  user_id: z.number().int()
}).strict();
export const attendancesEvent_idUser_idCompoundUniqueInputObjectSchema: z.ZodType<Prisma.attendancesEvent_idUser_idCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesEvent_idUser_idCompoundUniqueInput>;
export const attendancesEvent_idUser_idCompoundUniqueInputObjectZodSchema = makeSchema();
