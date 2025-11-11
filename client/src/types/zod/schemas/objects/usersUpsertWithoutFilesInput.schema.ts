import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateWithoutFilesInputObjectSchema as usersUpdateWithoutFilesInputObjectSchema } from './usersUpdateWithoutFilesInput.schema';
import { usersUncheckedUpdateWithoutFilesInputObjectSchema as usersUncheckedUpdateWithoutFilesInputObjectSchema } from './usersUncheckedUpdateWithoutFilesInput.schema';
import { usersCreateWithoutFilesInputObjectSchema as usersCreateWithoutFilesInputObjectSchema } from './usersCreateWithoutFilesInput.schema';
import { usersUncheckedCreateWithoutFilesInputObjectSchema as usersUncheckedCreateWithoutFilesInputObjectSchema } from './usersUncheckedCreateWithoutFilesInput.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => usersUpdateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutFilesInputObjectSchema)]),
  create: z.union([z.lazy(() => usersCreateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutFilesInputObjectSchema)]),
  where: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const usersUpsertWithoutFilesInputObjectSchema: z.ZodType<Prisma.usersUpsertWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpsertWithoutFilesInput>;
export const usersUpsertWithoutFilesInputObjectZodSchema = makeSchema();
