import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule} from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog'; // Импортируйте MatDialogModule
import { AppComponent } from './app.component';

import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { CoursedialogComponent } from './components/coursedialog/coursedialog.component';
import { MainComponent } from './components/main/main.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    MainComponent,
    ListCoursesComponent,
    CoursedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
