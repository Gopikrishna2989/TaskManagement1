import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
taskForm=new FormGroup({
  TaskName:new FormControl(),
  TaskStatus:new FormControl(),
  TaskDescription:new FormControl(),
  TaskStartDate:new FormControl(),
  TaskEndDate:new FormControl(),
  AssignStatus:new FormControl(),
})
createTask(){
  console.log(this.taskForm.value);
}
}
