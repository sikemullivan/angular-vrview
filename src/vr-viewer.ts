import {
    Component,
    ElementRef,
    AfterContentInit,
    ViewEncapsulation
} from '@angular/core';

declare let VRView;
declare let Player;

@Component({
    selector: 'vr-viewer',
    encapsulation: ViewEncapsulation.None,
    template: `<ng-content></ng-content>`,
    styles: [ `
    
    ` ],
    providers: [  ]
})
export class VrViewer implements AfterContentInit {
    elem: HTMLElement;
    private _v : any;

    video = null; 

    constructor(ref: ElementRef) {
        this.elem = ref.nativeElement;
    }

    ngAfterContentInit() {
        if(this.video != null){
            this._v = new VRView.Player('#' + this.elem.id, {
                video: this.video,
                is_stereo: true
            }); 
        }
    }

}
