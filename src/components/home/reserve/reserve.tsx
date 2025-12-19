function Reserve() {
	return (
		<div className="w-1/3 text-right">
			<div className="bg-[#00c8c4] p-[25px] rounded-2xl shadow-xl h-[380px] flex flex-col gap-5 justify-between">
				<div className="flex flex-col gap-3">
					<div className="flex flex-row-reverse justify-between">
						<p> :جمع کل سفارشات</p>
						<p>0</p>
					</div>
					<div className="flex flex-row-reverse justify-between">
						<p> :حق سرویس و کارمزد</p>
						<p>0</p>
					</div>
					<div className="flex flex-row-reverse justify-between">
						<p> :تخفیف</p>
						<p>0</p>
					</div>
					<div className="flex justify-between relative">
						<input
							className="w-full text-right bg-white py-2 pr-2 rounded-[5px] placeholder:px-1 focus:outline-0"
							type="text"
							placeholder="کد تخفیف"
						></input>
						<div className="bg-[#008292] absolute left-0 w-10 rounded-l-[5px] py-2 text-center text-white">
							✔
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex flex-row-reverse text-right justify-between bg-[#ffdb02] rounded-[5px] px-3 py-2">
						<p> :مبلغ قابل پرداخت</p>
						<p>0</p>
					</div>
					<button className="w-full py-2 bg-[#008292] rounded-[5px] shadow-xl text-white">
						ثبت سفارش
					</button>
				</div>
			</div>
		</div>
	);
}

export default Reserve;
