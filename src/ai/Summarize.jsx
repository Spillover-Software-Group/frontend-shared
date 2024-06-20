import Helper from "./Helper";

function Summarize({ message }) {
  return (
    <Helper
      type="summarize"
      text={message}
      loadingMsg="Summarizing..."
      retry={false}
    />
  );
}

export default Summarize;
