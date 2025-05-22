/// <reference types="vite/client" />

declare module "*.svg?react" {
	//Makes React types (like React.FC) available inside the declaration.
	import * as React from "react";
	//const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	//export default ReactComponent;
	export default ReactComponent;
}
