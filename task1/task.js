function workWithModal () {
    const modal = document.getElementById("modal_main");
    const modalClose = document.getElementById("modal_close");
    const modalButton = document.getElementById("modal_button");
    const modalSuccess = document.getElementById("modal_success");
    const close = document.getElementById("modal_close1")
    modalClose.onclick = () => {modal.className = 'modal';}
    modalButton.onclick = () => {
        modalSuccess.className = "modal modal_active";
        modal.className = 'modal';
        close.onclick = () => {
            modal.className = 'modal';
            modalSuccess.className= "modal";}
    }
}

workWithModal()


