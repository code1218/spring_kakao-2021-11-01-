package com.spring.kakao.model.beans;

public class NoticeBean {
	private int noticeTotalCount;
	private int pageNumber;
	private int startIndex;
	private int endIndex;
	private int totalPage;
	private int startPage;
	private int endPage;
	
	public int getNoticeTotalCount() {
		return noticeTotalCount;
	}
	public void setNoticeTotalCount(int noticeTotalCount) {
		this.noticeTotalCount = noticeTotalCount;
	}
	public int getPageNumber() {
		return pageNumber;
	}
	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	public int getStartIndex() {
		return startIndex;
	}
	public void setStartIndex(int pageNumber) {
		this.startIndex = (pageNumber-1) * 20;
	}
	public int getEndIndex() {
		return endIndex;
	}
	public void setEndIndex(int pageNumber) {
		this.endIndex = pageNumber * 20;
	}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	
	@Override
	public String toString() {
		return "NoticeBean [noticeTotalCount=" + noticeTotalCount + ", pageNumber=" + pageNumber + ", startIndex="
				+ startIndex + ", endIndex=" + endIndex + ", totalPage=" + totalPage + ", startPage=" + startPage
				+ ", endPage=" + endPage + "]";
	}
}
