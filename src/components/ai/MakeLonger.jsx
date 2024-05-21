import Helper from './Helper'

function MakeLonger ({ text, onOptionSelected }) {
  return (
    <Helper
      type='make_longer'
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg='Making text longer...'
    />
  )
}

export default MakeLonger
