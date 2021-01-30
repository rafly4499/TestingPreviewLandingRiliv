import { Fragment } from "react";

const HeaderHotjar = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default HeaderHotjar;
