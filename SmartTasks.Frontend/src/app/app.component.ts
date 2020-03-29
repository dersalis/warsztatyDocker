import { Component, OnInit } from '@angular/core';
import { SmartTask, ISmartTask } from './models/smartTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Frontend';

  // public taskList: SmartTask[] = [
  //   new SmartTask(0, 'Malowanie', 'Malowanie ścian w kuchni i przedpokoju', new Date('2020.03.01'), new Date('2020.03.21'), false, 0),
  //   new SmartTask(1, 'Mycie samochodu', 'Mycie Dacia Duster', new Date('2020.03.04'), new Date('2020.03.18'), false, 1),
  //   new SmartTask(2, 'Zakupy', 'Zakupy w Biedronka', new Date('2020.03.09'), new Date('2020.03.21'), true, 2),
  //   new SmartTask(2, 'Piwo', 'Zakupy w browarze', new Date('2020.03.05'), new Date('2020.03.21'), true, 2)
  // ];

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

  // public newTask: ISmartTask = {
  //   id: 2,
  //   name: '',
  //   descryption: '',
  //   createDate: new Date('2020.03.04'),
  //   finishDate: new Date('2020.03.05'),
  //   isFinish: false,
  //   status: 0
  // }

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
