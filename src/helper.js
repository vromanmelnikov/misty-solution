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

    setInterval(
        () => {
            let href = window.location.href
            if (oldHref !== href) {
                switch (href) {
                    case 'https://grants.myrosmol.ru/projects-archive':
                        readProjectArchive()
                        break
                    default:
                        break
                }
                oldHref = href
            }
        }, 100
    )
}

function readProjectArchive() {
    let list = document.getElementsByClassName('base-list')
    for (let i = 0; i < list.length; i++) {
        let title = list[i].getElementsByTagName('h3')[0]
        title = title.textContent || title.innerText
        title = title.replace(' в архиве', '')
        console.log(title)
    }
}

function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (error) { }
    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
    catch (error) { }

    throw new Error("Could not create HTTP request object.");
}

