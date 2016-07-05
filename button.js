var sharedURL = "http://www.example.com/";
var sharedContent = sharedURL;
function createCookie() {
var cookies = "username="+sharedContent+", expires=Wed, 1 Jan 2025 13:47:11 UTC, path=/"
document.cookie = cookies;
}
function getUrl() {
window.location.href= sharedURL;
createCookie();
}
getUrl();
