import logo from './logo.svg';
import './App.css';
import {Web3} from 'web3';
// import ethers from 'ethers'
import React from 'react';
import Auction from './static/Auction.json';
import { useState } from 'react';
// import { Component } from 'react';
function App (){
  var myContract;
  const [nweb,setnweb] = useState(null);
  const web3 = new Web3(window.ethereum);
  async function handle(){
    // const web3 = new Web3(App.web3Provider);
    // const web3 = new Web3("http://127.0.0.1:7545");
    console.log(web3)
    //
    // console.log(await myContract.methods.highestbid().call())
  }
  handle();
  const putBitFun=async(e)=>{
    e.preventDefault();
    console.log(await myContract.methods.putbid().send({from:"0x9A91AC426671bCfeBa608C867DF5f46ce58D733b",gas:100000000000000,value: 1000000000000000000 }))
    console.log(await myContract.methods.highestbid().call());
    // console.log(await myContract.methods.highestbidderdetail().call());
    // const web3 = new Web3(new Web3.providers.HttpProvider( "http://127.0.0.1:7545"))
    // var myContract   =  new web3.eth.Contract(deom.abi,deom.networks[5777].address)

}
const numberSet = async (t) => {
  t.preventDefault();
  
    // const web3 = new Web3(new Web3.providers.HttpProvider(window.etherum))
    console.log( await web3.eth.getAccounts());
    
     myContract   =  new web3.eth.Contract(Auction,"0x07Fc79A810C276B7Bb6798bE67cf3BF248d99c2ds")
console.log(myContract)
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  // Get permission to access user funds to pay for gas fees
  const gas = await myContract.methods.setno(20).estimateGas();
  const post = await myContract.methods.setno(20).send({
    from: "0x8eAc8b24ac81D0BA0dc21f33d14321b28Bd2b971",
    gas,
  });

  const data = await myContract.methods.getchai().call();
  console.log(data);
  console.log(post)
};


    return (
      <div className="App">
    <img scr="./static/watch.jpg"/>
    <input type="text"></input>
    <button onClick={putBitFun}>click</button>
    <button onClick={numberSet}>number</button>

    </div>
  );
}

export default App;
