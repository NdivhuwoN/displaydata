import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from './client';
import { Enumerable } from 'sharp-collections';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 1, name: 'Norma Mngoma',email:'teap12@gmail.com',status:'Active' },
      { id: 2, name: 'Thabelo Mulalo',email:'teap2@gmail.com',status:'Active' },
      { id: 3, name: 'Lufuno Tshilidzi' ,email:'teap21@gmail.com',status:'Active'},
      { id: 4, name: 'Khathu mulelu',email:'teap123@gmail.com' ,status:'Disabled'},
      { id: 5, name: 'Mosia Maa',email:'teap33333@gmail.com' ,status:'Active'},
      { id: 6, name: 'Daving King',email:'teap777@gmail.com',status:'Active' },
      { id: 7, name: 'Lormbad matshinge' ,email:'teadddp@gmail.com',status:'Disabled'},
      { id: 8, name: 'Apostle Stanley Mokwelele' ,email:'teaddp@gmail.com',status:'Disabled'},
      { id: 9, name: 'Joseph Koffe',email:'teapddd@gmail.com',status:'Active' }
    ];

const enumerable = Enumerable.from(clients); 

const activeclients = enumerable.where(x => x.status == 'Active');
    return activeclients;
  }

  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 1;
  }
}