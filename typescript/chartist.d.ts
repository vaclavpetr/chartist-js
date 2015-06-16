declare module 'chartist-js' {
    module Chartist {
        export interface ChartData {
            labels?: string[];
            series: number[]| number[][]
        }

        export interface LineAxisXOptions {
            // The offset of the labels to the chart area
            offset?: number;
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position?: string;
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset?: {
                x?: number;
                y?: number;
            };
            // If labels should be shown or not
            showLabel?: boolean;
            // If the axis grid should be drawn or not
            showGrid?: boolean;
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc?: (item) => string; //Chartist.noop,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger?: boolean;
        }

        export interface LineAxisYOptions {
            // The offset of the labels to the chart area
            offset?: number;
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position?: string;
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset?: {
                x?: number;
                y?: number;
            };
            // If labels should be shown or not
            showLabel?: boolean;
            // If the axis grid should be drawn or not
            showGrid?: boolean;
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc?: (item) => string;
            // This value specifies the minimum height in pixel of the scale steps
            scaleMinSpace?: number;
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger?: boolean;
        }

        export interface LineOptions {            
            // Options for X-Axis
            axisX?: LineAxisXOptions;
            // Options for Y-Axis
            axisY?: LineAxisYOptions;
            // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
            width?: string;
            // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
            height?: string;
            // If the line should be drawn or not
            showLine?: boolean;
            // If dots should be drawn or not
            showPoint?: boolean;
            // If the line chart should draw an area
            showArea?: boolean;
            // The base for the area chart that will be used to close the area shape (is normally 0)
            areaBase?: number;
            // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
            lineSmooth?: boolean;
            // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
            low?: any;
            // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
            high?: any;
            // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
            chartPadding?: {
                top?: number;
                right?: number;
                bottom?: number;
                left?: number;
            };
            // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
            fullWidth?: boolean;
            // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
            reverseData?: boolean;
            // Override the class names that get used to generate the SVG structure of the chart
            classNames?: {
                chart: string;
                label: string;
                labelGroup: string;
                series: string;
                line: string;
                point: string;
                area: string;
                grid: string;
                gridGroup: string;
                vertical: string;
                horizontal: string;
                start: string;
                end: string;
            }
        }

        export interface BarAxisOptions {
            // The offset of the chart drawing area to the border of the container
            offset?: number;
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position?: string;
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset?: {
                x?: number;
                y?: number;
            },
            // If labels should be shown or not
            showLabel?: boolean;
            // If the axis grid should be drawn or not
            showGrid?: boolean;
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc?: (item) => string;
            // This value specifies the minimum width in pixel of the scale steps
            scaleMinSpace?: number;
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger?: boolean;
        }

        export interface BarOptions {
            // Options for X-Axis
            axisX?: BarAxisOptions;
            // Options for Y-Axis
            axisY?: BarAxisOptions;
            // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
            width?: number;
            // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
            height?: number;
            // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
            high?: number;
            // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
            low?: number;
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger?: boolean;
            // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
            chartPadding?: {
                top?: number;
                right?: number;
                bottom?: number;
                left?: number;
            },
            // Specify the distance in pixel of bars in a group
            seriesBarDistance?: number;
            // If set to true this property will cause the series bars to be stacked and form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
            stackBars?: boolean;
            // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
            horizontalBars?: boolean;
            // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
            distributeSeries?: boolean;
            // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
            reverseData?: boolean;
            // Override the class names that get used to generate the SVG structure of the chart
            classNames?: {
                chart?: string;
                horizontalBars?: string;
                label?: string;
                labelGroup?: string;
                series?: string;
                bar?: string;
                grid?: string;
                gridGroup?: string;
                vertical?: string;
                horizontal?: string;
                start?: string;
                end?: string;
            }
        }

        export interface PieOptions {
            // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
            width?: string;
            // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
            height?: string;
            // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
            chartPadding?: number;
            // Override the class names that are used to generate the SVG structure of the chart
            classNames?: {
                chart: string;      // ct-chart-pie
                series: string;     // ct-series
                slice: string;      // ct-slice
                donut: string;      // ct-donut
                label: string;      // ct-label
            };
            // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
            startAngle?: number;
            // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
            total?: number;
            // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
            donut?: boolean; // false
            // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
            donutWidth?: number; // 60
            // If a label should be shown or not
            showLabel?: boolean; // true,
            // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
            labelOffset?: number; //0
            // An interpolation function for the label value
            labelInterpolationFnc?: (item) => string; //Chartist.noop,
            // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
            labelDirection?: string;//'neutral',
            // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
            reverseData?: boolean; //false
        }

        export class Line {
            constructor(query: HTMLElement | string, data: ChartData, options?: LineOptions, responsiveOptions?);
        }

        export class Bar {
            constructor(query: HTMLElement | string, data: ChartData, options?: BarOptions, responsiveOptions?);
        }

        export class Pie {
            constructor(query: HTMLElement | string, data: ChartData, options?: PieOptions, responsiveOptions?);
        }

        export function noop(n);
        export function alphaNumerate(n);
        export function replaceAll(str, subStr, newSubStr);
        export function stripUnit(value);
        export function ensureUnit(value, unit);
        export function querySelector(query);
        export function times(length);
        export function sum(previous, current);
        export function serialMap(arr, cb);
        export function roundWithPrecision(value, digits);
        export function serialize(data);
        export function deserialize(data);
        export function createSvg(container, width, height, className);
        export function reverseData(data);
        export function getDataArray(data, reverse);
        // ... and many other
    }

    export = Chartist;
}