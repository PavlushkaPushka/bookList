import "./../css/header.css"
import Form from "./form"
import ButtonCreate from "./buttonCreate";

function Info({ setActive, modalInside, setBook, books }) {

    function addBook(bookName, author) {
        setBook(
            books.concat({
                bookName,
                id: Date.now(),
                author
            })
        )
    }

    // onClick={() => { setActive(true); modalInside(() => (<Form setActive={setActive} onCreate={addBook} setBook={setBook} books={books} />}
    // onClick={() => { setActive(true); modalInside(() => (<Form setActive={setActive} onCreate={addBook} setBook={setBook} books={books} />)) }
    return (
        <div className="header">
            <div className="info">
                <p>On this page you can</p>
            </div>
            <div className="button">
                <button className="submit addBook" type="button" onClick={() => { setActive(true); modalInside(() => (<Form setActive={setActive} onCreate={addBook} setBook={setBook} books={books} />)) }}>add a new book</button>
                {/* <ButtonCreate setActive={setActive} modalInside={modalInside} setBook={setBook} books={books} /> */}
            </div>

        </div >
    );
}

export default Info;
