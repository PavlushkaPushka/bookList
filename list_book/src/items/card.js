import "./../css/card.css"
import ModalForDelete from "./modalForDelete";
import { useState } from "react"


function Card({ aboutBook, setActive, modalInside }) {
    
    const [buttonChange, setButtonChange] = useState(false)
    const [value_1, setValue_1] = useState(aboutBook.bookName)
    const [value_2, setValue_2] = useState(aboutBook.author)
    // console.log(aboutBook)
    return (

        <div className="container">
            <div className="card">
                <div className="box">
                    {buttonChange ? <ButtonChangeNotActive aboutBook={aboutBook} setActive={setActive} modalInside={modalInside}/> : <ButtonChangeActive aboutBook={aboutBook} setActive={setActive} modalInside={modalInside}/>}
                </div>
            </div>
        </div>

    );



    function ButtonChangeActive ({ aboutBook, setActive, modalInside }) {

        return (
            <div className="content">
                <div className="attributes">
                    <h2>{aboutBook.author}</h2>
                    <h3>{aboutBook.bookName}</h3>
                </div>
                    <div className="buttons_container">
                        <button className="submit change_card" type="button" onClick={() => {
                            setButtonChange(true);
                        }}>change</button>
                        <button className="submit delete_card" type="button" onClick={() => {
                            setActive(true);
                            modalInside(() => (<ModalForDelete setActive={setActive} book={aboutBook} />))
                        }}>Delete</button>
                </div>
        </div>
        );
    }
    
    function ButtonChangeNotActive ({ aboutBook, setActive, modalInside }) {
        return (
            <div className="content">
                <div class="input-containerr ic22">
                    <input id="Book's_name" class="input_in_card author" type="text" placeholder=" " value={value_2} />
                    {/* <label for="Book's_name" class="placeholder">Author</label> */}
                </div>
                <div class="input-containerr ic11">
                    <input id="lastname" class="input_in_card booksName" type="text" placeholder=" " value={value_1} />
                    {/* <label for="lastname" class="placeholder">Book's name</label> */}
                </div>
                    <div className="buttons_container">
                    <button className="submit save_changes_card" type="button">Save</button>
                        <button className="submit delete_card" type="button" onClick={() => {
                            setButtonChange(false);
                        }}>Cancel</button>
                    </div>
            </div>
        );
    }
}



export default Card;
