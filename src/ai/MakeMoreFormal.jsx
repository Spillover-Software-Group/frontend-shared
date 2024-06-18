import Helper from './Helper'

function MakeMoreFormal ({ text, onOptionSelected }) {
  return (
    <Helper
      type='make_more_formal'
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg='Making more formal...'
    />
  )
}

export default MakeMoreFormal
