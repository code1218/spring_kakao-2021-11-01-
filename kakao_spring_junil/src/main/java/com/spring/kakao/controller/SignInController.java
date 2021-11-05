package com.spring.kakao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SignInController {
	
	@RequestMapping(value = "sign-in", method = RequestMethod.GET)
	public ModelAndView signInIndex() {
		return new ModelAndView("signIn/sign_in");
	}
}
