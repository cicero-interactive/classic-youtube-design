var classicYoutubeActivated;
var watchedOverlayActivated;


load_options();

// Without this 1 ms delay, this would execute before the settings are loaded. No idea why...
// Inject CSS
setTimeout(function() {
	// window.alert("Value of classicYouTube option after loading options: " + classicYoutubeActivated);
	if (classicYoutubeActivated == true) {
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/classicYouTubeDesign.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
	};
	if (watchedOverlayActivated == true) {
		docReady(function() {
			// DOM is loaded and ready for manipulation here
			var link = document.createElement("link");
			link.href = chrome.extension.getURL("injections/watchedOverlay.css");
			link.type = "text/css";
			link.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(link);
		});
	};
}, 1);






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
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}