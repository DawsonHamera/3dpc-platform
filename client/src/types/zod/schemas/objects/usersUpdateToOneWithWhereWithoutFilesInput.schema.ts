import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { usersUpdateWithoutFilesInputObjectSchema as usersUpdateWithoutFilesInputObjectSchema } from './usersUpdateWithoutFilesInput.schema';
import { usersUncheckedUpdateWithoutFilesInputObjectSchema as usersUncheckedUpdateWithoutFilesInputObjectSchema } from './usersUncheckedUpdateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => usersUpdateWithoutFilesInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutFilesInputObjectSchema)])
}).strict();
export const usersUpdateToOneWithWhereWithoutFilesInputObjectSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutFilesInput>;
export const usersUpdateToOneWithWhereWithoutFilesInputObjectZodSchema = makeSchema();
