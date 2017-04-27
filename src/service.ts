import {Injectable} from '@angular/core';

@Injectable()
export class SampleService {
    public title = 'Sample service';

    constructor() {
        console.log('hello from sample service');
        console.log('hello from sample service 2');
    }
}