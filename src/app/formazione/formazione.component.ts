import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

export interface Esperienza {
  title: string;
  inzio: string;
  fine?: string;
  imageLogo:string
  description: Description;
  type: 'esperienza' | 'formazione';
}

export interface Description {
  description1?: string;
  description2?: string;
  description3?: string;
  tecnologie1?: Tecnologie[];
  tecnologie2?: Tecnologie[];
  tecnologie3?: Tecnologie[];
}

export interface Tecnologie {
  tecnologia?: 'Html' | 'Css' | 'Javascript'| 'Boostrap'| 'Angular'| 'Typescript'| 'RxJs'| 'Ionic'| 'MySql'| 'Java'| 'Wordpress'| 'Figma';
}
@Component({
  selector: 'app-formazione',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './formazione.component.html',
  styleUrl: './formazione.component.css',
})
export class FormazioneComponent implements OnInit {
  @ViewChild('esperienzaId') esperienzaId!: ElementRef;
  @ViewChild('formazioneId') formazioneId!: ElementRef;

  constructor(private renderer: Renderer2) {}

  newArrayEsperienzaFormazione: Esperienza[] = [];
  esperienzaFormazione: Esperienza[] = [
    {
      imageLogo:'./assets/img/ennova.jpg',
      title: 'Ennova Research',
      inzio: '2023 - 05, Milano, Italia',
      fine: 'Presente',
      description: {
        description1:
          '1° progetto : Migrazione del sito aziendale al CMS Wordpress.',
        description2: '2° progetto : Bug fixing lato frontend e backend.',
        description3:
          "3° progetto : Ho fatto parte del team frontend in cui ho contribuito alla realizzazione di diverse pagine del sito e all'integrazione di API.",
        tecnologie1: [
          { tecnologia: 'Html' },
          { tecnologia: 'Css' },
          { tecnologia: 'Javascript' },
          { tecnologia: 'Wordpress' },
        ],
        tecnologie2: [
          { tecnologia: 'Angular' },
          { tecnologia: 'Java', },
        ],
        tecnologie3: [
          { tecnologia: 'Angular' },
          { tecnologia: 'Typescript', },
          { tecnologia: 'RxJs', },
          { tecnologia: 'Ionic', },
        ],
      },
      type: 'esperienza',
    },
    {
      imageLogo:'./assets/img/icat.jpg',
      title: 'Gruppo Icat - Stage',
      inzio: '2022 - 04, Milano, Italia',
      fine: '2022 - 07',
      description: {
        description1:
          'Stage curriculare di 500 ore',
        description2: 'Realizzazione di pagine custom in wordpress.',
        tecnologie2: [
          { tecnologia: 'Html' },
          { tecnologia: 'Css' },
          { tecnologia: 'Javascript' },
          { tecnologia: 'Wordpress' },
        ]
      },
      type: 'esperienza',
    },
    {
      imageLogo:'./assets/img/formatemp.png',
      title: 'FormaTemp / Full Stack Developer',
      inzio: '2022 - 10, Milano, Italia',
      fine: ' 2022 - 11',
      description: {
        description1:
          'Corso della durata di 500 ore.',
        description2: 'Linguaggi di programmazione frontend e backend, più centrato sul Backend con Java ',
        tecnologie2: [
          { tecnologia: 'Angular' },
          { tecnologia: 'Java' },
        ]
      },
      type: 'formazione',
    },
    {
      imageLogo:'./assets/img/formatemp.png',
      title: 'FormaTemp / Full Stack Developer',
      inzio: '2022 - 09, Milano, Italia',
      fine: ' 2022 - 10',
      description: {
        description1:
          'Corso della durata di 500 ore.',
        description2: 'Linguaggi di programmazione frontend e backend, più centrato sul frontend con Angular ',
        tecnologie2: [
          { tecnologia: 'Angular' },
          { tecnologia: 'Java' },
        ]
      },
      type: 'formazione',
    },
    {
      imageLogo:'./assets/img/ifts.jpg',
      title: 'IFTS / Full Stack Developer',
      inzio: ' 2021 - 11, Milano, Italia',
      fine: '2022 - 07',
      description: {
        description1:' Corso della durata di 1000 ore di cui la metà in stage presso un azienda.',
        description2: 'Linguaggi di programmazione frontend e backend.',
        tecnologie2: [
          { tecnologia: 'Html' },
          { tecnologia: 'Css' },
          { tecnologia: 'Javascript' },
          { tecnologia: 'MySql' },
          { tecnologia: 'Wordpress' },
        ]
      },
      type: 'formazione',
    },
    {
      imageLogo:'./assets/img/isotipo.png',
      title: 'EDTeam / Autonomo',
      inzio: 'Corsi Online',
      description: {
        description1: 'Primo approccio al mondo della programazione.',
        tecnologie1: [
          { tecnologia: 'Html' },
          { tecnologia: 'Css' },
          { tecnologia: 'Javascript' },
          { tecnologia: 'Wordpress' },
        ]
      },
      type: 'formazione',
    },
  ];

  ngOnInit(): void {
    this.esperienza();
  }

  esperienza() {
    this.newArrayEsperienzaFormazione = this.esperienzaFormazione.filter((x: Esperienza) => {
      return x.type === 'esperienza';
    });
    const esperienza = this.esperienzaId?.nativeElement;
    this.renderer.setStyle(esperienza, 'border', '2px solid #F47A04');

    const formazione = this.formazioneId?.nativeElement;
    this.renderer.setStyle(formazione, 'border', '1px solid grey');
  }

  formazione() {
    this.newArrayEsperienzaFormazione = this.esperienzaFormazione.filter((x: Esperienza) => {
      return x.type === 'formazione';
    });

    const formazione = this.formazioneId?.nativeElement;
    this.renderer.setStyle(formazione, 'border', '2px solid #F47A04');

    const esperienza = this.esperienzaId?.nativeElement;
    this.renderer.setStyle(esperienza, 'border', '1px solid grey');
  }

  ngAfterViewInit() {
    this.esperienza();
  }
}
