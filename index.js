
chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(e, f){
  let span = document.querySelectorAll('p')
  console.log(e)
  span.forEach(p => {
    p.innerText = e
  })
}
