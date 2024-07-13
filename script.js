let elems = document.getElementsByClassName("heart__circle-param");
Array.from(elems).forEach(function (elem) {
    elem.style.backgroundColor = 'red';
    console.log(elem);
})