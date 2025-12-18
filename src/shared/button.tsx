type buttonType = { childern: React.ReactNode; className?: string };
export default function Button({ childern, className, ...rest }: buttonType) {
	return (
		<div>
			<button
				className={`  text-white bg-[#008292] w-5 ${className ?? ""}`}
				{...rest}
			>
				{childern}
			</button>
		</div>
	);
}
