import { FaqClose, FaqOpen } from "@/src/components/Icon";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
	return (
		<section className="faqs-section">
			<div className="container">
				<div className="mb-4 mb-md-5 text-center">
					<h3>Frequently asked questions</h3>
					<p className="section-subtitle mt-3">
						Everything you need to know about the product and billing.
					</p>
				</div>
				<div className="mx-auto" style={{ maxWidth: "768px" }}>
					<FaqItems />
				</div>
			</div>
		</section>
	);
};

const FaqItems = () => {
	return (
		<Accordion defaultActiveKey={null}>
			{data?.map(({ title, text, linkText, link }, i) => (
				<Accordion.Item eventKey={i} key={i} defaultActiveKey={0}>
					<Accordion.Header>
						<span className="me-2">{title} </span>
						<span className="plus ms-auto">
							<FaqOpen />
						</span>
						<span className="minus ms-auto">
							<FaqClose />
						</span>
					</Accordion.Header>
					<Accordion.Body>
						<div className="faq-text">{text}</div>
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
};
const data = [
	{
		title: "Is there a free trial available?",
		text: [
			"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
		],
	},
	{
		title: "Can I change my plan later?",
		text: [
			"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
		],
	},
	{
		title: "What is your cancellation policy?",
		text: [
			"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
		],
	},
	{
		title: "Can other info be added to an invoice?",
		text: [
			"Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
		],
	},
];
export default FAQs;
