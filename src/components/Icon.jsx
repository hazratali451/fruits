export const Star = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="21"
		viewBox="0 0 20 21"
		fill="none"
	>
		<path
			d="M9.74159 15.1415C9.90049 15.0456 10.0994 15.0456 10.2583 15.1415L14.1355 17.4816C14.5141 17.7101 14.9812 17.3706 14.8808 16.9399L13.8519 12.5295C13.8097 12.3487 13.8711 12.1595 14.0114 12.038L17.4376 9.06985C17.7719 8.78025 17.5932 8.23112 17.1525 8.19373L12.6421 7.81106C12.4573 7.79539 12.2963 7.67872 12.224 7.50797L10.4603 3.34676C10.288 2.94025 9.71189 2.94025 9.5396 3.34676L7.77595 7.50797C7.70358 7.67872 7.54265 7.79538 7.35786 7.81106L2.84744 8.19373C2.40673 8.23112 2.22802 8.78025 2.56232 9.06985L5.98852 12.038C6.12881 12.1595 6.19023 12.3487 6.14806 12.5295L5.11917 16.9399C5.01869 17.3706 5.4858 17.7101 5.86446 17.4816L9.74159 15.1415Z"
			fill="#FF953F"
		/>
	</svg>
);

export const ArrowLeft = ({ color }) => (
	<svg
		width="56"
		height="56"
		viewBox="0 0 56 56"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="56"
			y="56"
			width="56"
			height="56"
			rx="28"
			transform="rotate(-180 56 56)"
			fill="white"
		/>
		<path
			d="M33.3737 17.9595C33.7288 18.3146 33.761 18.8701 33.4706 19.2616L33.3737 19.3738L24.748 28L33.3737 36.6262C33.7288 36.9812 33.761 37.5368 33.4706 37.9283L33.3737 38.0404C33.0187 38.3955 32.4632 38.4277 32.0717 38.1373L31.9595 38.0404L22.6262 28.7071C22.2712 28.3521 22.2389 27.7965 22.5294 27.405L22.6262 27.2929L31.9595 17.9595C32.35 17.569 32.9832 17.569 33.3737 17.9595Z"
			fill="black"
		/>
	</svg>
);
export const ArrowRight = ({ color }) => (
	<svg
		width="56"
		height="56"
		viewBox="0 0 56 56"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="56" height="56" rx="28" fill="white" />
		<path
			d="M22.6261 38.0405C22.2711 37.6854 22.2388 37.1299 22.5293 36.7384L22.6261 36.6262L31.2519 28L22.6261 19.3738C22.2711 19.0188 22.2388 18.4632 22.5293 18.0717L22.6261 17.9596C22.9812 17.6045 23.5367 17.5723 23.9282 17.8627L24.0404 17.9596L33.3737 27.2929C33.7287 27.6479 33.761 28.2035 33.4705 28.595L33.3737 28.7071L24.0404 38.0405C23.6498 38.431 23.0167 38.431 22.6261 38.0405Z"
			fill="black"
		/>
	</svg>
);
export const LikeIcon = ({ color }) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M21 8.59387H14.69L15.64 4.02387L15.67 3.70387C15.67 3.29387 15.5 2.91387 15.23 2.64387L14.17 1.59387L7.59 8.18387C7.22 8.54387 7 9.04387 7 9.59387V19.5939C7 20.6939 7.9 21.5939 9 21.5939H18C18.83 21.5939 19.54 21.0939 19.84 20.3739L22.86 13.3239C22.95 13.0939 23 12.8539 23 12.5939V10.5939C23 9.49387 22.1 8.59387 21 8.59387ZM21 12.5939L18 19.5939H9V9.59387L13.34 5.25387L12.23 10.5939H21V12.5939ZM1 9.59387H5V21.5939H1V9.59387Z"
			fill="#777777"
		/>
	</svg>
);
export const MessageIcon = ({ color }) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20 17.7639L18.83 16.5939H4V4.59387H20V17.7639ZM20 2.59387H4C2.9 2.59387 2 3.49387 2 4.59387V16.5939C2 17.6939 2.9 18.5939 4 18.5939H18L22 22.5939V4.59387C22 3.49387 21.1 2.59387 20 2.59387Z"
			fill="#777777"
		/>
	</svg>
);
export const ShareIcon = ({ color }) => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M18 16.6739C17.24 16.6739 16.56 16.9739 16.04 17.4439L8.91 13.2939C8.96 13.0639 9 12.8339 9 12.5939C9 12.3539 8.96 12.1239 8.91 11.8939L15.96 7.78387C16.5 8.28387 17.21 8.59387 18 8.59387C19.66 8.59387 21 7.25387 21 5.59387C21 3.93387 19.66 2.59387 18 2.59387C16.34 2.59387 15 3.93387 15 5.59387C15 5.83387 15.04 6.06387 15.09 6.29387L8.04 10.4039C7.5 9.90387 6.79 9.59387 6 9.59387C4.34 9.59387 3 10.9339 3 12.5939C3 14.2539 4.34 15.5939 6 15.5939C6.79 15.5939 7.5 15.2839 8.04 14.7839L15.16 18.9439C15.11 19.1539 15.08 19.3739 15.08 19.5939C15.08 21.2039 16.39 22.5139 18 22.5139C19.61 22.5139 20.92 21.2039 20.92 19.5939C20.92 17.9839 19.61 16.6739 18 16.6739ZM18 4.59387C18.55 4.59387 19 5.04387 19 5.59387C19 6.14387 18.55 6.59387 18 6.59387C17.45 6.59387 17 6.14387 17 5.59387C17 5.04387 17.45 4.59387 18 4.59387ZM6 13.5939C5.45 13.5939 5 13.1439 5 12.5939C5 12.0439 5.45 11.5939 6 11.5939C6.55 11.5939 7 12.0439 7 12.5939C7 13.1439 6.55 13.5939 6 13.5939ZM18 20.6139C17.45 20.6139 17 20.1639 17 19.6139C17 19.0639 17.45 18.6139 18 18.6139C18.55 18.6139 19 19.0639 19 19.6139C19 20.1639 18.55 20.6139 18 20.6139Z"
			fill="#777777"
		/>
	</svg>
);

export const FaqOpen = () => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 8.59387V16.5939M8 12.5939H16M22 12.5939C22 18.1167 17.5228 22.5939 12 22.5939C6.47715 22.5939 2 18.1167 2 12.5939C2 7.07102 6.47715 2.59387 12 2.59387C17.5228 2.59387 22 7.07102 22 12.5939Z"
			stroke="#98A2B3"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
export const FaqClose = () => (
	<svg
		width="24"
		height="25"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8 12.5939H16M22 12.5939C22 18.1167 17.5228 22.5939 12 22.5939C6.47715 22.5939 2 18.1167 2 12.5939C2 7.07102 6.47715 2.59387 12 2.59387C17.5228 2.59387 22 7.07102 22 12.5939Z"
			stroke="#98A2B3"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
export const FacebookIcon = () => (
	<svg
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M29.7584 14.6825C29.7584 6.57794 23.192 0.0114746 15.0874 0.0114746C6.98285 0.0114746 0.416382 6.57794 0.416382 14.6825C0.416382 22.005 5.78136 28.0746 12.7951 29.1761V18.9235H9.06815V14.6825H12.7951V11.4501C12.7951 7.77351 14.9839 5.74264 18.3363 5.74264C19.9419 5.74264 21.6208 6.02896 21.6208 6.02896V9.63756H19.7703C17.9483 9.63756 17.3798 10.7687 17.3798 11.9287V14.6825H21.4486L20.7979 18.9235H17.3798V29.1761C24.3935 28.0746 29.7584 22.005 29.7584 14.6825Z"
			fill="white"
		/>
	</svg>
);
export const YoutubeIcon = () => (
	<svg
		width="34"
		height="23"
		viewBox="0 0 34 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M32.3912 3.78995C32.0196 2.39088 30.9248 1.28901 29.5348 0.915078C27.0153 0.235596 16.9124 0.235596 16.9124 0.235596C16.9124 0.235596 6.80945 0.235596 4.28988 0.915078C2.89986 1.28907 1.80509 2.39088 1.43353 3.78995C0.758423 6.32585 0.758423 11.6168 0.758423 11.6168C0.758423 11.6168 0.758423 16.9077 1.43353 19.4436C1.80509 20.8427 2.89986 21.8986 4.28988 22.2726C6.80945 22.952 16.9124 22.952 16.9124 22.952C16.9124 22.952 27.0152 22.952 29.5348 22.2726C30.9248 21.8986 32.0196 20.8427 32.3912 19.4436C33.0663 16.9077 33.0663 11.6168 33.0663 11.6168C33.0663 11.6168 33.0663 6.32585 32.3912 3.78995V3.78995ZM13.6081 16.4205V6.81301L22.0522 11.6169L13.6081 16.4205V16.4205Z"
			fill="white"
		/>
	</svg>
);
export const InstagramIcon = () => (
	<svg
		width="27"
		height="27"
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M13.328 6.79664C9.5656 6.79664 6.53083 9.83142 6.53083 13.5938C6.53083 17.3562 9.5656 20.391 13.328 20.391C17.0904 20.391 20.1252 17.3562 20.1252 13.5938C20.1252 9.83142 17.0904 6.79664 13.328 6.79664ZM13.328 18.0129C10.8966 18.0129 8.90896 16.0311 8.90896 13.5938C8.90896 11.1565 10.8907 9.17477 13.328 9.17477C15.7653 9.17477 17.7471 11.1565 17.7471 13.5938C17.7471 16.0311 15.7594 18.0129 13.328 18.0129ZM21.9887 6.5186C21.9887 7.40005 21.2788 8.10402 20.4032 8.10402C19.5218 8.10402 18.8178 7.39413 18.8178 6.5186C18.8178 5.64307 19.5277 4.93318 20.4032 4.93318C21.2788 4.93318 21.9887 5.64307 21.9887 6.5186ZM26.4905 8.12768C26.39 6.00393 25.9049 4.12273 24.349 2.5728C22.7991 1.02288 20.9179 0.537791 18.7942 0.431308C16.6053 0.307077 10.0448 0.307077 7.85595 0.431308C5.73812 0.531875 3.85692 1.01697 2.30108 2.56689C0.745237 4.11681 0.266062 5.99802 0.159579 8.12177C0.0353486 10.3106 0.0353486 16.8711 0.159579 19.06C0.260147 21.1837 0.745237 23.0649 2.30108 24.6148C3.85692 26.1648 5.7322 26.6499 7.85595 26.7563C10.0448 26.8806 16.6053 26.8806 18.7942 26.7563C20.9179 26.6558 22.7991 26.1707 24.349 24.6148C25.899 23.0649 26.384 21.1837 26.4905 19.06C26.6148 16.8711 26.6148 10.3165 26.4905 8.12768ZM23.6628 21.4085C23.2014 22.568 22.3081 23.4613 21.1427 23.9286C19.3976 24.6208 15.2565 24.461 13.328 24.461C11.3995 24.461 7.25255 24.6148 5.51332 23.9286C4.35384 23.4672 3.46056 22.5739 2.99322 21.4085C2.30108 19.6634 2.4608 15.5224 2.4608 13.5938C2.4608 11.6653 2.30699 7.51836 2.99322 5.77913C3.45465 4.61965 4.34792 3.72637 5.51332 3.25903C7.25847 2.56689 11.3995 2.72661 13.328 2.72661C15.2565 2.72661 19.4035 2.5728 21.1427 3.25903C22.3022 3.72046 23.1955 4.61373 23.6628 5.77913C24.3549 7.52428 24.1952 11.6653 24.1952 13.5938C24.1952 15.5224 24.3549 19.6693 23.6628 21.4085Z"
			fill="white"
		/>
	</svg>
);
export const CartIcon = () => (
	<svg
		width="48"
		height="48"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="48" height="48" rx="12" fill="white" />
		<path
			d="M14.6669 26.6666H32.1812C33.5317 26.6666 34.2069 26.6666 34.7444 26.4149C35.2179 26.1931 35.6158 25.837 35.8885 25.3908C36.1981 24.8844 36.2727 24.2133 36.4218 22.8711L37.2018 15.8511C37.2474 15.4411 37.2701 15.2362 37.2042 15.0775C37.1463 14.9382 37.0429 14.8226 36.9108 14.7497C36.7604 14.6666 36.5541 14.6666 36.1417 14.6666H14.0003M10.6667 10.6666H12.3313C12.6842 10.6666 12.8606 10.6666 12.9986 10.7337C13.1201 10.7928 13.2208 10.8874 13.2873 11.005C13.3629 11.1385 13.3739 11.3146 13.3959 11.6668L14.6042 30.9998C14.6262 31.352 14.6373 31.528 14.7128 31.6616C14.7794 31.7792 14.8801 31.8738 15.0016 31.9329C15.1396 32 15.316 32 15.6688 32H33.3334M18.0001 36.6666H18.0134M30.0001 36.6666H30.0134M18.6667 36.6666C18.6667 37.0348 18.3683 37.3333 18.0001 37.3333C17.6319 37.3333 17.3334 37.0348 17.3334 36.6666C17.3334 36.2984 17.6319 36 18.0001 36C18.3683 36 18.6667 36.2984 18.6667 36.6666ZM30.6667 36.6666C30.6667 37.0348 30.3683 37.3333 30.0001 37.3333C29.6319 37.3333 29.3334 37.0348 29.3334 36.6666C29.3334 36.2984 29.6319 36 30.0001 36C30.3683 36 30.6667 36.2984 30.6667 36.6666Z"
			stroke="black"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
export const Hamburger = () => (
	<svg
		width="32"
		viewBox="0 0 44 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="44" height="44" fill="var(--white)" />
		<path
			d="M13.375 14.375H30.625"
			stroke="#202020"
			stroke-linecap="square"
		/>
		<path
			d="M13.375 21.875H30.625"
			stroke="#202020"
			stroke-linecap="square"
		/>
		<path
			d="M13.375 29.375H30.625"
			stroke="#202020"
			stroke-linecap="square"
		/>
	</svg>
);

export const ClearIcon = ({ width }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			width={40}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
};