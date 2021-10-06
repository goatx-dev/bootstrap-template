import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
    eventClick: this.handleEventClick.bind(this),
    themeSystem: 'bootstrap',
    events: [
      { title: 'Red Event', date: '2021-10-01', color: '#ff0000', textColor: '#FFFFFF'},
      { title: 'Green Event', date: '2021-10-02', color: '#00ff00', textColor: '#000000'}
    ],
    editable: true,
    droppable: true,
  };

  handleDateClick(arg: any) {
   // do work here on the event
   console.log(arg)
  }

  handleEventClick(arg: any)
  {
    console.log(arg)
  }
  constructor() { }


  ngOnInit() {
   
    
  }

}