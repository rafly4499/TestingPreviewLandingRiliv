import Head from "next/head";

const RilivHeader = (props) => {
	const { customTitle, customDescription } = props;
	return (
		<Head>
			<link rel="shortcut icon" href="/img/favicon.ico" />
			<link rel="icon" sizes="192x192" href="/img/android-chrome-192x192.png" />
			<link
				rel="apple-touch-icon"
				sizes="128x128"
				href="/img/apple-touch-icon.png"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#11cbe1" />
			<meta
				name="description"
				content={
					customDescription
						? customDescription
						: "Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
				}
			/>
			<meta property="og:url" content="https://riliv.co" />
			<meta property="og:image" content="//riliv.co/img/rilivLogo3.jpg" />
			<link rel="manifest" href="/img/manifest.json" />
			<title>
				{customTitle
					? customTitle
					: "Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"}
			</title>
			{props.children}
			<link
				href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
				rel="stylesheet"
			/>

			<script
				type="text/javascript"
				src="http://www.youtube.com/player_api"
			></script>
		</Head>
	);
};

export default RilivHeader;
