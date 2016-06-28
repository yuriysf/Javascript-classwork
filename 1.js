var elem,
	submit = document.getElementById('submit');

function handler(){
	 var select = document.getElementById('select').value;
	 var textarea = document.getElementById('textarea').value;

	if (select === 'div'){
		elem = document.createElement('div');
	} else if (select === 'p'){
		elem = document.createElement('p');
	} else {
		elem = document.createElement('span');
	}
	elem.innerHTML = textarea;
	document.getElementById('new_div').appendChild(elem);
};
function handler2(){
	var textarea = document.getElementById('textarea').value;
	if(textarea !== ''){
		return handler();
	}	
}
submit.addEventListener('click', handler);
select.addEventListener('change', handler2);