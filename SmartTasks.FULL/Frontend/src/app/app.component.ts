import { Component, OnInit } from '@angular/core';
import { SmartTask, ISmartTask } from './models/smartTask';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public tList: ISmartTask[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<ISmartTask[]>('http://10.190.1.97:8084/api/Tasks/GetAll').subscribe(response => {
      this.tList = response;
    })
  }

  title = 'Frontend';

  public taskList: ISmartTask[] = [
    {
      id: 0,
      name: 'Malowanie pokoju',
      descryption: 'Pomalować duży pokój na zielono',
      createDate: new Date('2020.03.01'),
      finishDate: new Date('2020.03.11'),
      isFinish: false,
      status: 0
    },
    {
      id: 1,
      name: 'Koszenie trawy',
      descryption: 'Skosić trawnik na działce',
      createDate: new Date('2020.03.05'),
      finishDate: new Date('2020.03.19'),
      isFinish: false,
      status: 1
    },
    {
      id: 2,
      name: 'Mycie samochodu',
      descryption: 'Umyć samochód DD2',
      createDate: new Date('2020.03.04'),
      finishDate: new Date('2020.03.05'),
      isFinish: true,
      status: 2
    }
  ];

  public newTask: ISmartTask;

  ngOnInit(): void {
    console.log("Taki Init");
    console.log(this.taskList);
    this.clearForm();
  }

  public addTask(): void {
    console.log('Dodaj zadanie!');
    console.log(this.newTask);
    this.taskList.push(this.newTask);
    this.clearForm();
  }

  public removeTask(item: ISmartTask): void {
    console.log('Usuń zadanie');
    console.log(item);
    const index: number = this.taskList.indexOf(item);
    if (index !== -1) {
        this.taskList.splice(index, 1);
    }
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
