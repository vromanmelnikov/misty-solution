var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const requestInput = document.querySelector('.request-input');
const elem = document.querySelector('#request-block');
const correspondence = [];
// var resultPara = document.querySelector('.result');
// var diagnosticPara = document.querySelector('.output');

const testBtn = document.querySelector('.microphone');

function testSpeech() {
    testBtn.disabled = true;

    // const grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase + ';';
    const recognition = new SpeechRecognition();
    // const speechRecognitionList = new SpeechGrammarList();
    // speechRecognitionList.addFromString(grammar, 1);

    // recognition.grammars = speechRecognitionList;
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    // recognition.maxAlternatives = 1;

    recognition.start();

    document.querySelector('#microphone-off').onclick = function() {
        state = elem.style.display; 
        if (state =='') elem.style.display='none'; 
        else elem.style.display='';
        document.querySelector('#request-block-without-input').style.display="flex";
       
    }

    recognition.onresult = function (event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        requestInput.value = speechResult;
        document.getElementById('message_text');
        correspondence.push(...speechResult)
        message_text.innerHTML =  correspondence.pop();
        document.querySelector("#message-item").style.display="flex";
        const text_input = document.querySelector("#input");
        console.log(text_input.value)
        text_input.value = " ";
        
        console.log('Speech received: ' + speechResult + '.');
        console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = function () {
        recognition.stop();
        testBtn.disabled = false;
    }

    recognition.onerror = function (event) {
        testBtn.disabled = false;
        console.log('Error occurred in recognition: ' + event.error);

    }

    recognition.onaudiostart = function (event) {
        //Fired when the user agent has started to capture audio.
        console.log('SpeechRecognition.onaudiostart');
    }

    recognition.onaudioend = function (event) {
        //Fired when the user agent has finished capturing audio.
        console.log('SpeechRecognition.onaudioend');
    }
    
    

    recognition.onend = function (event) {
        document.querySelector('#request-block-without-input').style.display="none"
    document.querySelector('#request-block').style.display="flex";
        //Fired when the speech recognition service has disconnected.
        console.log('SpeechRecognition.onend');
        
    }

    recognition.onnomatch = function (event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        console.log('SpeechRecognition.onnomatch');
    }

    recognition.onsoundstart = function (event) {
        //Fired when any sound — recognisable speech or not — has been detected.
        console.log('SpeechRecognition.onsoundstart');
    }

    recognition.onsoundend = function (event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        console.log('SpeechRecognition.onsoundend');
    }

    recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        console.log('SpeechRecognition.onspeechstart');
    }

    recognition.onstart = function (event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        console.log('SpeechRecognition.onstart');
    }
}

document.querySelector('#send').onclick = function() {
    value = document.querySelector("#input");
    value= value.value;
    correspondence.push(value);    
    document.getElementById('message_text');
    message_text.innerHTML = correspondence.pop();
    document.querySelector("#message-item").style.display="flex";
    value = document.querySelector("#input");
    value.value = " ";
}


testBtn.addEventListener('click', testSpeech);