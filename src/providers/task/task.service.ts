import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Task } from './../../models/task.model';

@Injectable()
export class TaskService {

  constructor(
    public storage: Storage
  ) { }

  getAll(): Promise<Task[]> {
    return fn();
  }

  getById(id: number): Promise<Task>{
    return this.storage.get(`tasks.${id}`); //exemplo: task.45657687 
  }

  create(task: Task): Promise<Task>{
    return this.storage.set(`tasks.${task.id}`, task);
  }

  update(task: Task): Promise<Task>{
    return this.create(task);
  }

}

function fn() {
  return this.storage.ready()
    .then((localForage: LocalForage) => {
      let tasks: Task[] = [];
      return this.storage.forEach((task: Task, key: string, iterationNumber: number) => {
        if (key.indexOf('tasks.') > -1) {
          tasks.push(task);
        }
      }).then(() => tasks);
    }).catch(err => console.log("Erro ao abrir o storage: ", err));
}

