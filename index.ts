const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

const closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");

for (i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i];
    closeButton.addEventListener('click', () => {
        const listItem  = closeButton.parentElement;
        if(!!listItem) {
            listItem.style.display = "none";
        }
    })
}

const list: HTMLUListElement | null = document.querySelector('ul');
if(!!list) {
    list.addEventListener('click', function (ev) {
        let target: HTMLElement = <HTMLElement>ev.target;
        if(target){
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
            }
    }
    }, false);
}

function newElement(): void {
    const li: HTMLElement = document.createElement("li");
    const input: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    if(!input) return;
    const inputValue = input.value;
    const textNode: Text = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        const ul: HTMLElement | null = document.getElementById("myUL");
        if(ul) {
            ul.appendChild(li);
        }
    }
    input.value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener('click', () => {
        const listItem  = span.parentElement;
        if(!!listItem) {
            listItem.style.display = "none";
        }
    })

};

const addButton: HTMLElement | null = document.getElementById("addButton");
if(addButton) {
addButton.addEventListener('click', () => {
    newElement();
});
}