import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userUpdateWithoutFilesInputObjectSchema as userUpdateWithoutFilesInputObjectSchema } from './userUpdateWithoutFilesInput.schema';
import { userUncheckedUpdateWithoutFilesInputObjectSchema as userUncheckedUpdateWithoutFilesInputObjectSchema } from './userUncheckedUpdateWithoutFilesInput.schema';
import { userCreateWithoutFilesInputObjectSchema as userCreateWithoutFilesInputObjectSchema } from './userCreateWithoutFilesInput.schema';
import { userUncheckedCreateWithoutFilesInputObjectSchema as userUncheckedCreateWithoutFilesInputObjectSchema } from './userUncheckedCreateWithoutFilesInput.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => userUpdateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => userCreateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => userWhereInputObjectSchema).optional()
}).strict();
export const userUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.userUpsertWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpsertWithoutFilesInput>;
export const userUpsertWithoutFilesInputObjectZodSchema = makeSchema();
