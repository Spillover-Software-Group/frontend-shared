import Helper from './Helper'

function GenerateCommentReply ({ message, onOptionSelected }) {
  return (
    <Helper
      type='comment_reply'
      text={message}
      onOptionSelected={onOptionSelected}
      loadingMsg='Generating reply...'
      n={3}
    />
  )
}

export default GenerateCommentReply
