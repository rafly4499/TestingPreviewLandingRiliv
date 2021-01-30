import React, { Fragment } from "react";

const HeaderHomepage = () => {
	return (
		<Fragment>
			{/* SEO START */}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<meta
				name="description"
				content="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
			/>
			<meta
				property="og:description"
				content="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
			/>
			{/* SEO END */}

			{/* HOTJAR START */}
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- Hotjar Start, Tracking Code for https://riliv.co/ akunnya siapa?-->`,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1161835,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- Hotjar END -->`,
				}}
			/>
			{/* HOTJAR END */}

			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- FACEBOOK PIXEL-->`,
				}}
			/>
			{/* FACEBOOK PIXEL */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
                !(function(f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function() {
                        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = "2.0";
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s);
                })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
                fbq("init", "2311182452544289");
                fbq("track", "PageView");
            `,
				}}
			/>
			<noscript
				dangerouslySetInnerHTML={{
					__html: `${(
						<img
							height="1"
							width="1"
							style="display:none"
							src="https://www.facebook.com/tr?id=2311182452544289&ev=PageView&noscript=1"
						/>
					)}`,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- FACEBOOK END-->`,
				}}
			/>
			{/* FACEBOOK PIXEL END */}

			{/* Freshchat */}
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- FRESHCHAT-->`,
				}}
			/>
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
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- FRESH CHAT END-->`,
				}}
			/>
			{/* END JIVOSITE */}
		</Fragment>
	);
};

export default HeaderHomepage;
