import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { AdministrationComponent } from './administration/administration.component';
import { ManageComponent } from './manage/manage.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageContentComponent } from './page-content/page-content.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageBankComponent } from './manage-bank/manage-bank.component';
import { ManageCardsComponent } from './manage-cards/manage-cards.component';
import { CustomerAdministrationComponent } from './customer-administration/customer-administration.component';
import { CollectandreportComponent } from './collectandreport/collectandreport.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddBankFormComponent } from './add-bank-form/add-bank-form.component';
import { AddCardTypeFormComponent } from './add-card-type-form/add-card-type-form.component';
import { AddCateogryFormComponent } from './add-cateogry-form/add-cateogry-form.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { PayComponent } from './pay/pay.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { HttpClientModule } from '@angular/common/http';

import { RegisterationsuccessfulComponent } from './registerationsuccessful/registerationsuccessful.component';

import { DeleteComponent } from './delete/delete.component';
import { NewapplicantsComponent } from './newapplicants/newapplicants.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    NavHeaderComponent,
    AdministrationComponent,
    ManageComponent,
    ProductsComponent,
    OrdersComponent,
    TransactionsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageContentComponent,
    ProfileComponent,
    ManageProductsComponent,
    ManageCategoryComponent,
    ManageBankComponent,
    ManageCardsComponent,
    CustomerAdministrationComponent,
    CollectandreportComponent,
    ProductdetailsComponent,
    AddBankFormComponent,
    AddCardTypeFormComponent,
    AddCateogryFormComponent,
    AddProductFormComponent,
    PayComponent,
    ChangepassComponent,

    RegisterationsuccessfulComponent,

    DeleteComponent,
    NewapplicantsComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
