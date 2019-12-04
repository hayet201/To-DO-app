



function add() {
    let item = document.getElementById("input").value;
    let ul = document.getElementById("list");

    let li = document.createElement("li");
    let newtext = document.createTextNode(item)
    li.appendChild(newtext);
    ul.appendChild(li)

    let btn = document.createElement("button")
    let text = document.createTextNode("delete")
    btn.className = "delete"
    btn.appendChild(text)
    li.appendChild(btn)

    let btn2 = document.createElement("button")
    let txt = document.createTextNode("complete")
    btn2.className = "complete"
    btn2.appendChild(txt)
    li.appendChild(btn2)
    complete()
    supprimer()
}

function complete() {
    let b = document.getElementsByClassName("complete")
    console.log(b)
    for (let i =0;i< b.length; i++) {
        b[i].onclick = function () {
            let parent = this.parentElement

            b[i].innerHTML = "undo"
            parent.style.textDecoration = "line-through"
        }
    }

}
function supprimer() {
    let array = document.getElementsByClassName("delete")
    console.log(array)
    for (let i=0; i<array.length; i++) {
        array[i].onclick = function () {
            let  parent = this.parentElement

            parent.style.display = "none"
        }
    }

}
