let Allcontacts = JSON.parse(localStorage.getItem('user')) || [];
viewContact()
let editIndex = null;


function addContact() {

    let naam = document.querySelector('#name').value.trim();
    let phone = document.querySelector('#phone').value;

    if (!naam || !phone) {
        showToast('naam and phone fields are must')
        return
    }

    // --------------------------------------------------------------------------------
    // edit 
    if (editIndex != null) {
        Allcontacts[editIndex] = { naam, phone };
        showToast('Contact updated successfully!', 'success');
        editIndex = null;
    }

    // save 
    else {

        let existingContact = Allcontacts.find((contact) => contact.phone == phone)

        if (existingContact) {
            showToast('This Number exist in your Phonebook')
        }
        else {
            Allcontacts.push({ naam, phone })
            showToast('Contact added successfully!', 'success');
        }
    }

    localStorage.setItem('user', JSON.stringify(Allcontacts))

    // --------------------------------------------------------------------------------

    viewContact()


    // --------------------------------------------------------------------------------

    document.querySelector('#name').value = '';
    document.querySelector('#phone').value = '';

}


function viewContact() {
    let tbl = document.querySelector('table');
    tbl.innerHTML = '';
    Allcontacts.forEach((contact, idx) => {
        tbl.innerHTML += `
                <tr>
                    <td id="contactName">${contact.naam}</td>
                    <td id="contactNumber">${contact.phone}</td>
                    <td><button><i class="ri-delete-bin-line" onclick='deleteContact(${idx})' ></i></button></td>
                    <td><button><i class="ri-pencil-line" onclick='editContact(${idx})' ></i></button></td>
                </tr>
        `
    })
}

function deleteContact(idx) {
    Allcontacts.splice(idx, 1);
    localStorage.setItem('user', JSON.stringify(Allcontacts));
    viewContact()
    showToast('Contact deleted successfully!', 'success');
}

function editContact(idx) {
    editIndex = idx;

    let contacts = Allcontacts[idx];

    document.querySelector('#name').value = contacts.naam;
    document.querySelector('#phone').value = contacts.phone;
}

function showToast(message, type = "success") {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top", // top or bottom
        position: "right", // left, center, right
        // backgroundColor: type === "success" ? "#4BB543" : "#FF3333",
        style: {
            background: "linear-gradient(to right, #17e9d0, #9bdf25)",
        },
        close: true,

    }).showToast();
}
