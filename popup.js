var classicYoutubeActivated = true
var watchedOverlayActivated = true



// Save options to chrome.storage
function save_options() {
var classicYoutubeActivated = document.getElementById('classicYoutubeCheckox').checked
console.log(classicYoutubeActivated)
var watchedOverlayActivated = document.getElementById('watchedOverlayCheckbox').checked
console.log(watchedOverlayActivated)
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
		items.classicYoutubeActivated = true
	}
	if (items.watchedOverlayActivated == null) {
		items.watchedOverlayActivated = true
	}
	classicYoutubeActivated = items.classicYoutubeActivated
	watchedOverlayActivated = items.watchedOverlayActivated
	document.getElementById('classicYoutubeCheckox').checked = classicYoutubeActivated
	document.getElementById('watchedOverlayCheckbox').checked = watchedOverlayActivated
});
}


// Set event listeners for tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('.tab-content')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(tab => {
			tab.classList.remove('tab--active')
		})
		tab.classList.add('tab--active')

		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('tab-content--active')
		})
		target.classList.add('tab-content--active')
	})
})

// Set event listeners for checkboxes to save automatically
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('click', () => {
		save_options()
		console.log('saved options')
	})
})

load_options();