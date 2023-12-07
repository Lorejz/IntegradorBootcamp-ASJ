


const formProveedorAlta = document.getElementById("formProveedorAlta");
//const altaProveedorModal = document.getElementById("altaProveedorModal");
const btnGuardar = document.getElementById("btnGuardar");
const rubroProveedor = document.getElementById("rubroProveedor");
const cuitProveedor = document.getElementById("cuitProveedor");
const emailProveedor = document.getElementById("emailProveedor");
const nombreProveedor = document.getElementById("nombreProveedor");
const apellidoProveedor = document.getElementById("apellidoProveedor");

const formProveedorMod = document.getElementById("formProveedorMod");
//prueba de Modal Modificador
const btnModificar = document.getElementById("btnModificar");
const rubroProveedorMod = document.getElementById("rubroProveedorMod");
const cuitProveedorMod = document.getElementById("cuitProveedorMod");
const emailProveedorMod = document.getElementById("emailProveedorMod");
const nombreProveedorMod = document.getElementById("nombreProveedorMod");
const apellidoProveedorMod = document.getElementById("apellidoProveedorMod");

let codigoProveedor = 1;

const tableBody = document.getElementById("tablaProveedoresBody");

let data = JSON.parse(localStorage.getItem("formData")) || []; //busca la informacion o creala

cargarFormDesdeLocalStorage();

btnGuardar.addEventListener('click', function (event) {
    event.preventDefault()
    const rubro = rubroProveedor.value;
    const cuit = cuitProveedor.value;
    const email = emailProveedor.value;
    const nombre = nombreProveedor.value;
    const apellido = apellidoProveedor.value;

    const newData = { codigoProveedor, rubro, cuit, email, nombre, apellido };

    data.push(newData);

    saveDataToLocalStorage();
    renderTable();
    formProveedorAlta.reset();
    //altaProveedorModal.classList.toggle("show");
    //altaProveedorModal.style = "display:none;"
    //form.reset();
})

function saveDataToLocalStorage() {
    localStorage.setItem("formData", JSON.stringify(data));
}

function renderTable() {
    tableBody.innerHTML = '';

    data.forEach(function (item, index) {
        const row = document.createElement('tr');

        const codCell = document.createElement('td');
        const rubroCell = document.createElement('td');
        const cuitCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const nombreCell = document.createElement('td');
        const apellidoCell = document.createElement('td');

        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        codCell.textContent = index;
        rubroCell.textContent = item.rubro;
        cuitCell.textContent = item.cuit;
        emailCell.textContent = item.email;
        nombreCell.textContent = item.nombre;
        apellidoCell.textContent = item.apellido;

        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        editButton.dataset.toggle = 'modal';
        editButton.dataset.target = '#modificarProveedorModal';

        editButton.className = "btn btn-outline-warning btn-sm m-1";
        deleteButton.className = "btn btn-outline-danger btn-sm m-1";

        editButton.addEventListener('click', function () {
            editData(index);
            btnModificar.addEventListener('click',function(){
                data.splice(index,1);
                
                const rubro = rubroProveedorMod.value;
                const cuit = cuitProveedorMod.value;
                const email = emailProveedorMod.value;
                const nombre = nombreProveedorMod.value;
                const apellido = apellidoProveedorMod.value;
            
                const newData = { codigoProveedor, rubro, cuit, email, nombre, apellido };
            
                data.push(newData);
                
                saveDataToLocalStorage();
                renderTable();
                
            })
        })

        deleteButton.addEventListener('click', function () {
            deleteData(index);
        })

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(codCell);
        row.appendChild(rubroCell);
        row.appendChild(cuitCell);
        row.appendChild(emailCell);
        row.appendChild(nombreCell);
        row.appendChild(apellidoCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
        
    })

}

function deleteData(index) {
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}


function editData(index) {
    const item = data[index];

    rubroProveedorMod.value    =  item.rubro;
    cuitProveedorMod.value     =  item.cuit;
    emailProveedorMod.value    =  item.email;
    nombreProveedorMod.value   =  item.nombre;
    apellidoProveedorMod.value =  item.apellido;

}

/* btnModificar.addEventListener('click',function(){
    data.splice(index,1);
    saveDataToLocalStorage();
    renderTable();
}) */


function cargarFormDesdeLocalStorage() {
    const formProveedores = localStorage.getItem("formData");
    if (formProveedores) {
        data = JSON.parse(formProveedores);
        renderTable();
    }
}