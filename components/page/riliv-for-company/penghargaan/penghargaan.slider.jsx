import React, {Component} from "react";
import Slider from "react-slick";

const RightArrow = {
	border: "solid #b9b9b9",
	position: "absolute",
	top: "50%",
	right: "-20px",
	borderWidth: "0 4px 4px 0",
	padding: "5px",
	height: "23px",
	width: "23px",
	transform: "rotate(-45deg)",
	cursor: "pointer"
};

const LeftArrow = {
	border: "solid #b9b9b9",
	position: "absolute",
	top: "50%",
	left: "-20px",
	borderWidth: "0 4px 4px 0",
	padding: "5px",
	height: "23px",
	width: "23px",
	transform: "rotate(135deg)",
	cursor: "pointer"
};

function SampleNextArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className="d-lg-inline-block d-none"
			style={{...RightArrow, WebkitTransform: "rotate(-45deg)"}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className="d-lg-inline-block d-none"
			style={{...LeftArrow, WebkitTransform: "rotate(135deg)"}}
			onClick={onClick}
		/>
	);
}

export default class CustomArrows extends Component {
	constructor(props) {
		super(props);
		this.state = {width: 0, height: 0};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: this.state.width > 763 ? this.props.ProductToShow : 1,
			slidesToScroll: 1,
			arrows: this.props.withArrow,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
		};
		return (
			<div>
				<Slider {...settings}>{this.props.children}</Slider>
			</div>
		);
	}
}
