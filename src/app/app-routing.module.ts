import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminauthGuard } from './adminauth.guard';
import { AdministrationComponent } from './administration/administration.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
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
import { NotauthorisedComponent } from './notauthorised/notauthorised.component';
import { OrdersComponent } from './orders/orders.component';
import { PageContentComponent } from './page-content/page-content.component';
import { PayComponent } from './pay/pay.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

import { RegisterComponent } from './register/register.component';
import { RegisterationsuccessfulComponent } from './registerationsuccessful/registerationsuccessful.component';
import { ReplyQueriesComponent } from './reply-queries/reply-queries.component';
import { ShowNewOrdersComponent } from './show-new-orders/show-new-orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ViewOrderComponent } from './view-order/view-order.component';
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
        path: 'changepassword',
        component: ChangepassComponent,
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
        canActivate: [AuthGuard],
      },
      {
        path: 'viewOrder',
        component: ViewOrderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'payment',
        component: PayComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'changepassword',
        component: ChangepassComponent,
      },
      {
        path: 'administration',
        component: AdministrationComponent,
        canActivate: [AuthGuard, AdminauthGuard],
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
          {
            path: 'replyQueries',
            component: ReplyQueriesComponent,
          },
        ],
      },
      {
        path: 'manage',
        component: ManageComponent,
        canActivate: [AuthGuard, AdminauthGuard],
        children: [
          {
            path: '',
            redirectTo: 'manageorders',
            pathMatch: 'full',
          },
          {
            path: 'manageorders',
            component: ShowNewOrdersComponent,
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
      {
        path: 'notauthorised',
        component: NotauthorisedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
