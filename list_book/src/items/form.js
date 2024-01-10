import { useState } from 'react'
import "./../css/modal.css"


function Form({ setActive, onCreate }) {

    const [value_1, setValue_1] = useState('')
    const [value_2, setValue_2] = useState('')
    function submitHandler(event) {

        event.preventDefault()
        console.log(value_2)
        if (value_1.trim() && value_2.trim()) {
            onCreate(value_1, value_2)
            setValue_1('')
            setValue_2('')
        }
        setActive(false)
    }

    return (

        <form className="form__shell" onSubmit={submitHandler}>
            <div class="form">
                <div class="title">Welcome!</div>
                <div class="subtitle">Let's add your book!</div>
                <div class="input-container ic1">
                    <input id="Book's_name" class="input" type="text" placeholder=" " value={value_1} onChange={event => setValue_1(event.target.value)} />
                    <label for="Book's_name" class="placeholder">Book's name</label>
                </div>
                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" " value={value_2} onChange={event => setValue_2(event.target.value)} />
                    <label for="lastname" class="placeholder">Author</label>
                </div>
                {/* <div class="input-container ic3">
                    <input id="lastname" class="input_file" type="file" placeholder=" "/>
                    <label for="input_file">Выберите файл</label>
                </div> */}
                <div className="submit__container">
                    <button type="submit" class="submit add">Add</button>
                    <button type="reset" class="submit cancel" onClick={() => setActive()}>Cancel</button>
                </div>

            </div>
        </form>


    )
}


export default Form