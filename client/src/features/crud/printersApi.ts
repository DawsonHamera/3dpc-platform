import { createCrudApi } from '../baseApi'
import { Printer, CreatePrinterData } from '../../types'

export const printersApi = createCrudApi<Printer, CreatePrinterData>({
    reducerPath: 'printers',
    tagType: 'Printer',
    endpoint: 'printers'
})

export const { 
    useGetAllQuery: useGetPrintersQuery, 
    useGetOneQuery: useGetPrinterQuery, 
    useCreateMutation: useAddPrinterMutation, 
    useUpdateMutation: useUpdatePrinterMutation,
    useDeleteMutation: useRemovePrinterMutation 
} = printersApi

export type { Printer, CreatePrinterData, PrinterStatus } from '../../types'
