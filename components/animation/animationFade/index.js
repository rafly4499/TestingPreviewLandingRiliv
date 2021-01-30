import { Fragment } from "react";
import Fade from "react-reveal/Fade";

const AnimationFade = (props) => {
	return (
		<div className={`${props.selected === props.identifier ? "" : "d-none"}`}>
			<Fade when={props.selected === props.identifier} delay={0} duration={800}>
				{props.selected === props.identifier ? (
					<Fragment>{props.children}</Fragment>
				) : (
					<div className="d-none"></div>
				)}
			</Fade>
		</div>
	);
};

export default AnimationFade;
