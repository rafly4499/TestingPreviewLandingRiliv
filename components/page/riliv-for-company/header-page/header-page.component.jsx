import React, { Fragment } from "react";
import HeaderHotjar from "../../../header/header-hotjar";
import HeaderPixelFB from "../../../header/header-facebook-pixel";

const HeaderRilivPageApp = ({ customTitle, customDescription }) => {
	return (
		<Fragment>
			<meta
				name="description"
				content={
					customDescription
						? customDescription
						: "Curahkan segala keluhan pribadi &amp; konsultasikan masalah psikologis Anda secara online kepada psikolog kami yang berlisensi dan profesional."
				}
			></meta>
			<meta property="og:type" content="website" />
			<meta
				property="og:title"
				content={
					customTitle
						? customTitle
						: "Riliv - Curhat Online dengan Psikolog Profesional"
				}
			/>
			<meta
				property="og:description"
				content={
					customDescription
						? customDescription
						: "Curahkan segala keluhan pribadi &amp; konsultasikan masalah psikologis Anda secara online kepada psikolog kami yang berlisensi dan profesional."
				}
			/>
			{/* HOTJAR START */}
			<HeaderHotjar />
			{/* HOTJAR END */}
			{/* FACEBOOK PIXEL CODE */}
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel Code -->` }}
			/>
			<HeaderPixelFB />
			<script
				dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel End -->` }}
			/>
			{/* END FACEBOOK PIXEL CODE */}
		</Fragment>
	);
};

export default HeaderRilivPageApp;
