import appendHome from "./home";
import appendContact from "./contact";
import appendMenu from "./menu";

function createHeader() {
    const header = document.createElement('div');
    header.id = "header";

    const title = document.createElement('div');
    title.id = "title";
    title.textContent ="ebilloJ";

    header.appendChild(title);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const home = document.createElement('button');
    home.id = "home";
    home.textContent = "HOME";

    const menu = document.createElement('button');
    menu.id = "menu";
    menu.textContent = "MENU"

    const contact = document.createElement('button');
    contact.id = "contact";
    contact.textContent = "CONTACT";

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
    footer.textContent = "kyleetaan! theodinproject";
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