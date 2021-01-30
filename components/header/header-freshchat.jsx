import { Fragment } from "react";

const HeaderFreshChat = () => {
	return (
		<Fragment>
			{/* Freshchat CODE */}
			{/* <script dangerouslySetInnerHTML={{ __html: `<!-- FreshChat Code -->` }} />
			<script
				dangerouslySetInnerHTML={{
					__html: `function initFreshChat() {
						window.fcWidget.init({
						  token: "8d37d6b3-475f-479c-8b20-49a873bf94d2",
						  host: "https://wchat.freshchat.com"
						});
					  }
					  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);`,
				}}
			/>
			<script dangerouslySetInnerHTML={{ __html: `<!-- FreshChat End -->` }} /> */}
			{/* END FreshChat CODE */}

			{/* Do not use the script above!*/}
			{/* Use this one instead: /components/footer/footer.component.jsx -- bottom of the page */}
		</Fragment>
	);
};

export default HeaderFreshChat;
