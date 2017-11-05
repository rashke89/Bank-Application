var db = [
    {
        id: 01,
        name: 'Danilo',
        deposit: 654654,
        cCard: 'Visa'
    }, {
        id: 02,
        name: 'Rados',
        deposit: 654654,
        cCard: 'Visa'
    },
];

var tbody = document.getElementsByTagName('tBody')[0];
var tekst = "";
var accountBtn = document.getElementById('account-btn');
var accountsBtn = document.getElementById('accounts-btn');
var mainRow = document.getElementById('main-row');
var formRow = document.getElementById('form-row');
var addAccountBtn = document.getElementById('form-add-account');
var formId = document.getElementsByClassName('inputI')[0];
var formName = document.getElementsByClassName('inputI')[1];
var formDeposit = document.getElementsByClassName('inputI')[2];
var formcCard = document.getElementsByClassName('inputI')[3];
var editDelete = document.getElementById('edit-delete');
var deleteBtns;
var prviHeader = document.getElementById('prviHeader');
var drugiHeader = document.getElementById('drugiHeader');
var formEditBtn = document.getElementById('form-edit-btn');
var formAddBtn = document.getElementById('form-add-account');
var bankapp = document.getElementById('bankapp');
bankapp.addEventListener('click',function(){
    var one = JSON.stringify(db);
    localStorage.setItem('baza',one);
});
addEventListener('unload',function(){ //UNLOAD kada zatvara stranicu
    var one = JSON.stringify(db);
    localStorage.setItem('baza',one);
})
addEventListener('load',function(){// LOAD kada otvara stranicu
    var aaa = JSON.parse(localStorage.getItem('baza'));
    db = aaa;
    displayTable();
})
var id;
accountBtn.addEventListener('click', displayForm);
accountsBtn.addEventListener('click', displayTable);
addAccountBtn.addEventListener('click', addToDB);
editDelete.addEventListener('click', createEditBtn);
formEditBtn.addEventListener('click', saveAcc);

function saveAcc() {
    var formIdVal = formId.value;
    var formNameVal = formName.value;
    var formDepositVal = formDeposit.value;
    var formcCardVal = formcCard.value;
    var newObj = {
        id: formIdVal,
        name: formNameVal,
        deposit: formDepositVal,
        cCard: formcCardVal
    }
    db[id] = newObj;
    displayTable();
}

function createEditBtn() {
    tekst = "";
    mainRow.style.display = 'block';
    formRow.style.display = 'none';
    for (var i = 0; i < db.length; i++) {
        tekst += '<tr><td>' + db[i].id + '</td><td>' + db[i].name + '</td><td>' + db[i].deposit + '</td><td>' + db[i].cCard + '</td><td><button type="button" class="' + i + ' btn btn-warning btn-sm edit">Edit</button></td><td><button type="button" class="btn btn-danger btn-sm delete" id="' + i + '">Delete</button></td></tr>';
    };
    tbody.innerHTML = tekst;
    deleteBtns = document.getElementsByClassName('delete');
    editBtns = document.getElementsByClassName('edit');
    for (var i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', editAcc)
    };
    for (var i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', deleteAcc)
        // deleteBtns[i].addEventListener('click', DBls)
    };
};

function editAcc() {
    id = parseInt(this.className[0]);
    formId.value = db[id].id;
    formName.value = db[id].name;
    formDeposit.value = db[id].deposit;
    formcCard.value = db[id].cCard;
    displayEditForm();

}

function deleteAcc() {
    var abs = "";
    db.splice(this.id, 1);
    displayTable();
    if (abs == "") {
        id = parseInt(this.id);
        localStorage.removeItem(id);
    }
}

function addToDB() {
    var formIdVal = formId.value;
    var formNameVal = formName.value;
    var formDepositVal = formDeposit.value;
    var formcCardVal = formcCard.value;
    var newObj = {
        id: formIdVal,
        name: formNameVal,
        deposit: formDepositVal,
        cCard: formcCardVal
    }
    db[db.length] = newObj;
    displayTable();
    
};

function displayAccounts() {
    mainRow.style.display = 'block';
    formRow.style.display = 'none';
};

function displayTable() {
    tekst = "";
    mainRow.style.display = 'block';
    formRow.style.display = 'none';
    for (var i = 0; i < db.length; i++) {
        tekst += '<tr><td>' + db[i].id + '</td><td>' + db[i].name + '</td><td>' + db[i].deposit + '</td><td>' + db[i].cCard + '</td></tr>';
    };
    tbody.innerHTML = tekst;
};

function displayForm() {
    formId.value = ""
    formName.value = ""
    formDeposit.value = ""
    formcCard.value = ""
    formEditBtn.style.display = 'none';
    formAddBtn.style.display = 'block';
    prviHeader.style.display = 'block';
    drugiHeader.style.display = 'none';
    formRow.style.display = 'block';
    mainRow.style.display = 'none';
};

function displayEditForm() {
    formEditBtn.style.display = 'block';
    formAddBtn.style.display = 'none';
    prviHeader.style.display = 'none';
    drugiHeader.style.display = 'block';
    formRow.style.display = 'block';
    mainRow.style.display = 'none';
};
