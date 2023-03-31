import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {
    let [searchWord, setSearchWord] = useState("");

    function handleApi(response) {
        console.log(response.data.meanings);
    }

    function searchHandle(event) {
        event.preventDefault();
        //alert(`The user is searching for "${searchWord}" definition`);
        let apiKey = "70bb37b84aobtb35a69f8896391b01b3";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchWord}&key=${apiKey}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleApi);
    }
    function changeHandle(event) {
        setSearchWord(event.target.value);
    }
    return (
        <section className="Dictionary">
            <form onSubmit={searchHandle}>
                <input 
                    type="search" 
                    placeholder="Search for any word here..." 
                    className="w-50"
                    onChange={changeHandle}></input>
            </form>
        </section>
    );
}