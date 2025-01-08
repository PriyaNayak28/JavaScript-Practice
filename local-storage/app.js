document.addEventListener('DOMContentLoaded', loadStoredData);
// Load stored data on page load
function loadStoredData() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const userDetails = JSON.parse(localStorage.getItem(key));
        if (userDetails) {
            displayUserDetails(userDetails);
        }
    }
}
function saveToLocalStorage(event) {
    event.preventDefault();

    const NAME = event.target.name.value;
    const EMAIL = event.target.email.value;
    const AGE = event.target.age.value;

    let userDetails = {
        NAME,
        EMAIL,
        AGE
    }

    localStorage.setItem(userDetails.EMAIL, JSON.stringify(userDetails));

    const newLi = document.createElement('li');
    const ul = document.getElementById('list');

    newLi.innerHTML = `Name: ${userDetails.NAME}, Email: ${userDetails.EMAIL}, AGE: ${userDetails.AGE}` + '<button class="delete-btn">delete</button>' + '<button class="edit-btn">edit</button>';
    ul.appendChild(newLi);
  
   

    ul.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteItem = event.target.parentElement;
            ul.removeChild(deleteItem);
            localStorage.removeItem(userDetails.EMAIL);
        }

    })

    ul.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            editItem = event.target.parentElement;
            ul.removeChild(editItem);
            localStorage.removeItem(userDetails.EMAIL);

            document.getElementById('username').value = userDetails.NAME;
            document.getElementById('emailId').value = userDetails.EMAIL;
            document.getElementById('phoneNo').value = userDetails.PHONE;
        }
    })



};

