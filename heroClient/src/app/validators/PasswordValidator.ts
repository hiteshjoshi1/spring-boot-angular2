import {FormControl} from '@angular/forms';

export class PasswordValidator {
    static passwordCheck(control: FormControl) {
          return new Promise((resolve, reject) => {
            setTimeout(function(){
                console.log(control.value);
                if(control.value != "Hitesh") {
                resolve({"incorrect":true});
                }
                else {
                resolve(null);
                }
        }, 3000);
        });
    }
}