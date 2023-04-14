import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtfolioRoutingModule } from './protfolio-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FormsComponent } from './forms/forms.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ContactComponent,
    SkillsComponent,
    ResumeComponent,
    SidebarComponent,
    AboutmeComponent,
    FormsComponent,
    RestaurentComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProtfolioRoutingModule
  ],
  exports: [SidebarComponent],

})
export class ProtfolioModule { }
