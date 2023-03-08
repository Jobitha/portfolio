import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtfolioRoutingModule } from './protfolio-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';


@NgModule({
  declarations: [
    ContactComponent,
    SkillsComponent,
    ResumeComponent,
    SidebarComponent,
    AboutmeComponent,
  ],
  imports: [
    CommonModule,
    ProtfolioRoutingModule
  ]
})
export class ProtfolioModule { }
