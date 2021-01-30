const SimpleSnackbar = (props) => {
	return (
		<div id={props.identifier} className="snackbar">
			{props.children}
		</div>
	);
};

export default SimpleSnackbar;
