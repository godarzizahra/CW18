function Reserve() {
	return (
		<div>
			<div className="bg-[#00c8c4] p-[25px] rounded-2xl shadow-xl h-[380px] w-[100%] sm:w-[30%] flex flex-col gap-5 justify-between">
				<div className="flex flex-col gap-3">
					<div className="flex justify-between">
						<p>جمع کل سفارشات:</p>
						<p>0</p>
					</div>
					<div className="flex justify-between">
						<p>حق سرویس و کارمزد:</p>
						<p>0</p>
					</div>
					<div className="flex justify-between">
						<p>تخفیف:</p>
						<p>0</p>
					</div>
					<div className="flex justify-between relative"></div>
				</div>
				<div className="flex flex-col gap-3"></div>
			</div>
		</div>
	);
}

export default Reserve;
