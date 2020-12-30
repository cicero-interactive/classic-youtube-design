var classicYoutubeActivated;
var watchedOverlayActivated;


load_options();

// Without this 1 ms delay, this would execute before the settings are loaded. No idea why...
// Inject CSS
setTimeout(function() {
	docReady(function() {
		// DOM is loaded and ready for manipulation here
		var link = document.createElement("link");
		link.href = chrome.extension.getURL("injections/cssVars.css");
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
	});
	if (classicYoutubeActivated == true) {
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/masthead/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/masthead/menu-button.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/app-drawer/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/homepage/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/watchpage/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/masthead/search-box.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/buttons/index.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign/buttons/button-ripple.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
	};
	// if (watchedOverlayActivated == true) {
	// 	docReady(function() {
	// 		// DOM is loaded and ready for manipulation here
	// 		var link = document.createElement("link");
	// 		link.href = chrome.extension.getURL("injections/watchedOverlay.css");
	// 		link.type = "text/css";
	// 		link.rel = "stylesheet";
	// 		document.getElementsByTagName("head")[0].appendChild(link);
	// 	});
	// };
}, 2);






// Load options from chrome.storage
function load_options() {
	chrome.storage.sync.get(function(items) {
		// Use default values, if necessary
		if (items.classicYoutubeActivated == null) {
			items.classicYoutubeActivated = true;
		}
		if (items.watchedOverlayActivated == null) {
			items.watchedOverlayActivated = true;
		}
		classicYoutubeActivated = items.classicYoutubeActivated;
		// window.alert("Value of classicYouTube option when loading options: " + items.classicYoutubeActivated);
		watchedOverlayActivated = items.watchedOverlayActivated;
	});
}

function docReady(fn) {
	// see if DOM is already available
	if (document.readyState === "complete") {
		// call on next available tick
		setTimeout(fn, 1);
	} else {
		document.addEventListener("load", fn);
	}
}