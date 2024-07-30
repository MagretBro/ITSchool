import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-coursedialog',
  templateUrl: './coursedialog.component.html',
  styleUrls: ['./coursedialog.component.scss']
})
export class CoursedialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
