import { Fragment } from "react";
import { useRouter } from "next/router";

const PaketMeditasiCard = ({
	Title,
	Subtitle,
	iconI,
	Price,
	Description,
	first,
}) => {
	const router = useRouter();
	let path = "";

	if (router.pathname === "/") {
		path = "home";
	} else {
		path = router.pathname;
		path = path.replace("/", "");
	}

	return (
		<div
			className={`d-lg-inline-block d-block text-center mx-0 mx-lg-rlv-B  ${
				first ? "" : "mt-rlv-1-mobile mt-lg-0"
			}`}
			style={{ flex: 1 }}
		>
			<div
				className="py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-2-mobile px-lg-rlv-2-desktop bg-white"
				style={{ borderRadius: "20px" }}
			>
				<h4 className="h4 mb-rlv-A">
					<strong>{Title}</strong>
				</h4>
				<p className={`paragraph-riliv-sm mb-rlv-C `}>
					{Subtitle ? (
						Subtitle
					) : (
						<span className="invisible d-none d-lg-block">not subtitle</span>
					)}
					{iconI ? (
						<a href="#syarat&ketentuangaransi">
							<img
								className="d-inline ml-rlv-A"
								src="./img-pricing/icon_i 2x.webp"
								style={{ height: "16px" }}
							/>
						</a>
					) : null}
				</p>
				<p className="h4 font-weight-bold mb-rlv-C">{Price}</p>
				{Description.type === "red" ? (
					<p
						className="paragraph-riliv-sm mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ color: "#f64c4c" }}
					>
						{Description.text}
					</p>
				) : (
					<p className="paragraph-riliv-sm mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						{Description.text}
					</p>
				)}

				<div className="row">
					<div className="col-12 col-lg-6">
						<a
							href={`https://play.google.com/store/apps/details?id=nozero.apps1&referrer=utm_source%3Dwebsite%26utm_content%3Dandroid%26utm_campaign%3D${path}`}
							className="btn btn-special-grad-1 btn-sm btn-block px-0 font-weight-semibold text-white"
						>
							Lanjut via Android
						</a>
					</div>
					<div className="col-12 col-lg-6">
						<a
							href={`https://click.google-analytics.com/redirect?tid=UA-65518022-7&url=https%3A%2F%2Fitunes.apple.com%2Fid%2Fapp%2Friliv%2Fid1510486066&aid=nozero.apps1&idfa=%{idfa}&cs=website&cn=${path}&cc=ios`}
							className="btn btn-special-grad-1 btn-sm btn-block px-0 font-weight-semibold text-white mt-rlv-A mt-lg-0"
						>
							Lanjut via iOS
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaketMeditasiCard;
