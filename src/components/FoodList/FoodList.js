import React, { Component } from 'react';
import foodList from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';
import FoodForm from '../FoodForm/FoodForm';
import Search from '../Search/Search';
import TodaysFood from '../TodaysFood/TodaysFood';

export default class FoodList extends Component {
  state = {
    foods: foodList,
    showForm: false,
    todaysFood: [],
    filteredFoods: foodList,
  };

  displayFood() {
    this.state.foods.map((food) => {
      // return <FoodBox {...food} key={`${food.name}${food.calories}`} />;
      return (
        <FoodBox
          {...food}
          totalTodaysFood={this.totalTodaysFood}
          key={new Date().getTime() + 1}
        />
      );
    });
  }

  addNewFood(food) {
    const foodCopyArr = this.state.foods;
    foodCopyArr.unshift(food);
    this.setState({
      foods: foodCopyArr,
    });
  }

  handleSearchFood(event) {
    let searchedFood = event.target.value;
    const { foods } = this.state;
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase());
    });
    this.setState({
      filteredFoods: filteredFoods,
    });
  }

  totalTodaysFood = (event, quantity, food) => {
    event.preventDefault();

    let foodObj = {
      name: food.name,
      calories: food.calories,
      quantity: quantity,
    };

    this.setState({
      todaysFood: [foodObj, ...this.state.todaysFood],
    });
  };

  touggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    return (
      <div>
        <h1 align="center" title-color="primary" className="title is-1">
          IronNutricion
        </h1>
        <Search handleSearchFood={(e) => this.handleSearchFood(e)} />
        <div className="columns">
          <div className="column">
            {this.state.showForm ? (
              <FoodForm
                addNewFood={(food) => this.addNewFood(food)}
                touggleForm={() => this.touggleForm()}
              />
            ) : (
              <button
                onClick={() => this.touggleForm()}
                className="button is-danger"
              >
                Add Your New food
              </button>
            )}
            {this.state.filteredFoods.map((singleFood, i) => {
              return (
                <FoodBox
                  food={singleFood}
                  totalTodaysFood={this.totalTodaysFood}
                  key={i}
                />
              );
            })}
          </div>
          <div className="column">
            <TodaysFood foods={this.state.todaysFood} />
          </div>
        </div>
        {this.displayFood()}
      </div>
    );
  }
}
