import Helper from "./Helper";

function MakeFriendlier({ text, onOptionSelected }) {
	return (
		<Helper
			type="make_friendlier"
			text={text}
			onOptionSelected={onOptionSelected}
			loadingMsg="Making text friendlier..."
		/>
	);
}

export default MakeFriendlier;
