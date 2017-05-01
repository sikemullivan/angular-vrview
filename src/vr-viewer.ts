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

    constructor(ref: ElementRef) {
        this.elem = ref.nativeElement;
    }

    ngAfterContentInit() {
        this._v = new VRView.Player('#' + this.elem.id, {
            video: 'link/to/video.mp4',
            is_stereo: true
        }); 
    }

}
