<%@page import="java.util.Arrays"%>
<%@page import="java.util.Collections"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>

<c:set var="count" value="4" scope="page"/>
var EventManager = tactile.EventManager;
var Enum = tactile.Enum
var devWidth = 800;
var devHeight = 600;
var itemCount = ${pageScope.count};
var emptyBoxRow = ${pageScope.count};
var emptyBoxCol = ${pageScope.count};

var rows;
var randomData = new Array(16);
<c:forEach var="i" begin="0" end="15">
randomData[${i}] = ${sessionScope.rndNumber[i]};
</c:forEach>

var pick1 = -1;
var pick1Row = -1;
var pick1Col = -1;
var isLock = false;

var isWinning = false;

var custom = {
		init: function() {
			custom.initData();
			<c:forEach begin="1" end="${pageScope.count}" varStatus="rowStat">
				<c:forEach begin="1" end="${pageScope.count}" varStatus="colStat">
					// setup current box row and col position
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}").rowVal = ${rowStat.count};
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}").colVal = ${colStat.count};
					
					// add swipe event for each box
					EventManager.addListener("box-${rowStat.count}-${colStat.count}", tactile.Enum.Events.touchend, function(e){
						if(!isLock){
							custom.swipeHandler(${rowStat.count},${colStat.count},e);
						}
					});					
				</c:forEach>
			</c:forEach>
			// add reset event
			EventManager.addListener("lay-root", tactile.Enum.Events.doubletap, function(e){
				if(isWinning){
					custom.resetData();
				}
			});
		},
		
		revealHandler: function(row, col, directionalVal) {
			var boxComponent = tactile.page.getComponent("box-"+row+"-"+col);
			var activePlayerBoxComponent = tactile.page.getComponent("box-"+row+"-"+col+"-O");
			
			if(directionalVal == Enum.Direction.west){
				boxComponent.hide({slideto: Enum.Direction.east});
				activePlayerBoxComponent.show({slidefrom: Enum.Direction.west});
			} else if(directionalVal == Enum.Direction.north){
				boxComponent.hide({slideto: Enum.Direction.south});
				activePlayerBoxComponent.show({slidefrom: Enum.Direction.north});
			} else if(directionalVal == Enum.Direction.south){
				boxComponent.hide({slideto: Enum.Direction.north});
				activePlayerBoxComponent.show({slidefrom: Enum.Direction.south});
			} else {
				boxComponent.hide({slideto: Enum.Direction.west});
				activePlayerBoxComponent.show({slidefrom: Enum.Direction.east});
			}
			
			custom.pickData(row-1, col-1);
		},
		
		hideHandler: function(row, col) {
			var boxComponent = tactile.page.getComponent("box-"+row+"-"+col);
			var activePlayerBoxComponent = tactile.page.getComponent("box-"+row+"-"+col+"-O");
			activePlayerBoxComponent.hide({slideto: Enum.Direction.west});
			boxComponent.show({slidefrom: Enum.Direction.east});
		},

		swipeHandler: function(row, col, e) {
			var deltaXAbs = Math.abs(e.deltaX); 
			var deltaYAbs = Math.abs(e.deltaY); 

			if(deltaXAbs != 0 && deltaYAbs != 0){
				var directionVal = Enum.Direction.east;
	
				if((e.deltaX > 0) && (deltaXAbs > deltaYAbs)){
					directionVal = Enum.Direction.west;
				} else if((e.deltaX < 0) && (deltaXAbs > deltaYAbs)){
					directionVal = Enum.Direction.east;			
				} else if((e.deltaY > 0) && (deltaXAbs < deltaYAbs)){
					directionVal = Enum.Direction.north;			
				} else if((e.deltaY < 0) && (deltaXAbs < deltaYAbs)){
					directionVal = Enum.Direction.south;			
				} 
			
				custom.revealHandler(row, col, directionVal);
			} 
		},
		
		initData: function(){
			rows = new Array(4);
			for(var c=0; c<4; c++) {
				rows[c] = new Array();
				rows[c][0] = randomData[((4*c)+0)];
				rows[c][1] = randomData[((4*c)+1)];
				rows[c][2] = randomData[((4*c)+2)];
				rows[c][3] = randomData[((4*c)+3)];
			}
			$("#youwin").hide();
			
		},

		resetData: function(){
			custom.initData();	
			isWinning = false;
			pick1 = -1;
			pick1Row = -1;
			pick1Col = -1;
			isLock = false;
			
			<c:forEach begin="1" end="${pageScope.count}" varStatus="rowStat">
				<c:forEach begin="1" end="${pageScope.count}" varStatus="colStat">
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}").show({slidefrom: Enum.Direction.east});
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}-O").hide({slideto: Enum.Direction.west});
				</c:forEach>
			</c:forEach>
		},

		
		pickData: function(row, col){
			if(pick1 == -1){
				pick1 = rows[row][col];
				pick1Row = row;
				pick1Col = col;
			} else {
				if(custom.checkCondition(row, col) == true){
					if(custom.checkWinningCondition() == true){
						isLock = true;
						isWinning = true;
						$("#youwin").show();
					}
					custom.resetPickData();
				} else {
					isLock = true;
					setTimeout("custom.hideDat(" + row + ", " + col + ")",1000);
				}
			}
		},

		hideDat: function(row, col){
			custom.hideHandler(row+1, col+1);
			custom.hideHandler(pick1Row+1, pick1Col+1);
			custom.resetPickData();
			isLock = false;
		},

		resetPickData: function(){
			pick1 = -1;
			pick1Row = -1;
			pick1Col = -1;
		},

		checkCondition: function(row, col){
			if(pick1 == rows[row][col]){
				rows[pick1Row][pick1Col] = 0;
				rows[row][col] = 0;
				return true;
			}
			return false;
		},

		checkWinningCondition: function(){
			for(var b=0; b<4; b++) {
				for(var c=0; c<4; c++) {
					if(rows[b][c] != 0){
						return false;
					}
				}
			}
			return true;
		},
		
		debugData: function(){
			var dat = pick1 + "\n" + "\n";
			for(var b=0; b<16; b++) {
				dat += randomData[b] + " ";
			}
			alert(dat);
		}
};

tactile.page.onready(custom.init);
