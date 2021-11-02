package com.spring.kakao.model.dao;

import com.spring.kakao.model.json.SignUpVo;

public interface UserDao {
	public int emailCheck(String signUpEmail);
	public int phoneCheck(SignUpVo signUpVo);
}
