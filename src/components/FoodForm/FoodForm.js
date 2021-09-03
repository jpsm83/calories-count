import React, { Component } from 'react';

export default class FoodForm extends Component {
  state = {
    food: {
      name: '',
      calories: '',
      image: '',
    },
  };

  hideForm(event){
    event.preventDefault();
    this.props.touggleForm();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewFood(this.state.food);
    this.setState({
      food: {
        name: '',
        calories: '',
        image: '',
      },
    });
    this.props.touggleForm();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      food: {
        ...this.state.food,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="calories">Calories: </label>
          <input
            type="number"
            name="calories"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            onChange={(e) => this.handleChange(e)}
          />

          <button type="submit">Create Food</button>
        </form>

        <button onClick={(e) => this.hideForm(e)}>Hide form</button>
      </div>
    );
  }
}
