/**
 * Tactile Framework Stub File
 * Version: Beta.0.4
 * Copyright 2011 by Netbiscuits
 * @see Full reference at http://tactilebeta.apps.netbiscuits.com
 * 
 * This file is intended to be used as library reference for IDE's like Eclipse or NetBeans.
 * 
 * Please check for updated versions.
 */

/**
 * @namespace The root namespace of the tactile framework.
 */
var tactile = {};
/**
 * Current version of the framework.
 * @field
 */
tactile.version = "beta.0.4";
/**
 * @namespace Holds effect and animation implementations.
 * @ignore
 */
tactile.effects = {};
/**
 * @namespace Holds event management implementations.
 * @ignore
 */
tactile.events = {};
/**
 * @namespace Holds the foundation layer classes of the tactile framework.
 * @ignore
 */
tactile.foundation = {};


/**
 * @class
 * @description Logger object for debugging purpose. Logs errors and warnings and provides functionality for logging messages with different statuses. Logging to console and optional on screen in an overlay or remote via AJAX.
 * In order to use AJAX logging you need a server side processing of the logging request. Logging messages are send as post requests to the provided url.
 * The interval in which the messages are sent can be configured using the timeout config option.
 * @example
 * // To enable the logger set
 * tactile.logger.setConfig({
 *      isAjax: false,
 *      isOverlay: true,
 *      height: 400,
 *      level: tactile.logger.level.warn,
 *      filter: ['filtername1', 'filtername2', 'filtername3']
 * });
 * 
 * //To create log message
 * tactile.logger.error("message", "filtername1");
 * tactile.logger.warn("message", "filtername2");
 * tactile.logger.info("message", "filtername3");
 * 
 * @example
 * // To enable the logger for tactile build in log messages to console set
 * tactile.logger.setLevel(tactile.logger.level.info);
 * 
 * @example
 * // To create and use the logger for your custom code to a page overlay set
 * tactile.logger.setConfig({
 *      isOverlay: true,
 *      height: 'fit',
 *      level: tactile.logger.level.info,
 *      filter: ['myLogger']
 * });
 * tactile.logger.info("my log message", "myLogger");
 */
tactile.logger = {


    /**
     * @name tactile.logger.setConfig
     * @function
     * @public
     * @description Set configuration options for Logger class
     * @param {tactile.foundation.LoggerConfig} config
     */
    setConfig : function(config){

    },

    /**
     * @name tactile.logger.error
     * @function
     * @description Logs error messages
     * @param message {String}
     * @param filter {String}
     * @example
     * // log error message with filter "filtername1"
     * tactile.logger.error("message", "filtername1");
     */
    error : function(message, filter) {

    },
    
    /**
     * @name tactile.logger.warn
     * @function
     * @description Logs warn messages
     * @param message {String}
     * @param filter {String}
     * @example
     * // log warn message with filter "filtername1"
     * tactile.logger.warn("message", "filtername1");
     */
    warn : function(message, filter) {

    },
    /**
     * @name tactile.logger.info
     * @function
     * @description Logs info messages
     * @param message {String}
     * @param filter {String}
     * @example
     * // log info message with filter "filtername1"
     * tactile.logger.info("message", "filtername1");
     */
    info : function(message, filter) {

    },

    /**
     * @name tactile.logger.setLevel
     * @function
     * @description Enable or disable logging by setting a log level of info, warn or error. Log messages will be cumulative, that means if log level is info, then warn and error will be logged as well.
     * @param {tactile.foundation.Logger.level} level
     */
    setLevel : function(level) {

    }
    

};

/**
 * Specifies the log level. Default is disabled.
 * @ignore
 */
tactile.logger.level = {
    /** 
     * Log info, warn and error messages.
     * @field 
     * @memberOf tactile.logger
     */
    info: 3,
    /** 
     * Log warn and error messages.
     * @field 
     * @memberOf tactile.logger
     */
    warn: 2,
     /** 
      * Log error messages only.
      * @field 
      * @memberOf tactile.logger
      */
    error: 1,
    /** 
     * Disable logging.
     * @field 
     * @memberOf tactile.logger
     */
    disabled: 0
};

/**
 * Static class
 * @class Enumeration constants for configuration options.
 */
tactile.Enum = {
	/**
	* @field
	*/
	Direction : {
		/** @fieldOf tactile.Enum */
		north: "north",
		/** @fieldOf tactile.Enum */
		east: "east",
		/** @fieldOf tactile.Enum */
		south: "south",
		/** @fieldOf tactile.Enum */
		west: "west"
	},
	/**
	* @field
	*/
	Display : {
		/** @fieldOf tactile.Enum */
		block : "block",
		/** @fieldOf tactile.Enum */
		inline : "inline",
		/** @fieldOf tactile.Enum */
		none : "none",
		/** @fieldOf tactile.Enum */
		inherit : "inherit"
	},
	/**
	* @field
	*/
	Effects : {
		/** @fieldOf tactile.Enum */
		slide: "slide",
		/** @fieldOf tactile.Enum */
		fade: "fade",
		/** @fieldOf tactile.Enum */
		expand: "expand"
	},
	/**
	* @field
	*/
	FlexFlow : {
		/** @fieldOf tactile.Enum */
		horizontal : "horizontal",
		/** @fieldOf tactile.Enum */
		vertical : "vertical"
	},
	/**
	* @field
	*/
	Dimension : {
		/** @fieldOf tactile.Enum */
		width: "width",
		/** @fieldOf tactile.Enum */
		height: "height"
	},
	/**
	* @field
	*/
	Float : {
		left : "left", 
		/** @fieldOf tactile.Enum */
		right : "right",
		/** @fieldOf tactile.Enum */
		none : "none",
		/** @fieldOf tactile.Enum */
		inherit : "inherit"
	},
	/**
	* @field
	*/
	Overflow : {
		/** @fieldOf tactile.Enum */
		visible : "visible",
		/** @fieldOf tactile.Enum */
		hidden : "hidden",
		/** @fieldOf tactile.Enum */
		inherit : "inherit"
	},
	/**
	* @field
	*/
	Position : {
		/** 
		 * @name static
		 * @fieldOf tactile.Enum 
		 */
		"static" : "static", // leave "static" as string because it is a reserved word.
		/** @fieldOf tactile.Enum */
		absolute : "absolute",
		/** @fieldOf tactile.Enum */
		relative : "relative",
		/** @fieldOf tactile.Enum */
		inherit : "inherit"
	},
	/**
	* @field
	*/
	Scroll : {
		/** @fieldOf tactile.Enum */
		horizontal : "horizontal",
		/** @fieldOf tactile.Enum */
		vertical : "vertical",
		/** @fieldOf tactile.Enum */
		both : "both",
		/** @fieldOf tactile.Enum */
		disabled: "disabled"
	},
	/**
	* @field
	*/
	Transitions : {
		/** @fieldOf tactile.Enum */
		linear: "linear",
		/** @fieldOf tactile.Enum */
		easeIn: "ease-in",
		/** @fieldOf tactile.Enum */
		easeOut: "ease-out",
		/** @fieldOf tactile.Enum */
		easeInOut: "ease-in-out",
		/** @fieldOf tactile.Enum */
		easeOutIn: "ease-out-in"
	},
	/**
	* @field
	*/
	Unit : {
		/** @fieldOf tactile.Enum */
		percent : "%",
		/** @fieldOf tactile.Enum */
		px : "px",
		/** @fieldOf tactile.Enum */
		em : "em"
	},
	/**
	* @field
	*/
	Events : {
		/** @fieldOf tactile.Enum */
		touchstart: "touchstart",
		/** @fieldOf tactile.Enum */
		touchmove: "touchmove",
		/** @fieldOf tactile.Enum */
		touchend: "touchend",
		/** @fieldOf tactile.Enum */
		scrollstart: "scrollstart",
		/** @fieldOf tactile.Enum */
		scroll: "scroll",
		/** @fieldOf tactile.Enum */
		scrollend: "scrollend",
		/** @fieldOf tactile.Enum */
		tap: "tap",
		/** @fieldOf tactile.Enum */
		doubletap: "doubletap",
		/** @fieldOf tactile.Enum */
		swipe: "swipe"
	},
	/**
	 * 
	 * @param prop
	 * @param value
	 * @returns {Boolean}
	 * @private
	 */
	contains : function(prop, value) {
		if (value === undefined || value === null) {
			return false;
		}
		var found = false;
		var v = value.toLowerCase();
		for (var x in prop) {
			if (prop[x] == v) {
				found = true;
				break;
			}
		}
		return found;
	},
	/**
	 * 
	 * @param prop
	 * @param value
	 * @returns {String}
	 * @private
	 */
	getValue : function(prop, value) {
		if (value === undefined) {
			return "";
		}
		var v = value.toLowerCase();
		for (var x in prop) {
			if (prop[x] == v) {
				return prop[x];
				break;
			}
		}
		return "";
	}
	
};
/**
 * @fieldOf tactile.effects
 */
tactile.effects.Direction = {
		/**
		 * @fieldOf tactile.effects
		 */
		horizontal: "horizontal",
		/**
		 * @fieldOf tactile.effects
		 */
		vertical: "vertical"
};


/**
 * @class Abstract base class for all effects.
 */
tactile.effects.Base = function() {
	/**
	 * Constructor function.
	 * @param {tactile.foundation.UIContainer} container Object reference.
	 * @param {tactile.effects.BaseConfig} config Configuration object.
	 * @throws Type mismatch exception
	 */
	this.init = function(container, config) {

	};
};


/**
 * An instance of the Slide class will be created internally if the effect-type="slide" attribute is set on a
 * subclass of tactile.foundation.UIContainer. The show and hide methods of tactile.foundation.UIComponent will then
 * call the effects show or hide and pass on any config parameter object to refine the behavior of the effect.
 * @class Slide effect implementation.
 * @param {tactile.foundation.UIContainer} container Object reference.
 * @param {tactile.effects.BaseConfig} config Configuration object.
 */
tactile.effects.Slide = function(container, config) {

};

tactile.effects.Slide.prototype = new tactile.effects.Base;

/**
 * Show correlates to slide in.
 * @param config
 * custom.layout2.show({slidefrom: tactile.Enum.Direction.west});
 */
tactile.effects.Slide.prototype.show = function(config) {

};

/**
 * Hide correlates to slide out.
 * @param config
 * custom.layout2.hide({slideto: tactile.Enum.Direction.east});
 */
tactile.effects.Slide.prototype.hide = function(config) {

};
/**
 * Move from current or provided top or left position to target provided or parent inner top or left position.
 * There are 2 options to use the move method.
 * <ol>
 * 	<li>Assign the effect-type="slide" attribute to the element.</li>
 *  <li>Create an instance of the Slide class and provide a reference to the tactile.foundation.UIContainer subclass.</li>
 * </ol>
 * @param {tactile.effects.SlideMoveConfig} config
 * @returns {Boolean} Returns true if the effect was starting and false if it not yet has finished.
 * @example
 * // Implicit create a Slide object by setting the effect-type attribute
 * // &lt;layout id="slideme" effect-type="slide" ...
 * var slideme = page.getComponent("slideme");
 * slideme.effect.move({slidedir: tactile.effects.Direction.horizontal, to: newleft});
 * 
 * // Explicit create a Slide object and assign a reference.
 * var slideme = page.getComponent("slideme");
 * custom.scrollanim = new tactile.effects.Slide(slideme, {duration:3000, transition: tactile.Enum.Transitions.linear});
 * custom.scrollanim.move({slidedir: tactile.effects.Direction.horizontal, to: newleft});
 */
tactile.effects.Slide.prototype.move = function(config) {

};


/**
 * An instance of the Expand class will be created internally if the effect-type="expand" attribute is set on a
 * subclass of tactile.foundation.UIContainer. The show and hide methods of tactile.foundation.UIComponent will then
 * call the effects show or hide and pass on any config parameter object to refine the behavior of the effect.
 * @class Expand effect implementation.
 * @param {tactile.foundation.UIContainer} container Object reference.
 * @param {tactile.effects.BaseConfig} config Configuration object.
 */
tactile.effects.Expand = function(container, config) {

};

tactile.effects.Expand.prototype = new tactile.effects.Base;

/**
 * Show correlates to expand.
 * @param {tactile.effects.ExpandConfig} config
 * @example
 * custom.layout2.show({expand: tactile.Enum.Dimension.width, from:40});
 */
tactile.effects.Expand.prototype.show = function(config) {

};

/**
 * Hide correlates to collapse.
 * @param {tactile.effects.ExpandConfig} config
 */
tactile.effects.Expand.prototype.hide = function(config) {

};


/**
 * An instance of the Fade class will be created internally if the effect-type="fade" attribute is set on a
 * subclass of tactile.foundation.UIContainer. The show and hide methods of tactile.foundation.UIComponent will then
 * call the effects show or hide and pass on any config parameter object to refine the behavior of the effect.
 * @class Fade effect implementation.
 * @param {tactile.foundation.UIContainer} container Object reference.
 * @param {tactile.effects.BaseConfig} config Configuration object.
 */
tactile.effects.Fade = function(container, config) {

};

tactile.effects.Fade.prototype = new tactile.effects.Base;

/**
 * Show correlates to fade in.
 * @param {tactile.effects.FadeConfig} config
 */
tactile.effects.Fade.prototype.show = function(config) {

};

/**
 * Hide correlates to fade-out.
 * @param {tactile.effects.FadeConfig} config
 */
tactile.effects.Fade.prototype.hide = function(config) {

};


/**
 * @class Publisher/Observer pattern implementation for framework internal events.
 */
tactile.foundation.Observer = function () {

};

tactile.foundation.Observer.prototype = {
	/**
	 * Adds a function reference which will be executed when the event fires.
	 * @param handler {Function} reference
	 * @param scope {Object} reference to the "this" scope within the handler function. Default is "window".
	 * @example
	 * custom.multiview1 = page.getComponent("multiview1");
	 * custom.multiview1.onswitch.subscribe(custom.handleSwitch);
	 * custom.handleSwitch = function(e) {
	 * 	...
	 * }
	 */
    subscribe : function(fn, scope) {

    },
    /**
     * Removes the function reference from the subscribed event handlers.
     * @param handler {Function} reference
     */
    unsubscribe : function(fn) {

    }
};

/**
 * @description Scroller support for views. A scroller instance will be created internally if the scroll attributes are set.
 * @class Provides scrolling functionality for views.
 * @name tactile.foundation.Scroller
 */
tactile.foundation.Scroller = function(view, config) {

	/** 
	 * @name tactile.foundation.Scroller#onstart
	 * @description Event fires on scroll start.
	 * @type tactile.foundation.Observer
	 */
	this.onstart = new tactile.foundation.Observer();
	/**
	 * @name tactile.foundation.Scroller#onstartHandler
	 * @event
	 * @param {tactile.foundation.ScrollEvent} e
	 * @description Event handler function signature for onstart.
	 */
	
	/** 
	 * @name tactile.foundation.Scroller#onscroll
	 * @description Event fires during scroll movement.
	 * @type tactile.foundation.Observer
	 */
	this.onscroll = new tactile.foundation.Observer();
	/**
	 * @name tactile.foundation.Scroller#onscrollHandler
	 * @event
	 * @param {tactile.foundation.ScrollEvent} e
	 * @description Event handler function signature for onscroll.
	 */
	
	/** 
	 * @name tactile.foundation.Scroller#onend
	 * @description Event fires on scroll end.
	 * @type tactile.foundation.Observer
	 */
	this.onend = new tactile.foundation.Observer();
	/**
	 * @name tactile.foundation.Scroller#onendHandler
	 * @event
	 * @param {tactile.foundation.ScrollEvent} e
	 * @description Event handler function signature for onend.
	 */

};

/**
 * Scroll back to the initial position using the scrolling animation.
 */
tactile.foundation.Scroller.prototype.scrollBack = function() {

};

/**
 * Reset the scroll view to the initial position without animation.
 */
tactile.foundation.Scroller.prototype.reset = function() {

};

/**
 * Moves the scroller to the specified element * 
 * @param to - element id.
 */
tactile.foundation.Scroller.prototype.move = function(to) {
	
};

/**
 * @description ScrollBar's for Scroller. A ScrollBar instance will be created internally if the scroll attributes are set.
 * @class Provides scrollbar's for views.
 * @name tactile.foundation.ScrollBar
 */
tactile.foundation.ScrollBar = function(scroller, config) {

};


/**
 * Represents a HTMLElement associated with a tactile object.
 * @class Abstract base class for all Tactile Elements
 */
tactile.foundation.Element = function() {

};

/**
 * Set the display style to none.
 */
tactile.foundation.Element.prototype.hide = function(config) {	

};

/**
 * Set the display style value of the element to the default (block or inline) or assinged value.
 */
tactile.foundation.Element.prototype.show = function() {

};

/**
 * Switch between hide and show depending on the current display style.
 */
tactile.foundation.Element.prototype.toggle = function() {

};

/**
 * Set the opacity style of the HTML element.
 * @param {Numeric} opacity Range from 0 to 100
 */
tactile.foundation.Element.prototype.setOpacity = function(opacity) {

};

/**
 * Get the opacity style of the HTML element.
 * @returns Number
 */
tactile.foundation.Element.prototype.getOpacity = function() {
	return 0;	
};

/**
 * Add a CSS class selector to the HTML element.
 * @param selector
 */
tactile.foundation.Element.prototype.addClass = function(selector) {

};

/**
 * Remove a CSS class selector from the HTML element.
 * @param selector
 */
tactile.foundation.Element.prototype.removeClass = function(selector) {

};

/**
 * Replace a CSS class selector with another one.
 * @param selector1 - old selector
 * @param selector2 - new selector
 */
tactile.foundation.Element.prototype.replaceClass = function(selector1, selector2) {

};

/**
 * Toggle will add or remove a CSS class selector wheter or not it is already assigned.
 * @param selector
 */
tactile.foundation.Element.prototype.toggleClass = function(selector) {

};

/**
 * Swap will replace selector1 with selector2 or vice versa.
 * @param selector1
 * @param selector2
 */
tactile.foundation.Element.prototype.swapClass = function(selector1, selector2) {

};

/**
 * Check if the Element is visible.
 * @returns {Boolean}
 */
tactile.foundation.Element.prototype.isVisible = function() {
	return true;
};



/**
 * Represents HTML elements which are not part of a tactile.foundation.UIComponent derived class.
 * @class Wrapper class for HTMLElement.
 * @augments tactile.foundation.Element
 * @param elem String with element ID or HTMLElement object
 */
tactile.foundation.UIElement = function(elem) {
	tactile.foundation.UIElement.prototype.init.call(this, elem);
};

tactile.foundation.UIElement.prototype = new tactile.foundation.Element();


/**
 * Represents a tactile component.
 * @class Abstract base class for all tactile components.
 * @augments tactile.foundation.Element
 */
tactile.foundation.UIComponent = function() {
	
	/** 
	 * @name tactile.foundation.UIComponent#aftershow 
	 * @description Fires when the show method is completed. Useful if an effect is associated.
	 * @type tactile.foundation.Observer
	 */
	this.aftershow = undefined; // needs a instance of tactile.foundation.Observer in concrete sub class
	/**
	 * @name tactile.foundation.UIComponent#aftershowHandler
	 * @event
	 * @param {tactile.foundation.StateEvent} e
	 * @description Event handler function signature for aftershow.
	 */
	
	/** 
	 * @name tactile.foundation.UIComponent#beforeshow 
	 * @description Fires before the show method is starting. Useful if an effect is associated.
	 * @type tactile.foundation.Observer
	 */
	this.beforeshow = undefined; // needs a instance of tactile.foundation.Observer in concrete sub class
	/**
	 * @name tactile.foundation.UIComponent#beforeshowHandler
	 * @event
	 * @param {tactile.foundation.StateEvent} e
	 * @description Event handler function signature for beforeshow.
	 */
	
	/** 
	 * @name tactile.foundation.UIComponent#afterhide 
	 * @description Fires when the hide method is completed. Useful if an effect is associated.
	 * @type tactile.foundation.Observer
	 */
	this.afterhide = undefined; // needs a instance of tactile.foundation.Observer in concrete sub class
	/**
	 * @name tactile.foundation.UIComponent#afterhideHandler
	 * @event
	 * @param {tactile.foundation.StateEvent} e
	 * @description Event handler function signature for afterhide.
	 */
	
	/** 
	 * @name tactile.foundation.UIComponent#beforehide 
	 * @description Fires before the hide method is starting. Useful if an effect is associated.
	 * @type tactile.foundation.Observer
	 */
	this.beforehide = undefined; // needs a instance of tactile.foundation.Observer in concrete sub class
	/**
	 * @name tactile.foundation.UIComponent#beforehideHandler
	 * @event
	 * @param {tactile.foundation.StateEvent} e
	 * @description Event handler function signature for beforehide.
	 */

};
tactile.foundation.UIComponent.prototype = new tactile.foundation.Element();

/**
 * Hides a UIComponent. If an effect is associated with the component, then the hide method will trigger the animation.
 * The behaviour of the effect can be configured with the config parameter. The type of the config object depends
 * on which effect is used. See tactile.effects reference for details.
 * @param config {Object} Optional effect configuration object.
 */
tactile.foundation.UIComponent.prototype.hide = function(config) {	

};


/**
 * Shows a UIComponent. If an effect is associated with the component, then the show method will trigger the animation.
 * The behaviour of the effect can be configured with the config parameter. The type of the config object depends
 * on which effect is used. See tactile.effects reference for details.
 * @param config {Object} Optional effect configuration object.
 */
tactile.foundation.UIComponent.prototype.show = function(config) {

};

/**
 * Switch between hide and show depending on the current state of the component. If it is hidden, the show method will be called and vice versa.
 * @param config {Object} Optional effect configuration object.
 */
tactile.foundation.UIComponent.prototype.toggle = function(config) {

};

/**
 * Append a component as a child. This will also append the HTMLElement of the child to the parent component.
 * @param element
 * @throws Type mismatch exception (writes error to tactile.logger only).
 */
tactile.foundation.UIComponent.prototype.append = function(component) {

};

/**
 * Remove a child component. This will also remove the component from the DOM.
 * @param component
 * @throws Type mismatch exception (writes error to tactile.logger only).
 * @throws Component is not a child exception (writes error to tactile.logger only).
 */
tactile.foundation.UIComponent.prototype.remove = function(component) {

};


/**
 * Represents a tactile container.
 * @class Base class for all tactile container.
 * @augments tactile.foundation.UIComponent
 */
tactile.foundation.UIContainer = function() {
	/** 
	 * Reference to the parent tactile.foundation.UIContainer.
	 * @field 
	 */
	this.parent = undefined;

	/** 
	 * @name tactile.foundation.UIContainer#onresize
	 * @description Event fires after the screen resize event or after orientation change.
	 * @type tactile.foundation.Observer
	 */
	this.onresize = undefined;
	/**
	 * @name tactile.foundation.UIContainer#onresizeHandler
	 * @event
	 * @param {tactile.foundation.Box} e
	 * @description Event handler function signature for onresize.
	 * @example
	 * var custom = {
	 * 	init: function() {
	 * 		var rootcontainer = page.getComponent("root");
	 * 		rootcontainer.onresize.subscribe(custom.onUpdateRoot);
	 * 	},
	 * 
	 * 	onUpdateRoot : function(e) {
	 * 			var log = new tactile.foundation.Logger();
	 * 			log.enabled = true;
	 * 			var msg = "";
	 * 			msg += "heigth = " + e.height + ", ";
	 * 			msg += "width = " + e.width + ", ";
	 * 			msg += "top = " + e.top + ", ";
	 * 			msg += "left = " + e.left;
	 * 			log.info(msg);
	 * 	}
	 * };
	 * page.onready(custom.init);
	 */
	
	/** 
	 * @name tactile.foundation.UIContainer#onstatechange
	 * @description Fires after changing the state as a result of the show or hide methods.
	 * The event is also propagated when a parent is changing the state.
	 * @type tactile.foundation.Observer
	 */
	this.onstatechange = undefined;
	/**
	 * @name tactile.foundation.UIContainer#onstatechangeHandler
	 * @event
	 * @param {tactile.foundation.StateEvent} e
	 * @description Event handler function signature for onstatechange.
	 * @example this.onstatechange.fire({sourceId: e.targetId});
	 */
	
};
tactile.foundation.UIContainer.prototype = new tactile.foundation.UIComponent();

/**
 * Returns the inner box coordinates of the current container (without borders, margins and paddings).
 * @returns {tactile.foundation.Box} (top, left, width, height)
 */
tactile.foundation.UIContainer.prototype.getInnerBox = function() {
	return {top: 0, left: 0, width: 0, height: 0};
};

/**
 * Returns the outer box coordinates of the current container (including borders, margins and paddings).
 * @returns {tactile.foundation.Box} (top, left, width, height)
 */
tactile.foundation.UIContainer.prototype.getOuterBox = function() {
	return {top: 0, left: 0, width: 0, height: 0};
};

/**
 * @private
 * @returns {tactile.foundation.Box} (top, left, width, height)
 */
tactile.foundation.UIContainer.prototype.getBoxOffset = function() {
	return {top: 0, left: 0, width: 0, height: 0};
};


/**
 * Resize the container to the provided box coordinates. If a box dimension is not provided it will reset the property of the HTMLElement.
 * Note: If configuration functions for top, left, width or height are defined, then they will be executed on each orientation change event and override the changes made with the resize function.
 * @param box {tactile.foundation.Box} (any of top, left, width, height)
 * @example
 * // Resize to another dimension:
 * container.resize({top: 0, left: 0, width:200, height: 400});
 * 
 * // Reset all by passing an empty Object
 * container.resize({});
 */
tactile.foundation.UIContainer.prototype.resize = function(box) {

};

/**
 * Append a container as a child. This will also append the HTMLElement of the child to the parent container.
 * @param element
 * @throws Type mismatch exception (writes error to tactile.logger only)
 */
tactile.foundation.UIContainer.prototype.append = function(element) {

};


/***
 * The LayoutManager will trigger updates for all registered root layouts. A root layout is one without parent element.
 * All layout objects without parent element are added automatically to the LayoutManager, so there is no need to
 * add them manually. Each layout object will update its position and dimension based on the expressions for 
 * width, height, top and left. Starting from the root layouts each layout will fire it's onresize event after the update 
 * and pass on their new {@link tactile.foundation.Box} dimension. All child elements are listening to the parents onresize events
 * and do their own update which will again be propagated to the children of the child by fireing the onresize event.
 * Thus a "resize event chain" from parents to children is established
 * 
 * @class Handles updates for layouts based on screen resize or orientation change events.
 */
tactile.foundation.LayoutManager = {
		/**
		 * Updating all registered Layouts.
		 */
		updateLayout : function() {

		},
		/**
		 * Add a root layout (one without parent).
		 * @param {Layout} layout
		 * @throws Type mismatch exception
		 */
		addLayout : function(layout) {

		}
};

/**
 *  @class
 *  @description History Manager object for handling browser back/forward button actions. 
 *  @example
 *  // add state for History manager
 *  var state = {
 *  	name: 'stateName',
 *  	callback: function(){
 *      	//function body
 *      }
 *  };
 *              
 *  tactile.foundation.HistoryManager.addHistoryState(state);
 */
tactile.foundation.HistoryManager = {
        /**
         * @name tactile.foundation.HistoryManager.addHistoryState
         * @description Add state to HistoryManager
         * @function
         * @param {Object} stateObj State configuration object:  stateObj.name {string} - required history state name, stateObj.callback {Function} - required history state callback function
         * @param {String} title History state Title, will be displayed as window title
         * @param {String} url History state URL, will be added to location.href without page reloading  
         */
    addHistoryState: function(stateObj, title, url) {

    }
};

/**
 * @class Provides AJAX support to load remote content like JSON, XML or HTML. Also supports JSONP.
 * @param config Configuration object
 *
 * @example
 *  var ajax = new tactile.AjaxLoader();
 *  ajax.onstart.subscribe(function(response){
 *      console.log("onstart: ", response);
 *  });
 *  ajax.load({
 *      url: 'http://someurl.domain',
 *      method: 'get',
 *      params: ''
 *  });
 *  ajax.onsuccess.subscribe(function(response){
 *      console.log("onsucces: ", response);
 *  });
 *  ajax.onerror.subscribe(function(){
 *      console.log("onerror: ",arguments);
 *  });
 */
tactile.AjaxLoader = function(config){
    /**
	 * @name tactile.AjaxLoader#onstart
	 * @description Event fires on request start.
	 * @type tactile.foundation.Observer
	 */
	this.onstart = new tactile.foundation.Observer();
	/**
	 * @name tactile.AjaxLoader#onstartHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onstart.
	 */
	
    /**
	 * @name tactile.AjaxLoader#onsuccess
	 * @description Event fires on request start.
	 * @type tactile.foundation.Observer
	 */
	this.onsuccess = new tactile.foundation.Observer();
	/**
	 * @name tactile.AjaxLoader#onsuccessHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onsuccess.
	 */
	
	/**
	 * @name tactile.AjaxLoader#onerror
	 * @description Event fires on request start.
	 * @type tactile.foundation.Observer
	 */
    this.onerror = new tactile.foundation.Observer();
	/**
	 * @name tactile.AjaxLoader#onerrorHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onerror.
	 */
};
/**
 * Get the response text. Returns null if load wasn't called before or an error occurred.
 * @returns {String} or null
 */
tactile.AjaxLoader.prototype.getResponseText = function(){
	return "";
};
/**
 * Get the response DOM object. Returns null if load wasn't called before or an error occurred.
 * @returns {DOM Node} or null
 */
tactile.AjaxLoader.prototype.getResponseXML = function(){
	return "";
};

/**
 * Load content from a remote location.
 * @param config Configuration object.
 */
tactile.AjaxLoader.prototype.load = function(config){

};

/**
 * Abort the current request.
 */
tactile.AjaxLoader.prototype.stop = function(){

};

/**
 * 
 * @class Provides AJAX support to load remote content and components.
 * @param config Configuration object
 * @example
 * // Load static content into a View using the tactile.ContentLoader.getResponseText() method.
 * var page = tactile.page; // make tactile.page global (optional)
 * var custom = {
 * 	//...
 * 	buttonLoad : function() {
 * 		var source = document.getElementById("view-content");
 * 		if (source) {
 * 			source.innerHTML = "content loading...";
 * 		}
 * 		var sourceloader = new tactile.ContentLoader();
 * 		sourceloader.onsuccess.subscribe(custom.addContent);
 * 		sourceloader.onerror.subscribe(function(e) {
 * 			var source = document.getElementById("view-content");
 * 			if (source) {
 * 				source.innerHTML = "There was an error loading the content: " + e.status + " " + e.message;
 * 			}
 * 		});
 * 		sourceloader.load({url : "/myremotecontent"});
 * 	},
 * 	addContent : function(e) {
 * 		var content = page.getComponent("view-content");
 * 		if (content) {
 * 			var text = e.loader.getResponseText();
 * 			content.elem.innerHTML = text;
 * 		}
 * 	},
 * 	//...
 * }
 * @example
 * // This example demonstrates the basic steps to load more Views into a MultiView using the ContentLoader.getComponents() method.
 * 
 * var page = tactile.page; // make tactile.page global (optional)
 * var custom = {
 * 
 * 	multiview: undefined, // reference for MultiView
 * 	loadingview: undefined, // reference for loading View
 * 	loader: undefined, // reference for ContentLoader
 * 	
 * 	init: function() {
 * 		// get a reference to the MultiView
 * 		custom.multiview = page.getComponent("multiview-1");
 * 		// get a reference to the loading View
 * 		custom.loadingview = page.getComponent("loadingview");
 * 		
 * 		// add click event handler to the buttons
 * 		tactile.EventManager.addListener("view-control-2", "click", custom.buttonLoad);
 * 		
 * 		// create a new ContentLoader instance
 * 		custom.loader = new tactile.ContentLoader();
 * 		// add handler functions for the ContentLoader events
 * 		custom.loader.onstart.subscribe(custom.loadingviewShow);
 * 		custom.loader.onsuccess.subscribe(custom.addContent);
 * 		custom.loader.onerror.subscribe(custom.handleError);
 * 
 * 	},
 * 	
 * 	buttonLoad : function() {
 * 		// call the ContentLoader load method
 * 		custom.loader.load({
 * 			url : "/contentloader/page1_remote.xml"
 * 		});
 * 	},
 * 	
 * 	addContent : function(e) {
 * 		// filter loaded components by type
 * 		var newcomponents = custom.loader.getComponents(View);
 * 		// loop through all views and call the MultiView append method
 * 		for (var i = 0; i < newcomponents.length; i++) {
 * 			custom.multiview.append(newcomponents[i]);
 * 		}
 * 		// hide the loading view
 * 		custom.loadingviewHide();
 * 		// show the last view item
 * 		custom.multiview.showLast();	
 * 	},
 * 	
 * 	loadingviewShow : function() {
 * 		// show the loading view
 * 		custom.loadingview.show();	
 * 	},
 * 	
 * 	loadingviewHide : function() {
 * 		// hide the loading view
	 * 	custom.loadingview.hide();	
 * 	},
 * 	
 * 	handleError : function(e) {
 * 		// notify with an alert about the error
 * 		alert("Error loading the content: " + e.url + ", message: " + e.status + " " + e.message);
 * 		// hide the loading view
 * 		custom.loadingviewHide();
 * 	}
 * };
 * 
 * // entry point for JavaScript code
 * page.onready(custom.init);
 */
tactile.ContentLoader = function(config) {
	/** 
	 * @name tactile.ContentLoader#onstart
	 * @description Event fires on request start.
	 * @type tactile.foundation.Observer
	 */
	this.onstart = new tactile.foundation.Observer();
	/**
	 * @name tactile.ContentLoader#onstartHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onstart.
	 */
	
	/** 
	 * @name tactile.ContentLoader#onsuccess
	 * @description Event fires on request end.
	 * @type tactile.foundation.Observer
	 */
	this.onsuccess = new tactile.foundation.Observer();
	/**
	 * @name tactile.ContentLoader#onsuccessHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onsuccess.
	 */
	
	/** 
	 * @name tactile.ContentLoader#onerror
	 * @description Event fires on request errors.
	 * @type tactile.foundation.Observer
	 */
	this.onerror = new tactile.foundation.Observer();
	/**
	 * @name tactile.ContentLoader#onerrorHandler
	 * @event
	 * @param {tactile.foundation.AjaxEvent} e
	 * @description Event handler function signature for onerror.
	 */

	
	
};

/**
 * Load content from a remote location.
 * @param config Configuration object.
 */
tactile.ContentLoader.prototype.load = function(config) {

};

/**
 * Returns a loaded component by key or null if it is not existing.
 * @param key {String} Element ID of the searched component
 * @returns {tactile.foundation.UIComponent}
 */
tactile.ContentLoader.prototype.getComponent = function(key) {
	return new tactile.foundation.UIComponent();
};

/**
 * Returns all loaded components, or empty Array if no components are returned.
 * Note: If a loaded component has the same element id as an already existing component, it will not be initialized.
 * @param {Class} filter -  Types of components to return (e.g.: Layout, View, MultiView, FlexView, FlexItem).
 * @returns {Array} Containing the components.
 * @throws Initialization exception (writes error to tactile.logger only)
 */
tactile.ContentLoader.prototype.getComponents = function() {
	return [];
};

/**
 * Abort the current request.
 */
tactile.ContentLoader.prototype.stop = function() {

};

/**
 * Get the response text. Returns null if load wasn't called before or an error occurred.
 * @returns {String} or null
 */
tactile.ContentLoader.prototype.getResponseText = function() {
	return null;
};

/**
 * Get the response DOM object. Returns null if load wasn't called before or an error occurred.
 * @returns {DOM Node} or null
 */
tactile.ContentLoader.prototype.getResponseXML = function() {
	return null;
};


/**
 * @description Represents a tactile &lt;layout&gt; element. An instance of the tactile.Layout class will be created for each element.
 * This means, that by using the BML &lt;layout&gt; element, the JavaScript code for creating a new layout object
 * will be generated on the server side. You can access each layout object by using tactile.page.getComponent(key) and provide
 * the id value as key parameter.

	<h1>BML &lt;layout&gt; element</h1>
	<div class="refbody">
		<p>The &lt;layout&gt; element is used to create tactile layouts.</p>
		<table cellpadding="4" cellspacing="0" border="1">
			<tr>
				<th valign="bottom" align="left">Attribute</th>
				<th valign="bottom" align="left">Type</th>
				<th valign="bottom" align="left">Description</th>
			</tr>
			<tr>
				<td valign="top">id</td>
				<td valign="top">string</td>
				<td valign="top">Identifier</td>
			</tr>
			<tr>
				<td valign="top">class</td>
				<td valign="top">string</td>
				<td valign="top">CSS class selector</td>
			</tr>
			<tr>
				<td valign="top">test</td>
				<td valign="top">string</td>
				<td valign="top">Test condition. Will be evaluated on the server side and defines wheter or not the element is included in the output markup</td>
			</tr>
			<tr>
				<td valign="top">width</td>
				<td valign="top">string</td>
				<td valign="top">Required. Expression for width dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">height</td>
				<td valign="top">string</td>
				<td valign="top">Required. Expression for height dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">top</td>
				<td valign="top">string</td>
				<td valign="top">Expression for top dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">left</td>
				<td valign="top">string</td>
				<td valign="top">Expression for left dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">visible</td>
				<td valign="top">string</td>
				<td valign="top">Expression for visibility (conditional boolean: visible="portrait:true, landscape:false"). The intension of this attribute is to set the visible property based on a condition (landscape or portrait). Note: If this expression evaluates always to false, the element will never be visible</td>
			</tr>
			<tr>
				<td valign="top">effect-type</td>
				<td valign="top">enumeration</td>
				<td valign="top">Effect animation type. (slide|fade|expand)</td>
			</tr>
			<tr>
				<td valign="top">effect-duration</td>
				<td valign="top">number</td>
				<td valign="top">Duration of the animation in milliseconds.</td>
			</tr>
			<tr>
				<td valign="top">effect-transition</td>
				<td valign="top">enumeration</td>
				<td valign="top">Transition timing function for the effect. (easeIn|easeInOut|easeOut|easeOutIn|linear)</td>
			</tr>
			<tr>
				<td valign="top">display</td>
				<td valign="top">enumeration</td>
				<td valign="top">Display style property (block, inline, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">overflow</td>
				<td valign="top">enumeration</td>
				<td valign="top">Overflow style property (visible, hidden, inherit)</td>
			</tr>
			<tr>
				<td valign="top">position</td>
				<td valign="top">enumeration</td>
				<td valign="top">Position style property (static, absolute, relative, inherit)</td>
			</tr>
			<tr>
				<td valign="top">float</td>
				<td valign="top">enumeration</td>
				<td valign="top">Float style property (left, right, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">opacity</td>
				<td valign="top">number</td>
				<td valign="top">Opacity style property (numeric value between 0 and 100)</td>
			</tr>
			<tr>
				<td valign="top">zindex</td>
				<td valign="top">number</td>
				<td valign="top">z-index style property (numeric value between 1 and 1-999999999)</td>
			</tr>
			<tr>
				<td valign="top">config</td>
				<td valign="top">string</td>
				<td valign="top">Advanced configuration options intended for testing and debugging purposes.</td>
			</tr>
		</table>
		<div>
			<h2>Child Elements</h2>
			<ul>
				<li>layout* | (view* | multiview* | flexview*)</li>
			</ul>
			<p>(The ? sign declares that the element can occur zero or one time, and the * sign declares that the element can occur zero or more times inside the element)</p>
		</div>
		<div>
			<h2>Parent Elements</h2>
			<ul>
				<li>page | layout</li>
			</ul>
		</div>
	</div>

 * @class JavaScript implementation for layout elements.
 * @name tactile.Layout
 * @augments tactile.foundation.UIContainer
 * @throws No width specified exception.
 * @throws No height specified exception.
 * @example
 * The keyword "parent" can be used inside the expression to refer
 * to the parent elements box dimensions.
 * 
 * &lt;layout id="root" width="parent.width" height="parent.height" top="0" left="0"&gt;
 *  ...
 * &lt;/layout&gt;
 * 
 * @example
 * Layout positions can be calculated in relation to the parent 
 * box dimensions and/or based on conditions like "landscape" or "portrait".
 * 
 * &lt;layout id="header"
 *  height="portrait: parent.height*0.15, landscape: parent.height "
 *  width="portrait: parent.width, landscape: parent.width*0.15" 
 *  top="0" 
 *  left="0"&gt;
 *  ...
 * &lt;/layout&gt;
 * 
 * @example
 * The "parent" keyword always provides the box dimensions top, left, width and height
 * which can be used for each top, left, width and height attributes. For example to
 * calculate the top position based on the parent.height.
 * 
 * &lt;layout id="footer" 
 *  width="portrait: parent.width, landscape, parent.width*0.15}" 
 *  height="portrait :parent.height*0.15, landscape: parent.height" 
 *  top="portrait: parent.height*0.85, landscape:0" 
 *  left="portrait: 0, landscape: parent.width*0.85"&gt;
 *  ...
 * &lt;/layout&gt;
 * 
 * @example
 * // make tactile.page global (optional)
 * var page = tactile.page;
 * // Getting a reference to the JavaScript object:
 * var myHeader = page.getComponent("header");
 * // Note: "header" refers to &lt;layout id="header"...
 */
tactile.Layout = function(elem, config) {

};

tactile.Layout.prototype = new tactile.foundation.UIContainer();

/**
 * Append a layout, view, flexview or multiview. This will also append the HTMLElement of the child to the DOM.
 * @param container The layout, view, flexview or multiview to append.
 * @throws Type mismatch exception
 */
tactile.Layout.prototype.append = function(container) {

};

/**
 * Remove a child component. This will also remove the component from the DOM.
 * @param component
 * @throws Type mismatch exception (writes error to tactile.logger only).
 * @throws Component is not a child exception (writes error to tactile.logger only).
 */
tactile.Layout.prototype.remove = function(component) {

};

/**
 * Check if the given parameter does match with the class type. Usefull for IDE support to get a typed reference to an object.
 * @param {tactile.foundation.UIComponent} component
 * @returns {tactile.Layout} or null
 * @example
 * // tactile.page.getComponent is returning an untyped reference. Passing it to cast will return a typed reference.
 * // If used together with a stub file in an IDE the editor will provide code completion.
 * var layout1 = tactile.Layout.cast(tactile.page.getComponent("layout1"));
 */
tactile.Layout.cast = function(component){
	return new tactile.Layout();
};

/**
 * Clone a layout. Optionaly with content.
 * @param contentCopy {Boolean} Clone with or without a copy of the content.
 * @example
 * // create a clone of layout1 including the content
 * var layout1 = tactile.page.getComponent("layout1");
 * var clonedLayout = layout1.clone(true);
 */
tactile.Layout.prototype.clone = function(contentCopy) {
	return new tactile.Layout();
};

/**
 * @description Represents a tactile &lt;view&gt; element. View elements are intended to hold content and can therefore
 * in opposite to Layout be scrollable. An instance of the tactile.View class will be created for each element.
 * This means, that by using the BML &lt;view&gt; element, the JavaScript code for creating a new view object
 * will be generated on the server side. You can access each view object by using tactile.page.getComponent(key) and provide
 * the id value as key parameter.

	<h1>BML &lt;view&gt; element</h1>
	<div class="refbody">
		<p>The &lt;view&gt; element is used to create tactile views.</p>
		<table cellpadding="4" cellspacing="0" border="1">
			<tr>
				<th valign="bottom" align="left">Attribute</th>
				<th valign="bottom" align="left">Type</th>
				<th valign="bottom" align="left">Description</th>
			</tr>
			<tr>
				<td valign="top">id</td>
				<td valign="top">string</td>
				<td valign="top">Identifier</td>
			</tr>
			<tr>
				<td valign="top">class</td>
				<td valign="top">string</td>
				<td valign="top">CSS class selector</td>
			</tr>
			<tr>
				<td valign="top">test</td>
				<td valign="top">string</td>
				<td valign="top">Test condition. Will be evaluated on the server side and defines wheter or not the element is included in the output markup</td>
			</tr>
			<tr>
				<td valign="top">scroll</td>
				<td valign="top">enumeration</td>
				<td valign="top">Enable scrolling of the view. (vertical, horizontal, both, disabled [default]).</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-direction</td>
				<td valign="top">enumeration</td>
				<td valign="top">If scroll is enabled scrollbar is also enabled by default. To disable set scrollbar-direction="disabled". (vertical, horizontal, both, disabled).</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-color</td>
				<td valign="top">string</td>
				<td valign="top">Color of the scroll bar. (Hex value, e.g.: scrollbar-color="#CCCCCC")</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-weight</td>
				<td valign="top">number</td>
				<td valign="top">Thickness of the scroll bar. (Default is 5)</td>
			</tr>
			<tr>
				<td valign="top">width</td>
				<td valign="top">string</td>
				<td valign="top">Expression for width dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">height</td>
				<td valign="top">string</td>
				<td valign="top">Expression for height dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">top</td>
				<td valign="top">string</td>
				<td valign="top">Expression for top dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">left</td>
				<td valign="top">string</td>
				<td valign="top">Expression for left dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">visible</td>
				<td valign="top">string</td>
				<td valign="top">Expression for visibility (conditional boolean: visible="portrait:true, landscape:false"). The intension of this attribute is to set the visible property based on a condition (landscape or portrait). Note: If this expression evaluates always to false, the element will never be visible.</td>
			</tr>
			<tr>
				<td valign="top">effect-type</td>
				<td valign="top">enumeration</td>
				<td valign="top">Effect animation type. (slide|fade|expand)</td>
			</tr>
			<tr>
				<td valign="top">effect-duration</td>
				<td valign="top">number</td>
				<td valign="top">Duration of the animation in milliseconds.</td>
			</tr>
			<tr>
				<td valign="top">effect-transition</td>
				<td valign="top">enumeration</td>
				<td valign="top">Transition timing function for the effect. (easeIn|easeInOut|easeOut|easeOutIn|linear)</td>
			</tr>
			<tr>
				<td valign="top">display</td>
				<td valign="top">enumeration</td>
				<td valign="top">Display style property (block, inline, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">overflow</td>
				<td valign="top">enumeration</td>
				<td valign="top">Overflow style property (visible, hidden, inherit)</td>
			</tr>
			<tr>
				<td valign="top">position</td>
				<td valign="top">enumeration</td>
				<td valign="top">Position style property (static, absolute, relative, inherit)</td>
			</tr>
			<tr>
				<td valign="top">float</td>
				<td valign="top">enumeration</td>
				<td valign="top">Float style property (left, right, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">opacity</td>
				<td valign="top">number</td>
				<td valign="top">Opacity style property (numeric value between 0 and 100)</td>
			</tr>
			<tr>
				<td valign="top">zindex</td>
				<td valign="top">number</td>
				<td valign="top">z-index style property (numeric value between 1 and 1-999999999)</td>
			</tr>
			<tr>
				<td valign="top">config</td>
				<td valign="top">string</td>
				<td valign="top">Advanced configuration options intended for testing and debugging purposes.</td>
			</tr>
		</table>
		<div>
			<h2>Child Elements</h2>
			<ul>
				<li>(view* | multiview* | flexview*) | container* | (ARTICLE* | BUTTONMENU* | FORM* | IMAGE* | LIST* | PIPEDMENU* | SEPARATOR* | TABBEDMENU* | TABLE* | TEASER* | TEXT* | MAP* | MEDIA)</li>
			</ul>
			<p>(The ? sign declares that the element can occur zero or one time, and the * sign declares that the element can occur zero or more times inside the element)</p>
		</div>
		<div>
			<h2>Parent Elements</h2>
			<ul>
				<li>layout | view | multiview</li>
			</ul>
		</div>
	</div>

 * @class JavaScript implementation for view elements.
 * @name tactile.View
 * @augments tactile.foundation.UIContainer
 * @throws Type mismatch exception (writes error to tactile.logger only).
 * @example
 * Creating a vertical scrollable view.
 * 
 * &lt;view id="view1" scroll="vertical"&gt;
 *  ...
 * &lt;/view&gt;
 * 
 * Creating a static view (not scrollable)
 * 
 * &lt;view id="view2"&gt;
 *  ...
 * &lt;/view&gt;
 * 
 * Creating a vertical scrollable view and change default scrollbar properties.
 * 
 * &lt;view id="view1" scroll="vertical" scrollbar-color="#CFCCEF" scrollbar-weight="8"&gt;
 *  ...
 * &lt;/view&gt;
 */
tactile.View = function(elem, config) {
	/**
	 * @name tactile.View#scroller
	 * @description Reference to the scroller object. Will be undefined if scroller is not configured.
	 * @type tactile.foundation.Scroller
	 */
	this.scroller = undefined;
};

tactile.View.prototype = new tactile.foundation.UIContainer();

/**
 * Append a view, flexview or multiview. This will also append the HTMLElement of the child to the DOM.
 * @param container The view, flexview or multiview to append.
 * @throws Type mismatch exception
 */
tactile.View.prototype.append = function(container) {

};

/**
 * Check if the given parameter does match with the class type. Usefull for IDE support to get a typed reference to an object.
 * @param {tactile.foundation.UIComponent} component
 * @returns {tactile.View} or null
 * @example
 * // tactile.page.getComponent is returning an untyped reference. Passing it to cast will return a typed reference.
 * // If used together with a stub file in an IDE the editor will provide code completion.
 * var view1 = tactile.View.cast(tactile.page.getComponent("view1"));
 */
tactile.View.cast = function(component){
	return new tactile.View();
};

/**
 * Clone a View. Optionaly with content.
 * @param contentCopy {Boolean} Clone with or without a copy of the content.
 * @example
 * // create a clone of view1 including the content
 * var view1 = tactile.page.getComponent("view1");
 * var clonedView = view1.clone(true);
 */
tactile.View.prototype.clone = function(contentCopy){
	return new tactile.View();
};


/**
 * @description Represents a tactile &lt;multiview&gt; element. MultiView elements are intended to hold a collection
 * of views where at each time only one of the views is visible. An instance of the tactile.MultiView class will be created for each element.
 * This means, that by using the BML &lt;multiview&gt; element, the JavaScript code for creating a new multiview object
 * will be generated on the server side. You can access each multiview object by using tactile.page.getComponent(key) and provide
 * the id value as key parameter.

	<h1>BML &lt;multiview&gt; element</h1>
	<div class="refbody">
		<p>The &lt;multiview&gt; element is used to create tactile multiviews.</p>
		<table cellpadding="4" cellspacing="0" border="1">
			<tr>
				<th valign="bottom" align="left">Attribute</th>
				<th valign="bottom" align="left">Type</th>
				<th valign="bottom" align="left">Description</th>
			</tr>
			<tr>
				<td valign="top">id</td>
				<td valign="top">string</td>
				<td valign="top">Identifier</td>
			</tr>
			<tr>
				<td valign="top">class</td>
				<td valign="top">string</td>
				<td valign="top">CSS class selector</td>
			</tr>
			<tr>
				<td valign="top">test</td>
				<td valign="top">string</td>
				<td valign="top">Test condition. Will be evaluated on the server side and defines wheter or not the element is included in the output markup.</td>
			</tr>
			<tr>
				<td valign="top">selectedindex</td>
				<td valign="top">number</td>
				<td valign="top">Numeric value of selected view index (0 based).</td>
			</tr>
			<tr>
				<td valign="top">swipe</td>
				<td valign="top">enumeration</td>
				<td valign="top">Expression to enable swiping through view items. (currently only horizontal is supported)</td>
			</tr>
			<tr>
				<td valign="top">height</td>
				<td valign="top">string</td>
				<td valign="top">Expression for height dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">top</td>
				<td valign="top">string</td>
				<td valign="top">Expression for top dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">left</td>
				<td valign="top">string</td>
				<td valign="top">Expression for left dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">visible</td>
				<td valign="top">string</td>
				<td valign="top">Expression for visibility (conditional boolean: visible="portrait:true, landscape:false"). The intension of this attribute is to set the visible property based on a condition (landscape or portrait). Note: If this expression evaluates always to false, the element will never be visible.</td>
			</tr>
			<tr>
				<td valign="top">effect-type</td>
				<td valign="top">enumeration</td>
				<td valign="top">Effect animation type. (slide|fade|expand)</td>
			</tr>
			<tr>
				<td valign="top">effect-duration</td>
				<td valign="top">number</td>
				<td valign="top">Duration of the animation in milliseconds.</td>
			</tr>
			<tr>
				<td valign="top">effect-transition</td>
				<td valign="top">enumeration</td>
				<td valign="top">Transition timing function for the effect. (easeIn|easeInOut|easeOut|easeOutIn|linear)</td>
			</tr>
			<tr>
				<td valign="top">display</td>
				<td valign="top">enumeration</td>
				<td valign="top">Display style property (block, inline, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">overflow</td>
				<td valign="top">enumeration</td>
				<td valign="top">Overflow style property (visible, hidden, inherit)</td>
			</tr>
			<tr>
				<td valign="top">position</td>
				<td valign="top">enumeration</td>
				<td valign="top">Position style property (static, absolute, relative, inherit)</td>
			</tr>
			<tr>
				<td valign="top">float</td>
				<td valign="top">enumeration</td>
				<td valign="top">Float style property (left, right, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">opacity</td>
				<td valign="top">number</td>
				<td valign="top">Opacity style property (numeric value between 0 and 100)</td>
			</tr>
			<tr>
				<td valign="top">zindex</td>
				<td valign="top">number</td>
				<td valign="top">z-index style property (numeric value between 1 and 1-999999999)</td>
			</tr>
			<tr>
				<td valign="top">config</td>
				<td valign="top">string</td>
				<td valign="top">Advanced configuration options intended for testing and debugging purposes.</td>
			</tr>
		</table>
		<div>
			<h2>Child Elements</h2>
			<ul>
				<li>view*</li>
			</ul>
			<p>(The ? sign declares that the element can occur zero or one time, and the * sign declares that the element can occur zero or more times inside the element)</p>
		</div>
		<div>
			<h2>Parent Elements</h2>
			<ul>
				<li>layout | view</li>
			</ul>
		</div>
	</div>

 * @class JavaScript implementation for mulitview elements.
 * @name tactile.MultiView
 * @augments tactile.foundation.UIContainer
 * @example
 * Creating a multiview with static views.
 * 
 * &lt;multiview id="multiview1" width="parent.width" height="parent.height"&gt;
 *  &lt;view&gt;
 *   ...
 *  &lt;/view&gt;
 *  &lt;view&gt;
 *   ...
 *  &lt;/view&gt;
 *  &lt;view&gt;
 *   ...
 *  &lt;/view&gt;
 * &lt;/multiview&gt;
 * 
 * @example
 * Creating a multiview with scrollable views and slide effects for the transition between views.
 * 
 * &lt;multiview id="multiview2" swipe="horizontal" position="absolute" overflow="hidden" width="parent.width - 20" height="parent.height - 100" top="10" left="10"&gt;
 *  &lt;view id="view1" scroll="vertical" effect-type="slide"&gt;
 *   ...
 *  &lt;/view&gt;
 *  &lt;view id="view2" scroll="vertical" effect-type="slide"&gt;
 *   ...
 *  &lt;/view&gt;
 *  &lt;view id="view3" scroll="vertical" effect-type="slide"&gt;
 *   ...
 *  &lt;/view&gt;
 * &lt;/multiview&gt;
 */
tactile.MultiView = function(elem, config) {
	
	/** 
	 * @name tactile.MultiView#onswitch
	 * @description Event fires after current visible view is switched to another one.
	 * @type tactile.foundation.Observer
	 */
	this.onswitch = new tactile.foundation.Observer();
	/**
	 * @name tactile.MultiView#onswitchHandler
	 * @event
	 * @param {tactile.foundation.SwitchEvent} e
	 * @description Event handler function signature for onswitch.
	 * @example
	 * var page = tactile.page;
	 * 
	 * var custom = {
	 * 	init: function() {
	 * 		var multiview1 = page.getComponent("multiview1");
	 * 		multiview1.onswitch.subscribe(custom.onView1Changed);
	 * 	},
	 * 
	 * 	onView1Changed : function(e) {
	 * 		var indicator = document.getElementById("indicator");
	 * 		if (indicator) {
	 * 			var sel = e.selectedIndex + 1;
	 * 			indicator.src = "pics/indicator_"+sel+".png";	
	 * 		}
	 * 	}
	 * };
	 * page.onready(custom.init);
	 */
};

tactile.MultiView.prototype = new tactile.foundation.UIContainer();

/**
 * Append a view. This will also append the HTMLElement of the child to the DOM.
 * @param view The view to append.
 * @throws Type mismatch exception
 */
tactile.MultiView.prototype.append = function(view) {

};

/**
 * Remove a view. Also removes the HTMLElement from the DOM.
 * @param view The view to remove. 
 * @throws Type mismatch exception
 */
tactile.MultiView.prototype.remove = function(view) {

};

/**
 * Switch the current visible view.
 * @param index Numeric value representing the index order of the view or string with element id of the view.
 * @param config {Object} Optional effect configuration object.
 */
tactile.MultiView.prototype.showView = function(index, config) {

};

/**
 * Show next view or first if we are already on the last one.
 * @param config {Object} Optional effect configuration object.
 */
tactile.MultiView.prototype.showNext = function(config) {

};

/**
 * Show previous view or last if we are already on the first one.
 * @param config {Object} Optional effect configuration object.
 */
tactile.MultiView.prototype.showPrev = function(config) {

};

/**
 * Show first view.
 * @param config {Object} Optional effect configuration object.
 */
tactile.MultiView.prototype.showFirst = function(config) {

};

/**
 * Show last view.
 * @param config {Object} Optional effect configuration object.
 */
tactile.MultiView.prototype.showLast = function(config) {

};

/**
 * Check if the given parameter does match with the class type. Usefull for IDE support to get a typed reference to an object.
 * @param {tactile.foundation.UIComponent} component
 * @returns {tactile.MultiView} or null
 * @example
 * // tactile.page.getComponent is returning an untyped reference. Passing it to cast will return a typed reference.
 * // If used together with a stub file in an IDE the editor will provide code completion.
 * var multiview1 = tactile.MultiView.cast(tactile.page.getComponent("multiview1"));
 * @example
 * // use cast for type checking
 * var multiview1;
 * if (multiview1 = tactile.MultiView.cast(tactile.page.getComponent("multiview1"))) {
 * 	multiview1.showNext(); // now it is safe to call the showNext method because we know the type.
 * }
 */
tactile.MultiView.cast = function(component){
	return new tactile.MultiView();
};

/**
 * Clone a MultiView. Without content.
 * @example
 * // create a clone of multiview1
 * var multiview1 = tactile.page.getComponent("multiview1");
 * var clonedMultiView = multiview1.clone();
 */
tactile.MultiView.prototype.clone = function() {
	return new tactile.MultiView();
};




/**
 * @description Represents a tactile &lt;flexview&gt; element. FlexView elements are intended to hold a collection
 * of flexitems and manage their vertical or horizontal layout. A FlexView can dynamically change between these layout
 * modes (flexflows) for example depending on landscape or portrait orientation. A FlexView can be scrollable.
 * An instance of the tactile.FlexView class will be created for each element.
 * This means, that by using the BML &lt;flexview&gt; element, the JavaScript code for creating a new flexview object
 * will be generated on the server side. You can access each flexview object by using tactile.page.getComponent(key) and provide
 * the id value as key parameter.

	<h1>BML &lt;flexview&gt; element</h1>
	<div class="refbody">
		<p>The &lt;flexview&gt; element is used to create tactile flexviews.</p>
		<table cellpadding="4" cellspacing="0" border="1">
			<tr>
				<th valign="bottom" align="left">Attribute</th>
				<th valign="bottom" align="left">Type</th>
				<th valign="bottom" align="left">Description</th>
			</tr>
			<tr>
				<td valign="top">id</td>
				<td valign="top">string</td>
				<td valign="top">Identifier</td>
			</tr>
			<tr>
				<td valign="top">class</td>
				<td valign="top">string</td>
				<td valign="top">CSS class selector</td>
			</tr>
			<tr>
				<td valign="top">test</td>
				<td valign="top">string</td>
				<td valign="top">Test condition. Will be evaluated on the server side and defines wheter or not the element is included in the output markup</td>
			</tr>
			<tr>
				<td valign="top">flexflow</td>
				<td valign="top">enumeration</td>
				<td valign="top">Flow direction of flexitems (horizontal or vertical).</td>
			</tr>
			<tr>
				<td valign="top">flexdimension</td>
				<td valign="top">enumeration</td>
				<td valign="top">Flexible dimension of flexitems (width or height).</td>
			</tr>
			<tr>
				<td valign="top">flexitems-gap</td>
				<td valign="top">number</td>
				<td valign="top">Gap between flexitems.</td>
			</tr>
			<tr>
				<td valign="top">flexitems-width</td>
				<td valign="top">string</td>
				<td valign="top">Expression for flexitem width dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">flexitems-height</td>
				<td valign="top">string</td>
				<td valign="top">Expression for flexitem height dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">flexitems-minwidth</td>
				<td valign="top">string</td>
				<td valign="top">Expression for flexitem minwidth dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">flexitems-minheight</td>
				<td valign="top">string</td>
				<td valign="top">Expression for flexitem minheight dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">scroll</td>
				<td valign="top">enumeration</td>
				<td valign="top">Enable scrolling of the view. (vertical, horizontal, both, disabled [default]).</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-direction</td>
				<td valign="top">enumeration</td>
				<td valign="top">If scroll is enabled scrollbar is also enabled by default. To disable set scrollbar-direction="disabled". (vertical, horizontal, both, disabled).</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-color</td>
				<td valign="top">string</td>
				<td valign="top">Color of the scroll bar. (Hex value, e.g.: scrollbar-color="#CCCCCC")</td>
			</tr>
			<tr>
				<td valign="top">scrollbar-weight</td>
				<td valign="top">number</td>
				<td valign="top">Thickness of the scroll bar. (Default is 5)</td>
			</tr>
			<tr>
				<td valign="top">width</td>
				<td valign="top">string</td>
				<td valign="top">Expression for width dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">height</td>
				<td valign="top">string</td>
				<td valign="top">Expression for height dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">top</td>
				<td valign="top">string</td>
				<td valign="top">Expression for top dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">left</td>
				<td valign="top">string</td>
				<td valign="top">Expression for left dimension (numeric value, percent or calculations in relation to the parent box).</td>
			</tr>
			<tr>
				<td valign="top">visible</td>
				<td valign="top">string</td>
				<td valign="top">Expression for visibility (conditional boolean: visible="portrait:true, landscape:false"). The intension of this attribute is to set the visible property based on a condition (landscape or portrait). Note: If this expression evaluates always to false, the element will never be visible.</td>
			</tr>
			<tr>
				<td valign="top">effect-type</td>
				<td valign="top">enumeration</td>
				<td valign="top">Effect animation type. (slide|fade|expand)</td>
			</tr>
			<tr>
				<td valign="top">effect-duration</td>
				<td valign="top">number</td>
				<td valign="top">Duration of the animation in milliseconds.</td>
			</tr>
			<tr>
				<td valign="top">effect-transition</td>
				<td valign="top">enumeration</td>
				<td valign="top">Transition timing function for the effect. (easeIn|easeInOut|easeOut|easeOutIn|linear)</td>
			</tr>
			<tr>
				<td valign="top">display</td>
				<td valign="top">enumeration</td>
				<td valign="top">Display style property (block, inline, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">overflow</td>
				<td valign="top">enumeration</td>
				<td valign="top">Overflow style property (visible, hidden, inherit)</td>
			</tr>
			<tr>
				<td valign="top">position</td>
				<td valign="top">enumeration</td>
				<td valign="top">Position style property (static, absolute, relative, inherit)</td>
			</tr>
			<tr>
				<td valign="top">float</td>
				<td valign="top">enumeration</td>
				<td valign="top">Float style property (left, right, none, inherit)</td>
			</tr>
			<tr>
				<td valign="top">opacity</td>
				<td valign="top">number</td>
				<td valign="top">Opacity style property (numeric value between 0 and 100)</td>
			</tr>
			<tr>
				<td valign="top">zindex</td>
				<td valign="top">number</td>
				<td valign="top">z-index style property (numeric value between 1 and 1-999999999)</td>
			</tr>
			<tr>
				<td valign="top">config</td>
				<td valign="top">string</td>
				<td valign="top">Advanced configuration options intended for testing and debugging purposes.</td>
			</tr>
		</table>
		<div>
			<h2>Child Elements</h2>
			<ul>
				<li>item*</li>
			</ul>
			<p>(The ? sign declares that the element can occur zero or one time, and the * sign declares that the element can occur zero or more times inside the element)</p>
		</div>
		<div>
			<h2>Parent Elements</h2>
			<ul>
				<li>layout | view</li>
			</ul>
		</div>
	</div>

 * @class JavaScript implementation for flexview elements.
 * @name tactile.FlexView
 * @augments tactile.foundation.UIContainer
 * @throws Type mismatch exception (writes error to tactile.logger only)
 * @example
 * &lt;flexview id="flexview-1" 
 * 	width="parent.width - 20" 
 * 	height="parent.height - 100" 
 * 	top="10" 
 * 	left="0"
 * 	flexflow="horizontal" 
 * 	flexitems-width="200" 
 * 	flexitems-height="parent.height" 
 * 	flexitems-minwidth="180" 
 * 	flexitems-minheight="200" 
 * 	flexitems-gap="20" 
 * 	flexdimension="width" 
 * 	position="absolute" 
 * 	overflow="hidden" 
 * 	scroll="horizontal">
 * 		&lt;item id="flex-item-1"&gt;
 * 	 	...
 * 		&lt;/item&gt;
 * 		&lt;item id="flex-item-2"&gt;
 * 	 	...
 * 		&lt;/item&gt;
 * 		&lt;item id="flex-item-3"&gt;
 * 	 	...
 * 		&lt;/item&gt;
 * &lt;/flexview&gt;
 */
tactile.FlexView = function(elem, config) {
	/**
	 * @name tactile.FlexView#scroller
	 * @description Reference to the scroller object. Will be undefined if scroller is not configured.
	 * @type tactile.foundation.Scroller
	 */
	this.scroller = undefined;
};

tactile.FlexView.prototype = new tactile.foundation.UIContainer();

/**
 * Append a flexitem. This will also append the HTMLElement of the child to the DOM.
 * @param flexitem The flexitem to append.
 * @throws Type mismatch exception
 */
tactile.FlexView.prototype.append = function(flexitem) {

};

/**
 * Remove a flexitem. Also removes the HTMLElement from the DOM.
 * @param flexitem The flexitem to remove. 
 */
tactile.FlexView.prototype.remove = function(flexitem) {

};

/**
 * Check if the given parameter does match with the class type. Usefull for IDE support to get a typed reference to an object.
 * @param {tactile.foundation.UIComponent} component
 * @returns {tactile.FlexView} or null
 * @example
 * // tactile.page.getComponent is returning an untyped reference. Passing it to cast will return a typed reference.
 * // If used together with a stub file in an IDE the editor will provide code completion.
 * var flexview1 = tactile.FlexView.cast(tactile.page.getComponent("flexview1"));
 */
tactile.FlexView.cast = function(component){
	return new tactile.FlexView();
};

/**
 * Clone a FlexView. Without content.
 * @example
 * // create a clone of flexview1
 * var flexview1 = tactile.page.getComponent("flexview1");
 * var clonedFlexView = flexview1.clone();
 */
tactile.FlexView.prototype.clone = function() {
	return new tactile.FlexView();
};

/**
 * @description Represents a tactile &lt;item&gt; (flexitem) element. Flexitem elements are intended to hold content but
 * in opposite to View they can't be scrollable (the hole parent FlexView is scrollable). 
 * An instance of the tactile.Flexitem class will be created for each element.
 * This means, that by using the BML &lt;item&gt; element, the JavaScript code for creating a new flexitem object
 * will be generated on the server side. You can access each flexitem object by using tactile.page.getComponent(key) and provide
 * the id value as key parameter.

	<h1>BML &lt;item&gt; element</h1>
	<div class="refbody">
		<p>The &lt;item&gt; element is used to create tactile flexitems.</p>
		<table cellpadding="4" cellspacing="0" border="1">
			<tr>
				<th valign="bottom" align="left">Attribute</th>
				<th valign="bottom" align="left">Type</th>
				<th valign="bottom" align="left">Description</th>
			</tr>
			<tr>
				<td valign="top">id</td>
				<td valign="top">string</td>
				<td valign="top">Identifier</td>
			</tr>
			<tr>
				<td valign="top">class</td>
				<td valign="top">string</td>
				<td valign="top">CSS class selector</td>
			</tr>
			<tr>
				<td valign="top">test</td>
				<td valign="top">string</td>
				<td valign="top">Test condition. Will be evaluated on the server side and defines wheter or not the element is included in the output markup</td>
			</tr>
			<tr>
				<td valign="top">config</td>
				<td valign="top">string</td>
				<td valign="top">Advanced configuration options intended for testing and debugging purposes.</td>
			</tr>
		</table>
		<div>
			<h2>Child Elements</h2>
			<ul>
				<li>(view* | multiview* | flexview*) | container* | (ARTICLE* | BUTTONMENU* | FORM* | IMAGE* | LIST* | PIPEDMENU* | SEPARATOR* | TABBEDMENU* | TABLE* | TEASER* | TEXT* | MAP* | MEDIA)</li>
			</ul>
			<p>(The ? sign declares that the element can occur zero or one time, and the * sign declares that the element can occur zero or more times inside the element)</p>
		</div>
		<div>
			<h2>Parent Elements</h2>
			<ul>
				<li>flexfiew</li>
			</ul>
		</div>
	</div>

 * @class JavaScript implementation for flexitem elements.
 * @name tactile.FlexItem
 * @augments tactile.foundation.UIContainer
 * @throws Type mismatch exception (writes error to tactile.logger only)
 * @example
 * See tactile.FlexView for an example.
 */
tactile.FlexItem = function(elem, config) {

};

tactile.FlexItem.prototype = new tactile.foundation.UIContainer();

/**
 * Check if the given parameter does match with the class type. Usefull for IDE support to get a typed reference to an object.
 * @param {tactile.foundation.UIComponent} component
 * @returns {tactile.FlexItem} or null
 * @example
 * // tactile.page.getComponent is returning an untyped reference. Passing it to cast will return a typed reference.
 * // If used together with a stub file in an IDE the editor will provide code completion.
 * var flexitem1 = tactile.FlexItem.cast(tactile.page.getComponent("flexitem1"));
 */
tactile.FlexItem.cast = function(component){
	return new tactile.FlexItem();
};

/**
 * Clone a FlexItem. Optionaly with content.
 * @param contentCopy {Boolean} Clone with or without a copy of the content.
 * @example
 * // create a clone of flexitem1 including the content
 * var flexitem1 = tactile.page.getComponent("flexitem1");
 * var clonedItem = flexitem1.clone(true);
 */
tactile.FlexItem.prototype.clone = function(contentCopy){
	return new tactile.FlexItem();
};
/**
 * Static class
 * @class Provides information about the device and it's capabilities.
 */
tactile.Device = {
	/**
	 * Name of the operating system.
	 * @field
	 */
	platform: tactile.core.DeviceInfo.os.platform,
	/**
	 * Version number of the operating system.
	 * @field
	 */
	version: tactile.core.DeviceInfo.os.version,
	/**
	 * Boolean flag to indicate if it is a touch device.
	 * @field
	 */
	isTouch: tactile.core.DeviceInfo.os.isTouch,
	/**
	 * @ignore
	 */
	browser: {
		/**
		 * Name of the browser.
		 * @field
		 * @memberOf tactile.Device
		 * @type String
		 */
		name: tactile.core.DeviceInfo.browser.name,
		/**
		 * Boolean flag to indicate CSS3 animation capabilities.
		 * @field
		 * @memberOf tactile.Device
		 * @type Boolean
		 */
		cssanimations: tactile.core.DeviceInfo.browser.cssanimations,
		/**
		 * Boolean flag to indicate CSS3 transitions capabilities.
		 * @field
		 * @memberOf tactile.Device
		 * @type Boolean
		 */
		csstransitions: tactile.core.DeviceInfo.browser.csstransitions,
		/**
		 * Boolean flag to indicate CSS3 transforms capabilities.
		 * @field
		 * @memberOf tactile.Device
		 * @type Boolean
		 */
		csstransforms: tactile.core.DeviceInfo.browser.csstransforms,
		/**
		 * Boolean flag to indicate CSS3 transform3d capabilities.
		 * @field
		 * @memberOf tactile.Device
		 * @type Boolean
		 */
		csstransforms3d: tactile.core.DeviceInfo.browser.csstransforms3d,
		/**
		 * @field
		 * @memberOf tactile.Device
		 * @type Boolean
		 * @private
		 */
		borderradius: tactile.core.DeviceInfo.browser.borderradius,
		/**
		 * @field
		 * @memberOf tactile.Device
		 * @private
		 */
		transitionEndEventType: function() {return tactile.core.DeviceInfo.browser.transitionEndEvent;},
		/**
		 * @field
		 * @memberOf tactile.Device
		 * @private
		 */
		transitionEndEventSupported: function() {return tactile.core.DeviceInfo.browser.transitionEndEvent !== "";},
		/**
		 * @ignore
		 */
		style: {
			/**
			 * Normalization of CSS style property name like WebkitTransition, MozTransition etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 * @example
			 * if (tactile.Device.browser.csstransitions) {
			 * 	elem.style[tactile.Device.browser.style.transitionProperty] = property;
			 * }
			 */
			transitionProperty: tactile.core.DeviceInfo.browser.style.transitionProperty,
			/**
			 * Normalization of CSS style property name like WebkitTransitionDuration, MozTransitionDuration etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 */
			transitionDuration: tactile.core.DeviceInfo.browser.style.transitionDuration,
			/**
			 * Normalization of CSS style property name like WebkitTimingFunction, MozTimingFunction etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 */
			transitionTimingFunction: tactile.core.DeviceInfo.browser.style.transitionTimingFunction,
			/**
			 * Normalization of CSS style property name like WebkitTransitionDelay, MozTransitionDelay etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 */
			transitionDelay: tactile.core.DeviceInfo.browser.style.transitionDelay,
			/**
			 * Normalization of CSS style property name like WebkitTransform, MozTransform etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 */
			transformProperty: tactile.core.DeviceInfo.browser.style.transformProperty,
			/**
			 * Normalization of CSS style property name like WebkitPerspective, MozPerspective etc.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 */
			perspectiveProperty: tactile.core.DeviceInfo.browser.style.perspectiveProperty,
			/**
			 * Normalization of CSS style property name.
			 * @field
			 * @memberOf tactile.Device
			 * @type String
			 * @private
			 */
			borderRadius: tactile.core.DeviceInfo.browser.style.borderRadius
		},
		/**
		 * Returns the prefixed name of a CSS property.
		 * @example
		 * var prop = "border-radius";
		 * var prefixedProp = tactile.Device.browser.prefixed(prop);
		 * // returns "-webkit-border-radius" on webkit browsers.
		 * @field
		 * @memberOf tactile.Device
		 */
		prefixed: function(prop) {
			return tactile.core.DeviceInfo.browser.cssprefix + prop;
		}
	},
	/**
	 * @ignore
	 */
	screen: {
		/**
		 * Screen dimension width.
		 * @function
		 * @memberOf tactile.Device
		 * @returns {Number}
		 */
		getWidth: function() { return tactile.core.DeviceInfo.screen.getWidth(); },
		/**
		 * Screen dimension height.
		 * @memberOf tactile.Device
		 * @returns {Number}
		 */
		getHeight: function() { return tactile.core.DeviceInfo.screen.getHeight(); },
		/**
		 * Indicates landscape mode.
		 * @function
		 * @memberOf tactile.Device
		 * @returns {Boolean}
		 */
		isLandscape: function() { return tactile.core.DeviceInfo.screen.getWidth() > tactile.core.DeviceInfo.screen.getHeight();},
		/**
		 * Indicates portrait mode.
		 * @function
		 * @memberOf tactile.Device
		 * @returns {Boolean}
		 */
		isPortrait: function() { return tactile.core.DeviceInfo.screen.getHeight() > tactile.core.DeviceInfo.screen.getWidth();}
	}
};
/**
 * EventManager provides a normalized interface to add and remove managed events.
 * @class Registration of event handler functions for browser and touch events.
 */
tactile.EventManager = {
	/**
	 * Adds an event listener for resize/orientation change event.
	 * @param {Function} fn The function to be called when the event fires. The function will get 
	 * a ResizeEvent object passed over as parameter.
	 * @throws No listener function specified exception.
	 * @example
	 * function handleResize(e) {
	 * 	var width = e.screenWidth;
	 * 	var height = e.screenHeight;
	 * }
	 * tactile.EventManager.addResizeListener(handleResize);
	 */
    addResizeListener: function(fn, scope) {

    },
    /**
     * Adds an event listener to the DomContentLoaded event.
     * @param {Function} fn The listener function to be added.
     * @throws No listener function specified exception.
     */
    addDomReadyListener: function(fn) {

    },
    /**
     * Adds an event listener to the window.onload event.
     * @param {Function} fn The listener function to be added.
     */
    addOnloadListener: function(fn) {

    },
    /**
     * Adds an event listener to the window.onload event.
     * @param {Function} fn The listener function to be added.
     */
    addUnloadListener: function(fn) {

    },
    /**
     * Adds a managed event listener.
     * 
     * @param {String} id The element id to bind the event listener to.
     * @param {tactile.Enum.Events} ev The event type. tactile.Enum.Events lists the supported touch events. 
     * Standard events like click, submit, change can also be used depending on the element.
     * @param {Function} fn The listener function to be added.
     * @throws No listener function specified exception.
     */
	addListener: function(id, ev, fn) {

	},
	/**
	 * @name tactile.EventManager.managedEventHandler
	 * @event
	 * @param {tactile.events.ManagedEvent} e
	 * @description Event handler function signature for managed event object. This will be all events which are added with tactile.EventManager.addListener and are not a touch event.
	 */
	/**
	 * @name tactile.EventManager.touchstartHandler
	 * @event
	 * @param {tactile.events.TouchStart} e
	 * @description Event handler function signature for touchstart.
	 */
	/**
	 * @name tactile.EventManager.touchmoveHandler
	 * @event
	 * @param {tactile.events.TouchEvent} e
	 * @description Event handler function signature for touchmove.
	 */
	/**
	 * @name tactile.EventManager.touchendHandler
	 * @event
	 * @param {tactile.events.TouchEvent} e
	 * @description Event handler function signature for touchend.
	 */
	/**
	 * @name tactile.EventManager.scrollstartHandler
	 * @event
	 * @param {tactile.events.ScrollStart} e
	 * @description Event handler function signature for scrollstart.
	 */
	/**
	 * @name tactile.EventManager.scrollHandler
	 * @event
	 * @param {tactile.events.TouchEvent} e
	 * @description Event handler function signature for scroll.
	 */
	/**
	 * @name tactile.EventManager.scrollendHandler
	 * @event
	 * @param {tactile.events.TouchEvent} e
	 * @description Event handler function signature for scrollend.
	 */
	/**
	 * @name tactile.EventManager.tapHandler
	 * @event
	 * @param {tactile.events.Tap} e
	 * @description Event handler function signature for tap.
	 */
	/**
	 * @name tactile.EventManager.doubletapHandler
	 * @event
	 * @param {tactile.events.Tap} e
	 * @description Event handler function signature for doubletap.
	 */
	/**
	 * @name tactile.EventManager.swipeHandler
	 * @event
	 * @param {tactile.events.Swipe} e
	 * @description Event handler function signature for swipe.
	 */
	
	
	/**
	 * Adds a secrured event listener. The listener function will be embedded into a try/catch block
	 * and then added using the addListener method.
     * 
     * @param {String} id The element id to bind the event listener to.
     * @param {String} ev The event type. E.g.: click, scroll, swipe.
     * @param {Function} fn The listener function to be added.  
     * @throws addSecuredListener exception (writes error to tactile.logger only)
	 */
	addSecuredListener: function(id, ev, fn) {

	},
    /**
     * Remove a managed event listener.
     * 
     * @param {String} id The element id where the event listener was bound to.
     * @param {String} ev The event type. E.g.: click, scroll, swipe.
     * @param {Function} fn The listener function to be removed.   
     * @throws No listener function specified exception.
     */
	removeListener: function(id, ev, fn) {

	}
};


/** 
 * @class The entry point to work with the Tactile framework.
 * @static
 * @description 
 * The page object holds a central role in working with the tactile framework.
 * It is the main starting point for references to tactile components and the place
 * to register your code which will deal with user interactions.
 * @example
 * // add tactile.page to the global namespace for convenient usage.
 * var page = tactile.page;
 */
tactile.page = {
	/**
	 * @name tactile.page.onready
	 * @function
	 * @description This method is the main entry point for custom code. It will add each function reference
	 * passed as a parameter to a queue which will be executed after the tactile components are initialized.
	 * This will happen after the DomContentLoaded event.
	 * @param fn {Function} reference to the function which shall be called during the ready event has fired. 
	 * @example
	 * // The reference to the "multiview1" object can only 
	 * // be received after the components are initialized.
	 * var page = tactile.page;
	 * var custom = {
	 *  multiview : undefined,
	 * 	myInit : function() {
	 * 		// get a reference to a multiview instance
	 * 		custom.multiview = page.getComponent("multiview1");
	 * 	}
	 * }
	 * 
	 * // Add custom.myInit reference to page.onready
	 * page.onready(custom.myInit);
	 * 
	 * // Note: do not add a function call like custom.myInit()
	 */
	onready: function(fn) { 
		
	},
	/**
	 * @name tactile.page.getComponent
	 * @function
	 * @description Provides access to all components on a page by providing the element ID as key parameter. 
	 * If an element exists but is not a "component" (that means it is not a subclass of {tactile.foundation.UIComponent}), 
	 * then we will provide a wrapper object {tactile.foundation.UIElement} with basic features to manipulate the element. 
	 * @param key {String} Element ID of the searched component
	 * @returns {tactile.foundation.UIComponent} if a component exists, {tactile.foundation.UIElement} if an HTMLElement with the given ID exists, or {null} if no component nor an HTMLElement was found.
	 * @example 
	 * // add tactile.page to the global namespace
	 * var page = tactile.page;
	 * 
	 * // returns a component of type View
	 * var view1 = page.getComponent("view1"); 
	 * 
	 * // test for not null
	 * if (view1 !== null) {
	 * 	// test if the type is a View
	 * 	if (view1 instanceof View) {
	 * 	 ...
	 * 	}
	 * }
	 * 
	 * // returns an UIElement wrapper for the HTMLElement.
	 * var text1 = page.getComponent("text1");
	 * 
	 * // test for not null
	 * if (text1 !== null) {
	 * 	// test for type UIElement
	 * 	if (text1 instanceof tactile.foundation.UIElement) {
	 * 	 ...
	 * 	}
	 * }
	 * 
	 * // returns {null} because an element with the ID "xy" doesn't exists.
	 * var xy = page.getComponent("xy") ;
	 */
	getComponent: function(key) {

	},
	/**
	 * @name tactile.page.isComponent
	 * @function
	 * @description Test if the given element ID is representing a component (that means it is a subclass of {tactile.foundation.UIComponent}).
	 * The test will not match for wrapper objects of type {tactile.foundation.UIElement}.
	 * @param key {String} Element ID of the searched component
	 * @returns {Boolean} true if a component exists, false if not.
	 * @example
	 * // add tactile.page to the global namespace
	 * var page = tactile.page;
	 * 
	 * // "view1" is a instance of {View} and the test returns true
	 * page.isComponent("view1");
	 * 
	 * // "text1" is an HTMLElement so it would return false
	 * page.isComponent("text1");
	 * 
	 * // "xy" doesn't exists at all so it will return false
	 * page.isComponent("xy");
	 */	
	isComponent: function(key) {

	}
};



