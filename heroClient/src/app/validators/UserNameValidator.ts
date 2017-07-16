import {FormControl} from '@angular/forms';
export class UserNameValidator{

    static checkForSpaceInUserName(control: FormControl){
        if (control.value.indexOf(' ') >= 0) {
            return{cannotContainSpace: true};
        }
        return null;
    }
    static shouldbeUnique(control: FormControl){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value === "Hitesh"){
                resolve({"uniqueConstraintViolation":true});
                }
                else {
                resolve(null);
                }
        }, 3000);
        });
    }


}