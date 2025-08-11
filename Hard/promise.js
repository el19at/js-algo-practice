let i= 0;
const a = fetch('https://cat-fact.herokuapp.com/facts').then(async (res)=>{
    const show = await JSON.parse(res);});
i++;
const b = await a;
//console.log(a);
console.log(i);
