import "./../css/card.css"
import ModalForDelete from "./modalForDelete";

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
                            <button className="submit delete_card" type="button" onClick={() => {
                                setActive(true);
                                modalInside(() => (<ModalForDelete setActive={setActive} book={aboutBook} />))
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
