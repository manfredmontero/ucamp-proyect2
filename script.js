let inputField = document.getElementById('nameTxt')
let boton = document.getElementById('btnSubmit')
let data = JSON.parse(localStorage.getItem('nombres'))
localStorage.setItem('nombres',JSON.stringify(['JUAN']))
let nombresArray = data !== [] ? data : []
let nombre = ''
inputField.addEventListener('change', function () {
    nombre = inputField.value
})
let lista = document.getElementById('lista')
//let lista = document.createElement('ul')
const crearLista = () => {
   
}
crearLista()
//document.body.appendChild(lista)

function newFunction() {
    clearData()
    nombresArray.push(nombre)
    localStorage.setItem('nombres', JSON.stringify(nombresArray))
    data.forEach((e,i) => {
        let item = document.createElement('li')
        let borrar = document.createElement('button')
        borrar.innerText='Borrar'
        if(e != ''){
            item.innerText = e
            lista.appendChild(item)
            item.appendChild(borrar)
            borrar.addEventListener('click',e=>{
                nombresArray.splice(i,1)
                localStorage.setItem('nombres', JSON.stringify(nombresArray))
            })
        }
        
    })
}

function clearData(){
    var list = document.getElementById('lista')
    list.innerHTML = ""
}

