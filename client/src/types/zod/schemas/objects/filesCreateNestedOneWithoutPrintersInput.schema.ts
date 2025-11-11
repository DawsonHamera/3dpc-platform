import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutPrintersInputObjectSchema as filesCreateWithoutPrintersInputObjectSchema } from './filesCreateWithoutPrintersInput.schema';
import { filesUncheckedCreateWithoutPrintersInputObjectSchema as filesUncheckedCreateWithoutPrintersInputObjectSchema } from './filesUncheckedCreateWithoutPrintersInput.schema';
import { filesCreateOrConnectWithoutPrintersInputObjectSchema as filesCreateOrConnectWithoutPrintersInputObjectSchema } from './filesCreateOrConnectWithoutPrintersInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutPrintersInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional()
}).strict();
export const filesCreateNestedOneWithoutPrintersInputObjectSchema: z.ZodType<Prisma.filesCreateNestedOneWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateNestedOneWithoutPrintersInput>;
export const filesCreateNestedOneWithoutPrintersInputObjectZodSchema = makeSchema();
