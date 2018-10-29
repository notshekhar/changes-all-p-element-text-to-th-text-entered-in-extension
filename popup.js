let input = document.querySelector('#text');
input.onchange = () => {
  inputvalue = input.value
  let para = {
    active : true,
    currentWindow : true
  }
  chrome.tabs.query(para, getTabs)
  function getTabs(tabs){
    chrome.tabs.sendMessage(tabs[0].id, inputvalue)
  }
  input.value = ''
}
