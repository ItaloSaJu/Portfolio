import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  arralyList : any = [
    {
      name : 'HTML',
      number : 80
    },
    {
      name : 'CSS',
      number : 80
    },
    {
      name : 'Wordpress',
      number : 80
    },
    {
      name : 'Angular',
      number : 60
    },
    {
      name : 'Typescript',
      number : 60
    },
    {
      name : 'React',
      number : 20
    },
    {
      name : 'Bootstrap',
      number : 50
    },
    {
      name : 'Java',
      number : 10
    },
    {
      name : 'Figma',
      number : 80
    }
  ]
  numer:number = 0
  html : string = ''

  ngOnInit(): void {
  }

  s(){
    this.arralyList.number = 59
    this.html = 'avanzado'
  }

}
