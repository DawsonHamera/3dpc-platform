import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesUpdateWithoutPrintersInputObjectSchema as process_templatesUpdateWithoutPrintersInputObjectSchema } from './process_templatesUpdateWithoutPrintersInput.schema';
import { process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema as process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedUpdateWithoutPrintersInput.schema';
import { process_templatesCreateWithoutPrintersInputObjectSchema as process_templatesCreateWithoutPrintersInputObjectSchema } from './process_templatesCreateWithoutPrintersInput.schema';
import { process_templatesUncheckedCreateWithoutPrintersInputObjectSchema as process_templatesUncheckedCreateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedCreateWithoutPrintersInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_templatesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema)]),
  create: z.union([z.lazy(() => process_templatesCreateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutPrintersInputObjectSchema)]),
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional()
}).strict();
export const process_templatesUpsertWithoutPrintersInputObjectSchema: z.ZodType<Prisma.process_templatesUpsertWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpsertWithoutPrintersInput>;
export const process_templatesUpsertWithoutPrintersInputObjectZodSchema = makeSchema();
