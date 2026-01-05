import React from "react";
import { IonPage, IonRouterOutlet } from "@ionic/react";
import { ShopProvider } from "./shared";
import { Route } from "react-router";
import { CatalogPage } from "./catalog";
import { CartPage, CheckoutPage } from "./cart";
import { OrderStatusPage } from "./order-tracking";
import { ProductManagementPage } from "./product-management";

const Shop: React.FC = () => {
    return (
        <IonPage>
            <ShopProvider>
                <IonRouterOutlet>
                    <Route exact path="/shop" component={CatalogPage} />
                    <Route exact path="/shop/cart" component={CartPage} />
                    <Route
                        exact
                        path="/shop/manage"
                        component={ProductManagementPage}
                    />
                    {/* <Route path="/shop/product/:id" component={ProductPage} /> */}
                    {/* <Route path="/shop/customize" component={CustomizePage} /> */}
                    <Route
                        exact
                        path="/shop/checkout"
                        component={CheckoutPage}
                    />
                    <Route
                        exact
                        path="/shop/order/:orderKey"
                        component={OrderStatusPage}
                    />
                    {/* <Route exact path="/shop/admin" component={ShopManagement} />
                    <Route exact path="/shop/admin/products/new/:sectionId" render={() => <EditProductPage mode="create" />} />
                    <Route exact path="/shop/admin/products/:productId" render={() => <EditProductPage mode="edit" />} /> */}
                </IonRouterOutlet>
            </ShopProvider>
        </IonPage>
    );
};

export default Shop;
