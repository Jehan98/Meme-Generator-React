import React from "react";

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randImg:"http://i.imgflip.com/1bij.jpg"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => this.setState({
            allMemeImgs: response.data.memes
        }))
    }

    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randImg: randImg
        })
    }

    render(){
        return (
            <div className="form-div">
                <form onSubmit={this.handleSubmit}>
                        <input typr="text" 
                            name="topText" 
                            value={this.state.topText} 
                            placeholder="Enter Top Text" 
                            onChange={this.handleChange} 
                        />
                    <br/>
                    <br/>
                        <input typr="text" 
                            name="bottomText" 
                            value={this.state.bottomText} 
                            placeholder="Enter Bottom Text" 
                            onChange={this.handleChange} 
                        />
                    <br/>
                    <br/>
                    <input type="submit" name="submit" value="Gen"/>
                </form>
                <div className="meme-pic">
                    <br/>
                    <h2 className="text-center">{this.state.topText}</h2>
                    <img src={this.state.randImg} className="img-memepic" alt="memepic" />
                    <h2 className="text-center">{this.state.bottomText}</h2>
                </div>
            </div>
        )
        
    }
} 

export default MemeGenerator