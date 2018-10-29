chrome.browserAction.onClicked.addListener(clicked)

function clicked(e){
  chrome.tabs.sendMessage(e.id, "hello")
}
