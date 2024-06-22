var url;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ url });
});
