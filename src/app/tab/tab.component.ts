import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  links = ['All', 'Active', 'Completed'];
  activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
