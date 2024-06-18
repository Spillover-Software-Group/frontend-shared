import { useEffect, useState } from "react";

import {
	endOfMonth,
	endOfWeek,
	endOfYear,
	getLocalTimeZone,
	startOfMonth,
	startOfWeek,
	startOfYear,
	today,
} from "@internationalized/date";

import { Select, SelectItem } from "./Select";

const defaultPresets = [
	{ id: "custom", name: "Custom" },
	{ id: "today", name: "Today" },
	{ id: "thisWeek", name: "This Week" },
	{ id: "thisMonth", name: "This Month" },
	{ id: "thisYear", name: "This Year" },
	{ id: "yesterday", name: "Yesterday" },
	{ id: "previousWeek", name: "Previous Week" },
	{ id: "previousMonth", name: "Previous Month" },
	{ id: "previousYear", name: "Previous Year" },
	{ id: "last7Days", name: "Last 7 Days" },
	{ id: "last30Days", name: "Last 30 Days" },
	{ id: "last90Days", name: "Last 90 Days" },
	{ id: "last6Months", name: "Last 6 Months" },
	{ id: "last12Months", name: "Last 12 Months" },
];

function presetIdToDateRange(presetId, todayDate) {
	switch (presetId) {
		case "custom":
			return null;
		case "today":
			return { start: todayDate, end: todayDate };
		case "thisWeek":
			return {
				start: startOfWeek(todayDate, "en-US"),
				end: todayDate,
			};
		case "thisMonth":
			return {
				start: startOfMonth(todayDate),
				end: todayDate,
			};
		case "thisYear":
			return {
				start: startOfYear(todayDate),
				end: todayDate,
			};
		case "yesterday": {
			const yesterday = todayDate.subtract({ days: 1 });

			return {
				start: yesterday,
				end: yesterday,
			};
		}
		case "previousWeek": {
			const previousWeekStart = startOfWeek(
				todayDate.subtract({ weeks: 1 }),
				"en-US",
			);

			return {
				start: previousWeekStart,
				end: endOfWeek(previousWeekStart, "en-US"),
			};
		}
		case "previousMonth": {
			const previousMonthStart = startOfMonth(
				todayDate.subtract({ months: 1 }),
			);

			return {
				start: previousMonthStart,
				end: endOfMonth(previousMonthStart),
			};
		}
		case "previousYear": {
			const previousYearStart = startOfYear(todayDate.subtract({ years: 1 }));

			return {
				start: previousYearStart,
				end: endOfYear(previousYearStart),
			};
		}
		case "last7Days": {
			const last7DaysStart = todayDate.subtract({ days: 7 });

			return {
				start: last7DaysStart,
				end: todayDate,
			};
		}
		case "last30Days": {
			const last30DaysStart = todayDate.subtract({ days: 30 });

			return {
				start: last30DaysStart,
				end: todayDate,
			};
		}
		case "last90Days": {
			const last90DaysStart = todayDate.subtract({ days: 90 });

			return {
				start: last90DaysStart,
				end: todayDate,
			};
		}
		case "last6Months": {
			const last6MonthsStart = todayDate.subtract({ months: 6 });

			return {
				start: last6MonthsStart,
				end: todayDate,
			};
		}
		case "last12Months": {
			const last12MonthsStart = todayDate.subtract({ months: 12 });

			return {
				start: last12MonthsStart,
				end: todayDate,
			};
		}
		default:
			throw new Error(`Unknown preset: ${presetId}`);
	}
}

export function usePresetDateRangeSelector({
	defaultPreset = "custom",
	onChange,
}) {
	const [selectedPreset, setSelectedPreset] = useState(null);

	const onSelectionChange = (presetId) => {
		setSelectedPreset(presetId);

		const todayDate = today(getLocalTimeZone());
		const dateRange = presetIdToDateRange(presetId, todayDate);

		if (onChange) onChange(presetId, dateRange);
	};

	// Trigger the initial selection
	useEffect(() => {
		onSelectionChange(defaultPreset);
	}, []);

	return {
		setSelectedPresetDateRange: setSelectedPreset,
		presetDateRangeProps: {
			presets: defaultPresets,
			selectedPreset,
			onSelectionChange,
		},
	};
}

export function PresetDateRangeSelector({
	presets,
	selectedPreset,
	onSelectionChange,
	...props
}) {
	return (
		<Select
			items={defaultPresets}
			selectedKey={selectedPreset}
			onSelectionChange={onSelectionChange}
			{...props}
		>
			{(preset) => <SelectItem>{preset.name}</SelectItem>}
		</Select>
	);
}
