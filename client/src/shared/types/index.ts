// Re-export all types from API feature files for easy importing
// This is the single source of truth for all types - everything comes from Zod schemas

// Material types
export type {
    CreateMaterial,
    Material,
    MaterialType,
    UpdateMaterial,
} from "../features";

// Model types
export type { CreateModel, Model, UpdateModel } from "../features";

// Printer types
export type {
    CreatePrinter,
    Printer,
    PrinterStatus,
    UpdatePrinter,
} from "../features";

// Task types
export type { CreateTask, Task, UpdateTask } from "../features";

// Product types
export type {
    CreateProduct,
    CreateProductVariant,
    Product,
    ProductVariant,
    ProductVariantType,
    Section,
    UpdateProduct,
    UpdateProductVariant,
} from "../features";

// Order types
export type {
    CreateOrder,
    CreateOrderItem,
    Order,
    OrderItem,
    UpdateOrder,
    UpdateOrderItem,
} from "../features";

// File types
export type { File } from "../features";

// Event types
export type { Attendance, Event } from "../features";

// User types
export type { User } from "../features";

// Auth types
export type {
    AuthState,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
} from "../features";

// Recycling types
export type { RecyclingLog } from "../features";
