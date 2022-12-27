import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client: Client = {
    id: 1,
    name: 'Vhutshilo nthangeni',
    email:'tepzaa@gmail.com',
    status: 'Active',


  };

  constructor() { }

  ngOnInit(): void {
  }

}