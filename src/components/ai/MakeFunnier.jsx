import Helper from "./Helper";

function MakeFunnier({ text, onOptionSelected }) {
	return (
		<Helper
			type="make_funnier"
			text={text}
			onOptionSelected={onOptionSelected}
			loadingMsg="Making text funnier..."
		/>
	);
}

export default MakeFunnier;
