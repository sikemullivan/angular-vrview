import {Injectable} from '@angular/core';

@Injectable()
export class SampleService {
    public title = 'Sample service';

    constructor() {
        console.log('hello from sample service');
    }
}