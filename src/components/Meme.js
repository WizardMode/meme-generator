import React from "react"
// import memesData from "../memesData.js"

function Meme() {

    // Challange: 
    // As soon ass the Meme component loads the first time,
    // make an API call to "https://api.imgflip.com/get_memes".
    //
    // When the data comes in, save just the memes array part
    // of that data to the "allMemes" state
    //
    // Think about if theree are any dependencies that, if they
    // change, you'd want to cause to re-run this function.
    //
    // Hint: for now, don't try to use an async/wait function.
    // Instead, use '.then()' blocks to resolve the promises
    // from using 'feth'. we'll learn why after this challange.

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // console.log(allMemes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </dvi>
            </div>
        </main>
    )
}

export default Meme