import { NgModule,Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VrViewer } from './vr-viewer';

// components
export * from './vr-viewer';

/**
 * @internal
 */
export function coreDirectives() {
    return [
        VrViewer
    ];
}

export function coreServices(): Provider[] {
    return [
        
    ];
}

@NgModule({
    declarations: coreDirectives(),
    exports: coreDirectives(),
    providers: coreServices()
})
export class VrViewerModule {
}
