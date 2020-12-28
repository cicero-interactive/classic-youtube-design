var classicYoutubeActivated = true;
var watchedOverlayActivated = true;

localizeHtmlPage();
load_options();


// Save options to chrome.storage
function save_options() {
	var classicYoutubeActivated = document.getElementById('classicYoutubeCheckox').checked;
	console.log(classicYoutubeActivated);
	// var watchedOverlayActivated = document.getElementById('watchedOverlayCheckbox').checked;
	console.log(watchedOverlayActivated);
	chrome.storage.sync.set({
		classicYoutubeActivated: classicYoutubeActivated,
		watchedOverlayActivated: watchedOverlayActivated
	});
}

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
		watchedOverlayActivated = items.watchedOverlayActivated;
		document.getElementById('classicYoutubeCheckox').checked = classicYoutubeActivated;
		// document.getElementById('watchedOverlayCheckbox').checked = watchedOverlayActivated;
	});
}


// Set event listeners for tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(tab => {
			tab.classList.remove('tab--active');
		});
		tab.classList.add('tab--active');

		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('tab-content--active');
		})
		target.classList.add('tab-content--active');
	})
})

// Set event listeners for checkboxes to save automatically
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', () => {
		save_options();
		console.log('saved options');
	})
})

// i18n for HTML pages
function localizeHtmlPage() {
	//Localize by replacing __MSG_***__ meta tags
	var objects = document.getElementsByTagName('html');
	for (var j = 0; j < objects.length; j++) {
		var obj = objects[j];

		var oldHTML = obj.innerHTML.toString();
		var newHTML = oldHTML.replace(/__MSG_(\w+)__/g, function(match, msg) {
			return msg ? chrome.i18n.getMessage(msg) : "text not found";
		})
		.replace("__MSG_@@ui_locale__", chrome.i18n.getMessage("@@ui_locale"))
		.replace("__MSG_@@watched_overlay_img__", function(match, msg) {
			var locale = "EN";
			switch(chrome.i18n.getMessage("@@ui_locale")) {
				case "de":
					locale = chrome.i18n.getMessage("@@ui_locale").toUpperCase();
					break;
			}
			return "watchedOverlay" + locale + ".png";
		});

		if(newHTML != oldHTML) {
			obj.innerHTML = newHTML;
		}
	}
}