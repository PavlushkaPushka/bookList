import "./../css/card.css"
import ButtonDelete from "./buttonDelete";

function Card({ aboutBook, setActive, modalInside }) {

    return (

        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h3>{aboutBook.bookName}</h3>
                        <h2>{aboutBook.author}</h2>
                        <ButtonDelete setActive={setActive} modalInside={modalInside} book={aboutBook} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
