function createMenu() {
    const main = document.createElement('div');
    main.id = "menu";

    for(let i = 0; i < 8; i++) {
        const div = createMenuDivs('img/1pc.jpeg', '1 pc chickenjoy');
        main.appendChild(div);
    }

    return main;
}

function createMenuDivs(src, description) {
    const div = document.createElement('div');
    div.classList.add = 'subMenu';

    const img = document.createElement('img');
    img.src = src;

    const detail = document.createElement('p');
    detail.textContent = description;
    detail.classList.add('whitetxt');

    div.appendChild(img);
    div.appendChild(detail);

    return div;
}

function appendMenu() {
    const container = document.getElementById("container");
    container.textContent = "";
    container.appendChild(createMenu());
}

export default appendMenu