<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="pageWidth" value="600" scope="page"/>
<c:set var="pageHeight" value="600" scope="page"/>
<c:set var="headerHeight" value="50" scope="page"/>
<page title="The Classic"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="http://www.netbiscuits.com/schema/netbiscuits-tactile.xsd">
	<external file="script/menu-script.jsp" type="script"/>
	<external file="style/menu-style.css" type="css"/>
	<layout id="lay-root" height="parent.height+10" width="parent.width" top="0" left="0">
		<c:set var="count" value="4" scope="page"/>
		<c:forEach begin="1" end="${pageScope.count}" varStatus="rowStat">
		<layout id="lay-main-${rowStat.count}" height="parent.height/5" width="parent.width/4" top="10" left="(parent.width/4)*${rowStat.count-1}">
			<view id="view-main-${rowStat.count}"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				top="0"
				left="25">
				<TABLE class="number-box">
					<row>
						<cell width="100">
							<img src="images/ico_${rowStat.count}.png" href="${rowStat.count}/index.jsp" convert="false" format="png" width="11" />
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
		</c:forEach>
		<layout id="lay-main-exit" height="parent.height/5" width="parent.width" top="parent.height*0.8" left="0">
			<view id="view-main-exit"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				top="0"
				left="25">
				<TABLE class="number-box">
					<row>
						<cell width="100">
							<img src="images/ico_exit.png" href="index.jsp" convert="false" format="png" width="11" />
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
	</layout>
</page>
