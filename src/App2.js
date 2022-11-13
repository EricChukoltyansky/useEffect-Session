import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: '', categories: false, errorMessage: '' };
  }

  async componentDidMount() {
    let data;
    try {
      const response = await fetch(
        'https://api.chucknorris.io/jokes/categories'
      );
      data = await response.json();
      console.log(data);
      if (data.status === 404) {
        throw new Error();
      }

      this.setState({ categories: data });
    } catch (e) {
      console.log(e);

      this.setState({ errorMessage: data.error });
    }
  }

  handleClick = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    this.setState({ joke: data.value });
  };
  handleCategory = async (category) => {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    this.setState({ joke: data.value });
  };
  render() {
    const renderCategories = () => {
      return this.state.categories.map((category) => {
        return (
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => this.handleCategory(category)}
          >
            {category}
          </div>
        );
      });
    };

    return (
      <div>
        <h1>Chuck Norris Jokes</h1>
        <button onClick={this.handleClick}>Random Joke</button>
        <h2>Categories</h2>
        {this.state.categories && renderCategories()}
        <div>{this.state.joke}</div>
      </div>
    );
  }
}

export default App;
