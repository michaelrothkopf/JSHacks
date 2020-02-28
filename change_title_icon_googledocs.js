// To use in the URL bar, type javascript: and paste the code.
var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); 
link.type = 'image/x-icon'; 
link.rel = 'shortcut icon'; 
link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'; 
document.getElementsByTagName('head')[0].appendChild(link); 
document.title = "Google Docs"; 
void 0
