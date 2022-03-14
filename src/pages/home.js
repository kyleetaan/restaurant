function createHome() {
    const main = document.createElement('div');
    main.id = "main";
    
    const firstPara = createParagraph("Jollibee is the largest fast-food chain brand in the Philippines.");
    firstPara.classList.add("center");

    const logo = document.createElement('img');
    logo.src = "img/jollibeeLogo.jpg"

    const secondPara = createParagraph("Order online or visit us!"); 


    main.appendChild(firstPara);
    main.appendChild(logo);
    main.appendChild(secondPara);

    return main;
}

function createParagraph(str) {
    const p = document.createElement("p");
    p.textContent = str;
    p.classList.add('whitetxt');
    return p;
}

function appendHome() {
    const container = document.getElementById("container");
    container.textContent = "";
    container.appendChild(createHome());
}

export default appendHome