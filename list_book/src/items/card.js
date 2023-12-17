import "./../css/card.css"
import ModalForDelete from "./modalForDelete";
import ButtonDelete from "./buttonDelete";

function Card({ aboutBook, setActive, modalInside }) {

    return (

        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{aboutBook.bookName}</h3>
                        <h2>{aboutBook.author}</h2>
                        <div className="buttons_container">
                            <button className="submit change_card" type="button">Change</button>
                            {/* <button className="submit delete_card" type="button" onClick={() => {
                                setActive(true); //////////////// остановился здесь!!!
                                modalInside(() => (<ModalForDelete setActive={setActive} book={book} />))
                            }}>Delete</button> */}
                        </div>

                        {/* <ButtonDelete setActive={setActive} modalInside={modalInside} book={aboutBook} /> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
