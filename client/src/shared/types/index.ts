// Re-export all types from API feature files for easy importing
// This is the single source of truth for all types - everything comes from Zod schemas

// Material types
export type {
    CreateMaterial,
    Material,
    UpdateMaterial,
    MaterialType,
} from "../../member-app/features/materials/materialsApi";

// Model types
export type {
    CreateModel,
    Model,
    UpdateModel,
} from "../../member-app/features/models/modelsApi";

// Printer types
export type {
    CreatePrinter,
    Printer,
    UpdatePrinter,
    PrinterStatus,
} from "../../member-app/features/printers/printersApi";

// Task types
export type {
    CreateTask,
    Task,
    UpdateTask,
} from "../../member-app/features/tasks/tasksApi";

// Product types
export type {
    CreateProduct,
    CreateProductVariant,
    Product,
    ProductVariant,
    Section,
    UpdateProduct,
    UpdateProductVariant,
    ProductVariantType,
} from "../../member-app/features/products/productsApi";

// Order types
export type {
    CreateOrder,
    CreateOrderItem,
    Order,
    OrderItem,
    UpdateOrder,
    UpdateOrderItem,
} from "../../member-app/features/orders/ordersApi";

// File types
export type { File } from "../../member-app/features/files/filesApi";

// Event types
export type {
    Attendance,
    Event,
} from "../../member-app/features/events/eventsApi";

// User types
export type { User } from "../../member-app/features/users/usersApi";

// Auth types
export type {
    AuthState,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
} from "../../member-app/features/auth/authTypes";

// Recycling types
export type { RecyclingLog } from "../../member-app/features/recycling/recyclingApi";