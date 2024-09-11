import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const dogSrc: string = 'https://forum.remnote.io/uploads/default/original/2X/4/493575ab42c635f6a5ffb553018805920cdb17d4.gif'

  const handleClick = async() => {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});

    console.log(tabs)

    const activeTab: any = tabs[0];

    console.log(activeTab);

    chrome.tabs?.sendMessage(activeTab?.id || 0, dogSrc)

    // const fromPageLocalStore = await chrome.tabs?.executeScript(activeTab?.id, { code: `localStorage['goods']` })
    //
    // await chrome.storage.local.set({['goods']:fromPageLocalStore[0]})

    }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick} className="App-button">Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
