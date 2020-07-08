import {SHOW_MORE_CARDS_BUTTON} from '../constants/constants.js';



export function renderLoader(isLoading){
    if (isLoading){
        document.querySelector('.preloader').setAttribute('style', 'display:block');
        document.querySelector('.cards').setAttribute('style', 'display:none');
    }
    else{
        document.querySelector('.preloader').setAttribute('style', 'display:none');
    }
}

export function showMoreCardsButton(cards, counter){
    if(counter + 3 >= cards){
        SHOW_MORE_CARDS_BUTTON.classList.remove('.cards__button-active');
    }
    else{
        SHOW_MORE_CARDS_BUTTON.classList.add('.cards__button-active');
    }
}