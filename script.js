let inputField = document.getElementById('nameTxt')
let inputApellido = document.getElementById('lastTxt')
let inputID = document.getElementById('idTxt')
let boton = document.getElementById('btnSubmit')

let data = JSON.parse(localStorage.getItem('TestUser'))

let nombresArray =  data !== [] ? data : []
let nombre = ''
inputID.addEventListener('change', function () {
    nombre = inputField.value
    boton.innerText = 'Insertar'
})
let lista = document.getElementById('tbo')

function llenarStorager(){
    cargarTable()
    if(inputID.value != ''){
    
        localStorage.setItem(inputID.value,JSON.stringify([`${inputID.value},${inputField.value},${inputApellido.value}`]))
        let data = JSON.parse(localStorage.getItem(inputID.value))

        data.forEach((e,i) => {
            let Names = e.split(',')
            let row = document.createElement('tr')
            let columnID = document.createElement('td')
            let columnName = document.createElement('td')
            let columnlastName = document.createElement('td')
            let editar = document.createElement('button')
            editar.setAttribute('class','btnBorrar')
            let borrar = document.createElement('button')
            borrar.setAttribute('class','btnBorrar')
            borrar.innerText='Borrar'
            editar.innerText='Editar'
            if(e != ''){
                
                lista.appendChild(row)

                columnID.innerText = Names[0]
                columnName.innerText = Names[1]
                columnlastName.innerText = Names[2].substring(-2)
                row.appendChild(columnID)
                row.appendChild(columnName)
                row.appendChild(columnlastName)
                
                borrar.addEventListener('click',e=>{
                    localStorage.removeItem(columnID.innerText)
                    clearData()
                    cargarTable()
                })
                
                editar.addEventListener('click',e=>{
                    document.getElementById('idTxt').value = columnID.innerText
                    document.getElementById('nameTxt').value = columnName.innerText
                    document.getElementById('lastTxt').value = columnlastName.innerText.substring(-2)
                    boton.innerText = 'Actualizar'
                    clearData()
                    cargarTable()
                })

                row.appendChild(borrar)
                row.appendChild(editar)
            }
            
        })
    }
    document.getElementById('idTxt').value = ''
    document.getElementById('nameTxt').value = ''
    document.getElementById('lastTxt').value = ''
}

function cargarTable(){
    let values = allStorage()
    clearData()
    console.log(values);
    let keys = Object.keys(localStorage)
        values.forEach((e,i)=>{
            let Names = e.split(',')
            let row = document.createElement('tr')
            let columnID = document.createElement('td')
            let columnName = document.createElement('td')
            let columnlastName = document.createElement('td')
            let editar = document.createElement('button')
            editar.setAttribute('class','btnBorrar')
            let borrar = document.createElement('button')
            borrar.setAttribute('class','btnBorrar')
            borrar.innerText='Borrar'
            editar.innerText='Editar'
            if(e != ''){

                lista.appendChild(row)

                columnID.innerText = Names[0].substring(2)
                console.log(columnID.innerText);
                columnName.innerText = Names[1]
                columnlastName.innerText = Names[2].substring(-2)
                row.appendChild(columnID)
                row.appendChild(columnName)
                row.appendChild(columnlastName)
                
                console.log(columnID);
                borrar.addEventListener('click',e=>{
                    localStorage.removeItem(columnID.innerText)
                    clearData()
                    cargarTable()
                })
                editar.addEventListener('click',e=>{
                document.getElementById('idTxt').value = columnID.innerText
                document.getElementById('nameTxt').value = columnName.innerText
                document.getElementById('lastTxt').value = columnlastName.innerText.substring(-2)
                boton.innerText = 'Actualizar'
                clearData()
                cargarTable()
                })

                row.appendChild(borrar)
                row.appendChild(editar)
            }
        })
}

function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}

function clearData()
{
    var list = document.getElementById('tbo')
    list.innerHTML = ""
}

