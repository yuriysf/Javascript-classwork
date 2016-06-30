var elem,
	submit = document.getElementById('submit'),
	select = document.getElementById('select'),
	textarea = document.getElementById('textarea');

function handler(){
	 var selectValue = select.value;
	 var textareaValue = textarea.value;

	if (selectValue === 'div'){
		elem = document.createElement('div');
	} else if (selectValue === 'p'){
		elem = document.createElement('p');
	} else {
		elem = document.createElement('span');
	}
	elem.innerHTML = textareaValue;
	document.getElementById('new_div').appendChild(elem);
};
function handler2(){
	var textareaValue = textarea.value;
	if(textareaValue !== ''){
		handler();
	}	
}
submit.addEventListener('click', handler);
select.addEventListener('change', handler2);