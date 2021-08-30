
import { error } from '@pnotify/core/dist/PNotify';
 
export function errorNotice() {
    
    return error({
        text: 'To many matches found. Please enter a more specific query!',
        sticker: false,
        delay: 2000
    });
};