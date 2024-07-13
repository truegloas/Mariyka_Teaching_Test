let elemsArray = Array.from(document.getElementsByClassName("heart__circle-param"));

elemsArray.forEach((elem) => {
    elem.style.backgroundColor = 'greenyellow';
})

document.getElementsByClassName('heart').item(0).onclick = () => {
    elemsArray.forEach((elem) => {
        // if (elem.style.backgroundColor === 'greenyellow') {
        //     elem.style.backgroundColor = 'red';
        // } else if (elem.style.backgroundColor === 'red') {
        //     elem.style.backgroundColor = 'greenyellow';
        // }

        let es = elem.style;
        es.backgroundColor = es.backgroundColor === 'greenyellow' ? 'red' : 'greenyellow';
    })
}