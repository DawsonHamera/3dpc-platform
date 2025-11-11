import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutPrintersInputObjectSchema as process_templatesCreateWithoutPrintersInputObjectSchema } from './process_templatesCreateWithoutPrintersInput.schema';
import { process_templatesUncheckedCreateWithoutPrintersInputObjectSchema as process_templatesUncheckedCreateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedCreateWithoutPrintersInput.schema';
import { process_templatesCreateOrConnectWithoutPrintersInputObjectSchema as process_templatesCreateOrConnectWithoutPrintersInputObjectSchema } from './process_templatesCreateOrConnectWithoutPrintersInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_templatesCreateNestedOneWithoutPrintersInputObjectSchema: z.ZodType<Prisma.process_templatesCreateNestedOneWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateNestedOneWithoutPrintersInput>;
export const process_templatesCreateNestedOneWithoutPrintersInputObjectZodSchema = makeSchema();
