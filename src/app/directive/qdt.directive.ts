import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { QlikService } from '../services/qlik.service';
import { IQlikService } from '../shared/types';

@Directive({
  selector: '[qdt]',
})
export class QdtDirective implements OnInit {
  @Input()
  component!: string;

  @Input()
  props: object = {};

  private readonly elementRef: ElementRef<any>;

  private readonly qlik: IQlikService;

  constructor(elementRef: ElementRef, qlik: QlikService) {
    this.elementRef = elementRef;
    this.qlik = qlik;
  }

  ngOnInit(): void {
    this.qlik.qdt.render(
      this.component,
      this.props,
      this.elementRef.nativeElement
    );
  }
}
