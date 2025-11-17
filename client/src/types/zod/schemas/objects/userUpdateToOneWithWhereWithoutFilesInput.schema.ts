import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema';
import { userUpdateWithoutFilesInputObjectSchema as userUpdateWithoutFilesInputObjectSchema } from './userUpdateWithoutFilesInput.schema';
import { userUncheckedUpdateWithoutFilesInputObjectSchema as userUncheckedUpdateWithoutFilesInputObjectSchema } from './userUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => userUpdateWithoutFilesInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const userUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.userUpdateToOneWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateToOneWithWhereWithoutFilesInput>;
export const userUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
