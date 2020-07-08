import {newsCardList, input, button, phrase} from '../../index.js';

export default class SearchInput{
    constructor(phrase){
     this.phrase = phrase;
    }

    validate(keyword){
        if(keyword.length === 0){
            document.querySelector('.input-error').setAttribute('style', 'display:block');
        }
        else{
            document.querySelector('.input-error').setAttribute('style', 'display:none');
            newsCardList.createNews(phrase);
        }
    }

    inputBlock(){
        input.setAttribute('disabled', true);
        button.setAttribute('disabled', true);
    }

    inputUnlock(){
        input.removeAttribute('disabled', true);
        button.removeAttribute('disabled', true);
    }
}