import React, { useEffect } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  // check if wallet is connected
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom Wallet Found!');
          const response = await solana.connect({ onlyIfTrusted: true });

          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
          // setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert("Phantom not found! You'll need Phantom to get started");
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Check if wallet is connected
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    // Run on load
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);


  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
