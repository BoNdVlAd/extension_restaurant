import {Component} from 'react';

chrome.runtime?.onMessageExternal.addListener((message, sender, sendResponse) => {
    if (message.type === 'FROM_REACT_SITE') {
        chrome.storage.local.set({goods: JSON.stringify(message.data)});
    }
});
