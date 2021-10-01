const bookmarkList = document.getElementById('bookmark__list');

chrome.storage.sync.get("pages", ({ pages }) => {
    showBookmarks(pages);
});

const showBookmarks = pages => {
    pages.forEach(page => {
        let li = createLi(page);
        bookmarkList.appendChild(li);
    });
};

const createLi = page => {
    const li = document.createElement('li');
    li.className = 'bookmark__item';
    
    const h4 = document.createElement('h4');
    h4.className = 'bookmark__title';
    h4.appendChild(document.createTextNode(page.title || "default title"));
    
    const link = document.createElement('a');
    link.className = 'bookmark__btn';
    link.setAttribute('href', page.web);
    link.setAttribute('target', '__blank');
    link.appendChild(document.createTextNode("Visit"));
    
    li.appendChild(h4);
    li.appendChild(link);

    return li;
}
/*
creating a component of automatic takeaway pages
    <li>
        title button to visit
        
*/
