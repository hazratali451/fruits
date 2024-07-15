import { store } from "@/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
//
import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import NextNProgress from "nextjs-progressbar";
import "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
//load all styles of inter fonts
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
	return (
		<>
			<ReduxProvider store={store}>
				<NextNProgress color="#F9AB1A" />
				<Toaster />
				<Component {...pageProps} />
			</ReduxProvider>
		</>
	);
}
