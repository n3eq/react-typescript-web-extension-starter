const btn = document.createElement('BUTTON');
const t = document.createTextNode('CLICK');
btn.appendChild(t);
document.body.appendChild(btn);

const element = document.getElementsByClassName("buttonControls--container");
console.error(element);
element[0].appendChild(btn);