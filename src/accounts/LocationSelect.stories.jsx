import { LocationSelect } from "./LocationSelect"

export default {
  component: LocationSelect,
  args: {
    locations: [
      { id: 1, name: "Location 1" },
      { id: 2, name: "Location 2" },
    ],
  },
}

export const Example = args => <LocationSelect {...args} />
