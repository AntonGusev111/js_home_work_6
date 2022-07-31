function clickFound() {
    document.onclick = function(e) {
        let clickClass = e.target.className;
        clickDefine(clickClass)
    }
}

function clickDefine (object) {
    const pictures = Array.from(document.getElementsByClassName("slider__items")[0].children)
    let pictIndex = pictures.findIndex(callback)
    pictures[pictIndex].className='slider__item'
    if (object == 'slider__arrow slider__arrow_prev'){ 
        pictIndex = pictIndex > 0 ? pictIndex -= 1 : pictIndex = pictures.length-1
    }
    if (object == 'slider__arrow slider__arrow_next'){ 
        pictIndex = pictIndex < pictures.length-1 ? pictIndex += 1 : pictIndex = 0
    }   
    pictures[pictIndex].className='slider__item slider__item_active' 
}

function callback(item) {
    if (item.className == 'slider__item slider__item_active') {
        return true
    }

}

//.includes
clickFound()