import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Task } from './../../models/task.model';

@Injectable()
export class TaskService {

  constructor(
    public storage: Storage
  ) { }

  getAll(reserve?: boolean): Promise<Task[]> {
    
    return this.storage.ready()
      .then((localForage: LocalForage) => {

        let tasks: Task[] = [];

        return this.storage.forEach((task: Task, key: string, iterationNumber: number) => {
          
          if (key.indexOf('tasks.') > -1) {
            tasks.push(task);
          }

        }).then(() => (!reserve) ? tasks : tasks.reverse());

      });

  }

  getById(id: number): Promise<Task> {
    return this.storage.get(`tasks.${id}`); //exemplo: task.45657687 
  }

  create(task: Task): Promise<Task> {
    return this.storage.set(`tasks.${task.id}`, task);
  }

  update(task: Task): Promise<Task> {
    return this.create(task);
  }

  delete(id: number): Promise<boolean> {
    return this.storage.remove(`tasks.${id}`).then(() => true);
  }

}