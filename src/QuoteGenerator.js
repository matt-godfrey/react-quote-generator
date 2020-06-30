import React from 'react'
import './App.css'

class QuoteGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            quoteData: [],
            quote: 'An unexamined life is not worth living',
            author: 'Socrates'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
       fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                quoteData: data.quotes
            })
        })
    }

    handleClick() {
        
            let randomNum = Math.floor(Math.random() * this.state.quoteData.length)
            let randomItem = this.state.quoteData[randomNum]
            console.log(randomItem)

            this.setState({
                quote: randomItem.quote,
                author: randomItem.author
            })
        
        
    }

    render() {
        return (
            <div id="quote-box">
                
                <div id="text-and-author">
                <i id="quote-icon" className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                    <p id="text">{this.state.quote}</p>
                    <p id="author">- {this.state.author}</p>
                </div>
                <div className="buttons">
                 <a 
                 href="twitter.com/intent/tweet" 
                 target="_blank" 
                 id="tweet-quote">
                <i className="fa fa-twitter-square" aria-hidden="true">
                    
                </i>
                </a>
                <a 
                target="_blank" 
                id="facebook" 
                href="http://facebook.com">
                <i 
                className="fa fa-facebook-square" 
                aria-hidden="true">

                </i>
                </a>
                <button
                onClick={this.handleClick} 
                id="new-quote" 
                type ="submit">New Quote
                </button>
                </div>
            </div>
        )
    }
}

export default QuoteGenerator