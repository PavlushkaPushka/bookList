import Card from "../items/card";
import "./../css/cardList.css"

function CardList({ books, active, setActive, modalInside }) {
    return (

        <div className="list" >
            {
                books.map((elem) => {
                    return <Card aboutBook={elem} setActive={setActive} modalInside={modalInside} key={elem.id} />
                })
            }
        </div >




    );
}

export default CardList;
