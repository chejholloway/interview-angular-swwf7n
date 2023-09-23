import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { Image } from '../types/Image';

@Directive({
  selector: '[appImageList]',
})
export class ImageListDirective implements OnInit {
  @Input() appImageList: Image[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.appImageList.forEach((image) => {
      const context = {
        $implicit: image,
      };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    });
  }
}
