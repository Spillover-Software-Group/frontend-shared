import Helper from './Helper'

function ContinueWriting ({ text, onOptionSelected }) {
  return (
    <Helper
      type='continue_writing'
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg='Continuing your text...'
    />
  )
}

export default ContinueWriting
