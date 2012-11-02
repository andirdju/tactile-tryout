<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="pageWidth" value="600" scope="page"/>
<c:set var="pageHeight" value="600" scope="page"/>
<c:set var="headerHeight" value="50" scope="page"/>
<page title="The Classic"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="http://www.netbiscuits.com/schema/netbiscuits-tactile.xsd">
	<external file="script/start-script.jsp" type="script"/>
	<external file="style/start-style.css" type="css"/>
	<layout id="lay-root" height="parent.height+10" width="parent.width" top="0" left="0">
		<layout id="lay-main-top" height="parent.height*0.4" width="parent.width" top="(parent.height*0.3)/4" left="0">
			<view id="view-main-top"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				display="none"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="100">
							<img src="images/title.png" convert="false" format="png" width="45" />
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
		<layout id="lay-main-bot" height="parent.height*0.2+100" width="parent.width" top="parent.height*0.8" left="0">
			<view id="view-main-bot"
				width="parent.width"
				height="parent.height"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="50">
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
		<layout id="lay-slide" height="(parent.height*0.2)/2" width="parent.width*0.4" top="(parent.height*0.8)+(parent.height*0.2)/4" left="(parent.width/2)-((parent.width*0.4)/2)">
			<view id="view-slide"
				width="parent.width"
				height="parent.height"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="100">
							<img id="slide-image" src="images/slide.png" convert="false" format="png" width="30" />
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
	</layout>
</page>
