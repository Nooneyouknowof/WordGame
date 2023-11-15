const phrase = 'parangaricutirimicuaro';

const form = document.getElementById('phrase-form')

let index = 0;
for (let char of phrase) {
  const newInput = document.createElement('input');
  newInput.id = index.toString();
  newInput.type = "text";
  newInput.disabled = true;
  newInput.setAttribute('maxlength', 1);
  newInput.setAttribute('placeholder', '_');
  let letters = []
  form.appendChild(newInput);
  index++;
}

form.addEventListener("change", function(event) {
  const thisInput = event.target;
  const guess = event.target.value;
  const index = event.target.id;
  if (guess === phrase[index]) {
    document.getElementById(index).classList.add('correct');
    document.getElementById(index).disabled = true;
    if (index < phrase.length-1) {
      const next = Number(index)+1
      document.getElementById(next).classList.add('selected');
      document.getElementById(next).disabled = false;
      document.getElementById(next).focus();
    }
  }
  console.log(thisInput);
});

document.getElementById('0').classList.add('selected');
document.getElementById('0').disabled = false;
// document.getElementById('0').focus();
