const warp_form = document.querySelectorAll('.warp_form');
warp_form[0].style.display = 'block';

const item_ip = document.querySelectorAll('.item_ip');
const btn_g = document.querySelectorAll('.btn_g');

var signUpData = {
	signUpEmail: '',
	emailFlag: 0,
	signUpPassword: '',
	signUpName: '',
	signUpPhone: '',
	phoneFlag: 0
}

item_ip[0].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		next(0);
	}
}

btn_g[0].onclick = () => {
	next(0);
}

item_ip[1].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		next(1);
	}
}

btn_g[1].onclick = () => {
	next(1);
}

item_ip[2].onkeypress = () => {
	if(window.event.keyCode == 13){
		window.event.preventDefault();
		next(2);
	}
}

btn_g[2].onclick = () => {
	next(2);
}

function next(indexNumber) {
	const msg1 = document.querySelectorAll('.msg1');
	const msg2 = document.querySelectorAll('.msg2');
	msg1[indexNumber].style.display = 'none';
	msg2[indexNumber].style.display = 'none';
	if(item_ip[indexNumber].value.length == 0){
		msg1[indexNumber].style.display = 'block';
	} else if(indexNumber == 0) {
		$.ajax({
			type: "post",
			url: "sign-up-emailCheck",
			data: {
				signUpEmail: item_ip[indexNumber].value
			},
			dataType: "text",
			success: function(data){
				signUpData = JSON.parse(data);
				if(signUpData.emailFlag == 0){
					warp_form[indexNumber].style.display = 'none';
					warp_form[indexNumber+1].style.display = 'block';
				}else if(signUpData.emailFlag == 1){
					const false_email = document.querySelector('#false_email');
					while(false_email.hasChildNodes()){
						false_email.removeChild(false_email.firstChild);
					}
					const emailTextNode = document.createTextNode(signUpData.signUpEmail);
					false_email.appendChild(emailTextNode);
					msg2[indexNumber].style.display = 'block';
				}
			},
			error:function(){
				alert('비동기 처리 오류!');
			}
		})
	} else if(indexNumber == 1) {
		let checkFlag = checkPassword(signUpData.signUpEmail, item_ip[indexNumber].value, msg2[indexNumber]);
		if(checkFlag == true) {
			warp_form[indexNumber].style.display = 'none';
			warp_form[indexNumber+1].style.display = 'block';
		}else {
			msg2[indexNumber].style.display = 'block';
		}
	} else if(indexNumber == 2) {
		if(item_ip[1].value == item_ip[2].value){
			signUpData.signUpPassword = item_ip[2].value;
			warp_form[indexNumber].style.display = 'none';
			warp_form[indexNumber+1].style.display = 'block';
		}else{
			msg2[indexNumber].style.display = 'block';
		}
	}
}

function checkPassword(id, password, msg2){
	while(msg2.hasChildNodes()){
		msg2.removeChild(msg2.firstChild);
	}
	
	
    if(!/^[a-zA-Z0-9]{10,15}$/.test(password)){
        let msg = document.createTextNode('숫자와 영문자 조합으로 10~15자리를 사용해야 합니다.');
        msg2.appendChild(msg);
        return false;
    }
    
    var checkNumber = password.search(/[0-9]/g);
    var checkEnglish = password.search(/[a-z]/ig);
    
    if(checkNumber <0 || checkEnglish <0){
        let msg = document.createTextNode("숫자와 영문자를 혼용하여야 합니다.");
        msg2.appendChild(msg);
        return false;
    }
    
    if(/(\w)\1\1\1/.test(password)){
        let msg = document.createTextNode('444같은 문자를 4번 이상 사용하실 수 없습니다.');
        msg2.appendChild(msg);
        return false;
    }
    
    if(password.search(id) > -1){
        let msg = document.createTextNode("비밀번호에 아이디가 포함되었습니다.");
        msg2.appendChild(msg);
        return false;
    }
    
    
    return true;
    
}


