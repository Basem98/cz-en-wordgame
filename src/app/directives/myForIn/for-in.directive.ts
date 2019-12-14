import { Directive, OnInit, OnChanges, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myForIn]'
})
export class ForInDirective implements OnInit, OnChanges{
  @Input() myForIn: [];
  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit () {
    this.vcr.createEmbeddedView(this.templateRef);
  }

  ngOnChanges() {
    for (let elm in this.myForIn) {
      this.vcr.createEmbeddedView(this.templateRef, {$implicit: elm});
    }
  }

  

  
}
