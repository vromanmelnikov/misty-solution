var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const requestInput = document.querySelector('.request-input');

const elem = document.querySelector('#request-block');


let photo = document.getElementsByTagName('img')
console.log('dfhgj', photo)
let hints = ['статья', 'чат-бот', 'шаблон', 'пособие']
let hint = document.querySelector(".hints")
for (let i = 0; i < hints.length; i++) {

    let message = document.createElement('div')
    message.className = 'hint'
    message.innerHTML = `
                        <span  id="${i}">
                        ${hints[i]}
                        </span> 
                            
                           
    `
    hint.appendChild(message)

}

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

    //todo
    //поменять верстку: убрать инпут и поменять микрофон

    recognition.start();

    document.querySelector('#microphone-off').onclick = function () {
        state = elem.style.display;
        if (state == '') elem.style.display = 'none';
        else elem.style.display = '';
        document.querySelector('#request-block-without-input').style.display = "flex";

    }

    recognition.onresult = function (event) {
        const speechResult = event.results[0][0].transcript.toLowerCase();
        requestInput.value = speechResult;
        const text_input = document.querySelector("#input");
        sendMessage(obj, hintss, hint, hints, speechResult);
        document.getElementById('message-input').value = " ";
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
        document.querySelector('#request-block-without-input').style.display = "none"
        document.querySelector('#request-block').style.display = "flex";
        //Fired when the speech recognition service has disconnected.

        //todo
        //вернуть все как было

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

document.querySelector('#send').onclick = function (event) {
    let value = document.getElementById('message-input').value
    sendMessage(obj, hintss, hint, hints, value)
    document.getElementById('message-input').value = "";

}

function sendMessage(obj, hintss, hint, hints, text) {

    let messages = document.querySelector('.messages')

    let message = document.createElement('div')
    message.className = 'message-item user-item'
    message.innerHTML = `
                    <div class='message-block'>
                        <img src="./photos/profile.png" class='message-icon'></img>
                        <div class='message user-message'>
                            <div class='tail'></div>
                            <span class='message-text' id="message_text">
                            ${text}
                            </span>
                        </div>
                    </div>
    `

    messages.appendChild(message)

    let req = sendAnswerMessage(obj, hintss, text)

    messages.appendChild(req)
    let requ = FirstMessage(obj, hintss, text)
    messages.appendChild(requ)
}

function sendAnswerMessage(obj, hintss, text) {
    let value

    if (text in obj) {
        value = obj[text]
    }
    else {

        value = 'Не понял запрос\nВот популярные запросы'
    }
    let message = document.createElement('div')
    message.className = 'message-item'
    message.innerHTML = `
                    <div class='message-block'>
                        <img src="./photos/robot.png" class='message-icon'></img>
                        <div class='message'>
                            <div class='tail'></div>
                            <span class='message-text' id="message_text">
                            ${value}
                            </span>
                        </div>
                    </div>
    `
    return message

}

let lastURL = ''

function FirstMessage(obj, hintss, text) {
    console.log(text)
    let arr = []
    if (text in hintss) {
        arr = hintss[text]

    }
    else {
        arr = hintss["поддержка"]
    }

    let message = document.createElement('div')
    message.className = 'hints'


    for (let i = 0; i < arr.length; i++) {
        let hint = document.createElement('span')

        hint.className = 'hint'
        hint.innerText = arr[i].text
        hint.onclick = (event) => {
            chrome.tabs.query({
                active: true,
                lastFocusedWindow: true
            }, function (tabs) {
                // and use that tab to fill in out title and url
                var tab = tabs[0];

            })
            chrome.tabs.update(undefined, { url: arr[i].link });
        }

        message.appendChild(hint)
    }
    text = ' '
    return message

}

document.querySelector(".hints").onclick = function (event) {

    SwitchCase(event, hint, hints, obj, hintss);

}
function SwitchCase(event, hint, hints, obj, hintss) {
    let key = event.target.innerText;
    console.log(key)
    let key_id = event.target
    console.log(key_id.id)
    switch (key_id.id) {

        case '0': {
            let messages = document.querySelector('.messages')
            let message = document.createElement('div')
            message.className = 'message-item user-item'
            message.innerHTML = `
                            <div class='message-block'>
                                <img src="./photos/profile.png" class='message-icon'></img>
                                <div class='message user-message'>
                                    <div class='tail'></div>
                                    <span class='message-text' id="message_text">
                                    ${key}
                                    </span>
                                </div>
                            </div>
            `
            messages.appendChild(message)
            let req = sendAnswerMessage(obj, hintss, key)

            messages.appendChild(req)

            let requ = FirstMessage(obj, hintss, key)
            messages.appendChild(requ)
            document.querySelectorAll('span.hint').onclick = function () {
                window.open(document.URL(url))
            }
            break;
        }
        case '1': {
            let messages_id1 = document.querySelector('.messages')
            let message_id1 = document.createElement('div')
            message_id1.className = 'message-item user-item'
            message_id1.innerHTML = `
                            <div class='message-block'>
                                <img src="./photos/profile.png" class='message-icon'></img>
                                <div class='message user-message'>
                                    <div class='tail'></div>
                                    <span class='message-text' id="message_text">
                                    ${key}
                                    </span>
                                </div>
                            </div>
            `
            messages_id1.appendChild(message_id1)
            let req_id1 = sendAnswerMessage(obj, hintss, key)

            messages_id1.appendChild(req_id1)

            let requ_id1 = FirstMessage(obj, hintss, key)
            messages_id1.appendChild(requ_id1)
            document.querySelectorAll('span.hint').onclick = function () {
                window.open(document.URL(url))
            }
            break;
        }
        case '3': {
            let messages_id3 = document.querySelector('.messages')
            let message_id3 = document.createElement('div')
            message_id3.className = 'message-item user-item'
            message_id3.innerHTML = `
                            <div class='message-block'>
                                <img src="./photos/profile.png" class='message-icon'></img>
                                <div class='message user-message'>
                                    <div class='tail'></div>
                                    <span class='message-text' id="message_text">
                                    ${key}
                                    </span>
                                </div>
                            </div>
            `
            messages_id3.appendChild(message_id3)
            let req_id3 = sendAnswerMessage(obj, hintss, key)

            messages_id3.appendChild(req_id3)

            let requ_id3 = FirstMessage(obj, hintss, key)
            messages_id3.appendChild(requ_id3)
            document.querySelectorAll('span.hint').onclick = function () {
                window.open(document.URL(url))
            }
            break;
        }
        case '2': {
            let messages_id2 = document.querySelector('.messages')
            let message_id2 = document.createElement('div')
            message_id2.className = 'message-item user-item'
            message_id2.innerHTML = `
                            <div class='message-block'>
                                <img src="./photos/profile.png" class='message-icon'></img>
                                <div class='message user-message'>
                                    <div class='tail'></div>
                                    <span class='message-text' id="message_text">
                                    ${key}
                                    </span>
                                </div>
                            </div>
            `
            messages_id2.appendChild(message_id2)
            let req_id2 = sendAnswerMessage(obj, hintss, key)

            messages_id2.appendChild(req_id2)

            let requ_id2 = FirstMessage(obj, hintss, key)
            messages_id2.appendChild(requ_id2)
            document.querySelectorAll('span.hint').onclick = function () {
                window.open(document.URL(url))
            }
            break;
        }
    }


}
const obj = {
    "статьи": "Ознакомьтесь с популярными статьями о грантах и проектах.",
    "чат-бот": "Ознакомьтесь с полезным чат-ботом, который поможет Вам лучше ознакомиться с нашим сервисом!",
    "шаблон": "Шаблон заявки.",
    "система поддержки": "Тут Вы сможете получить поддержку в различных вопросах!",
    "гранты": "Гранты в ФГАИС 'Молодежь России'.",
    "пособие": "Методическое пособие.",
    "с чего начать": "Предлагаю Вам ознакомиться со следующими функциями сервиса.",
    "уведомления": "С помощью наших уведомлений Вы всегда будете осведомлены о важных изменениях, в том числе о смене сроков мероприятий и смены статуса участия в грантовом конкурсе!",
    "что ты можешь": "Я готов отвечать на интересующие Вас вопросы и помогать знакомиться с сервисом! При заполнении проектной информации я буду помогать Вам в самые сложные моменты, а также буду уведомлять о различных изменениях в мероприятиях. Сейчас предлагаю ознакомиться с актуальными мероприятиями на сервисе!"
}
const hintss = {
    "статьи": [
        {
            text: 'Подробное объяснение как заполнять заявку',
            link: 'https://grants.myrosmol.ru/articles/a84f4a3b-aae8-417f-9ca0-81fd3e2e2791'
        },
        {
            text: 'Подробное объяснение как заполнять заявку',
            link: 'https://grants.myrosmol.ru/articles/a84f4a3b-aae8-417f-9ca0-81fd3e2e2791'
        }
    ],
    "чат-бот": [
        {
            text: 'Очень полезный чат-бот в телеграм',
            link: 'https://grants.myrosmol.ru/articles/e701e2ac-861b-4e77-b36b-858c8cdc01ae'
        }

    ],
    "шаблон": [
        {
            text: 'Шаблон для проектной заявки',
            link: 'https://grants.myrosmol.ru/articles/df8cd133-95be-4cd0-9dde-bbb26fac59e4'
        }
    ],
    "поддержка": [
        {
            text: 'Система грантовой поддержки Росмолодежи 2022',
            link: 'https://grants.myrosmol.ru/articles/2dd35f05-ea7a-4f27-80a5-81afe0c985d1'
        },
        {
            text: 'Инструкция по работе в грантовом модуле АИС "Молодежь России"',
            link: 'https://grants.myrosmol.ru/articles/4a44805c-7472-4c4f-8162-2d514403ed21'
        }
    ],
    "гранты": [
        {
            text: 'Инструкция по работе в грантовом модуле АИС "Молодежь России"',
            link: 'https://grants.myrosmol.ru/articles/4a44805c-7472-4c4f-8162-2d514403ed21'
        }
    ],
    "пособие": [
        {
            text: 'Методическое пособие для участников конкурса Росмолодёжь.Гранты: "Медиа продвижение проекта"',
            link: 'https://grants.myrosmol.ru/articles/f6162976-40ec-424a-90a3-9c1ffe48639e'
        }
    ],
    "с чего начать": [
        {
            text: 'Часто задаваемые вопросы',
            link: 'https://grants.myrosmol.ru/help'
        },
        {
            text: 'Проекты',
            link: 'https://grants.myrosmol.ru/projects'
        },
        {
            text: 'Ознакомление с мероприятиями',
            link: 'https://grants.myrosmol.ru/events'
        }
    ],
    "уведомления": [
        {
            text: "Ваши заявки на мероприятия",
            link: "https://grants.myrosmol.ru/participants"
        },
        {
            text: "Актуальные мероприятия",
            link: "https://grants.myrosmol.ru/events"
        },
    ],
    "что ты можешь": [
        {
            text: "Актуальные мероприятия",
            link: "https://grants.myrosmol.ru/events"
        },
    ]

}
testBtn.addEventListener('click', testSpeech);