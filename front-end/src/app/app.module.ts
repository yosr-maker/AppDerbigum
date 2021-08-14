import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { FormulairePayementComponent } from './formulaire-payement/formulaire-payement.component';

import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './forum/forum.component';
import { EventsComponent } from './events/events.component';
import { AskmeComponent } from './askme/askme.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryFrorumComponent } from './category-frorum/category-frorum.component';
import { DeliverytabComponent } from './deliverytab/deliverytab.component';
import { RouterModule,Routes } from '@angular/router';
import { ParticipationComponent } from './participation/participation.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin-products/admin-products.component';

import { FormsModule } from "@angular/forms";
import { AdminEventComponent } from './admin-event/admin-event.component';

import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AddEventAdminComponent } from './add-event-admin/add-event-admin.component';
import { UpdateEventAdminComponent } from './update-event-admin/update-event-admin.component';
import { ParticipationListComponent } from './participation-list/participation-list.component';

import { CommonModule, NgClass } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginAdminComponent } from './Login/login-admin/login-admin.component';
import { LoginCommercialComponent } from './Login/login-commercial/login-commercial.component';
import { LogoutComponent } from './logout/logout.component';

import { RegisterCommercialComponent } from './register/register-commercial/register-commercial.component';
import { JwtAdminService } from './services/jwt-admin.service';
import { JwtCommercialService } from './services/jwt-commercial.service';
import { JwtResponse } from './services/jwt-commercial.service';
import { AuthentificationService } from './services/authentification.service';
import { Observable, of } from 'rxjs'
import {  throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BasicAuthHttpInterceptorService } from './services/basic-auth-http-interceptor.service';
import { JwtCommercial2Service } from './services/jwt-commercial2.service';
import { UserService } from './services/user.service';
import { SecurityComponent } from './security/security.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterLayoutComponent } from './register/register-layout/register-layout.component';
import { RegisterAdminComponent } from './register/register-admin/register-admin.component';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { ProduitExpirerComponent } from './components/produit-expirer/produit-expirer.component';
import { FormulaireModifComponent } from './components/formulaire-modif/formulaire-modif.component';
import { ModifProductComponent } from './components/modif-product/modif-product.component';
import { AfficheModifComponent } from './components/affiche-modif/affiche-modif.component';
import { BonCommandeComponent } from './bon-commande/bon-commande.component';
import { BonComponent } from './bon/bon.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { UpdateStockComponent } from './Stock/components/update-stock/update-stock.component';
import { AddStockComponent } from './Stock/components/add-stock/add-stock.component';
import { CrudStockComponent } from './Stock/components/crud-stock/crud-stock.component';
import { CheckOutComponent } from './check-out/check-out.component';



export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    AdminProductsComponent,
    AppComponent,
    FormulaireModifComponent,
    ModifProductComponent,
    AfficheModifComponent,
    HomeComponent,
    PanierComponent,
    ProductComponent,
    ProductDetailComponent,
    TestComponent,
    UserComponent,
    FormulairePayementComponent,
    AuthentificationComponent,
    ContactComponent,
    ForumComponent,
    EventsComponent,
    AskmeComponent,
    BlogComponent,
    CategoryFrorumComponent,
    DeliverytabComponent,
    ParticipationComponent,
    AdminProductsComponent,
    AdminEventComponent,
   BonCommandeComponent,
   AuthentificationComponent,
   AdminProductsComponent,
   ProductDetailComponent,
   ProductComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    BonComponent,
    RegisterCommercialComponent,
    ReclamationComponent,
    AddEventAdminComponent,
    UpdateEventAdminComponent,
    ParticipationListComponent,
    CalendarComponent,
    LoginAdminComponent,
    LoginCommercialComponent,
    LogoutComponent,
    RegisterLayoutComponent,
    RegisterAdminComponent,
    RegisterCommercialComponent,
    SecurityComponent,
    CrudProductComponent,
    CrudProductComponent,
    AdminProductsComponent,
    ProduitExpirerComponent,
    AddProdComponent,
    UpdateStockComponent,
    AddStockComponent,
    CrudStockComponent,
    CheckOutComponent,
   
   
  ],
  imports: [ 
   
    MbscModule, 
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbModule, 
    ReactiveFormsModule,
    MbscModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [  
    {provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  },
  
    AuthentificationService,
    JwtCommercialService,
    JwtCommercial2Service,
    BasicAuthHttpInterceptorService,
    UserService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

