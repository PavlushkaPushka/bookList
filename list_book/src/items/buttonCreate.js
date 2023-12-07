import "./../css/buttonCreate.css"
import Form from "./form"

function ButtonCreate({ setActive, modalInside, setBook, books }) {

    function addBook(bookName, author) {
        setBook(
            books.concat({
                bookName,
                id: Date.now(),
                author
            })
        )
    }

    return (
        <a href="/#" 
        onClick={() => { setActive(true); modalInside(() => (<Form setActive={setActive} onCreate={addBook} setBook={setBook} books={books} />)) }}
        >Add a new book</a>
    );
}

export default ButtonCreate;
