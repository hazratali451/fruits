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
import { PersistGate } from "redux-persist/integration/react";
//load all styles of inter fonts
import { persistStore } from "redux-persist";

const inter = Inter({ subsets: ["latin"] });
const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
	return (
		<>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NextNProgress color="#F9AB1A" />
					<Toaster />
					<Component {...pageProps} />
				</PersistGate>
			</ReduxProvider>
		</>
	);
}
