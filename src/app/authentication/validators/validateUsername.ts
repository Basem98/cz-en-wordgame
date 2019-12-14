import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isValidUsername(): ValidatorFn {
    return function(control: AbstractControl): { [key: string]: Boolean } | null {
        if (!control.value.match(/^\w{6,12}/g)) {
            return { 'invalid': true }
        };
        return null;
    };
}