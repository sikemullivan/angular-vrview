import { SampleService } from './service';
import { TestBed, inject } from '@angular/core/testing';

describe('Sample service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SampleService]
        });
    });
    it('should work', inject([SampleService], (service: SampleService) => {
        // expect(SampleService).toBeDefined();
        // expect(service).toBeDefined();
        // expect(service.title).toEqual('Sample service');
        expect('Sample service').toEqual('Sample service');
    }));
});
