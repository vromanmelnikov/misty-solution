console.log(chrome.contentSettings.MicrophoneContentSetting)

$(document).ready(function(){
    navigator.mediaDevices.getUserMedia({audio: true})
});