import React from "react";
import { ResponsiveLine } from "@nivo/line";

interface ComponentProps {
	data: { id: string; color: string; data: { x: string; y: number }[] }[];
	lineColor?: string;
}

const theme = {
	axis: {
		textColor: "red",
		fontSize: "14px",
		tickColor: "blue",
	},
	grid: {
		stroke: "green",
		strokeWidth: 1,
	},
};
const Chart: React.FC<ComponentProps> = ({ data, lineColor = "#F05D23" }) => (
	<ResponsiveLine
		data={data}
		// colors={{ scheme: "Reds" }}
		colors={lineColor}
		// borderColor='#000000'
		// borderColor='#000000'
		margin={{ top: 50, right: 20, bottom: 80, left: 60 }}
		theme={theme}
		xScale={{ type: "point" }}
		yScale={{
			type: "linear",
			min: 10,
			max: 50,
			stacked: false,
			reverse: false,
		}}
		// yFormat=' >-.2f'
		axisTop={null}
		axisRight={null}
		enableGridX={false}
		axisBottom={{
			orient: "bottom",
			tickSize: 0,
			tickPadding: 10,
			tickRotation: 0,
		}}
		axisLeft={{
			// orient: "left",
			tickSize: 0,
			tickPadding: 20,
			tickRotation: 0,
		}}
		pointSize={10}
		pointColor='white'
		pointBorderWidth={2}
		// pointBorderColor={{ from: "color" }}

		pointBorderColor={{ from: "serieColor", modifiers: [] }}
		pointLabelYOffset={-12}
		useMesh={false}
		// theme={{ background: "#ffffff" }}
	/>
);

export default Chart;
