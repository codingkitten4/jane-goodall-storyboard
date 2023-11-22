// eCard = enlargedCard
var eCard = document.getElementById("e-card-hidden");

// Determines which ecards are allowed to open
var progress = 0;

const cards = [document.getElementById("card1"), document.getElementById("card2"), 
        document.getElementById("card3"), document.getElementById("card4"), document.getElementById("card5"), 
        document.getElementById("card6"), document.getElementById("card7"), document.getElementById("card8"), 
        document.getElementById("card9"), document.getElementById("card10"), document.getElementById("card11"), 
        document.getElementById("card12"), document.getElementById("card13"), document.getElementById("card14")
];

function bindDivStructure(type) {
    if (type === 'ecard') {
        
    }
}

function checkECardStatus() {
    var eCardStatus = false

    if (eCard.id === "e-card-shown") {
        eCardStatus = true
    } else {
        eCardStatus = false
    }

    return eCardStatus;
}

function displayECard(type, text, photoPath = null) {
    eCard.id = "e-card-shown";
}

function cardClicked(id) {
    switch(id) {
        case 1:
            if (progress === 0) {
                progress++;
                displayECard(0, 'ex');
            } else if (progress > 0) {
                displayECard(0, 'ex')
            }
            break;
        case 2:
            if (progress === 1) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 1) {
                displayECard(1, 'ex');
            }
            break;
        case 3:
            if (progress === 2) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 2) {
                displayECard(1, 'ex');
            }
            break;
        case 4:
            if (progress === 3) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 3) {
                displayECard(1, 'ex')
            }
            break;
        case 5:
            if (progress === 4) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 4) {
                displayECard(1, 'ex')
            } 
            break;
        case 6:
            if (progress === 5) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 5) {
                displayECard(1, 'ex')
            }
            break;
        case 7:
            if (progress === 6) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 6) {
                displayECard(1, 'ex')
            }
            break;
        case 8:
            if (progress === 7) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 7) {
                displayECard(1, 'ex')
            }
            break;
        case 9:
            if (progress === 8) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 8) {
                displayECard(1, 'ex')
            }
            break;
        case 10:
            if (progress === 9) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 9) {
                displayECard(1, 'ex')
            }
            break;
        case 11:
            if (progress === 10) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 10) {
                displayECard(1, 'ex')
            }
            break;
        case 12:
            if (progress === 11) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 11) {
                displayECard(1, 'ex')
            }
            break;
        case 13:
            if (progress === 12) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 12) {
                displayECard(1, 'ex')
            }
            break;
        case 14:
            if (progress === 13) {
                progress++;
                displayECard(1, 'ex');
            } else if (progress > 13) {
                displayECard(1, 'ex')
            }
            break;
    }
}

// displaying proper icons according to the progress variable
switch(progress) {
    case 0:
        break;
    case 1:
        cards[0].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 2:
        cards[1].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 3:
        cards[2].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 4:
        cards[3].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 5:
        cards[4].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 6:
        cards[5].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 7:
        cards[6].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 8:
        cards[7].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 9:
        cards[8].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 10:
        cards[9].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 11:
        cards[10].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 12:
        cards[11].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 13:
        cards[12].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
    case 14:
        cards[13].innerHTML = '<svg width="1792" height="1792" viewBox="0 0 1792 1792"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        break;
}
