import { Fragment } from "react";

const HeaderGTMandAnalytics = () => {
	return (
		<Fragment>
			{/* GOOGLE TAG MANAGER START */}
			<script
				dangerouslySetInnerHTML={{
					__html: `<!-- Google Tag Manager START -->`,
				}}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TZ2RJDP');`,
				}}
			/>
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-TZ2RJDP"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>

			{/* GOOGLE ANALYTICS START */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Google Analytics START -->` }}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `(function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-65518022-7', 'auto');
        ga('send', 'pageview');
        ga('send', 'event');`,
				}}
			/>

			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Google Analytics END -->` }}
			/>
			{/* GOOGLE ANALYTICS END */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Google Tag Manager END -->` }}
			/>
			{/* GOOGLE TAG MANAGER END */}
		</Fragment>
	);
};

export default HeaderGTMandAnalytics;
