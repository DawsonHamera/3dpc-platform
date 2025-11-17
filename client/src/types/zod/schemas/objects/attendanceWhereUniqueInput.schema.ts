import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceEvent_idUser_idCompoundUniqueInputObjectSchema as attendanceEvent_idUser_idCompoundUniqueInputObjectSchema } from './attendanceEvent_idUser_idCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  event_id_user_id: z.lazy(() => attendanceEvent_idUser_idCompoundUniqueInputObjectSchema).optional()
}).strict();
export const attendanceWhereUniqueInputObjectSchema: z.ZodType<Prisma.attendanceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceWhereUniqueInput>;
export const attendanceWhereUniqueInputObjectZodSchema = makeSchema();
