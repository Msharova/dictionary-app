import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {
    let [searchWord, setSearchWord] = useState("");

    function searchHandle(event) {
        event.preventDefault();
        alert(`The user is searching for "${searchWord}" definition`);
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