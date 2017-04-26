import { SampleService } from "../src/service";
import { TestBed, async, inject } from '@angular/core/testing'

export function main() {
    describe("Sample service", () => {

        TestBed.configureTestingModule({
            providers: [SampleService]
        });
        it('should work', inject([SampleService], (service: SampleService) => {
            expect(SampleService).toBeDefined();
            expect(service).toBeDefined();
            expect(service.title).toEqual("Sample service");
        }));
    });
}