import Helper from "./Helper";

function Translate({ message }) {
  return (
    <Helper
      type="translate"
      text={message}
      loadingMsg="Translating..."
      retry={false}
    />
  );
}

export default Translate;
