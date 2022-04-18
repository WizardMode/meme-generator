import React from "react"
import memesData from "../memesData.js"

// Challange:
// 1. Set up the text inputs to save to
//    the 'topText' and 'bottomText' state variables.
// 2. Replace the hard-coded text on the image with 
//   the text being saved to the state.

function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    className="form-input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                 />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get new meme image 🖼 
                </button>
                <dvi className="meme">
                <img className="meme-image" src={meme.randomImage} />
                {/*<h2 className="meme-text top">One does not simply</h2>*/}
                {/*<h2 className="meme-text bottom">Walk into Mordor</h2>*/}
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </dvi>
            </div>
        </main>
    )
}

export default Meme