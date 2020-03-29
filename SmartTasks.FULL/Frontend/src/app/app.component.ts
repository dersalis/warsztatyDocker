import { Component, OnInit } from '@angular/core';
import { SmartTask, ISmartTask } from './models/smartTask';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public taskList: ISmartTask[] = [];

  constructor(private httpClient: HttpClient) {

  }

  title = 'Frontend';

  public newTask: ISmartTask;

  //private apiUrl: string = 'http://10.190.1.97:8080/';
  //private apiUrl: string = 'localhost:8080/';
  private apiUrl: string = '';

  ngOnInit(): void {
    console.log("Taki Init");
    this.getTasks();
    this.clearForm();
  }

  public getTasks(): void {
    this.httpClient.get<ISmartTask[]>(`${this.apiUrl}api/Tasks/GetAll`).subscribe(response => {
      this.taskList = response;
      console.log(this.taskList);
    });
  }

  public addTask(): void {
    console.log('Dodaj zadanie!');
    this.newTask.id = this.taskList.length + 1;
    this.newTask.finishDate = null;
    console.log(this.newTask);
    this.httpClient.post(`${this.apiUrl}api/Tasks/Add`, this.newTask).subscribe(() => {
      this.getTasks();
    });
    this.clearForm();
    //this.getTasks();
  }

  public removeTask(item: ISmartTask): void {
    console.log('Usuń zadanie');
    console.log(item);
    this.httpClient.get(`${this.apiUrl}api/Tasks/RemoveById?id=${item.id}`).subscribe(() => {
          this.getTasks();
        });
    // const index: number = this.taskList.indexOf(item);
    // if (index !== -1) {
    //     this.taskList.splice(index, 1);
    // }
  }

  public clearForm(): void {
    this.newTask = {
      id: 2,
      name: '',
      descryption: '',
      createDate: new Date('2020.03.04'),
      finishDate: new Date('2020.03.05'),
      isFinish: false,
      status: 0
    };
  }

  public changeStatus(item: ISmartTask): void {
    if (item.status === 0) {
      item.status = 1;
      // return;
    } else if (item.status === 1) {
      item.status = 2;
      item.finishDate = new Date();
      // return;
    } else if (item.status === 2) {
      item.status = 0;
      // return;
    }
  }
}
