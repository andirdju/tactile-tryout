<%@ page language="java" contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8" buffer="1000kb"%>
<c:set var="count" value="3" scope="page"/>
var EventManager = tactile.EventManager;
var Enum = tactile.Enum
var devWidth = 800;
var devHeight = 600;
var itemCount = ${pageScope.count};
var emptyBoxRow = ${pageScope.count};
var emptyBoxCol = ${pageScope.count};
var rows;
var activePlayer = 10;

var gameEnd = false;
var isLock = false;

var winningCondition = "";

var custom = {
		init: function() {
			custom.initData();
			<c:forEach begin="1" end="${pageScope.count}" varStatus="rowStat">
				<c:forEach begin="1" end="${pageScope.count}" varStatus="colStat">
					// setup current box row and col position
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}").rowVal = ${rowStat.count};
					tactile.page.getComponent("box-${rowStat.count}-${colStat.count}").colVal = ${colStat.count};
					
					// add tap event for each box
					EventManager.addListener("box-${rowStat.count}-${colStat.count}", tactile.Enum.Events.tap, function() {
					});					

					// add swipe event for each box
					EventManager.addListener("box-${rowStat.count}-${colStat.count}", tactile.Enum.Events.touchend, function(e){
						if(custom.checkData(${rowStat.count-1},${colStat.count-1}) != false){
							if(!isLock){
								custom.swipeHandler(${rowStat.count},${colStat.count},e);
							}
						}
					});			
				</c:forEach>
			</c:forEach>
			// add reset event
			EventManager.addListener("lay-root", tactile.Enum.Events.doubletap, function(e){
				if(gameEnd){
					custom.resetData();
				}
			});
		},
		

		revealHandler: function(row, col, directionalVal) {
			if(winningCondition == ""){ 
				if(custom.fillData((row-1), (col-1)) == true){
					var currentPlayer = custom.getPlayerById(activePlayer);
					if(directionalVal == Enum.Direction.west){
						$("#box-"+row+"-"+col).flip({
							direction:'lr',
							color: 'transparent',
                			speed: 350,
			                onEnd: function(){
			                	$("#text-"+row+"-"+col).html(currentPlayer);
			                	$("#box-"+row+"-"+col).css("background-color", "transparent");
			                }
			            });
					} else if(directionalVal == Enum.Direction.north){
						$("#box-"+row+"-"+col).flip({
							direction:'tb',
							color: 'transparent',
                			speed: 350,
			                onEnd: function(){
			                	$("#text-"+row+"-"+col).html(currentPlayer);
			                	$("#box-"+row+"-"+col).css("background-color", "transparent");
			                }
			            });
					} else if(directionalVal == Enum.Direction.south){
						$("#box-"+row+"-"+col).flip({
							direction:'bt',
							color: 'transparent',
                			speed: 350,
			                onEnd: function(){
			                	$("#text-"+row+"-"+col).html(currentPlayer);
			                	$("#box-"+row+"-"+col).css("background-color", "transparent");
			                }
			            });
					} else {
						$("#box-"+row+"-"+col).flip({
							direction:'rl',
							color: 'transparent',
                			speed: 350,
			                onEnd: function(){
			                	$("#text-"+row+"-"+col).html(currentPlayer);
			                	$("#box-"+row+"-"+col).css("background-color", "transparent");
			                }
			            });
					}
					
					setTimeout("custom.condChecker()",500);
				} 
			}
		},

		swipeHandler: function(row, col, e) {
			var deltaXAbs = Math.abs(e.deltaX); 
			var deltaYAbs = Math.abs(e.deltaY); 

			if(deltaXAbs != 0 && deltaYAbs != 0){
				isLock = true;
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
			rows = new Array(3);
			for(var c=0; c<3; c++) {
				rows[c] = new Array();
				rows[c][0] = 0;
				rows[c][1] = 0;
				rows[c][2] = 0;
			}
			$("#draw").hide();
			$("#owin").hide();
			$("#xwin").hide();
		},

		resetData: function(){
			custom.initData();	
			activePlayer = 10;
			winningCondition = "";
			gameEnd = false;
			
			isLock = false;
			
           	$("[id^='text-']").html("");
		},


		tooglePlayer: function(){
			if(activePlayer == 10){
				activePlayer = -10;
			} else if(activePlayer == -10){
				activePlayer = 10;
			}
		},
		
		
		getPlayerById: function (id){
			if(id == 10){
				return "X";
			} else if(id == -10){
				return "O";
			} else {
				return "";
			}
		},

		checkData: function (row, column){
			if(rows[row][column] != 0){
				return false;
			}
			return true;
		},
		
		fillData: function(row, column){
			if(custom.checkData(row, column) != true){
				return false;
			}
			rows[row][column] = activePlayer;
			return true;
		},
		
		condChecker: function(){
			if(custom.winChecker() == false){
				if(custom.drawChecker() == false){
					custom.tooglePlayer();
				} else {
					gameEnd = true;
					$("#draw").show();
				}
			} else {
				gameEnd = true;
			
				if(custom.getPlayerById(activePlayer) == "X"){
					$("#xwin").show();
				} else {
					$("#owin").show();
				}
			}
			isLock = false;
		},
		
		drawChecker: function(){
			for(var b=0; b<3; b++) {
				for(var c=0; c<3; c++) {
					if(rows[b][c] == 0){
						return false;
					}
				}
			}
			return true;
		},

		winChecker: function(){
			var isWin = false;

			for(var b=0; b<3; b++) {
				var horizontalCount = 0;
				var verticalCount = 0;
				for(var c=0; c<3; c++) {
					// Horizontal Checker
					// 00 01 02 - 10 11 12 - 20 21 22
					horizontalCount += rows[b][c];

					// Vertical Checker
					// 00 10 20 - 01 11 21 - 01 12 22
					verticalCount += rows[c][b];
				}

				if(horizontalCount == 30 || horizontalCount == -30){
					winningCondition += "h" + b;
					isWin = true;
				} 
				if(verticalCount == 30 || verticalCount == -30){
					winningCondition += "v" + b;
					isWin = true;
				}
			}

			// Diagonal Checker
			var diagonal1 = rows[0][0] + rows[1][1] + rows[2][2]; 
			var diagonal2 = rows[0][2] + rows[1][1] + rows[2][0]; 
			if(diagonal1 == 30 || diagonal1 == -30){
				winningCondition += "d1";
				isWin = true;
			}
			if(diagonal2 == 30 || diagonal2 == -30){
				winningCondition += "d2";
				isWin = true;
			}

			return isWin;
		}		
};

tactile.page.onready(custom.init);
