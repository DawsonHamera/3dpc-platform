import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutFilesInputObjectSchema as usersCreateWithoutFilesInputObjectSchema } from './usersCreateWithoutFilesInput.schema';
import { usersUncheckedCreateWithoutFilesInputObjectSchema as usersUncheckedCreateWithoutFilesInputObjectSchema } from './usersUncheckedCreateWithoutFilesInput.schema';
import { usersCreateOrConnectWithoutFilesInputObjectSchema as usersCreateOrConnectWithoutFilesInputObjectSchema } from './usersCreateOrConnectWithoutFilesInput.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputObjectSchema).optional()
}).strict();
export const usersCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedOneWithoutFilesInput>;
export const usersCreateNestedOneWithoutFilesInputObjectZodSchema = makeSchema();
