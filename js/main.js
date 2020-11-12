let output = document.getElementById('output')
let input = document.getElementById('input')
document.getElementById('input').oninput = copySecondArea

function copySecondArea() {
    let text = input.value
    output.innerText = text
}
function textThrough(elem){
    output.classList.remove('text-underline')
    output.classList.toggle('text-through')
    document.querySelectorAll('.text-decor')[1].classList.remove('active')
    elem.classList.toggle('active')
}
function textUnder(elem){
    output.classList.remove('text-through')
    output.classList.toggle('text-underline')
    document.querySelectorAll('.text-decor')[0].classList.remove('active')
    elem.classList.toggle('active')

}

function textCoursive(elem){
    output.classList.toggle('coursive')
    elem.classList.toggle('active')
}
function textBold(elem){
    output.classList.toggle('bold')
    elem.classList.toggle('active')
}
function textCenter(elem){
    output.style.textAlign = "center"
    document.querySelectorAll('.align').forEach((btnAlign) =>{
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}
function textRight(elem){
    output.style.textAlign = "right"
    document.querySelectorAll('.align').forEach((btnAlign) =>{
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}
function textLeft(elem){
    output.style.textAlign = "left"
    document.querySelectorAll('.align').forEach((btnAlign) =>{
        btnAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}
function textBlue(elem){
    let colors = ['text-success', 'text-danger','text-warning']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((btnColor) =>{
        if(elem !== btnColor ){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textRed(elem){
    let colors = ['text-success', 'text-primary','text-warning']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((btnColor) =>{
        if(elem !== btnColor ){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textGreen(elem){
    let colors = ['text-danger', 'text-primary','text-warning']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((btnColor) =>{
        if(elem !== btnColor ){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}
function textYellow(elem){
    let colors = ['text-danger','text-primary', 'text-success']
    colors.forEach((c) => output.classList.remove(c))
    output.classList.toggle('text-warning')
    document.querySelectorAll('.color').forEach((btnColor) =>{
        if(elem !== btnColor ){
            btnColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}


