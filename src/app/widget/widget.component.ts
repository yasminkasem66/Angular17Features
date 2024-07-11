import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { catchError, Observable, of, tap } from 'rxjs';
import { WidgetDataService } from './services/widget-data.service';
import { WidgetErrorComponent } from './widget-error/widget-error.component';
import { Task } from './model/task.model';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDividerModule, MatButtonModule, WidgetErrorComponent],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  error: Error | null = null;

  constructor(private widgetData: WidgetDataService) { }

  ngOnInit(): void {
    this.tasks$ = this.widgetData.load().pipe(
      tap({
        error:(err)=>{
           this.error=err 
           console.log('Component');
            // throw(err)

          }
      }),
      catchError((err)=>of([])) 
    );
  }

  addTask() {
   // unreliable method
  //  ({} as any).someMethod();
   try{// try catch wrk only with sync operation

    setTimeout(() => {
      this.widgetData.addTaskSync({ id: 0, title: 'New Task' });
    }, 1000);
  }catch(error){
    if(error instanceof Error){
      this.error=error; 
      throw(error)
    }
  }
  }
}
