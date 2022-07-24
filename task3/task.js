function clickFound() {
    document.onclick = function(e) {
        let clickClass = e.target.className;
        clickDefine(clickClass)
    }
}

function clickDefine (object) {
    let pictIndex = 0
    const pictures = Array.from(document.getElementsByClassName("slider__items"))
    let pict = pictures[0].children[pictIndex]
    if (object == 'slider__arrow slider__arrow_prev'){ console.log('prev')
    
    console.log(pict).className.includes ('slider__item')
}
    if (object == 'slider__arrow slider__arrow_next'){ console.log('next')}
    pictures[0].children[pictIndex].className.includes( 'hole_has-mole' )
  

}

clickFound()