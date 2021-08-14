import { CalendarComponent } from './calendar/calendar.component';

import { ParticipationListComponent } from './participation-list/participation-list.component';

import { AddEventAdminComponent } from './add-event-admin/add-event-admin.component';
import { UserComponent } from './user/user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ContactComponent } from './contact/contact.component';
import { AdminEventComponent } from './admin-event/admin-event.component';

import { ParticipationComponent } from './participation/participation.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { DeliverytabComponent } from './deliverytab/deliverytab.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { UpdateEventAdminComponent } from './update-event-admin/update-event-admin.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginCommercialComponent } from './Login/login-commercial/login-commercial.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginAdminComponent } from './Login/login-admin/login-admin.component';
import { RegisterAdminComponent } from './register/register-admin/register-admin.component';
import { RegisterCommercialComponent } from './register/register-commercial/register-commercial.component';
import { RegisterLayoutComponent } from './register/register-layout/register-layout.component';
import { AuthGuard } from './_guard';

import { ProduitExpirerComponent } from './components/produit-expirer/produit-expirer.component';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { ModifProductComponent } from './components/modif-product/modif-product.component';
import { AddStockComponent } from './Stock/components/add-stock/add-stock.component';
import { UpdateStockComponent } from './Stock/components/update-stock/update-stock.component';
import { CrudStockComponent } from './Stock/components/crud-stock/crud-stock.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { BonComponent } from './bon/bon.component';
import { BonCommandeComponent } from './bon-commande/bon-commande.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'bon',component:BonComponent},
  { path :'updateProd/:id', component: ModifProductComponent },
  { path :'expirer', component:  ProduitExpirerComponent},
  {path:'login-admin',component:LoginAdminComponent},
  { path :'add-product', component:  AdminProductsComponent   },
  {path: 'addEventAdmin', component: AddEventAdminComponent},
  {path :'tableau', component: DeliverytabComponent},
  {path :'forum', component: ForumComponent },
  {path :'product-detail/:id', component: ProductDetailComponent },
  {path :'tableau', component: DeliverytabComponent},
  {path :'forum', component: ForumComponent },
  {path :'product-detail', component: ProductDetailComponent },
  {path :'products', component: ProductComponent  },
  {path :'cart', component: PanierComponent },
  { path: '', component: HomeComponent },
  { path: 'adminEvent', component: AdminProductsComponent },
  { path :'forum', component: ForumComponent },
  { path :'product-detail/:id', component: ProductDetailComponent },
  { path :'crud', component: CrudProductComponent},
  { path :'user', component:  UserComponent },
  { path :'add-product', component:  AdminProductsComponent },
  { path :'add-stock', component:  AddStockComponent },
  { path :'update-stock/:id', component:  UpdateStockComponent },
  { path :'crud-stock', component: CrudStockComponent },
  { path :'search/:keyword', component: ProductComponent },
  { path :'user/:id', component:  UserComponent },
  { path :'expirer', component:  ProduitExpirerComponent },
  {path :'eventList', component: EventsComponent },
  {path :'contact', component: ContactComponent  },
  {path :'reclamation', component: ReclamationComponent },
  {path :'participation', component: ParticipationComponent },
  { path: 'admin-product',component: AdminProductsComponent},
  {path :'adminEvent', component: AdminEventComponent },
  {path: 'login-client',component: LoginCommercialComponent}, 
  {path :'participationList', component:ParticipationListComponent },
  { path: 'user-admin',component: UserComponent },
  {path :'user', component: UserComponent },
  {path :'calendar', component: CalendarComponent },
  {path:'commande',component:BonCommandeComponent},
  {path:'addP', component: AddProdComponent},
  {path :'update-event-admin', component: UpdateEventAdminComponent },
  {path: 'logout',component: LogoutComponent },
  { path: 'login', component: AuthentificationComponent, children: [ { path: 'client', component: LoginCommercialComponent },{ path: 'admin', component: LoginAdminComponent }] },
  { path: 'register', component: RegisterLayoutComponent, children: [ { path: 'client', component: RegisterCommercialComponent },{ path: 'admin', component:RegisterAdminComponent}] },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
