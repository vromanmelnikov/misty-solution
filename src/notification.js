function notification() {
    chrome.notifications.create(
        {
            title: 'Assistant',
            message: 'Hello from notification',
            iconUrl: 'favicon.png',
            type: 'basic'
        }
    )

    var ntfctn = {
        text: "Hello from notification",
        date: new Date().toLocaleTimeString(),
    }

    addNotification(ntfctn);
}


function addNotification(ntfctn) {
    let notifications = document.querySelector('#notices');
    let notification = document.createElement('div')
    let items = localStorage.getItem("notifications");

    if (items) {
        let arr = JSON.parse(items);
        arr.push(ntfctn);
        console.log(arr);
        localStorage.setItem("notifications", JSON.stringify(arr));
    } else {
        let arr = [];
        arr.push(ntfctn);
        localStorage.setItem("notifications", JSON.stringify(arr));
    }

    notification.className = 'notification-item'
    notification.innerHTML = `
                    <div class="notification">
                        <div class="notification-text">
                            ${ntfctn.text}
                        </div>
                        <div class="notification-right">
                            <div class="notification-right-column">
                                <div class="notification-close">
                                    <img class="notification-close-img" src="photos/close.png">
                                </div>
                                <div class="notification-date">
                                    ${ntfctn.date}
                                </div>
                            </div>
                        </div>
                    </div>`;
    notifications.appendChild(notification);
}

function loadNotifications() {
    let notifications = document.querySelector('#notices');
    let items = localStorage.getItem("notifications");

    if (items) {
        let arr = JSON.parse(items);

        arr.forEach((el) => {
            console.log(el);
            let notification = document.createElement('div')
            notification.className = 'notification-item'
            notification.innerHTML = `
                    <div class="notification">
                        <div class="notification-text">
                            ${el.text}
                        </div>
                        <div class="notification-right">
                            <div class="notification-right-column">
                                <div class="notification-close">
                                    <img class="notification-close-img" src="photos/close.png">
                                </div>
                                <div class="notification-date">
                                    ${el.date}
                                </div>
                            </div>
                        </div>
                    </div>`;
            notifications.appendChild(notification);
        })
    }


}

loadNotifications();
// notification();