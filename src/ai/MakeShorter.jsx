import Helper from "./Helper";

function MakeShorter({ text, onOptionSelected }) {
  return (
    <Helper
      type="make_shorter"
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg="Making text shorter..."
    />
  );
}

export default MakeShorter;
