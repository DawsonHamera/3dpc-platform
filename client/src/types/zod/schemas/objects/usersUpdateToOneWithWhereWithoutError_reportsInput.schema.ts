import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutError_reportsInputObjectSchema as usersUpdateWithoutError_reportsInputObjectSchema } from './usersUpdateWithoutError_reportsInput.schema';
import { usersUncheckedUpdateWithoutError_reportsInputObjectSchema as usersUncheckedUpdateWithoutError_reportsInputObjectSchema } from './usersUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutError_reportsInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutError_reportsInput>;
export const usersUpdateToOneWithWhereWithoutError_reportsInputObjectZodSchema = makeSchema();
