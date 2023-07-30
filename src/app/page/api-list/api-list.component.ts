import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/services/apiInterface';
import { GetApiService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
})
export class ApiListComponent implements OnInit {
  usersList: users[] = [];
  constructor(private api: GetApiService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.api.getAll().subscribe(data => {
      for (const item of data as any) {
        this.usersList.push({
          id: item.id,
          name: item.name,
          email: item.email,
        });
      }
    });
  }
}
