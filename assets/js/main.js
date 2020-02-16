var seeMore = document.getElementById('seeMore');
var text = document.getElementById('text');
var moreLess = document.getElementById('moreLess');

// 
function checkTextLength() {
    if(text.innerHTML.length > 253) {
        seeMore.style.display = "block"
        moreLess.style.display = "inline-block"
    }
}
checkTextLength()

seeMore.addEventListener('click', function(){
    text.classList.add('more__less');
    seeMore.style.display = "none"
})

moreLess.addEventListener('click', function(){
    text.classList.remove('more__less');
    seeMore.style.display = "block"
})