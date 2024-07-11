import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { catchError, throwError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class WidgetDataService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Task[]>(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3`).pipe(
      catchError((err)=>{
        console.log('error in get load method',err);
        // throw new Error(err) 
        // return throwError(()=>err)
         return throwError(()=> new Error("couldn't load data ..."))
        
      })
    )
  }

  addTaskSync(task: Task): Task | never {
    if (task.id === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
