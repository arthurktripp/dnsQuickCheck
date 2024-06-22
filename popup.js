chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  currentUrl = tabs[0].url;
});

function searchDNS() {
  let noScheme = currentUrl.replace(/https?:\/\/(www\.)?/g, '');
  let domain = noScheme.replace(/\/.*/g, '');
  let whoisSearch = "https://who.is/dns/" + domain;
  window.open(whoisSearch, '_blank');
};

const searchButton = document.getElementById("searchDNS");
searchButton.onclick = searchDNS;