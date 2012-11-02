var customHalfCountValue = 4;
var customCountValue = (customHalfCountValue * 2) + 1;
custom = {
		boxIdPref : 'box-',
		
		layRootId : 'lay-root',
		
		layMainId : 'lay-main',
		
		halfCount : customHalfCountValue,
		
		emptyBoxCol : customHalfCountValue + 1,

		count : customCountValue,
		
		itemCount : customCountValue,
		
		eventManager : tactile.EventManager,
		
		boxId: [""],
		
		colArr : [1,1,1,1,0,-1,-1,-1,-1],
		
		isIdle: true,
		
		resetIsIdle: function() {
			custom.isIdle = true;
		},
		
		init: function() {
			// initialize box id
			custom.initBoxIdVal();

			// initialize starting position
			custom.initColVal();
			
			// initialize event
			custom.initEventManager();
		},
		
		initBoxIdVal: function() {
			for (var colStat=1; colStat <= custom.count; colStat++) {
				custom.boxId[colStat] = custom.boxIdPref + colStat;
			}
		},
		
		initColVal: function() {
			for (var colStat=1; colStat <= custom.count; colStat++) {
				if(colStat != (custom.halfCount + 1)) {
					tactile.page.getComponent(custom.boxId[colStat]).colVal = colStat;
					if(colStat < (custom.halfCount + 1)) {
						tactile.page.getComponent(custom.boxId[colStat]).typeVal = 1;
					} else if(colStat > (custom.halfCount + 1)) {
						tactile.page.getComponent(custom.boxId[colStat]).typeVal = -1;
					}
				}
			}
		},
		
		initEventManager: function() {
			custom.eventManager.addListener(custom.boxId[1], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[1]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[2], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[2]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[3], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[3]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[4], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[4]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[6], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[6]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[7], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[7]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[8], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[8]),
					e
				);
			});					
			custom.eventManager.addListener(custom.boxId[9], tactile.Enum.Events.scrollend, function(e){
				custom.swipeHandler(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					tactile.page.getComponent(custom.boxId[9]),
					e
				);
			});					
			
			// add reset event
			custom.eventManager.addListener(custom.layRootId, tactile.Enum.Events.doubletap, function(e){
				custom.resetPlay(
					tactile.page.getComponent(custom.layMainId).getInnerBox().width,
					e
				);
			});
			
			// add onresize
			custom.eventManager.addResizeListener(function(e){
				custom.resetNoPlay(e);
			});
		},

		canMove: function(box) {
			// empty box is next on the correct dir
			// or two box away and there's other box type in between
			return ((box.typeVal == 1) && (((custom.emptyBoxCol - box.colVal) == 1)
				|| (((custom.emptyBoxCol - box.colVal) == 2) && (custom.colArr[box.colVal] == -1))))
				|| ((box.typeVal == -1) && (((custom.emptyBoxCol - box.colVal) == -1)
				|| (((custom.emptyBoxCol - box.colVal) == -2) && (custom.colArr[box.colVal-2] == 1))));
		},

		getDirection: function(box) {
			if(box.typeVal == 1) {
				// direction is right
				return tactile.Enum.Direction.east;
			} else if(box.typeVal == -1) {
				// direction is left
				return tactile.Enum.Direction.west;
			} else {
				return undefined;
			}
		},
		
		moveBox: function(devWidth,box,direction) {
			// switch row and col val of box and emptyBox
			var oldBoxCol = box.colVal; 			
			box.colVal = custom.emptyBoxCol;
			custom.emptyBoxCol = oldBoxCol; 
			custom.colArr[box.colVal-1] = box.typeVal;
			custom.colArr[custom.emptyBoxCol-1] = 0;

			// decide vertical or horizontal move  	
			if((direction == tactile.Enum.Direction.west) || (direction == tactile.Enum.Direction.east)) {
				box.effect.move({
					slidedir: tactile.effects.Direction.horizontal, 
					to: Math.round(devWidth*0.1)+Math.round(devWidth*0.8/custom.itemCount)*(box.colVal-1)
				});
			}
		},
		
		moveBoxAbsolute: function(devWidth,box,destCol) {
			// vertical and horizontal move
			box.effect.move({
				slidedir: tactile.effects.Direction.horizontal, 
				to: Math.round(devWidth*0.1)+Math.round(devWidth*0.8/custom.itemCount)*(destCol-1)
			});

			// update row and col val of box
			box.colVal = destCol;
		},
		
		resetEmptyBox: function() {
			custom.emptyBoxCol = custom.halfCount + 1;
			custom.colArr = [1,1,1,1,0,-1,-1,-1,-1];
		},

		swipeHandler: function(devWidth,slideme,e) {
			if(custom.isIdle) {
				// decide if this box should move to the empty box position.
				if(custom.canMove(slideme)) {
					// if it does, then move it,
					// decide the direction, left/right, up/down
					var directionVal = custom.getDirection(slideme);
					// if directionVal match the swipe direction then move the box
					var deltaXAbs = Math.abs(e.deltaX); 
					var deltaYAbs = Math.abs(e.deltaY); 
					var isHor = (deltaXAbs > deltaYAbs);
					if(isHor && 
						(
							((directionVal == tactile.Enum.Direction.west) && (e.deltaX < 0))
							||
							((directionVal == tactile.Enum.Direction.east) && (e.deltaX > 0))
						)
					){
						custom.isIdle = false;
						// slide the box and switch the box row and col position.
						custom.moveBox(devWidth,slideme,directionVal);
						setTimeout(custom.resetIsIdle,1000);
					}
				}
			}
		},
		
		resetPlay: function(devWidth,devHeight,e) {
			// automatically move box to initial position
			custom.initColVal();
			for (var colStat=1; colStat <= custom.count; colStat++) {
				if(colStat != (custom.halfCount + 1)) {
					// setup current box col position
					var box = tactile.page.getComponent(custom.boxId[colStat]);
					custom.moveBoxAbsolute(devWidth,box,colStat);
				}
			}
			// reset empty box
			custom.resetEmptyBox();
		},		

		resetNoPlay: function(e) {
			// automatically move box to initial position
			custom.initColVal();
			// reset empty box
			custom.resetEmptyBox();
		}		
};

tactile.page.onready(custom.init);
