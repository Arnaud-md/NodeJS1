import {readJsonSync} from 'fs-extra';
import 'dotenv/config';
/*console.log('Hello world');
if(process.argv.includes("--help")) {
    console.log("je vais vous aider");
}
for(let i=0;i<process.argv.length;i++) {
    if(process.argv[i]=="--name"){
        console.log("Bonjour ", process.argv[i+1]);
    }
}
interface IPersonne {
    name:string,
    prenom:string,
    age:number,
    sexe:string
};
const p:IPersonne={name:"Laforgue",prenom:"Arnaud",age:42,sexe:"masculin"};
console.log(p);
p.name="Laforge";
p.prenom="Thomas";
console.log(p);
const p2={...p,name:"Amish",prenom:"Fatir"};
console.log(p2);

const p3 = readJsonSync('./personne.json');
console.log(p3);
console.log(`Bonjour ${process.env.USER_NAME}`);*/
import express from 'express';
import fs from 'fs-extra';
//const express = require('express')
const app = express();
const port = 3001;
const date = Date();
const user = {
    name:"Thomas"
}
const file = './toto.txt';
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/toto', (req, res) => {
    res.send('toto');
})

app.get('/date', (req, res) => {
    res.send(date);
})

app.get('/thomas', (req, res) => {
    res.send(JSON.stringify(user));
})

app.get('/files', (req, res) => {
    fs.createFileSync(file);
})

app.get('/random', (req, res) => {
const num = Math.random()*100;
    res.send(num.toString());
})

app.get('/randomBetween/:min/:max', (req, res) => {
    const num = Math.floor(parseInt(req.params.min)+Math.random()*(parseInt(req.params.max)-parseInt(req.params.min)))
    //console.log( parseInt(req.params.min));
    
    res.send(num.toString());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

