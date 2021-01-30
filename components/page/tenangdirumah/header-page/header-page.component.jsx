import React, { Fragment } from "react";

const HeaderTenangPage = () => {
	return (
		<Fragment>
			<meta
				name="description"
				content="Aplikasi curhat no 1. Konseling dipandu psikolog. Jadwal fleksibel, bisa malam hari. Konsultasi via chat atau telfon."
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content="Riliv - Curhat Online dengan Psikolog Profesional"
			/>
			<meta
				property="og:description"
				content="Aplikasi curhat no 1. Konseling dipandu psikolog. Jadwal fleksibel, bisa malam hari. Konsultasi via chat atau telfon."
			/>

			{/* HOTJAR START */}
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- Hotjar Tracking Code START -->`,
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
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- Hotjar Tracking Code END -->`,
				}}
			/>
			{/* HOTJAR END */}

			{/* FACEBOOK PIXEL START */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel START -->` }}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '277568695993486');
        fbq('track', 'PageView');`,
				}}
			/>
			<noscript>
				<img
					height="1"
					width="1"
					style={{ display: "none" }}
					src="https://www.facebook.com/tr?id=277568695993486&ev=PageView&noscript=1"
				/>
			</noscript>
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel END -->` }}
			/>
			{/* FACEBOOK PIXEL END */}

			{/* FACEBOOK PIXEL 2 START */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel 2 START -->` }}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '2311182452544289');
                    fbq('track', 'PageView');`,
				}}
			/>
			<noscript>
				<img
					height="1"
					width="1"
					style={{ display: "none" }}
					src="https://www.facebook.com/tr?id=2311182452544289&ev=PageView&noscript=1"
				/>
			</noscript>
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel 2 END -->` }}
			/>
			{/* FACEBOOK PIXEL 2 END */}

			{/* FRESHCHAT START */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- FRESHCHAT START -->` }}
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
			<script dangerouslySetInnerHTML={{ __html: `<!-- FRESHCHAT END -->` }} />
			{/* JIVO END */}
		</Fragment>
	);
};

export default HeaderTenangPage;
