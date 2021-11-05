package com.spring.kakao.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.spring.kakao.model.json.SignInVo;
import com.spring.kakao.service.UserService;

@Controller
public class SignInController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "sign-in", method = RequestMethod.GET)
	public String signInIndex(Model model, HttpServletRequest request) {
		HttpSession session = request.getSession();
		if(session.getAttribute("login_user") != null) {
			return "redirect:index";
		}
		return "signIn/sign_in";
	}
	
	@ResponseBody
	@RequestMapping(value = "sign-in", method = RequestMethod.POST)
	public Object signIn(@RequestBody SignInVo signInVo, HttpServletRequest request) {
		signInVo.setSignInFlag(userService.signIn(signInVo));
		
		if(signInVo.getSignInFlag() == 2) {
			HttpSession session = request.getSession();
			session.setAttribute("login_user", userService.getUser(signInVo.getUser_email()));
		}
		
		return signInVo;
	}
}







