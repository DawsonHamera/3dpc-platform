import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { process_templatesUpdateWithoutPrintersInputObjectSchema as process_templatesUpdateWithoutPrintersInputObjectSchema } from './process_templatesUpdateWithoutPrintersInput.schema';
import { process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema as process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_templatesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_templatesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema)])
}).strict();
export const process_templatesUpdateToOneWithWhereWithoutPrintersInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateToOneWithWhereWithoutPrintersInput>;
export const process_templatesUpdateToOneWithWhereWithoutPrintersInputObjectZodSchema = makeSchema();
