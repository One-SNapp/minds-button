var sharedContent = sharedURL;
var sharedURL = "http://www.example.com/";
function createCookie() {
document.cookie = "username=sharedContent; sharedContent="+sharedContent+"; expires=Wed, 1 Jan 2025 13:47:11 UTC; path=/"
}
  function getUrl() {
window.location.href= sharedURL;
createCookie();
  }
