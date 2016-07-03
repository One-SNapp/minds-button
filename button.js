var sharedContent = sharedURL;
var sharedURL = "http://www.example.com/";
function createCookie() {
document.cookie = "username=sharedContent; sharedContent;"
}
  function getUrl() {
window.location.href= sharedURL;
  }
