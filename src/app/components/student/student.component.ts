import { Component } from '@angular/core';
import {CourseId, COURSELIST, STUDENTLIST, Students} from "../../data/model";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  protected readonly Students = Students;
  studentList :Students = STUDENTLIST
  daysOfWeek: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  courseIds: string[] = ['Py', 'C', 'JS', 'Java']

}
