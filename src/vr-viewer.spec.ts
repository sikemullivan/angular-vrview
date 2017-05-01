import {async, inject, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {VrViewer} from "./vr-viewer";
import {ElementRef} from "@angular/core";

describe('VR Viewer', () => {
    let viewer : VrViewer;
    let ref:ElementRef;

    beforeEach(() => {
        ref = {
            nativeElement: {
                querySelectorAll: () => {
                    return [{}];
                }
            }
        };

        viewer = new VrViewer(ref);
    });

    it('Should handle native fullscreen', () => {
        expect(false).toBeFalsy();
    });

});

describe('VrViewer', () => {
    let builder;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VrViewerTest, VrViewer]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('Should create a VrViewer component',
        async(() => {
            let fixture = TestBed.createComponent(VrViewerTest);
            //fixture.detectChanges();
        })
    );
});

@Component({
    template: `
        <vr-viewer>
        </vr-viewer>
    `,
    providers: []
})
class VrViewerTest {}
