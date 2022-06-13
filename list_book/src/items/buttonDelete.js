import "./../css/buttonDelete.css"
import ModalForDelete from "./modalForDelete";


function ButtonDelete({ setActive, modalInside, book }) {
    return (
        <a href="/#" onClick={() => {
            setActive(true);
            modalInside(() => (<ModalForDelete setActive={setActive} book={book} />))
        }}>Delete</a>
    );
}

export default ButtonDelete;
