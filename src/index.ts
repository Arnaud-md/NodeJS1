import fs from 'fs-extra';
import writeJsonSync;
console.log('Hello world');
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

fs.writeJsonSync('./package.json', {name: 'fs-extra'})