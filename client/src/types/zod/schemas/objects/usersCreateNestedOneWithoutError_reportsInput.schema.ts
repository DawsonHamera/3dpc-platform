import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutError_reportsInputObjectSchema as usersCreateWithoutError_reportsInputObjectSchema } from './usersCreateWithoutError_reportsInput.schema';
import { usersUncheckedCreateWithoutError_reportsInputObjectSchema as usersUncheckedCreateWithoutError_reportsInputObjectSchema } from './usersUncheckedCreateWithoutError_reportsInput.schema';
import { usersCreateOrConnectWithoutError_reportsInputObjectSchema as usersCreateOrConnectWithoutError_reportsInputObjectSchema } from './usersCreateOrConnectWithoutError_reportsInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutError_reportsInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutError_reportsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutError_reportsInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutError_reportsInput>;
export const usersCreateNestedOneWithoutError_reportsInputObjectZodSchema = makeSchema();
