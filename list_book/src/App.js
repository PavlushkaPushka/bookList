import Context from "./context";
import CardList from "./components/CardList";
import Header from "./items/header";
import "./styles.css"
import Modal from "./items/modal";
import { useState, useEffect } from "react"



function App() {

  const [modalActive, setModalActive] = useState(false)
  const [inside, setModalInside] = useState(null)
  const [books, setBook] = useState([
    // {
    //   author: "Jorj Martin",
    //   bookName: "A song of ice and fire",
    //   id: Date.now()
    // }

    // just to check
  ])

  console.log(books)


  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books]);



  function removeBook(id) {
    setBook(books.filter(book => book.id !== id))
  }

  return (
    <Context.Provider value={{ removeBook }}>
      <div className="some">
        hello world
        <Header
          setActive={setModalActive}
          modalInside={setModalInside}
          setBook={setBook}
          books={books} />


        {books.length > 0 ? <CardList books={books} active={modalActive} setActive={setModalActive} modalInside={setModalInside} /> : <div className="not__found">"Books not found"</div>}


        <Modal
          active={modalActive}
          setActive={setModalActive}
          inside={inside} />

      </div>
    </Context.Provider>


  );
}

export default App;
