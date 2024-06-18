import Helper from './Helper'

function MakeMoreCasual ({ text, onOptionSelected }) {
  return (
    <Helper
      type='make_more_casual'
      text={text}
      onOptionSelected={onOptionSelected}
      loadingMsg='Making more casual...'
    />
  )
}

export default MakeMoreCasual
