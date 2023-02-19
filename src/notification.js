function notification() {
    // chrome.notifications.create(
    //     {
    //         title: 'Assistant',
    //         message: 'Hello from notification',
    //         iconUrl: 'favicon.png',
    //         type: 'basic'
    //     }
    // )

    let date = new Date();
    let notification = {
        text: "Наш помощник всегда уведомит вас о самом важном!",
        date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    }

    addNotification(notification);
}

function createNotification(text) {
    let date = new Date();
    let notification = {
        text: text,
        date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
    }

    addNotification(notification);
}

function addNotification(item) {
    let notifications = document.querySelector('#notices');
    let notification = document.createElement('div')
    let items = localStorage.getItem("notifications");

    console.log(item)

    chrome.notifications.create(
        {
            title: 'Ассистент',
            message: item.text,
            iconUrl: 'favicon.png',
            type: 'basic'
        }
    )

    if (items) {
        let arr = JSON.parse(items);
        arr.push(item);
        console.log(arr);
        localStorage.setItem("notifications", JSON.stringify(arr));
    } else {
        let arr = [];
        arr.push(item);
        localStorage.setItem("notifications", JSON.stringify(arr));
    }

    notification.className = 'notification-item'
    notification.innerHTML = `
                    <div class="notification-text">
                        ${item.text}
                    </div>
                    <div class="notification-right">
                        <div class="notification-right-column">
                            <div class="notification-close">
                                <img class="notification-close-img" src="photos/close.png">
                            </div>
                            <div class="notification-date">
                                ${item.date}
                            </div>
                        </div>
                    </div>`;
    notification.onclick = (event) => {
        deleteNotification(notifications, notification, item.text, item.date)
    }
    notifications.appendChild(notification);
}

function loadNotifications() {
    let notifications = document.querySelector('#notices');
    let items = localStorage.getItem("notifications");

    if (items) {

        let arr = JSON.parse(items);

        if (arr.length == 0) {
            let date = new Date();
            let notification = {
                text: "Наш помощник всегда уведомит вас о самом важном!",
                date: date.toLocaleDateString() + " " + date.toLocaleTimeString(),
            }
            addNotification(notification)
        }
        else {
            arr.forEach((el) => {
                console.log(el);
                let notification = document.createElement('div')
                notification.className = 'notification-item'
                notification.innerHTML = `
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
                        </div>`;
                notification.onclick = (event) => {
                    deleteNotification(notifications, notification, el.text, el.date)
                }
                notifications.appendChild(notification);

            }
            )
        }
    }
}

function deleteNotification(parent, child, text, date) {
    parent.removeChild(child)
    let items = JSON.parse(localStorage.getItem('notifications')).filter(
        el => el.text != text && el.date != date
    )
    localStorage.setItem('notifications', JSON.stringify(items))
}

loadNotifications();
// notification();