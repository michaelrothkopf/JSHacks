// To use this in the URL bar, type javascript: and then paste the code.
var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); 
link.type = 'image/x-icon'; 
link.rel = 'shortcut icon'; 
link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico'; 
document.getElementsByTagName('head')[0].appendChild(link); 
document.title = "Home | Schoology"; 
void 0
