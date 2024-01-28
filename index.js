var rellax = new Rellax('.rellax');
const sleep = ms => new Promise(r => setTimeout(r, ms));

function inView(element)
{
    var visible = false;
    var rect = element.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;

    if (top <= 0 && bottom <= window.innerWidth) visible = true;

    return visible;
}


document.addEventListener("scroll", () =>
{
    var nav = document.getElementsByTagName("nav")[0];
    var elem = document.getElementById("projects");
    if (inView(elem)) 
    {
        if (nav.classList.contains("navbar-expand-sm")) nav.classList.remove("navbar-expand-sm");
    }

    else nav.classList.add("navbar-expand-sm");
});


// Typing function

let keyWords = ['Programmer', 'Problem-Solver', 'Guitarist', 'Nerd']
const TIME = 75;

async function typeWord(keyWord, index) {
    try {
        if (keyWord.length != index) {
            let string = document.getElementById('typingText');
            await sleep(TIME);
            string.innerText += keyWord[index];
    
            await typeWord(keyWord, index + 1);
        } else {
            return;
        }
    } catch (err) {
        return;  
    }
}


async function deleteWord(keyWord, index) {
    if (index > 0) {
        let string = document.getElementById('typingText');
        await sleep(TIME);
        string.innerText = string.innerText.slice(0, -1);

        await deleteWord(keyWord, index - 1);
    } else {
        return;
    }
}


async function selectKeyword(keyWord) {
    if (keyWord == undefined) {
        selectKeyword(keyWords[0]);
    }
    else if (keyWords.indexOf(keyWord) < 4) {
        await typeWord(keyWord, 0);
        await sleep(1500);
        await deleteWord(keyWord, keyWord.length);
        await selectKeyword(keyWords[keyWords.indexOf(keyWord) + 1]);
    }
}


selectKeyword(keyWords[0]);
