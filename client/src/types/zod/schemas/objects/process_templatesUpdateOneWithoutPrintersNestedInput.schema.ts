import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateWithoutPrintersInputObjectSchema as process_templatesCreateWithoutPrintersInputObjectSchema } from './process_templatesCreateWithoutPrintersInput.schema';
import { process_templatesUncheckedCreateWithoutPrintersInputObjectSchema as process_templatesUncheckedCreateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedCreateWithoutPrintersInput.schema';
import { process_templatesCreateOrConnectWithoutPrintersInputObjectSchema as process_templatesCreateOrConnectWithoutPrintersInputObjectSchema } from './process_templatesCreateOrConnectWithoutPrintersInput.schema';
import { process_templatesUpsertWithoutPrintersInputObjectSchema as process_templatesUpsertWithoutPrintersInputObjectSchema } from './process_templatesUpsertWithoutPrintersInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './process_templatesWhereUniqueInput.schema';
import { process_templatesUpdateToOneWithWhereWithoutPrintersInputObjectSchema as process_templatesUpdateToOneWithWhereWithoutPrintersInputObjectSchema } from './process_templatesUpdateToOneWithWhereWithoutPrintersInput.schema';
import { process_templatesUpdateWithoutPrintersInputObjectSchema as process_templatesUpdateWithoutPrintersInputObjectSchema } from './process_templatesUpdateWithoutPrintersInput.schema';
import { process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema as process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema } from './process_templatesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_templatesCreateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_templatesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  upsert: z.lazy(() => process_templatesUpsertWithoutPrintersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => process_templatesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => process_templatesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => process_templatesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_templatesUpdateToOneWithWhereWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => process_templatesUncheckedUpdateWithoutPrintersInputObjectSchema)]).optional()
}).strict();
export const process_templatesUpdateOneWithoutPrintersNestedInputObjectSchema: z.ZodType<Prisma.process_templatesUpdateOneWithoutPrintersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUpdateOneWithoutPrintersNestedInput>;
export const process_templatesUpdateOneWithoutPrintersNestedInputObjectZodSchema = makeSchema();
