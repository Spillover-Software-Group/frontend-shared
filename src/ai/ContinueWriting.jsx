import Helper from './Helper'

function ContinueWriting ({ text, onOptionSelected }) {
  const optionSelected = (option, type) => {
    onOptionSelected(`${text} ${option}`, type)
  }

  return (
    <Helper
      type='continue_writing'
      text={text}
      onOptionSelected={optionSelected}
      loadingMsg='Continuing your text...'
    />
  )
}

export default ContinueWriting
