var overlay = document.createElement("DIV");
overlay.id = "extensionOverlay";
overlay.innerHTML = `
<h1 style='color:white;'>Change website title and icon</h1><br>
<input type='text' id='title' placeholder='New website title'>
<input type='text' id='iconurl' placeholder='Url of the new website icon image'>
<button onclick='changeAppearance31f(document.getElementById("title").value, document.getElementById("iconurl"))'>Change 'em!</button>
<br>
<button onclick='hideOverlay()'>Close</button>
`;
overlay.style.cssText = "text-align:center;jusitfy-content:center;position: fixed;display: block;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.5);z-index: 100;cursor: pointer;";
document.body.appendChild(overlay);

function changeAppearance31f(title, icon) {
	// To use this in the URL bar, type javascript: and then paste the code.
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); 
	link.type = 'image/x-icon'; 
	link.rel = 'shortcut icon'; 
	link.href = icon; 
	document.getElementsByTagName('head')[0].appendChild(link); 
	document.title = title;
}

function hideOverlay() {
	overlay.style.display = "none";
}

function showOverlay() {
	overlay.style.display = "block";
}

try {
	void(0);
}
catch(err) {
	console.log(err);
}