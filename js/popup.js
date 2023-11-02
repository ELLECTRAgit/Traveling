const feedbackLink = document.querySelectorAll('.feedback-link');
// console.log('popupLink: '+ popupLink);
const closeFeedback = document.querySelectorAll('.close-feedback');
console.log('closeFeedback: ')
console.log (closeFeedback);
const unlock = true;

if (feedbackLink.length>0) {
    for (index = 0; index<feedbackLink.length; index++) {
        const popupL = feedbackLink[index];
        // console.log('popupL: ')
        // console.log (popupL);
        popupL.addEventListener('click', function (e) {
            const feedbackName = popupL.getAttribute('href').replace('#','');
        //    console.log('popupName: '+ popupName);
            const feedbackId = document.getElementById(feedbackName);
            // console.log('popupId: ')
            // console.log (popupId);
            feedbackOpen(feedbackId);
            // e.preventDefault();
        });

    }
}

if (closeFeedback>0) {
    for (index = 0; index<closeFeedback.length; index++) {
        let feedbackCl = closeFeedback[index];
        feedbackCl.addEventListener('click',function (e){
            feedbackClose(feedbackCl.closest('.feedback'));

        });
    }
}

function feedbackOpen (feedbackId) {
    if (feedbackId && unlock) {
        let feedbackActive = document.querySelector('.feedback.open');
        if (feedbackActive) {
            feedbackClose (feedbackActive);
        }
        feedbackId.classList.add('open');
        feedbackId.addEventListener('click', function(e) {
            if (!e.target.closest('.feedback__content')) {
                feedbackClose(e.target.closest('.feedback'));
            }
        });
    }
}

function feedbackClose (feedbackActive) {
    if (unlock) {
        feedbackActive.classList.remove ('open');
    }
}


//Бегающие буквы

$('document').ready(function(){
    let typed = new Typed(".skills", {
        stringsElement: '.skills-strings',
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        loopCount: 1
    });
    });