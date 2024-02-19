import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  taskArray = [{ taskName: 'Brush Teeth', isCompleted: false, isEditable: false }];

  constructor() { }

  ngOnInit(): void {
  }
  onSumbit(form: NgForm) {
    console.log(form);

    this.taskArray.push({

      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable :false
    })

    form.reset();

  }
  onDelete(index: number) {

    console.log(index)

    this.taskArray.splice(index, 1)
  }
  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
  onEdit(index: number) {
    this.taskArray[index].isEditable = true;

  }
  onSave(index: number, newTask:string) {


    this.taskArray[index].taskName = newTask;
    this.taskArray[index].isEditable = false;

}}
