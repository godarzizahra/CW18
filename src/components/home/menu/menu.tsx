import { products } from "../../../utils/list";
import CardItem from "./card-item";
import Header from "./header";

export function Menu() {
	return (
		<div className="bg-[#00c8c4] p-6.25 rounded-2xl shadow-xl w-full sm:w-[70%] max-h-full flex flex-col justify-items-start items-center gap-12.5">
			<Header />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 w-full h-full px-5">
				{products.map((props) => {
					return <CardItem {...props} />;
				})}
			</div>
		</div>
	);
}
