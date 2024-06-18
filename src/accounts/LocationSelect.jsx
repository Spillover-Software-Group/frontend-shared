import { useEffect, useState } from "react";

import { ComboBox, ComboBoxItem } from "@/ui/ComboBox";

export function useLocationSelect({ locations = [] }) {
	const [selectedId, setSelectedId] = useState(null);

	const location = locations.find((l) => l.id === selectedId);

	// Reset selected location if not in the list
	useEffect(() => {
		if (!location) setSelectedId(null);
	}, [location]);

	return {
		location,
		locationSelectProps: {
			locations,
			selectedId: selectedId,
			onSelectionChange: setSelectedId,
		},
	};
}

export function LocationSelect({
	locations = [],
	selectedId = null,
	onSelectionChange,
	...props
}) {
	return (
		<ComboBox
			placeholder="Select a location"
			items={locations}
			selectedKey={selectedId}
			onSelectionChange={onSelectionChange}
			{...props}
		>
			{(location) => <ComboBoxItem>{location.name}</ComboBoxItem>}
		</ComboBox>
	);
}
