import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const focusRing = tv({
	base: "outline outline-spillover-600 dark:outline-spillover-500 forced-colors:outline-[Highlight] outline-offset-2",
	variants: {
		isFocusVisible: {
			false: "outline-0",
			true: "outline-2",
		},
	},
});

export function composeTailwindRenderProps(className, tw) {
	return composeRenderProps(className, (className) => twMerge(tw, className));
}

export function isolate(WrappedComponent) {
	return function IsolatedComponent(props) {
		return (
			<div className="sfs-isolate h-full w-full">
				<WrappedComponent {...props} />
			</div>
		);
	};
}
