import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  arralyList : any = [
    {
      name : 'Wordpress',
      number : 80,
      nivel : 'Azanzado'
    },
    {
      name : 'HTML',
      number : 80,
      nivel : 'Azanzado'
    },
    {
      name : 'CSS',
      number : 80,
      nivel : 'Azanzado'
    },
    {
      name : 'JavaScript',
      number : 60,
      nivel : 'Intermedio'
    },
    {
      name : 'Angular',
      number : 60,
      nivel : 'Intermedio'
    },
    {
      name : 'Typescript',
      number : 60,
      nivel : 'Intermedio'
    },
    {
      name : 'React',
      number : 20,
      nivel : 'Basso'
    },
    {
      name : 'Bootstrap',
      number : 50,
      nivel : 'Intermedio'
    },
    {
      name : 'Java',
      number : 50,
      nivel : 'Intermedio'
    },
    {
      name : 'MySQL',
      number : 50,
      nivel : 'Intermedio'
    },
    {
      name : 'Figma',
      number : 70,
      nivel : 'Intermedio'
    }
  ]
}
