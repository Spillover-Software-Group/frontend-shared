import { format as formatDate } from 'date-fns'

function FormattedDate({ date, format = 'PPPP', ...rest }) {
  return <time dateTime={date} {...rest}>{formatDate(date, format)}</time>
}

export default FormattedDate
