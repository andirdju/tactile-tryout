<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="pageWidth" value="600" scope="page"/>
<c:set var="pageHeight" value="600" scope="page"/>
<c:set var="headerHeight" value="50" scope="page"/>
<page title="The Classic"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="http://www.netbiscuits.com/schema/netbiscuits-tactile.xsd">
	<external file="script/index-script.jsp" type="script"/>
	<external file="style/index-style.css" type="css"/>
	
	<layout id="lay-root" height="parent.height" width="parent.width" top="0" left="0">
		<layout id="lay-main" height="${pageScope.pageHeight}" width="${pageScope.pageWidth}" top="((parent.height-${pageScope.pageHeight})/2)+(${headerHeight}/2) - 125" left="(parent.width-${pageScope.pageWidth})/2">
			<view id="view"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				display="none"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="50">
							<img src="images/logo.png" convert="false" format="png" />
						</cell>
					</row>
				</TABLE>
			</view>
			<view id="view-netbiscuits"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				display="none"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="50">
							<img src="images/netbiscuits-effects2.png" convert="false" format="png" />
						</cell>
					</row>
				</TABLE>
			</view>
			<view id="view-proudly"
				width="parent.width"
				height="parent.height"
				effect-type="fade"
				effect-duration="2000"
				display="none"
				top="0"
				left="0">
				<TABLE class="number-box">
					<row>
						<cell width="25">
							<img src="images/proudly.png" convert="false" format="png" />
						</cell>
					</row>
				</TABLE>
			</view>
		</layout>
	</layout>
</page>
