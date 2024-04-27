import { Component } from '@angular/core';
import { Tecnologie } from '../formazione/formazione.component';
import { NgFor, NgIf } from '@angular/common';

export interface Progetti{
  title:string,
  image:string,
  description:string
  tecnologie: Tecnologie[]
  site?:string
}

@Component({
  selector: 'app-progetti',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './progetti.component.html',
  styleUrl: './progetti.component.css'
})
export class ProgettiComponent {


  progetti: Progetti[] = [
    {
      title:'Stucampus',
      image:'https://stucampus.com/wp-content/uploads/2022/12/stucampus.png',
      description:"Progetto nato dall'idea di dare una mano a tutti gli universitari.",
      tecnologie: [
        { tecnologia: 'Html'},
        { tecnologia: 'Css'},
        { tecnologia: 'Javascript'},
        { tecnologia: 'Wordpress'},
      ],
      site:'https://stucampus.com/'
    },
    {
      title:'Portfolio',
      image:'https://stucampus.com/wp-content/uploads/2022/10/Immagine.png',
      description:'Il progetto iniziale sviluppato in Angular, il quale ha visto un costante miglioramento nel suo codice durante il corso del tempo.',
      tecnologie: [
        { tecnologia: 'Html'},
        { tecnologia: 'Css'},
        { tecnologia: 'Angular'},
        { tecnologia: 'Typescript'},
      ],
    },
    {
      title:'Todo-list',
      image:'https://stucampus.com/wp-content/uploads/2022/10/todo-list.png',
      description:"IN PROGRESS!  L'idea è utilizzare Angular per il frontend e SpringBoot per il backend. Il progetto prevede una funzionalità di login per gli utenti, permettendo loro di gestire i propri task personali. Inoltre, gli utenti avranno la possibilità di aggiungere altri utenti a ciascun task, rendendoli task condivisi. Sarà inoltre implementata la funzionalità di drag and drop per un'esperienza utente più intuitiva e interattiva.",
      tecnologie: [
        { tecnologia: 'Angular'},
        { tecnologia: 'Typescript'},
        { tecnologia: 'RxJs'},
        { tecnologia: 'Java'},
      ],
    }
  ]

}
