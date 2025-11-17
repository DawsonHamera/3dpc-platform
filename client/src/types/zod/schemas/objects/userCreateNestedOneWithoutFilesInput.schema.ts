import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutFilesInputObjectSchema as userCreateWithoutFilesInputObjectSchema } from './userCreateWithoutFilesInput.schema';
import { userUncheckedCreateWithoutFilesInputObjectSchema as userUncheckedCreateWithoutFilesInputObjectSchema } from './userUncheckedCreateWithoutFilesInput.schema';
import { userCreateOrConnectWithoutFilesInputObjectSchema as userCreateOrConnectWithoutFilesInputObjectSchema } from './userCreateOrConnectWithoutFilesInput.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutFilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => userCreateOrConnectWithoutFilesInputObjectSchema).optional(),
  connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional()
}).strict();
export const userCreateNestedOneWithoutFilesInputObjectSchema: z.ZodType<Prisma.userCreateNestedOneWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateNestedOneWithoutFilesInput>;
export const userCreateNestedOneWithoutFilesInputObjectZodSchema = makeSchema();
