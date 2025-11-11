import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesUpdateWithoutPrintersInputObjectSchema as filesUpdateWithoutPrintersInputObjectSchema } from './filesUpdateWithoutPrintersInput.schema';
import { filesUncheckedUpdateWithoutPrintersInputObjectSchema as filesUncheckedUpdateWithoutPrintersInputObjectSchema } from './filesUncheckedUpdateWithoutPrintersInput.schema';
import { filesCreateWithoutPrintersInputObjectSchema as filesCreateWithoutPrintersInputObjectSchema } from './filesCreateWithoutPrintersInput.schema';
import { filesUncheckedCreateWithoutPrintersInputObjectSchema as filesUncheckedCreateWithoutPrintersInputObjectSchema } from './filesUncheckedCreateWithoutPrintersInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => filesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutPrintersInputObjectSchema)]),
  create: z.union([z.lazy(() => filesCreateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutPrintersInputObjectSchema)]),
  where: z.lazy(() => filesWhereInputObjectSchema).optional()
}).strict();
export const filesUpsertWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesUpsertWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpsertWithoutPrintersInput>;
export const filesUpsertWithoutPrintersInputObjectZodSchema = makeSchema();
