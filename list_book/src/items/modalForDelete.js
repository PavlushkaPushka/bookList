import Context from "../context"
import { useContext } from "react"

function ModalForDelete({ setActive, book }) {
    const { removeBook } = useContext(Context)

    return (
        <div className="form__shell">
            <div class="form">
                <div class="title">Do you really want delete this book?</div>
                <div className="submit__container">
                    <button type="submit" class="submit add" onClick={() => { removeBook(book.id); setActive() }}>Yes</button>
                    <button type="reset" class="submit cancel" onClick={() => setActive()}>No</button>
                </div>
            </div >
        </div>


    )
}

export default ModalForDelete

