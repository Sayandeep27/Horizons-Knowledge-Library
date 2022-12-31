import React from "react";
import { useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => {
          setData(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Horizons Knowledge</h1>
          <br></br>
          <h2>-----A house without books is a body without soul-----</h2>
        </div>

        <div className="row2">
          <h2>Find your book</h2>

          <div className="search">
            <input
              type="text"
              placeholder="Type your book and press Enter"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={searchBook}
            />

            <button>Search</button>
          </div>
          <div className="container">
            {<Card book={bookData} key={bookData.id} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
