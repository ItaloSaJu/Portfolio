import { style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('aspan') span!: ElementRef;
  @ViewChild('developer2') developer2!: ElementRef;
  @ViewChild('developer3') developer3!: ElementRef;
  @ViewChild('deveCont') deveCont!: ElementRef;
  @ViewChild('deveimg') deveimg!: ElementRef;
  @ViewChild('devetitle') devetitle!: ElementRef;

  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('portfoli') portfoli!: ElementRef;

  constructor( private renderer : Renderer2) { }

  /*@HostListener("window:scroll", ['$event'])
  onWindowScroll( ) {
  if(window.screenY = 100){
    const number = document.body.scrollTop
    if(number > 100){

      console.log('hola')
    }
  }

}*/
@HostListener('window:scroll', ['$event'])
onWindowScroll(e : any) {
  const portfolio = this.portfolio?.nativeElement;
  const portfoli = this.portfoli?.nativeElement;
  if(e.target['scrollingElement'].scrollTop > 500){
    this.renderer.setStyle(portfolio, 'display' , 'none' )
    this.renderer.setStyle(portfoli, 'display' , 'flex' )
  }

  // Your Code Here

}

  frontend: string [] = ['I','T','A','L','O']
  developer: string [] = ['J','U','L','I','A','N']
  public img : any = 'https://stucampus.com/wp-content/uploads/2022/10/Group-2.png';

  ngOnInit(): void {

    //let path :any= document.querySelector('path')
    //let pathLeng : any= path.getTotalLength()

    //path.style.strokeDasharray = pathLeng + ' ' + pathLeng;
    //path.style.strokeDasharray = pathLeng ;
    //let img  = document.getElementById('img')as HTMLElement

    //let scroll = function(){}
    /*window.addEventListener('scroll', function () {
      img.style.scale = 100 - + window.pageYOffset/12 + `%`;
      img.style.left = '0px'
      img.style.transition = '1s'

    })*/

    this.renderer.listen('document', 'scroll', (e)=>{
     // console.log(e.path.window.pageYOffset)
    })


  }

  change(){
    const developer2 = this.developer2?.nativeElement;
    const developer3 = this.developer3?.nativeElement;
    const deveCont = this.deveCont?.nativeElement;
    const deveimg = this.deveimg?.nativeElement;
    const devetitle = this.devetitle?.nativeElement;
    const section2 = this.section2?.nativeElement;
    this.renderer.setStyle(developer2, 'width' , '30%' )
    this.renderer.setStyle(developer2, 'transition' , '1s' )
    this.renderer.setStyle(deveCont, 'height' , '70%' )
    this.renderer.setStyle(deveCont, 'transition' , '1s' )
    this.renderer.setStyle(developer3, 'width' , '50%' )
    this.renderer.setStyle(developer3, 'transition' , '1s' )
    this.renderer.setStyle(deveimg, 'width' , '23%' )
    this.renderer.setStyle(deveimg, 'transition' , '1s' )
    this.renderer.setStyle(deveimg, 'height' , '70%' )
    this.renderer.setStyle(deveimg, 'transition' , '1s' )
    this.renderer.setStyle(devetitle, 'left' , '190px' )
    this.renderer.setStyle(devetitle, 'transition' , '1s' )
    this.renderer.setStyle(section2, 'display' , 'flex' )


  }


}
function onWindowScroll() {
  throw new Error('Function not implemented.');
}


