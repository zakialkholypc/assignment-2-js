var myQuote = document.getElementById('quoteHere');
var auther = document.getElementById('author');
var quotes = ["Be yourself; everyone else is already taken.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "So many books, so little time.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "A room without books is like a body without a soul.", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "You only live once, but if you do it right, once is enough.", "Be the change that you wish to see in the world.", "In three words I can sum up everything I've learned about life: it goes on.", "If you tell the truth, you don't have to remember anything."];
var authername = ["― Oscar Wilde", "― Marilyn Monroe", "― Frank Zappa", "― Albert Einstein", "― Marcus Tullius Cicero", "― Bernard M. Baruch", "― Dr. Seuss", "― Mae West", "― Mahatma Gandhi", "― Robert Frost", "― Mark Twain"];

var y;
function getQuote() {
    var x = Math.floor(Math.random() * 11);

    for (var i = 0; i < 100; i++) {

        if (y != x) {
            myQuote.innerHTML = quotes[x]
            auther.innerHTML = authername[x]
            console.log(x);
            y = x;
            break;

        }
        else {
            x = Math.floor(Math.random() * 11);
        }

    }


}

// how are you
// ==============================End Of Assignment=============================
// =====================================For Design=============================
// =========================My code================================

function DarkWhiteToggle() {
    const body = document.body;
    const button = document.getElementById('button');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function toggleDarkMode() {
        if (body.classList.contains('colortoggle')) {
            body.classList.remove('colortoggle');
            button.innerHTML = '<i class="fa-regular fa-sun"></i>';
        } else {
            body.classList.add('colortoggle');
            button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    if (prefersDarkScheme) {
        body.classList.add('colortoggle');
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.classList.remove('colortoggle');
        button.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }

    button.addEventListener('click', toggleDarkMode);
}

DarkWhiteToggle();
