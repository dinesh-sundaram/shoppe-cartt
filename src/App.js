// setting up feature 1
import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Products from "./components/Products";
// import data from "./data.json";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
	constructor() {
		super();
		this.state = {
			cartItems: localStorage.getItem("cartItems")
				? JSON.parse(localStorage.getItem("cartItems"))
				: [],
		};
	}

	// createOrder = (order) => {
	// 	alert("you have " + order.name);
	// };

	removeFromCart = (product) => {
		const cartItems = this.state.cartItems.slice();
		this.setState({
			cartItems: cartItems.filter((item) => item.id !== product.id),
		});
		localStorage.setItem(
			"cartItems",
			JSON.stringify(cartItems.filter((item) => item.id !== product.id))
		);
	};

	addToCart = (product) => {
		const cartItems = this.state.cartItems.slice();
		let alreadyInCart = false;

		cartItems.forEach((item) => {
			if (item.id === product.id) {
				item.count++;
				alreadyInCart = true;
			}
		});
		if (!alreadyInCart) {
			cartItems.push({ ...product, count: 1 });
		}
		this.setState({ cartItems });
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	// filterProducts = (event) => {
	// 	// console.log(event.target.value);
	// 	if (event.target.value === "") {
	// 		this.setState({ size: event.target.value, products: data.products });
	// 	} else {
	// 		this.setState({
	// 			size: event.target.value,
	// 			products: data.products.filter(
	// 				(product) => product.availablePacks.indexOf(event.target.value) >= 0
	// 			),
	// 		});
	// 	}
	// };

	render() {
		return (
			<Provider store={store}>
				<div className="grid-container">
					<header>
						<a href="/">React Shopping Cart</a>
					</header>
					<main>
						<div className="content">
							<div className="main">
								<Filter />
								<Products addToCart={this.addToCart}></Products>
							</div>
							<div className="sidebar">
								<Cart
									cartItems={this.state.cartItems}
									removeFromCart={this.removeFromCart}
									createOrder={this.createOrder}
								/>
							</div>
						</div>
					</main>
					<footer>
						<div>All rights reserved. </div>
						<div className="develop">
							Developed by : Dinesh Shanmugha Sundaram
						</div>
					</footer>
				</div>
			</Provider>
		);
	}
}

export default App;
