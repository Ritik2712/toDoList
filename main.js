function remove(el) {
    console.log('worked')
    if (el.classList.contains('btn')) {
        el.parentElement.parentElement.remove();
        console.log(el.parentElement)
        deleted.style.display = 'block'
        deleted.style.background = 'red'
        deleted.style.color = 'white'
        deleted.style.width = '200px'
        deleted.style.margin = '20px auto 20px auto'
        deleted.style.padding = '10px'
        deleted.style.textAlign = 'center'
        setTimeout(removed, 500)
    }

}
function cut(el) {
    var check = document.getElementsByClassName('check');
    if (el.classList.contains('check')) {
        if (el.checked == true) {
            var inner = el.parentElement;
            inner.classList.add('check')
            console.log(inner.innerHTML);
            var completed = document.getElementById('completed');
            completed.style.display = 'block'
            completed.style.background = 'red'
            completed.style.color = 'white'
            completed.style.width = '200px'
            completed.style.margin = '20px auto 20px auto'
            completed.style.padding = '10px'
            completed.style.textAlign = 'center'
            setTimeout(removed, 500)
        }
        if (el.checked == false) {
            var inner = el.parentElement;
            inner.classList.remove('check')
            readded.style.display = 'block'
            readded.style.background = 'red'
            readded.style.color = 'white'
            readded.style.width = '200px'
            readded.style.margin = '20px auto 20px auto'
            readded.style.padding = '10px'
            readded.style.textAlign = 'center'
            setTimeout(removed, 500)
        }
    }
}

var btn = document.getElementById('list');
btn.addEventListener('click', function (e) {
    remove(e.target)
    cut(e.target)
})
var added = document.getElementById('added');
var deleted = document.getElementById('deleted');
var completed = document.getElementById('completed');
var readded = document.getElementById('readded');
added.style.display = 'none';
deleted.style.display = 'none';
completed.style.display = 'none';
readded.style.display = 'none';

const li = document.getElementsByTagName('li');

const add = document.getElementById('add');
const text = document.getElementById('text');
var c = 0

add.addEventListener('click', (e) => {

    const ul = document.getElementById('list');
    const row = document.createElement('tr');
    if (text.value.length > 0) {
        var x = row.innerHTML = '<td> <input type="checkbox" name="" class="check"> ' + text.value + '</td><td> <button class="btn btn-danger pull-right">x</button> </td>'
        ul.appendChild(row);
        console.log(text.value.length)
        text.value = ''
        added.style.display = 'block'
        added.style.background = 'red'
        added.style.color = 'white'
        added.style.width = '200px'
        added.style.margin = '20px auto 20px auto'
        added.style.padding = '10px'
        added.style.textAlign = 'center'
        setTimeout(removed, 500)
    }

})

function removed() {
    added.style.display = 'none'
    completed.style.display = 'none'
    readded.style.display = 'none'
    deleted.style.display = 'none'
}








