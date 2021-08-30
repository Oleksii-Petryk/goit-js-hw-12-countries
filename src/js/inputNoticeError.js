import { error } from '@pnotify/core/dist/PNotify';

export function inputNoticeError() {
    return error({
        text: 'Wrong input value or country no found',
        sticker: false,
        delay: 5000
    });
};