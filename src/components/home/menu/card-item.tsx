import { useState } from "react";
import Button from "../../shared/button";

export type ProductType = {
	id: number;
	title: string;
	price: number;
	count: number;
	images: string;
};
export default function CardItem(props: ProductType) {
	const [count, setCount] = useState(0);
	return (
		<div
			key={props.id}
			className="bg-white rounded-lg flex justify-between py-4 px-4 items-end"
		>
			<div className="flex-1 justify-end text-end;">
				{props.price * count} تومان
			</div>
			{/* food deteail */}
			<div className="flex flex-row-reverse gap-5">
				<img src={props.images} width="70px" height="30px" />
				<div className="text-right flex flex-col gap-2">
					<div className="font-bold tex-[10px] sm:text-[15px]">
						{props.title}
					</div>
					<div className="text-[15px]">{props.price}</div>
					<div className="flex flex-row-reverse items-center gap-2">
						<Button
							className="rounded-r-[5px]"
							childern="+"
							onclick={() => setCount(count + 1)}
						/>
						<span>{count}</span>
						<Button
							className="rounded-l-[5px]!"
							childern="-"
							onclick={() => setCount(count - 1)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
