export class SmartTask{
  //constructor();

  constructor(id: number, name: string, descryption: string, createDate: Date, finishDate: Date, isFinish: boolean, status: number){
    this.id = id;
    this.name = name;
    this.descryption = descryption;
    this.createDate = createDate;
    this.finishDate = finishDate;
    this.isFinish = isFinish;
    this.status = status;
  }

  id: number;
  name: string;
  descryption: string;
  createDate: Date;
  finishDate: Date;
  isFinish: boolean;
  status: number;
}

export interface ISmartTask{
  id: number;
  name: string;
  descryption: string;
  createDate: Date;
  finishDate: Date;
  isFinish: boolean;
  status: number;
}
