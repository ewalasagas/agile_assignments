import {AbstractControl, ValidationErrors} from "@angular/forms";

export class PasswordValidators {
    //for old password check
    static checkOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === '1234')
                    resolve({checkOldPassword: false});
                else resolve(null);
            }, 2000);
        });
    }

    static confirmTwoPassword(control: AbstractControl) : ValidationErrors | null {
        //incorrect
        console.log('test');
        return null;
        // if('newpassword()' === 'confirmpassword()') {
        //     return {confirmTwoPassword: false}
        // }
        // return null;
    }
}