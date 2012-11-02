<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/xml; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="pageWidth" value="600" scope="page"/>
<c:set var="pageHeight" value="400" scope="page"/>
<page title="Example"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:noNamespaceSchemaLocation="http://www.netbiscuits.com/schema/netbiscuits-tactile.xsd">
	<external file="script.jsp" type="script"/>
	<external file="style.css" type="css"/>
	<layout id="lay-root" height="parent.height-10" width="parent.width-10" top="0" left="0">
		<layout id="lay-main" height="parent.height" width="parent.width" top="0" left="0">
			<c:set var="count" value="3" scope="page"/>
			<c:forEach begin="1" end="${pageScope.count}" varStatus="rowStat">
				<c:forEach begin="1" end="${pageScope.count}" varStatus="colStat">
					<c:if test="${not (rowStat.last and colStat.last)}">
						<layout id="box-${rowStat.count}-${colStat.count}"
							effect-type="slide"
							height="Math.round(parent.height/${pageScope.count})" 
							width="Math.round(parent.width/${pageScope.count})" 
							top="Math.round(tactile.page.getComponent('lay-main').getInnerBox().height/${pageScope.count})*${rowStat.count-1}" 
							left="Math.round(tactile.page.getComponent('lay-main').getInnerBox().width/${pageScope.count})*${colStat.count-1}">
							<view id="view-${rowStat.count}-${colStat.count}"
								width="parent.width"
								height="parent.height"
								top="0"
								left="0">
								<TABLE class="number-box">
									<row>
										<cell>
											<richtext>
												${(pageScope.count * pageScope.count) - (((rowStat.count-1) * pageScope.count) + colStat.count)}
											</richtext>
										</cell>
									</row>
								</TABLE>
							</view>
						</layout>
					</c:if>
				</c:forEach>
			</c:forEach>
		</layout>
	</layout>
</page>
