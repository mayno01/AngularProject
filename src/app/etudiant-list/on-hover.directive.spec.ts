import { OnHoverDirective } from './on-hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('OnHoverDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const renderer2Mock = {} as Renderer2;

    const directive = new OnHoverDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });
});