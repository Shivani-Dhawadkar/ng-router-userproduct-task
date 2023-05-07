import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  @Input() class ! : string

  constructor(private eleRef : ElementRef, private renderer:  Renderer2) { }
  ngOnInit():void {

  }

  @HostListener('click') onclick(){
    var ParentEle =this.eleRef.nativeElement as HTMLElement;
    if(ParentEle.className.includes('show')){
      ParentEle.lastElementChild?.classList.remove('show')
    }else{
      ParentEle.classList.add('show')
      ParentEle.lastElementChild?.classList.add('show')}
    }
    
  }