import React from 'react';
import './App.css';

// Components
import MyList from './Components/MyList/MyList';
import Recommendations from './Components/Recommendations/Recommendations';
import BottomList from './Components/BottomList/BottomList';

/**
 * The App component is our main component and container for all other components. It is a statefull component. 
 */

class App extends React.Component {

  constructor(props){
    super(props);

    // Creating state object with myList and recommendations arrays. 
    this.state = {
      myList: [
        {
          title: 'Futurama',
          id: 1,
          img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
          title: 'The Interview',
          id: 2,
          img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
          title: 'Gilmore Girls',
          id: 3,
          img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
      ],
      recommendations: [
        {
          title: 'Family Guy',
          id: 4,
          img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
          title: 'The Croods',
          id: 5,
          img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
          title: 'Friends',
          id: 6,
          img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
      ]
    }

    // Binding functions to App component.
    this.removeMovie = this.removeMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  /**
   * Function that removes movie from myList.
   * @params object 
   */

  removeMovie(movie) {
    // Filter myList array and will return items not equal to the movie to be removed from myList array. 
    const newArray = this.state.myList.filter(m => m.id !== movie.id);
    // Add movie to recommendations array. 
    const addedToArrayNewMovie = this.state.recommendations;
    addedToArrayNewMovie.push(movie);
    // setState to render updated myList and recommendations arrays. 
    this.setState({ myList: newArray, recommendations: addedToArrayNewMovie });
  }

  /**
   * Function that adds movie to myList.
   * @params number
   */

  addMovie(movie) {
    // Filter recommendations array and will return items not equal to the movie to be added to myList array. 
    const newArray = this.state.recommendations.filter(m => m.id !== movie.id);
    // Add movie to myList array. 
    const addedToArrayNewMovie = this.state.myList;
    addedToArrayNewMovie.push(movie);
    // setState to render updated recommendations and myList arrays. 
    this.setState({ recommendations: newArray, myList: addedToArrayNewMovie });
  }

  render() {
    return (
      <div className="App">
        <div className="MyList">
          <h1>MyList</h1>
          {this.state.myList.length > 0 && <MyList myList={this.state.myList} removeMovie={this.removeMovie} />}
        </div>
        <div className="Recommendations">
          <h1>Recommendations</h1>
          {this.state.recommendations.length > 0 && <Recommendations recommendations={this.state.recommendations} addMovie={this.addMovie} />}
        </div>
        {this.state.myList.length > 0 && <BottomList myList={this.state.myList} />}
      </div>
    );
  }
}

export default App;
