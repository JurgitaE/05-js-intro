/* 
STRINGS (tekstas) 
iniciavimas kabutemis: 
    - viengubos
    - dvigubos (")
    - backtick/apostrofas (`)
*/
const hi = "labas";
console.log(hi);

const morning = "rytas";
console.log(morning);

const sentence = "labas rytas";
console.log(sentence);

const combo1 = hi + " " + morning;
const combo2 = hi + ' ' + morning;
console.log(combo1);
console.log(combo2);

// vienguba kabute (').
// Dviguba kabute (").
// Vienguba kabute (') ir dviguba kabute (")

const kabute2 = "Vienguba kabute (').";
console.log(kabute2);

const kabute1 = 'Dvyguba kabute(")';
console.log(kabute1);

// escape
const kabute112 = 'Vienguba kabute (\') ir dviguba kabute (").';
console.log(kabute112);

const kabute212 = "Vienguba kabute (') ir dviguba kabute (\").";
console.log(kabute212);

const kabute3 = 'Vienguba kabute (\') ir dviguba kabute (\").';
console.log(kabute3);


const viengubaKabute = " ' ";
const dvigubaKabute = ' " ';

const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dviguba kabute (' + dvigubaKabute + ').';
console.log(kabuciuSakinys);

const kabutesBacktick = `Vienguba kabute (') ir dviguba kabute (")`;
const kabutesBacktick2 = `Vienguba kabute (') ir dviguba kabute (") ir backtick kabute (\`)`;

const backtickSakinys = `Vienguba kabute (${viengubaKabute}) ir dviguba kabute (${dvigubaKabute}).`;
console.log(backtickSakinys);

const user = 'John';
// Hi, John!
const userHi = 'Hi, ' + user + '!';
console.log(userHi);

const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);

