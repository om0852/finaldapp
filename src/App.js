import logo from './logo.svg';
import './App.css';
import {Web3} from 'web3';
// import ethers from 'ethers'
import React from 'react';
import Auction from './static/Auction.json';
import { useState } from 'react';
// import { Component } from 'react';
function App (){
  const [myContract,setmyContract]=useState(null);
const numberSet = async()=>{
  const web3  = new Web3(window.ethereum);
  console.log(web3)
  const myContractq  =new web3.eth.Contract(Auction,"0xdf655F272f5Fa1A97808B3bAeF92b2923B7e9970")
  setmyContract(myContractq);
  console.log(myContract);
  // const gas = await myContract.methods.setno(210).estimateGas();
  // const post = await myContract.methods.setno(210).send({
  //   from: "0x8eAc8b24ac81D0BA0dc21f33d14321b28Bd2b971",
  //   gas,
  // });
}
const  getdata = async()=>{  
  const data = await myContract.methods.getno().call();
  console.log(data.toString());
  // console.log(post)

}
    return (
      <div className="App">
    <img scr="./static/watch.jpg"/>
    <input type="text"></input>
    {/* <button onClick={putBitFun}>click</button> */}
    <button onClick={numberSet}>number</button>
    <button onClick={getdata}>get number</button>

    </div>
  );
}

export default App;
