export const numberValidation = size =>{
    if(!size) {
        return false;
    }else if (!new RegExp(/[0-9]+/).test(size)) {
        return false;
    }

}