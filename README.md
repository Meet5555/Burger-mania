# Burger Mania

Welcome to **Burger Mania** - the ultimate burger customization app! With Burger Mania, users place orders, and manage their order history with ease.
This is basic demonstration of CRUD operation in the React Application.

## Features

- **Ingredient Customization**: Customize your burger with various ingredients such as cheese, patties, and salad. Adjust quantities within specified minimum and maximum limits.

- **Order Placement**: Easily place orders with your personalized burger recipes.

- **Order Management**: View your order history, cancel existing orders, and update orders by modifying ingredient quantities.

- **Theme**: easily change between light and dark theme using switch in navbar

## Technologies Used
- **Vite**: A fast and opinionated development environment for building modern web applications.

- **React**: A powerful JavaScript library for building user interfaces.

- **React Router DOM**: Declarative routing for seamless navigation within the app.

- **Redux**: A predictable state container for JavaScript apps.

- **Tailwind CSS**: Craft stylish and responsive interfaces effortlessly.

- **React Toastify**: Enhance user experience with toast notifications.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/burger-mania.git
   ```

2. Navigate to the project directory:
   ```bash
   cd burger-mania
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Burger Mania experience:

   ```bash
   npm run dev
   ```

- Access the app at http://localhost:8000

## Usage

1. Open Burger Mania in your web browser.

2. Customize your burger on the Recipe page by adjusting ingredient quantities within the specified limits.

3. Place an order with your unique recipe.

4. Manage your order history on the Orders page.

5. Cancel or update existing orders by modifying ingredient quantities.

## Data Storage

Burger Mania leverages local storage for order data. The order schema is formatted as follows:

```json
[
  {"id": 1, "Cheese": 3, "Patties": 1, "Salad": 2},
  {"id": 2, "Cheese": 3, "Patties": 2, "Salad": 1},
  {"id": 3, "Cheese": 1, "Patties": 1, "Salad": 1}
]
```

## Dependencies

Burger Mania relies on the following technologies and libraries:

- **React Toastify**: A toast notification library for React applications. [Documentation](https://github.com/fkhadra/react-toastify)

- **React Router DOM**: Declarative routing for React applications. [Documentation](https://reactrouter.com/web/guides/quick-start)

- **Tailwind CSS**: A utility-first CSS framework for building responsive and stylish interfaces. [Documentation](https://tailwindcss.com/docs)

- **Redux**: A predictable state container for JavaScript apps. [Documentation](https://redux.js.org/)

- **react-redux**: Official React bindings for Redux. [Documentation](https://react-redux.js.org/)

- **Material UI**: Open-source React component library that implements Google's Material Design. [Documentation](https://mui.com/material-ui/getting-started/)

## Contributing

Feel free to contribute to Burger Mania by opening issues or submitting pull requests.
