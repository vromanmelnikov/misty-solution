document.addEventListener(
    ('click'),
    (event) => {
        let id = event.target.id
        if (id == 'tab_1') {
            document.getElementById('tab_1').className = 'tab'
            document.getElementById('tab_2').className = 'tab unactive-tab'
            document.getElementById('notices').style.display = 'none'
            document.getElementById('chat').style.display = 'block'
        } else if (id == 'tab_2') {
            document.getElementById('tab_2').className = 'tab'
            document.getElementById('tab_1').className = 'tab unactive-tab'
            document.getElementById('chat').style.display = 'none'
            document.getElementById('notices').style.display = 'block'
        }
    }
)

console.log(chrome.dom)