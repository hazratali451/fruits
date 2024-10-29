import HomePage from "@/src/page-components/home/HomePage";

import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Fruits</title>
				<meta name="description" content="" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePage />
		</>
	);
}
