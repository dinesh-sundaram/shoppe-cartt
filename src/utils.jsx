const formatCurrency = (amount) => {
	// console.log("format Currency", typeof(amount));
	// amount = typeof amount == "string" ? parseFloat(amount) : amount;
	return "$" + Number(parseFloat(amount).toFixed(2)).toLocaleString() + " ";
};
export default formatCurrency;
