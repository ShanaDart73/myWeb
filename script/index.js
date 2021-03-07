
const isHidden = document.querySelector('#is-hidden');
isHidden.hidden = true;

function handler() {
  (!isHidden.hidden) 
  ? isHidden.hidden = true 
  : isHidden.hidden = false;
}

