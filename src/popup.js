
// window.addEventListener("load", (event) => {
//     setTimeout(() => {
//         addElement();
//     }, 500);
// });

// function addElement() {

    

//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = "<svg style='width: 50px; height: 50px' version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n" +
//         " width=\"1280.000000pt\" height=\"1280.000000pt\" viewBox=\"0 0 1280.000000 1280.000000\"\n" +
//         " preserveAspectRatio=\"xMidYMid meet\">\n" +
//         "<g transform=\"translate(0.000000,1280.000000) scale(0.100000,-0.100000)\"\n" +
//         "fill=\"#ffa419\" stroke=\"none\">\n" +
//         "<path id='misty-bot' d=\"M6095 12794 c-1453 -77 -2788 -613 -3885 -1558 -138 -119 -447 -423\n" +
//         "-570 -561 -517 -579 -915 -1221 -1194 -1928 -224 -567 -361 -1145 -423 -1792\n" +
//         "-24 -252 -24 -858 0 -1110 108 -1120 456 -2103 1068 -3016 355 -531 836 -1049\n" +
//         "1344 -1450 989 -780 2125 -1232 3410 -1356 252 -24 858 -24 1110 0 1113 107\n" +
//         "2103 456 3004 1059 338 227 614 452 919 753 264 259 421 437 632 717 728 964\n" +
//         "1148 2057 1267 3293 24 252 24 858 0 1110 -137 1422 -679 2669 -1617 3720\n" +
//         "-123 138 -432 442 -570 561 -1031 889 -2265 1413 -3625 1539 -162 15 -716 27\n" +
//         "-870 19z m525 -2385 c615 -61 1156 -302 1535 -683 246 -247 428 -573 514 -921\n" +
//         "44 -178 56 -297 56 -575 0 -346 -31 -567 -111 -806 -138 -412 -413 -725 -835\n" +
//         "-948 -218 -115 -423 -185 -771 -261 l-216 -48 -4 -311 c-5 -337 -8 -357 -68\n" +
//         "-476 -51 -101 -155 -187 -281 -231 -94 -34 -285 -34 -384 -1 -170 57 -271 167\n" +
//         "-322 352 -16 59 -18 117 -18 625 0 501 2 566 17 615 37 119 105 148 548 239\n" +
//         "310 64 467 118 633 217 331 199 516 500 546 888 26 342 -74 602 -328 857 -112\n" +
//         "112 -179 161 -301 220 -168 81 -318 113 -545 113 -309 1 -529 -57 -735 -192\n" +
//         "-112 -74 -296 -258 -447 -447 -138 -172 -284 -318 -347 -346 -58 -25 -202 -39\n" +
//         "-286 -28 -94 13 -164 51 -246 133 -123 123 -162 238 -151 449 17 311 118 549\n" +
//         "341 800 246 275 590 494 996 631 406 137 777 178 1210 135z m-255 -6980 c67\n" +
//         "-13 178 -69 246 -123 68 -55 124 -126 178 -226 184 -342 4 -770 -379 -901 -99\n" +
//         "-34 -258 -32 -361 3 -109 38 -194 91 -275 172 -127 127 -181 278 -171 475 8\n" +
//         "176 66 299 198 426 170 162 345 216 564 174z\"/>\n" +
//         "</g>\n" +
//         "</svg>";
//     newDiv.setAttribute('style', 'width: 50px; height: 50px ; margin-top: 90vh;margin-left: 189.5vh; position: fixed; z-index: 10;');
//     // newDiv.setAttribute('id', 'misty-bot')
//     // ?????????????????? ???????????? ?????? ?????????????????? ?????????????? ?? ???????????? DOM

//     window.addEventListener(
//         'click',
//         (event) => {
//             // console.log(event.target)
//             if (event.target.id == 'misty-bot') {
//                 alert('??????????????((')
//             }
//         }
//     )

//     let my_div = document.getElementsByClassName('base-row')[0];

//     if (document.querySelector('.base-field')) {

//         //my_div.getElementsByClassName('base-field')[0].classList.remove('base-field--grid-12');
//         //my_div.getElementsByClassName('base-field')[0].classList.add('base-field--grid-11');


//         document.head.after(newDiv);
//         //my_div.insertBefore(newDiv, my_div.getElementsByClassName('base-field')[0].getElementsByClassName('base-field__label'));

//     }

// }