import { products } from "../../../utils/list";
import CardItem from "./card-item";
import Header from "./header";

export function Menu() {
	return (
		<div className="bg-[#00c8c4] p-6.25 rounded-2xl shadow-xl w-full sm:w-[70%] max-h-full flex flex-col justify-items-start items-center gap-12.5">
			<Header />
			<div>
				{products.map((props) => {
					return <CardItem {...props} />;
				})}
			</div>
		</div>
	);
}
