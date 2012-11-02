var customCountValue = 3;
custom = {

		eventManager : tactile.EventManager,
		
		count: customCountValue,

		itemCount : customCountValue,

		emptyBoxRow : customCountValue,

		emptyBoxCol : customCountValue,

		isIdle : true,

		resetIsIdle: function() {
			custom.isIdle = true;
		},
		
		init: function() {
			// initialize starting position
			custom.initRowColVal();
			
			// initialize event
			custom.initEventManager();
		},
		
		initRowColVal: function() {
			for (var rowStat=1; rowStat <= custom.count; rowStat++) {
				for (var colStat=1; colStat <= custom.count; colStat++) {
					if(!(rowStat == custom.count && colStat == custom.count)){
						// setup current box row and col position
						var boxId = "box-" + rowStat + "-" + colStat;
						var box = tactile.page.getComponent(boxId);
						box.rowVal = rowStat;
						box.colVal = colStat;
					}
				}
			}
		},
		
		initEventManager: function() {
			// add swipe event for each box
			custom.eventManager.addListener("box-1-1", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					1,
					1,
					e
				);
			});					
			custom.eventManager.addListener("box-1-2", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					1,
					2,
					e
				);
			});					
			custom.eventManager.addListener("box-1-3", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					1,
					3,
					e
				);
			});					
			custom.eventManager.addListener("box-2-1", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					2,
					1,
					e
				);
			});					
			custom.eventManager.addListener("box-2-2", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					2,
					2,
					e
				);
			});					
			custom.eventManager.addListener("box-2-3", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					2,
					3,
					e
				);
			});					
			custom.eventManager.addListener("box-3-1", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					3,
					1,
					e
				);
			});					
			custom.eventManager.addListener("box-3-2", tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					3,
					2,
					e
				);
			});					
			
			// add reset event
			custom.eventManager.addListener("lay-root", tactile.Enum.Events.doubletap, function(e){
				custom.resetPlay(
					tactile.page.getComponent('lay-main').getInnerBox().width,
					tactile.page.getComponent('lay-main').getInnerBox().height,
					e
				);
			});
			
			// add onresize
			custom.eventManager.addResizeListener(function(e){
				custom.resetNoPlay(e);
			});
		},

		canMove: function(emptyRow, emptyCol, curRow, curCol) {
			// if can move horizontal
			var colDiff = Math.abs(emptyCol - curCol);
			var moveHor = ((emptyRow == curRow) && (colDiff == 1));

			// or if can move vertical
			var rowDiff = Math.abs(emptyRow - curRow);
			var moveVer = ((emptyCol == curCol) && (rowDiff == 1));

			// if can move on either hor or ver
			var result = moveHor || moveVer;
			return result;
		},

		getDirection: function(emptyRow, emptyCol, curRow, curCol) {
			var result = null;
			if(emptyRow == curRow) {
				// its on the same row, then the move is horizontal
				// check horizontal direction
				if(emptyCol > curCol) {
					// direction is left
					result = tactile.Enum.Direction.west;
				} else {
					// direction is right
					result = tactile.Enum.Direction.east
				}
			} else if(emptyCol == curCol) {
				// its on the same col, then the move is vertical
				// check vertical direction
				if(emptyRow > curRow) {
					// direction is up
					result = tactile.Enum.Direction.north;
				} else {
					// direction is down
					result = tactile.Enum.Direction.south;
				}
			}
			return result;
		},
		
		moveBox: function(devWidth,devHeight,box,direction,emptyRow,emptyCol) {
			// switch row and col val of box and emptyBox
			var oldBoxCol = box.colVal; 			
			var oldBoxRow = box.rowVal;
			box.rowVal = emptyRow; 
			box.colVal = emptyCol; 
			custom.emptyBoxRow = oldBoxRow; 
			custom.emptyBoxCol = oldBoxCol; 

			// decide vertical or horizontal move  	
			if((direction == tactile.Enum.Direction.west) || (direction == tactile.Enum.Direction.east)) {
				box.effect.move({slidedir: tactile.effects.Direction.horizontal, to: Math.round(devWidth*0.1)+Math.round(devWidth*0.8/custom.itemCount)*(emptyCol-1)});
			} else if((direction == tactile.Enum.Direction.north) || (direction == tactile.Enum.Direction.south)) {
				box.effect.move({slidedir: tactile.effects.Direction.vertical, to: Math.round(devHeight*0.1)+Math.round(devHeight*0.8/custom.itemCount)*(emptyRow-1)});
			}
		},
		
		moveBoxAbsolute: function(devWidth,devHeight,box,destRow,destCol) {
			// vertical and horizontal move  	
			box.effect.move({slidedir: tactile.effects.Direction.horizontal, to: Math.round(devWidth*0.1)+Math.round(devWidth*0.8/custom.itemCount)*(destCol-1)});
			setTimeout(function() { box.effect.move({slidedir: tactile.effects.Direction.vertical, to: Math.round(devHeight*0.1)+Math.round(devHeight*0.8/custom.itemCount)*(destRow-1)}); },1000);

			// update row and col val of box
			box.rowVal = destRow;
			box.colVal = destCol;
		},
		
		resetEmptyBox: function() {
			custom.emptyBoxRow = custom.count;
			custom.emptyBoxCol = custom.count;
		},

		swipeHandler: function(devWidth,devHeight,row,col,e) {
			if(custom.isIdle) {
				var slideme = tactile.page.getComponent("box-" + row + "-" + col);
				// decide if this box should move to the empty box position.
				if(custom.canMove(custom.emptyBoxRow, custom.emptyBoxCol, slideme.rowVal, slideme.colVal)) {
					// if it does, then move it,
					// decide the direction, left/right, up/down
					var directionVal = custom.getDirection(custom.emptyBoxRow, custom.emptyBoxCol, slideme.rowVal, slideme.colVal);
					// if directionVal match the swipe direction then move the box
					var deltaXAbs = Math.abs(e.deltaX); 
					var deltaYAbs = Math.abs(e.deltaY); 
					if(
						((directionVal == tactile.Enum.Direction.west) && (e.deltaX > 0) && (deltaXAbs > deltaYAbs))
						|| ((directionVal == tactile.Enum.Direction.east) && (e.deltaX < 0) && (deltaXAbs > deltaYAbs))
						|| ((directionVal == tactile.Enum.Direction.north) && (e.deltaY > 0) && (deltaXAbs < deltaYAbs))
						|| ((directionVal == tactile.Enum.Direction.south) && (e.deltaY < 0) && (deltaXAbs < deltaYAbs))
					) {
						custom.isIdle = false;
						// slide the box and switch the box row and col position.
						custom.moveBox(devWidth,devHeight,slideme, directionVal, custom.emptyBoxRow, custom.emptyBoxCol);
						setTimeout(custom.resetIsIdle,1000);
					}
				}
			}
		},
		
		resetPlay: function(devWidth,devHeight,e) {
			// automatically move box to initial position
			for (var rowStat=1; rowStat <= custom.count; rowStat++) {
				for (var colStat=1; colStat <= custom.count; colStat++) {
					if(!(rowStat == custom.count && colStat == custom.count)){
						// setup current box row and col position
						var boxId = "box-" + rowStat + "-" + colStat;
						var box = tactile.page.getComponent(boxId);
						custom.moveBoxAbsolute(devWidth,devHeight,box,rowStat,colStat);
					}
				}
			}
			// reset empty box
			custom.resetEmptyBox();
		},		

		resetNoPlay: function(e) {
			// automatically move box to initial position
			for (var rowStat=1; rowStat <= custom.count; rowStat++) {
				for (var colStat=1; colStat <= custom.count; colStat++) {
					if(!(rowStat == custom.count && colStat == custom.count)){
						// setup current box row and col position
						var boxId = "box-" + rowStat + "-" + colStat;
						var box = tactile.page.getComponent(boxId);
						// reset row and col val of box
						box.rowVal = rowStat;
						box.colVal = colStat;
					}
				}
			}
			// reset empty box
			custom.resetEmptyBox();
		}		
};

tactile.page.onready(custom.init);
			