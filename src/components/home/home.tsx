import { Menu } from "./menu/menu";
import Reserve from "./reserve/reserve";

function Home() {
	return (
		<div className="bg-[#00688e] p-8 flex flex-row justify-center gap-10 w-full overflow-auto">
			<Reserve />
			<Menu />
		</div>
	);
}

export default Home;
