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

let keyWords = ['Entrepreneur', 'Treasurer', 'Ambivert', 'Programmer']
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

// Make a slideshow you tard

let imageArray = ['images/DSC09221.jpg', 'images/DSC09218.jpg', 'images/DSC03199.jpg'];

// When you click forwardButton make one image disappear and then make another appear QWOW

let forwardButton = document.getElementById('forwardButton');
let backButton = document.getElementById('backButton');
let image = document.getElementById('me');
let imageIndex = 0;

forwardButton.onclick = () => {
    imageIndex += 1;


    if (imageIndex > 2) {
        imageIndex = 0;
    }
    
    image.src = imageArray[imageIndex];
};

backButton.onclick = () => {
    imageIndex -= 1;

    if (imageIndex < 0) {
        imageIndex = 2;
    }
    
    image.src = imageArray[imageIndex];
};
