window.addEventListener(
    'load', (event) => {
        setTimeout(
            () => {
                addQuest()
            }, 2000
        )
    }
)

let dict2 = ["Пример: Проект ... направлен на ... .  Концепция реализации проекта предполагает ..., а также ... . ",
    "Пример: Проблема - отсутствие интернета. Решение: 1. перезагрузка роутера, 2. Звонок провайдеру.",
    "Пример: Студенты пяти педагогических колледжей Зюзюкинска в возрасте от 14 до 25 лет в количестве 100 человек",
    "Пример: Создание условий для повышения компетенций в областях: ..., у " +
"студентов: ..., путем организации ... в период с ... по ..."]

let newDiv = document.createElement("div");
newDiv.innerHTML = "<div style='display: inline-block; flex-direction: row; height: 16px; width: 16px; margin-top: 2px'><svg style=\" width: 16px; height: 16px\" version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n" +
    " width=\"1280.000000pt\" height=\"1280.000000pt\" viewBox=\"0 0 1280.000000 1280.000000\"\n" +
    " preserveAspectRatio=\"xMidYMid meet\">\n" +
    "<g transform=\"translate(0.000000,1280.000000) scale(0.100000,-0.100000)\"\n" +
    "fill=\"#ffa419\" stroke=\"none\">\n" +
    "<path d=\"M6095 12794 c-1453 -77 -2788 -613 -3885 -1558 -138 -119 -447 -423\n" +
    "-570 -561 -517 -579 -915 -1221 -1194 -1928 -224 -567 -361 -1145 -423 -1792\n" +
    "-24 -252 -24 -858 0 -1110 108 -1120 456 -2103 1068 -3016 355 -531 836 -1049\n" +
    "1344 -1450 989 -780 2125 -1232 3410 -1356 252 -24 858 -24 1110 0 1113 107\n" +
    "2103 456 3004 1059 338 227 614 452 919 753 264 259 421 437 632 717 728 964\n" +
    "1148 2057 1267 3293 24 252 24 858 0 1110 -137 1422 -679 2669 -1617 3720\n" +
    "-123 138 -432 442 -570 561 -1031 889 -2265 1413 -3625 1539 -162 15 -716 27\n" +
    "-870 19z m525 -2385 c615 -61 1156 -302 1535 -683 246 -247 428 -573 514 -921\n" +
    "44 -178 56 -297 56 -575 0 -346 -31 -567 -111 -806 -138 -412 -413 -725 -835\n" +
    "-948 -218 -115 -423 -185 -771 -261 l-216 -48 -4 -311 c-5 -337 -8 -357 -68\n" +
    "-476 -51 -101 -155 -187 -281 -231 -94 -34 -285 -34 -384 -1 -170 57 -271 167\n" +
    "-322 352 -16 59 -18 117 -18 625 0 501 2 566 17 615 37 119 105 148 548 239\n" +
    "310 64 467 118 633 217 331 199 516 500 546 888 26 342 -74 602 -328 857 -112\n" +
    "112 -179 161 -301 220 -168 81 -318 113 -545 113 -309 1 -529 -57 -735 -192\n" +
    "-112 -74 -296 -258 -447 -447 -138 -172 -284 -318 -347 -346 -58 -25 -202 -39\n" +
    "-286 -28 -94 13 -164 51 -246 133 -123 123 -162 238 -151 449 17 311 118 549\n" +
    "341 800 246 275 590 494 996 631 406 137 777 178 1210 135z m-255 -6980 c67\n" +
    "-13 178 -69 246 -123 68 -55 124 -126 178 -226 184 -342 4 -770 -379 -901 -99\n" +
    "-34 -258 -32 -361 3 -109 38 -194 91 -275 172 -127 127 -181 278 -171 475 8\n" +
    "176 66 299 198 426 170 162 345 216 564 174z\"/>\n" +
    "</g>\n" +
    "</svg></div>";

let addQuest = () => {
    let oldHref = ''
    setInterval(
        () => {
            let href = window.location.href
            if (oldHref !== href) {
                 if (href.includes('https://grants.myrosmol.ru/projects/edit/', 0) || href.includes('https://grants.myrosmol.ru/projects/create/', 0)){
                     switch (true) {
                         case href.includes('b651ec1b-e302-4e19-b567-15000fce5111', 80) :
                             //addImgQ()
                             break
                         case href.includes('48c4ccfd-7f7e-456f-95d4-3380c5d23b8e', 80) :
                             addImgQ()
                             break
                         case href.includes('1d802125-f5b6-4a43-9898-140fac1e4671', 80) :
                            // addImgQ()
                             break
                         case href.includes('33f9846f-a29d-417f-9353-eb4ec30025de', 80) :
                             //addImgQ()
                             break
                         case href.includes('2ea66431-4579-4f1c-a07f-803d709bf630', 80) :
                             //addImgQ()
                             break
                         case href.includes('8c961262-869d-4427-bfe2-c1e5159237b0', 80) :
                             //addImgQ()
                             break
                         case href.includes('0c524668-613f-4d53-b18e-75b1c56bc544', 80) :
                             //addImgQ()
                             break
                         case href.includes('44a01e7e-5ff8-4464-af70-fbaffb742db3', 80) :
                             //addImgQ()
                             break
                         case href.includes('8a78f7be-1e0a-4815-a2c5-5fb5262f5b0c', 80) :
                             //addImgQ()
                             break
                         default :
                             break
                     }
                 }
                oldHref = href
            }
        }, 100
    )
}

function addImgQ() {
    let list = document.querySelectorAll('.base-textarea')
    for (let i = 0; i < list.length-2 ; i++) {
        let div1 = newDiv.cloneNode(true)
        div1.innerHTML ="<div style='position: relative;  margin-left: 1vh; z-index: 10; vertical-align: middle; text-align: center; display: flex;' id=b"+ i + ">" + div1.innerHTML +
            "<div style='display: none' id=i"+ i + ">" + dict2[i] + "</div></div>"
        list[i].insertAdjacentHTML("beforebegin", div1.innerHTML)
        document.getElementById("b" + i).firstElementChild.addEventListener('click', (event) => {
            document.getElementById("i" + i).setAttribute('style', 'max-height: 100px; width: 400px; padding:0.5rem 1rem; left: 20px; bottom: 0; text-align: center; border-radius: 5px; position: absolute; display: flex; flex-direction: row; background-color: #FBB647')
        })
        document.getElementById("i" + i).addEventListener('click', (event) => {
            document.getElementById("i" + i).setAttribute('style', 'display: none')
        })
    }
}

