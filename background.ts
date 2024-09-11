import { Component} from 'react';

// background.js
chrome.runtime?.onMessageExternal.addListener((message, sender, sendResponse) => {
    if (message.type === 'FROM_REACT_SITE') {
        console.log('Получено сообщение от сайта:', message.data);
        sendResponse({ status: 'ok', data: 'Сообщение получено' });
    }
    console.log('hello world!');
});
