import { Component} from 'react';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    const dataFromLocalStorage = localStorage.getItem('goods');

    console.log('Hello from DOM');

    const dataDisplay = document.createElement("div");
    dataDisplay.textContent = `Данные из localStorage: ${dataFromLocalStorage}`;
    document.body.appendChild(dataDisplay);

    const dataToSave = { goods: 'Ваши данные' };

    chrome.storage.local.set(dataToSave, function() {
        console.log('Данные сохранены в chrome.storage.local');
    });



    const dogImg: HTMLImageElement = document.createElement("img")
    dogImg.src = msg
    document.body.appendChild(dogImg)
})


