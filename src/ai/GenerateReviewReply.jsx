import Helper from "./Helper";

function GenerateReviewReply({ message, onOptionSelected }) {
  return (
    <Helper
      type="review_reply"
      text={message}
      onOptionSelected={onOptionSelected}
      loadingMsg="Generating reply..."
      n={3}
    />
  );
}

export default GenerateReviewReply;
