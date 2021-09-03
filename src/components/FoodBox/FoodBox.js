import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleQuantity = (event) => {
    if(this.state.quantity > 0){
      this.setState({
        quantity: event.target.value
      });
    } else {
      this.setState({
        quantity: event.target.value = 1
      });
    }
  };

  render() {
    const { food, totalTodaysFood } = this.props;
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={`${food.image}`} alt={`${food.name}`} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="quantity"
                    onChange={(event) => {
                      this.handleQuantity(event);
                    }}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={(event) => {
                      totalTodaysFood(event, this.state.quantity, food);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
