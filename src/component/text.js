import React, {Component} from 'react';

function Textpage() {
    return(
        <div>

            <body className="textPage">
                <br></br>
                <form className="myForm">
                    <label>
                        First Name:
                        <input type="text"></input>
                    </label>
                    <br></br>
                    <label>
                        Last Name:
                        <input type="text"></input>
                    </label>

                    <p>Favorite Movie</p>
                    <input type="radio" ></input>
                    <label>Avengers</label><br></br>
                    <input type="radio" ></input>
                    <label>Dark Knight</label><br></br>
                    <input type="radio" ></input>
                    <label>Tenet</label><br></br>
                    <br></br>
                    <input type="submit" value="Done"></input>
                </form>
            </body>
        </div>
    )
}

export default Textpage;