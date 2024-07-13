let elems = document.getElementsByClassName("heart__circle-param");

let elemsArray = Array.from(elems);

elemsArray.forEach((elem) => {
    elem.style.backgroundColor = 'greenyellow';
})

elemsArray.forEach((elem) => {
    // if (elem.style.backgroundColor === 'greenyellow') {
    //     elem.style.backgroundColor = 'red';
    // } else if (elem.style.backgroundColor === 'red') {
    //     elem.style.backgroundColor = 'greenyellow';
    // }

    let es = elem.style;
    es.backgroundColor = es.backgroundColor === 'greenyellow' ? 'red' : 'greenyellow';
})