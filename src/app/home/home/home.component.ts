
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  @ViewChild('aspan') span!: ElementRef;
  @ViewChild('developer2') developer2!: ElementRef;
  @ViewChild('developer3') developer3!: ElementRef;
  @ViewChild('deveCont') deveCont!: ElementRef;
  @ViewChild('deveimg') deveimg!: ElementRef;
  @ViewChild('devetitle') devetitle!: ElementRef;

  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('portfoli') portfoli!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  @ViewChild('menus') menus!: ElementRef;
  @ViewChild('chiudis') chiudis!: ElementRef;
  @ViewChild('formazione') formazione!: ElementRef;
  @ViewChild('prog') prog!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('forms') forms!: ElementRef;
  @ViewChild('spans') spans!: ElementRef;
  @ViewChild('remove') remove!: ElementRef;

  constructor( private renderer : Renderer2) { }


/*@HostListener('window:scroll', ['$event'])
onWindowScroll(e : any) {
  const portfolio = this.portfolio?.nativeElement;
  const portfoli = this.portfoli?.nativeElement;
  if(e.target['scrollingElement'].scrollTop > 100){
    this.renderer.setStyle(portfolio, 'bottom' , '140%' )
    this.renderer.setStyle(portfoli, 'display' , 'flex' )
    this.renderer.setStyle(portfoli, 'right' , '-189px' )
  }

  // Your Code Here

}*/


  ngOnInit(): void {


  }



  menu(){
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '40%' )

    const formazione = this.formazione?.nativeElement;
    this.renderer.setStyle(formazione, 'left' , '-100%' )

    const prog = this.prog?.nativeElement;
    this.renderer.setStyle(prog, 'left' , '-100%' )

    const skills = this.skills?.nativeElement;
    this.renderer.setStyle(skills, 'left' , '-100%' )

    const forms = this.forms?.nativeElement;
    this.renderer.setStyle(forms, 'left' , '-100%' )
  }
  chiudi(){
    console.log('hols');
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '100%' )


  }

  change(){
    const content = this.content?.nativeElement;
    const developer2 = this.developer2?.nativeElement;
    const developer3 = this.developer3?.nativeElement;
    const deveCont = this.deveCont?.nativeElement;
    const deveimg = this.deveimg?.nativeElement;
    const devetitle = this.devetitle?.nativeElement;
    const portfolio = this.portfolio?.nativeElement;
    const portfoli = this.portfoli?.nativeElement;
    const spans = this.spans?.nativeElement;
    const remove = this.remove?.nativeElement;
    this.renderer.setStyle(content, 'top' , '0px' )
    this.renderer.setStyle(content, 'transition' , '1s' )
    this.renderer.setStyle(developer2, 'width' , '30%' )
    this.renderer.setStyle(developer2, 'transition' , '1s' )
    this.renderer.setStyle(deveCont, 'height' , '70%' )
    this.renderer.setStyle(deveCont, 'transition' , '1s' )
    this.renderer.setStyle(developer3, 'width' , '50%' )
    this.renderer.setStyle(developer3, 'transition' , '1s' )
    this.renderer.setStyle(deveimg, 'width' , '21%' )
    this.renderer.setStyle(deveimg, 'transition' , '1s' )
    this.renderer.setStyle(deveimg, 'height' , '71%' )
    this.renderer.setStyle(deveimg, 'transition' , '1s' )
    this.renderer.setStyle(devetitle, 'left' , '190px' )
    this.renderer.setStyle(devetitle, 'transition' , '1s' )

    this.renderer.setStyle(spans, 'display' , 'flex' )
    this.renderer.setStyle(portfolio, 'bottom' , '140%' )
    this.renderer.setStyle(portfoli, 'display' , 'flex' )
    this.renderer.setStyle(portfoli, 'right' , '-189px' )
    this.renderer.setStyle(remove, 'display' , 'none' )


  }
  forma(){
    console.log('hol')
    const formazione = this.formazione?.nativeElement;
    this.renderer.setStyle(formazione, 'left' , '-10%' )
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '100%' )
  }

  pro(){
    const prog = this.prog?.nativeElement;
    this.renderer.setStyle(prog, 'left' , '-10%' )
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '100%' )

  }

  skil(){
    const skills = this.skills?.nativeElement;
    this.renderer.setStyle(skills, 'left' , '-10%' )
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '100%' )

  }

  form(){
    const forms = this.forms?.nativeElement;
    this.renderer.setStyle(forms, 'left' , '-10%' )
    const menus = this.menus?.nativeElement;
    this.renderer.setStyle(menus, 'left' , '100%' )

  }

}




