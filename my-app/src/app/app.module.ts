import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/Personal/about/about.component';
import { ContactComponent } from './components/Personal/contact/contact.component';
import { CvResumeComponent } from './components/Business/cv-resume/cv-resume.component';
import { EducationComponent } from './components/Business/education/education.component';
import { ProjectsComponent } from './components/Business/projects/projects.component';
import { HomeComponent } from './components/Personal/home/home.component';
import { BlogMainComponent } from './components/Personal/blog-main/blog-main.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CvResumeComponent,
    EducationComponent,
    ProjectsComponent,
    HomeComponent,
    BlogMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
