const item_ip = document.querySelector('.item_ip');
const btn_g = document.querySelector('.btn_g');

item_ip.onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		onSubmit();
	}
}

btn_g.onclick = () => {
	onSubmit();
}

function onSubmit(){
	const password = document.querySelector('#password');
	const msg1 = document.querySelector('.msg1');
	const msg2 = document.querySelector('.msg2');
	if(item_ip.value.length == 0){
		msg1.style.display = 'block';
		msg2.style.display = 'none';
	} else {
		msg1.style.display = 'none';
		if(password.value == item_ip.value){
			const form = document.querySelector('form');
			form.submit();
		}else {
			msg2.style.display = 'block';
		}
	}
}