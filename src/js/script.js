var items = Array.from(document.querySelectorAll('.faq_menu-item'));
var conts = Array.from(document.querySelectorAll('.faq_content'));
items.forEach((item, i) =>
    item.onclick = ((j) => () => selectContent(j))(i)
);
var activeContent;
selectContent(0);

for(var cont of conts) {
    var headings = Array.from(cont.querySelectorAll('h4'));
    for(var i in headings)
        headings[i].onclick = ((i) => () => selectP(i))(i);
}

selectP(0);

function selectP(ind) {
    var ps = activeContent.querySelectorAll('.faq_content-text p');
    ps.forEach(par => par.style.display = 'none');
    ps[ind].style.display = 'block';
}

function selectContent(ind) {
    if(activeContent === conts[ind]) return;

    items.forEach(item => item.className = 'faq_menu-item');
    items[ind].className = 'faq_menu-item-selected';

    conts.forEach(cont => cont.style.display = 'none');
    conts[ind].style.display = 'block';
    activeContent = conts[ind];
    selectP(0);
}