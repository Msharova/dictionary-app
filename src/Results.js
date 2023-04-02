import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    //console.log(props.results);
    if (props.results) {
        return (
            <section className="Results">
                <h2>{props.results.word}</h2>
                <p>{`/${props.results.phonetic}/`}</p>
                <h3>meanings</h3>
                {props.results.meanings.map(function(meaning,index){
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
            </section>
    );
    } else return null;
    
}