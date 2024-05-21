import Helper from './Helper'

function SpellCheck ({ text, onOptionSelected }) {
  return (
    <Helper
      type='spellcheck'
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg='Checking spelling...'
    />
  )
}

export default SpellCheck
