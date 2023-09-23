import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appImageList]',
})
export class ImageListDirective implements OnInit {
  @Input() appImageList: any[];

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
