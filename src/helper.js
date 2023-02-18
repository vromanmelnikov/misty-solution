window.addEventListener(
    'load', (event) => {
        setTimeout(
            () => {
                addHelper()
            }, 100
        )
    }
)

let addHelper = () => {

    let oldHref = ''

    let checkFlag = false

    let baseListComponents = [
        'https://grants.myrosmol.ru/projects-archive',
        'https://grants.myrosmol.ru/projects',
        'https://grants.myrosmol.ru/participants',
        'https://grants.myrosmol.ru/events'
    ]

    setInterval(
        () => {

            let href = window.location.href

            if (baseListComponents.indexOf(href) !== -1 && checkFlag == false && oldHref != '') {
                let notEmptyList = checkBaseList()
                if (notEmptyList == true) {
                    switch (href) {
                        case baseListComponents[0]:
                            readProjectArchive()
                            break
                        case baseListComponents[1]:
                            readProjects()
                            break
                        case baseListComponents[2]:
                            readParticipants()
                            break
                        case baseListComponents[3]:
                            readEvents()
                            break
                        default:
                            break
                    }
                    checkFlag = true
                }
                else {
                    checkFlag = false
                }
            }

            if (oldHref !== href) {
                oldHref = href
                checkFlag = false
            }
        }, 500
    )
}

function readProjectArchive() {
    let list = document.getElementsByClassName('base-card')
    let newList = []
    for (let i = 0; i < list.length; i++) {
        let title = list[i].getElementsByTagName('h3')[0]
        title = title.textContent || title.innerText
        title = title.replace(' в архиве', '')
    }
}

function readProjects() {

    let participants = readLS('participants').filter(
        value => value.status != 'Отозвана'
    )

    let list = document.getElementsByClassName('base-card')
    let newList = []

    for (let i = 0; i < list.length; i++) {

        let title = list[i].getElementsByTagName('h3')[0]
        title = title.textContent || title.innerText

        let template = list[i].querySelector('.projects-item_template_1WACm')
        template = template.textContent
        template = template.slice(1, template.length - 1)

        let date = list[i].querySelector('.projects-item_date_2lg_5')
        date = date.textContent

        let item = {
            title,
            template,
            date
        }

        newList.push(item)

        let status = false

        for (let j = 0; j < participants.length; j++) {
            console.log({ f: participants[j].title, s: template })
            // if (participants[i].title.indexOf(template) != -1 || template.indexOf(participants[i].title) != -1) {
            if (stringSimilarity.compareTwoStrings(participants[j].title, template) > 0.5) {
                addHint(list[i], 'Заявка по проекту подана', 'success')
                status = true
                break
            }
        }

        if (status == false) {
            addHint(list[i], 'Заявка по проекту не подана!', 'danger')
        }
    }

    writeLS('projects', newList)
}

function readParticipants() {

    let list = document.getElementsByClassName('base-card')
    let newList = []

    for (let i = 0; i < list.length; i++) {

        let title = list[i].getElementsByTagName('h3')[0]
        title = title.textContent || title.innerText
        title = title.slice(1, title.length - 26)

        let status = list[i].querySelector('.base-badge')
        status = status.textContent
        status = status.slice(1, status.length - 1)

        if (status == 'Победитель') {
            //todo
            //уведомление о победе
        }

        newList.push({
            title,
            status
        })
    }

    writeLS('participants', newList)
}

function readEvents() {

    let events = readLS('events')
    let list = document.getElementsByClassName('base-card')

    if (events.length < events)

    // let newList = []

    for (let i = 0; i < list.length; i++) {

        let title = list[i].querySelector('.events-card_name_3txzu')

        title = title.textContent || title.innerText
        title = title.slice(1, title.length - 1)

        let date = list[i].querySelector('.events-card_date_1Y1Ef')
        date = date.textContent || title.innerText
        date = date.slice(1, date.length - 1)

        for (let j = 0; j < events.length; j++) {
            if (events[i].title == title) {
                if (events[i].date != date) {
                    //todo
                    //добавить уведомление
                }
                break
            }
        }

        newList.push({
            title,
            date
        })
    }

    writeLS('events', newList)
}

function addHint(node, text, color) {

    node.style.position = 'relative'

    let hint = document.createElement('span')
    hint.textContent = text
    hint.style.position = 'absolute'
    hint.style.top = '10px'
    hint.style.right = '20px'
    hint.style.padding = '.5rem 1rem'
    hint.style.borderRadius = '4px'
    if (color == 'danger') {
        hint.style.backgroundColor = '#f03d32'
        hint.style.color = 'white'
    }
    else if (color == 'success') {
        hint.style.backgroundColor = '#B3E427'
        hint.style.color = 'black'
    }

    node.appendChild(hint)
}

function checkBaseList() {
    let list = document.getElementsByClassName('base-card')
    if (list.length != 0) {
        return true
    }
    else
        return false
}

function writeLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function readLS(key) {
    let obj = JSON.parse(localStorage.getItem(key))
    return !obj ? [] : obj
}