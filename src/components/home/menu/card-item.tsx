import Button from "../../../shared/button";
import { products } from "../../../utils/list";

export type ProductType = {
	id: number;
	title: string;
	price: number;
	count: number;
	total: number;
};
export default function CardItem(props: ProductType) {
	return (
		<div
			key={props.id}
			className="bg-white rounded-lg flex justify-between py-4 px-4 items-end"
		>
			<div className="flex-1 justify-end text-end;">{props.total}تومان </div>
			{/* food deteail */}
			<div>
				<img src="" alt="" />
				<div>
					<div className="font-bold tex-[10px] sm:text-[15px]">
						{props.title}
					</div>
					<div className="text-[15px]">{props.price}</div>
					<div className="flex flex-row-reverse items-center gap-2">
						<Button className="rounded-r-[5px]" childern="+" />
						<span>{props.count}</span>
						<Button className="rounded-l-[5px]!" childern="-" />
					</div>
				</div>
			</div>
		</div>
	);
}
