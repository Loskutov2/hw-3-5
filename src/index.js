import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});


const keys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'P'];
const key = document.querySelector('#key')
const newGameBtn = document.querySelector('#newGameButton')
let currentKeyIndex = '-'

newGame()

function error() {
    alert({
        text: 'wrong',
        addClass: 'PNotifyNotise',
        delay: 750
    })
}

function newGame(){
    currentKeyIndex=keys[Math.floor(Math.random() * 10)]
    key.textContent=currentKeyIndex
}

function keydown(e) {
    if(e.code===`Key${currentKeyIndex}`){
        newGame()
    }
    else{
        error()
    }
}

window.addEventListener('keydown', keydown)

newGameBtn.addEventListener('click', newGame)