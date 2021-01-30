const ActiveSnackbar = (id) => {
	var x = document.getElementById(id);
	x.className = "snackbar show";
	setTimeout(function() {
		x.className = x.className.replace("snackbar show", "snackbar");
	}, 3000);
};

export default ActiveSnackbar;
