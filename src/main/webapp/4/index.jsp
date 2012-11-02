<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="halfCount" value="4" scope="page"/>
<c:set var="count" value="${(pageScope.halfCount * 2) + 1}" scope="page"/>
<c:set var="headerHeight" value="55" scope="page"/>
<page title="Lucas' Problem"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="http://www.netbiscuits.com/schema/netbiscuits-tactile.xsd">
	<external file="style.css" type="css"/>
	<external file="script.js" type="script"/>
	<layout class="root" id="lay-root" height="parent.height" width="parent.width" top="0" left="0">
		<layout id="lay-header" height="${headerHeight}" width="parent.width" top="0" left="0">
			<view id="view-header"
				width="parent.width"
				height="parent.height"
				top="0"
				left="0">
				<TABLE class="header-box">
					<row>
						<cell text-align="left" width="25">
							<img src="images/back-button.png" href="../menu.jsp" convert="false" width="7" format="png" />
						</cell>
						<cell width="50">
							<img src="images/lucas-title.png" convert="false" width="23" format="png" />
						</cell>
						<cell width="25">
							<richtext></richtext>
						</cell>
					</row>
					<row>
						<cell text-align="left" width="25">
							<richtext></richtext>
						</cell>
						<cell width="50">
							<richtext></richtext>
						</cell>
						<cell width="25">
							<richtext></richtext>
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
		<layout class="main" id="lay-main" 
			height="Math.round(parent.height*0.4)" 
			width="Math.round(parent.width*0.8)" 
			top="Math.round(parent.height*0.3)" 
			left="Math.round(parent.width*0.1)">
			<c:forEach begin="1" end="${pageScope.count}" varStatus="colStat">
				<c:choose>
					<c:when test="${colStat.count lt (pageScope.halfCount + 1)}">
						<%--
							left side box 
						--%>
						<layout id="box-${colStat.count}"
							effect-type="slide"
							height="Math.round(tactile.page.getComponent('lay-main').getInnerBox().height*0.4)" 
							width="Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.8/${pageScope.count})" 
							top="Math.round(tactile.page.getComponent('lay-main').getInnerBox().height*0.3)" 
							left="Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.1)+Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.8/${pageScope.count})*${colStat.count-1}">
							<view id="view-${colStat.count}"
								width="parent.width"
								height="parent.height"
								top="0"
								left="0">
								<TABLE class="number-box">
									<row>
										<cell>
											<richtext>
												<c:out value=">" />
											</richtext>
										</cell>
									</row>
								</TABLE>
							</view>
						</layout>
					</c:when>
					<c:when test="${colStat.count gt (pageScope.halfCount + 1)}">
						<%--
							right box 
						--%>
						<layout id="box-${colStat.count}"
							effect-type="slide"
							height="Math.round(tactile.page.getComponent('lay-main').getInnerBox().height*0.4)" 
							width="Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.8/${pageScope.count})" 
							top="Math.round(tactile.page.getComponent('lay-main').getInnerBox().height*0.3)" 
							left="Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.1)+Math.round(tactile.page.getComponent('lay-main').getInnerBox().width*0.8/${pageScope.count})*${colStat.count-1}">
							<view id="view-${colStat.count}"
								width="parent.width"
								height="parent.height"
								top="0"
								left="0">
								<TABLE class="number-box">
									<row>
										<cell>
											<richtext>
												<c:out value="<" />
											</richtext>
										</cell>
									</row>
								</TABLE>
							</view>
						</layout>
					</c:when>
				</c:choose>
			</c:forEach>
		</layout>
	</layout>
</page>
