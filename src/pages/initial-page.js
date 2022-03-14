import appendHome from "./home";
import appendContact from "./contact";
import appendMenu from "./menu";

function createHeader() {
    const header = document.createElement('div');
    header.id = "header";

    const logo = document.createElement('img');
    logo.src = "img/jb_logo_with_wordmark.png";
    logo.id = "title";

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const home = document.createElement('button');
    home.id = "home";
    home.textContent = "HOME";
    home.addEventListener('click', appendHome);

    const menu = document.createElement('button');
    menu.id = "menu";
    menu.textContent = "MENU"
    menu.addEventListener('click', appendMenu);

    const contact = document.createElement('button');
    contact.id = "contact";
    contact.textContent = "CONTACT";
    contact.addEventListener('click', appendContact);

    const links = document.createElement('nav');
    links.id = "links";
    links.appendChild(home);    
    links.appendChild(menu);    
    links.appendChild(contact);
    
    return links;
}

function createContainer() {
    const container = document.createElement('div');
    container.id = "container";
    return container;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.textContent = "fake Jollibee website - @kyleetaan ~theodinproject~";
    return footer;
}

function initialize() {
    console.log("hatdog")
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createContainer());
    content.appendChild(createFooter());

    appendHome();
}   

export default initialize;