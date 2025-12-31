export declare class CreateOrderDto {
    email: string;
    firstName: string;
    lastName: string;
    deliveryMethod: string;
    totalPrice: number;
    cart: {
        productId: number;
        variantId: number;
        quantity: number;
    }[];
}
