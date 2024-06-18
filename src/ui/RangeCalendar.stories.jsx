import { RangeCalendar } from "./RangeCalendar"

const meta = {
  component: RangeCalendar,
}

export default meta

export const Example = args => (
  <RangeCalendar aria-label="Trip dates" {...args} />
)
