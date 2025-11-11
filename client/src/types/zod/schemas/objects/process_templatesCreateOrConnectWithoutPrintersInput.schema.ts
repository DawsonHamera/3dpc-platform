import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema';
import { process_templatesCreateWithoutPrintersInputObjectSchema as process_templatesCreateWithoutPrintersInputObjectSchema } from './process_templatesCreateWithoutPrintersInput.schema';
import { process_templatesUncheckedCreateWithoutPrintersInputObjectSchema as process_templatesUncheckedCreateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_templatesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_templatesCreateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const process_templatesCreateOrConnectWithoutPrintersInputObjectSchema: z.ZodType<Prisma.process_templatesCreateOrConnectWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateOrConnectWithoutPrintersInput>;
export const process_templatesCreateOrConnectWithoutPrintersInputObjectZodSchema = makeSchema();
