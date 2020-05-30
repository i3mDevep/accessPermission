import React from 'react'
import { CardChart } from '../CardChart'
import { XYPlot, MarkSeries, LineSeries, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, RadialChart } from 'react-vis';
import { List } from './style'
import '../../../node_modules/react-vis/dist/style.css';


export const ListCardsChart = () => {
    const data = [
        { x: 0, y: 2 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 4 },
        { x: 6, y: 6 },
        { x: 7, y: 8 },
        { x: 8, y: 2 },
        { x: 9, y: 15 }
    ];
    return (
        <List>
            <CardChart >
                <XYPlot color="white" height={170} width={270} stackBy="y">
                    <LineSeries style={{ strokeWidth: 5 }} color="white" data={data} />
                    <HorizontalGridLines style={{ strokeWidth: 0.4 }} />
                    <VerticalGridLines style={{ strokeWidth: 0.4, strokeStyle: "solid" }} />
                    <MarkSeries color="white" data={data} />
                </XYPlot>
            </CardChart>
            <CardChart color="#342ead">
                <XYPlot height={200} width={250}>
                    <VerticalBarSeries style={{strokeWidth: 0.1}} color="#fff" data={data} />
                </XYPlot>
            </CardChart>
            <CardChart color="#035aa6" >
                <RadialChart
                    getLabel={d => d.label}
                    data={[
                        { angle: 1, color: "#FFF", name: "red", opacity: 0.9 },
                        { angle: 2, color: "#000", name: "yellow" },
                        { angle: 5, color: "#1E96BE", name: "cyan" },
                        { angle: 3, color: "#DA70BF", name: "magenta" },
                        { angle: 5, color: "#F6D18A", name: "yellow again" }
                    ]}
                    labelsRadiusMultiplier={1.6}
                    labelsStyle={{ fontSize: 16, fill: "#222" }}
                    width={170}
                    height={170}
                />
            </CardChart>
        </List>
    )
}