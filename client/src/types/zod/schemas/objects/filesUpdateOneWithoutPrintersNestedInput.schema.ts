import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutPrintersInputObjectSchema as filesCreateWithoutPrintersInputObjectSchema } from './filesCreateWithoutPrintersInput.schema';
import { filesUncheckedCreateWithoutPrintersInputObjectSchema as filesUncheckedCreateWithoutPrintersInputObjectSchema } from './filesUncheckedCreateWithoutPrintersInput.schema';
import { filesCreateOrConnectWithoutPrintersInputObjectSchema as filesCreateOrConnectWithoutPrintersInputObjectSchema } from './filesCreateOrConnectWithoutPrintersInput.schema';
import { filesUpsertWithoutPrintersInputObjectSchema as filesUpsertWithoutPrintersInputObjectSchema } from './filesUpsertWithoutPrintersInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateToOneWithWhereWithoutPrintersInputObjectSchema as filesUpdateToOneWithWhereWithoutPrintersInputObjectSchema } from './filesUpdateToOneWithWhereWithoutPrintersInput.schema';
import { filesUpdateWithoutPrintersInputObjectSchema as filesUpdateWithoutPrintersInputObjectSchema } from './filesUpdateWithoutPrintersInput.schema';
import { filesUncheckedUpdateWithoutPrintersInputObjectSchema as filesUncheckedUpdateWithoutPrintersInputObjectSchema } from './filesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  upsert: z.lazy(() => filesUpsertWithoutPrintersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => filesUpdateToOneWithWhereWithoutPrintersInputObjectSchema), z.lazy(() => filesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutPrintersInputObjectSchema)]).optional()
}).strict();
export const filesUpdateOneWithoutPrintersNestedInputObjectSchema: z.ZodType<Prisma.filesUpdateOneWithoutPrintersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateOneWithoutPrintersNestedInput>;
export const filesUpdateOneWithoutPrintersNestedInputObjectZodSchema = makeSchema();
