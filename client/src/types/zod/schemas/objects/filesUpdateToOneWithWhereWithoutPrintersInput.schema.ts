import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesUpdateWithoutPrintersInputObjectSchema as filesUpdateWithoutPrintersInputObjectSchema } from './filesUpdateWithoutPrintersInput.schema';
import { filesUncheckedUpdateWithoutPrintersInputObjectSchema as filesUncheckedUpdateWithoutPrintersInputObjectSchema } from './filesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => filesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutPrintersInputObjectSchema)])
}).strict();
export const filesUpdateToOneWithWhereWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutPrintersInput>;
export const filesUpdateToOneWithWhereWithoutPrintersInputObjectZodSchema = makeSchema();
