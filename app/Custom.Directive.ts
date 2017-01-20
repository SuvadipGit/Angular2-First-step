import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
	selector:'[customdirective]',
	host:{
		'(focus)':'customFocus()',
		'(blur)':'customBlur()'
	}
})
export class CustomDirective{	
	constructor(private _el:ElementRef, private _renderer: Renderer){
	}
	customFocus(){
		this._renderer.setElementStyle(this._el.nativeElement,'background-color','cyan');
	}
	customBlur(){
		this._renderer.setElementStyle(this._el.nativeElement,'background-color','grey');
	}
}
