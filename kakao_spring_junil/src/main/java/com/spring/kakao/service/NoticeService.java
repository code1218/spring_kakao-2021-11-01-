package com.spring.kakao.service;

import java.util.List;

import com.spring.kakao.model.beans.NoticeBean;
import com.spring.kakao.model.dto.NoticeDto;

public interface NoticeService {
	public NoticeBean getNoticeBean();
	public int parseIntPageNumber(String pageNumber);
	public List<NoticeDto> getNoticeListAll();
	public List<NoticeDto> getNoticeList(int pageNumber);
}
