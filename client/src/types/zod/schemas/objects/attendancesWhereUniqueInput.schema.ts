import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesEvent_idUser_idCompoundUniqueInputObjectSchema as attendancesEvent_idUser_idCompoundUniqueInputObjectSchema } from './attendancesEvent_idUser_idCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  event_id_user_id: z.lazy(() => attendancesEvent_idUser_idCompoundUniqueInputObjectSchema).optional()
}).strict();
export const attendancesWhereUniqueInputObjectSchema: z.ZodType<Prisma.attendancesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesWhereUniqueInput>;
export const attendancesWhereUniqueInputObjectZodSchema = makeSchema();
