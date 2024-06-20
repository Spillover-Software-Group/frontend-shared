import Helper from "./Helper";

function ImproveWriting({ text, onOptionSelected }) {
  return (
    <Helper
      type="improve_writing"
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg="Improving writing..."
    />
  );
}

export default ImproveWriting;
