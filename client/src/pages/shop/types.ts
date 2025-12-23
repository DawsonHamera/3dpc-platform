export type ProductVariant = {
    id: number;
    type: ProductType;
    name: string;
    image?: {
        url: string;
    };
    backgroundColor?: string;
    customizations: {};
};

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    variants?: ProductVariant[];
}

export enum ProductType {
    DEFAULT = "default",
    STANDARD = "standard",
    CUSTOM = "custom",
}
