import { Refs } from "./Refs";

export function htmlCleaner() {
    Refs.list.innerHTML = '';
};

export function inputCleaner() {
    Refs.input.value = '';
}