const item_ip = document.querySelectorAll('.item_ip');
const btn_login = document.querySelector('.btn_login');

var signInData = {
	user_email: '',
	user_password: '',
	signInFlag: 0
}

function clearMsgNode(msg){
	while(msg.hasChildNodes()){
		msg.removeChild(msg.firstChild);
	}
	msg.style.display = 'none';
}

function messageService(msgText, msgFlag){
	const emailErrorMsg = document.querySelector('.emailErrorMsg');
	const passwordErrorMsg = document.querySelector('.passwordErrorMsg');
	
	clearMsgNode(emailErrorMsg);
	clearMsgNode(passwordErrorMsg);
	
	let msgTextNode = document.createTextNode(msgText);
	
	//msgFlag == 0 이메일 오류, 1이면 password 오류
	if(msgFlag == 0){
		emailErrorMsg.appendChild(msgTextNode);
		emailErrorMsg.style.display = 'block';
	}else {
		passwordErrorMsg.appendChild(msgTextNode);
		passwordErrorMsg.style.display = 'block';
	}
}




item_ip[0].onclick = () => {
    const info_tip = document.querySelector('.info_tip');
    info_tip.style.display = 'block';
}

item_ip[0].onkeyup = () => {
    const util_tf = document.querySelector('.util_tf');
    util_tf.style.display = 'block';
    if(item_ip[0].value.length == 0){
        util_tf.style.display = 'none';
    }
}

item_ip[0].onblur = () => {
    const info_tip = document.querySelector('.info_tip');
    if(item_ip[0].value.length == 0){
        const util_tf = document.querySelector('.util_tf');
        info_tip.style.display = 'none';
        util_tf.style.display = 'none';
    }
}


const flag = document.querySelector('#flag');
const return_id = document.querySelector('#return_id');
const return_password = document.querySelector('#return_password');

if(flag.value == 0){
	const util_tf = document.querySelector('.util_tf');
    util_tf.style.display = 'block';
	msg1.style.display = "none";
	msg2.style.display = "block";
	msg3.style.display = "none";
	msg4.style.display = "none";
	item_ip[0].value = return_id.value;
	item_ip[0].focus();
}else if(flag.value == 1){
	const util_tf = document.querySelector('.util_tf');
    util_tf.style.display = 'block';
	msg1.style.display = "none";
	msg2.style.display = "none";
	msg3.style.display = "none";
	msg4.style.display = "block";
	item_ip[0].value = return_id.value;
	item_ip[1].value = return_password.value;
	item_ip[1].focus();
}



function onSubmit(){
	if(item_ip[0].value.length == 0){
		msg1.style.display = "block";
		msg2.style.display = "none";
		msg3.style.display = "none";
		msg4.style.display = "none";
	} else if(item_ip[1].value.length == 0){
		msg1.style.display = "none";
		msg2.style.display = "none";
		msg3.style.display = "block";
		msg4.style.display = "none";
	} else {
		const form = document.querySelector('form');
		form.submit();
	}
}

function emptyCheck(){
	if(item_ip[0].value.length == 0){
		let msgText = '이메일을 입력해 주세요.';
		messageService(msgText, 0);
		return false;
	} else if(item_ip[1].value.length == 0){
		let msgText = '비밀번호를 입력해 주세요.';
		messageService(msgText, 1);
		return false;
	} else {
		return true;
	}
}

function signInSubmit(){
	$.ajax({
		type: "post",
		url: "sign-in",
		data: JSON.stringify(signInData),
		contentType: "application/json;charset=UTF-8",
		dataType: "text",
		success: function(data){
			signInData = JSON.parse(data);
			//이메일이 존재 하지 않음
			if(signInData.signInFlag == 0){
				let textMsg = '존재하지 않는 이메일 입니다.';
				messageService(textMsg, 0);
			}
			//비밀번호 틀림
			else if(signInData.signInFlag == 1){
				let textMsg = '비밀번호가 일치하지 않습니다.';
				messageService(textMsg, 1);
			}
			//로그인 성공
			else if(signInData.signInFlag == 2){
				alert('로그인 성공!');
			}
		},
		error: function(){
			alert('비동기 처리 오류!');
		}
	})
}

function signInService(){
	//ajax호출
	if(emptyCheck() == true){
		signInSubmit();
	}
}

item_ip[0].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		item_ip[1].focus();
	}
}

item_ip[1].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		signInService();
	}
}

btn_login.onclick = () => {
	signInService();
}