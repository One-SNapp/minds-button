var sharedContent = sharedURL;
var sharedURL = "http://www.example.com/";
function getUrl() {
window.location.href= sharedURL;
createCookie();
}
function createCookie() {
document.cookie = "username="+sharedContent+"; expires=Wed, 1 Jan 2025 13:47:11 UTC; path=/"
}

