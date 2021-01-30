import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateurFormComponent } from './formateur-form/formateur-form.component';
import { FormateurAddFormComponent } from './formateur-add-form/formateur-add-form.component';
import { FormsModule } from '@angular/forms';
import { FormateursListComponent } from './formateurs-list/formateurs-list.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ParticipantAddFormComponent } from './participant-add-form/participant-add-form.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { FormateurEditFormComponent } from './formateur-edit-form/formateur-edit-form.component';
import { ParticipantEditFormComponent } from './participant-edit-form/participant-edit-form.component';




const appRoutes: Routes = [
 
  {
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
  },
  {path: 'dashboard',
  component: DashboardComponent},
  {path: 'formateur',
  component: FormateurFormComponent},
  {path: 'ajouterformat',
  component: FormateurAddFormComponent},
  {path: 'refreshFormat',
  component: FormateurFormComponent},
  {path: 'participants',
  component: ParticipantFormComponent},
  {path: 'ajouterPart',
  component: ParticipantAddFormComponent},
  {path: 'deleteForm',
  component: FormateurFormComponent},
  {path: 'editForm/:id',
  component: FormateurEditFormComponent},
  {path: 'deletePart',
  component: ParticipantFormComponent},
  {path: 'editPart/:id',
  component: ParticipantEditFormComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    DashboardComponent,
    FormateurFormComponent,
    FormateurAddFormComponent,
    FormateursListComponent,
    
    PagenotfoundComponent,
    
    ParticipantFormComponent,
    
    ParticipantAddFormComponent,
    
    ParticipantListComponent,
    
    FormateurEditFormComponent,
    
    ParticipantEditFormComponent,
    
    

  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
