import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { AppComponent } from './app.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { CollectandreportComponent } from './collectandreport/collectandreport.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { CustomerAdministrationComponent } from './customer-administration/customer-administration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageBankComponent } from './manage-bank/manage-bank.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageComponent } from './manage/manage.component';
import { OrdersComponent } from './orders/orders.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PayComponent } from './pay/pay.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

import { RegisterComponent } from './register/register.component';
import { RegisterationsuccessfulComponent } from './registerationsuccessful/registerationsuccessful.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'page-content',
    component: PageContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'registerationsuccessfull',
        component: RegisterationsuccessfulComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:productId',
        component: ProductdetailsComponent,
      },
      {
        path: 'confirmOrder',
        component: ConfirmOrderComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
      },
      {
        path: 'payment',
        component: PayComponent,
      },
      {
        path: 'changepassword',
        component: ChangepassComponent,
      },
      {
        path: 'administration',
        component: AdministrationComponent,
        children: [
          {
            path: '',
            redirectTo: 'customerAdministration',
            pathMatch: 'full',
          },
          {
            path: 'customerAdministration',
            component: CustomerAdministrationComponent,
          },
          {
            path: 'collectandreport',
            component: CollectandreportComponent,
          },
        ],
      },
      {
        path: 'manage',
        component: ManageComponent,
        children: [
          {
            path: '',
            redirectTo: 'manageproducts',
            pathMatch: 'full',
          },
          {
            path: 'manageproducts',
            component: ManageProductsComponent,
          },
          {
            path: 'managecategory',
            component: ManageCategoryComponent,
          },
          {
            path: 'manageBank',
            component: ManageBankComponent,
          },
          {
            path: 'manageCards',
            component: ManageCardsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
