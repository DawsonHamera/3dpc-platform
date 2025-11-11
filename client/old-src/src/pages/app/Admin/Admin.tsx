import React from 'react';
import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import ShopManagementPage from './shop/ShopManagementPage';
import AdminDashboardPage from './AdminDashboardPage';
import CreateProductPage from './shop/CreateProductPage';
import UpdateProductPage from './shop/UpdateProductPage';

const Admin: React.FC = () => {
    return (
        <IonPage>
            <IonRouterOutlet>
                <Route exact path="/dashboard/admin" component={AdminDashboardPage} />
                <Route exact path="/dashboard/admin/shop/products/create" component={CreateProductPage} />
                <Route exact path="/dashboard/admin/shop/products/edit/:id" component={UpdateProductPage} />
                <Route exact path="/dashboard/admin/shop" component={ShopManagementPage} />
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Admin;