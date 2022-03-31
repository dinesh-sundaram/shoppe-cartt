import axios from "axios";
import {
	FETCH_PRODUCTS,
	FILTER_PRODUCTS_BY_SIZE,
	ORDER_PRODUCTS_BY_PRICE,
} from "./../types";

export const fetchProducts = () => async (dispatch) => {
	// const res = await fetch("/api/products");
	// const res = await fetch("http://127.0.0.1:8000/cart/products/");

	const res = await axios.get("http://127.0.0.1:8000/cart/products/");

	// const data = await res.json();
	// const data = res.data;
	// console.log("response", data);
	dispatch({
		type: FETCH_PRODUCTS,
		payload: res.data,
	});
};

export const filterProducts = (products, pack) => (dispatch) => {
	dispatch({
		type: FILTER_PRODUCTS_BY_SIZE,
		payload: {
			pack: pack,
			items:
				pack === ""
					? products
					: products.filter((x) => x.availablePacks.indexOf(pack) >= 0),
		},
	});
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
	const sortedProducts = filteredProducts.slice();
	if (sort === "") {
		sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
	} else {
		sortedProducts.sort((a, b) =>
			sort === "lowest"
				? a.price < b.price
					? 1
					: -1
				: a.price > b.price
				? 1
				: -1
		);
	}

	dispatch({
		type: ORDER_PRODUCTS_BY_PRICE,
		payload: {
			sort: sort,
			items: sortedProducts,
		},
	});
};
