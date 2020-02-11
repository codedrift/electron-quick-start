// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function loadMediaDevices () {
	navigator.mediaDevices.enumerateDevices().then((devices) => {
		document.getElementById("mediaDevices").innerHTML = JSON.stringify(devices, null,2)
	})
}

loadMediaDevices()