import React from "react";

export default function Meaning(props) {
    //console.log(props);
    return (
        <section className="Meaning">
            <p>{props.meaning.definition}</p>
            <p>{props.meaning.example}</p>
        </section>
    );
}