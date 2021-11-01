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
	const msg1 = document.querySelector('.msg1');
	const msg2 = document.querySelector('.msg2');
	if(item_ip.value.length == 0){
		msg1.style.display = 'block';
		msg2.style.display = 'none';
	} else {
		msg1.style.display = 'none';
		const id = document.querySelector("#id");
		let flag = checkPassword(id.value, item_ip.value);
		if(flag == true){
			const form = document.querySelector('form');
			form.submit();
		}else {
			msg2.style.display = 'block';
		}
	}
}


function checkPassword(id,password){
	const msg2 = document.querySelector('.msg2');
	
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