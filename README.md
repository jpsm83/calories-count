## **"Calories Count"**

### Description

Personal project done during my bootcamp where you can count the calories from diferente food. I used a file json as basic data base to have some default food and start the project. You can choose the food from the list or add your own food with the calories that it contains. Choose the food, its quantity and the app will tell you the total of calories you been eating that day.

### Technologies

- Bulma
- Javascript
- React

### MVP (Minimum Viable Produc)

App, create and read foods and its calories. Choose the quantity of each food and the app will calculate the amount of calories you been consumming in that day. UI create with Bulma.

### User Stories

- **food card** - user can see the food card with photo, name and calories.
- **choose quantity** - chose the amount of each food you been eating that day.
- **search food** - use the search bar to find especifc food by name.
- **create food card** - create your own food card and its details (name, photo and calories).
- **todays food** - it will calculate all the calories of that day base on your food choices.

### Client / Frontend

### React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                                         |
| ------------------------- | -------------------- | --------------------------- | ---------------------------------------------------------------------------------|
| `/`                       | SplashPage (unique)  | public `<Route>`            | Home page, create & choose quantity of food, search bar, get th total of calories consumed in that day             |

### Components

- SplashPage (Home - Unique Page)

### Data Structure
```
├── public
│   ├── _index.html
├── src
│   ├── components
│   │   ├── FoodBox
│   │   │   ├── FoodBox.js
│   │   ├── FoodForm
│   │   │   ├── FoodForm.js
│   │   ├── Search
│   │   │   ├── Search.js
│   │   ├── TodaysFood
│   │   │   ├── TodaysFood.js
│   ├── app.css
│   ├── app.js
│   ├── foods.json
│   ├── index.css
│   ├── index.js
├── gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Git
* [GitHub] ( https://github.com/jpsm83/calories-count )