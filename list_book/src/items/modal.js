import "./../css/modal.css"

function Modal({ active, setActive, inside }) {
    // this function need for off scroll with modal
    function toggleOverFlow(active) {

        const body = document.querySelector("body")

        if (active) {
            body.style.overflow = "hidden"
        } else {
            body.style.overflow = "visible"
        }
    }
    toggleOverFlow(active)


    return (
        <div className={active ? "modal__background active" : "modal__background"} onClick={() => setActive(false)}>
            <div className={active ? "modal__window active" : "modal__window"} onClick={e => e.stopPropagation()}>
                {inside}
            </div>
        </div>
    )
}


export default Modal;