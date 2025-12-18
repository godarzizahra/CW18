import CardItem from "./menu/card-item";
import { Menu } from "./menu/menu";

function Home() {
	return (
		<div className="bg-[#00688e] flex justify-center gap-10 m-5 overflow-auto">
			<Menu />
			<CardItem />
		</div>
	);
}

export default Home;
