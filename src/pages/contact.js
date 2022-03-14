function createContact() {
    const main = document.createElement('div');
    main.id = "main";

    const phone = document.createElement('p');
    phone.classList.add('whitetxt');
    phone.textContent = "📞 123 456 789"

    const address = document.createElement('p');
    address.classList.add('whitetxt');
    address.textContent = "🏠 Philippines"

    main.appendChild(phone);
    main.appendChild(address);

    return main;
}

function appendContact(){
    const container = document.getElementById("container");
    container.textContent = "";
    container.appendChild(createContact());
}
export default appendContact