const warp_form = document.querySelectorAll('.warp_form');
warp_form[0].style.display = 'block';

const item_ip = document.querySelectorAll('.item_ip');
const btn_g = document.querySelectorAll('.btn_g');

item_ip[0].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		emailNext(0);
	}
}

btn_g[0].onclick = () => {
	emailNext(0);
}

function emailNext(indexNUmber) {
	if(item_ip[indexNUmber].value.length == 0){
		const msg1 = document.querySelectorAll('.msg1');
		const msg2 = document.querySelectorAll('.msg2');
		msg1[indexNUmber].style.display = 'block';
		msg2[indexNUmber].style.display = 'none';
	} else {
		$.ajax({
			type: "post",
			url: "sign-up-emailCheck",
			data: {
				signUpEmail: item_ip[indexNUmber].value
			},
			dataType: "text",
			success: function(data){
				
			},
			error:function(){
				
			}
		})
	}
}
