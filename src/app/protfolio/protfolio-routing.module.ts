import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './forms/forms.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { ResumeComponent } from './resume/resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },  
  { path: 'resume', component: ResumeComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'restaurent', component: RestaurentComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class ProtfolioRoutingModule { }
