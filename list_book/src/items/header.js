import "./../css/header.css"

import ButtonCreate from "./buttonCreate";

function Info({ setActive, modalInside, setBook, books }) {
    return (
        <div className="header">
            <div className="info">
                <p>On this page you can add some book</p>
            </div>
            <div className="button">
                <ButtonCreate setActive={setActive} modalInside={modalInside} setBook={setBook} books={books} />
            </div>

        </div >
    );
}

export default Info;
