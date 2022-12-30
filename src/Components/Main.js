import React from 'react';
import { useState } from 'react';
import Card from "./Card";
import axios from "axios";

function Main() {


    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (event) => {

        if (event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then((res) => {
                    setData(res.data.items);
                }).catch((err) => {
                    console.log(err);
                })

        }

    }




    return (
        <>

            <div className='header'>

                <div className='row1'>

                    <h1>Horizons Knowledge</h1>
                    <br>
                    </br>
                    <h2>-----A house without books is a body without soul-----</h2>

                </div>


                <div className='row2'>

                    <h2>Find your book</h2>

                    <div className='search'>

                        <input
                            type="text"
                            placeholder='Type your book and press Enter'
                            value={search}
                            onChange={(e) => {

                                setSearch(e.target.value);

                            }}

                            onKeyPress={searchBook}

                        />

                        <button><i className='fas fa-search'></i> </button>




                    </div>



                    <div className='contacts'>

                        <h2>Contact Me</h2>

                        <div className='ids'>

                            <a href='https://www.linkedin.com/in/sayandeep-sarkar-530688201/' target="_blank">Linked In</a>
                            <a href='https://github.com/Sayandeep27' target="_blank">Github</a>
                            <a href='https://www.instagram.com/sayandeep_19_2002/' target="_blank">Instagram</a>


                        </div>



                    </div>




                </div>







            </div>




            <div className='container'>

                {
                    <Card book={bookData} />
                }

            </div>






        </>
    )
}

export default Main