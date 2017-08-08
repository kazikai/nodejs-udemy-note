const fs = require('fs');
let obj = {
  name: 'Kazikai',
};

let stringObj = JSON.stringify(obj);
let personString = '{"name":"kazikai","age":25}';

let originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);