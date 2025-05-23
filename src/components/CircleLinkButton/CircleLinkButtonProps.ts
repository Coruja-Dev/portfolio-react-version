import type { ReactNode } from "react";

export interface CircleLinkButtonProps {
	variant: "light" | "dark";
	href: string;
	ariaLabel: string;
	children?: ReactNode;
}
