import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersCreateWithoutFilesInputObjectSchema as printersCreateWithoutFilesInputObjectSchema } from './printersCreateWithoutFilesInput.schema';
import { printersUncheckedCreateWithoutFilesInputObjectSchema as printersUncheckedCreateWithoutFilesInputObjectSchema } from './printersUncheckedCreateWithoutFilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printersCreateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema)])
}).strict();
export const printersCreateOrConnectWithoutFilesInputObjectSchema: z.ZodType<Prisma.printersCreateOrConnectWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateOrConnectWithoutFilesInput>;
export const printersCreateOrConnectWithoutFilesInputObjectZodSchema = makeSchema();
