import { Injectable } from '@angular/core';
import { Blockchain, Block, Transaction } from 'SavjeeCoin/src/blockchain';
import EC from 'elliptic';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService{
	public blockchainInstance = new Blockchain();
  public walletKeys: Array<IWalletKey> = [];

  constructor() {
  	this.blockchainInstance.difficulty = 1;
  	this.blockchainInstance.minePendingTransactions('hi');
    this.generateWalletKeys();
  }

  generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),
    });

    console.log(this.walletKeys);
  }
}

export interface IWalletKey{
  keyObj: any;
  publicKey: string;
  privateKey: string;
}