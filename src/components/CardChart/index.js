import React from 'react'
import { XYPlot,MarkSeries ,VerticalBarSeries, HorizontalBarSeries, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines,FlexibleXYPlot } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import { Card } from './style'

export const CardChart = () => {
    const data = [
        { x: 0, y: 0 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 6 },
        { x: 5, y: 4 },
        { x: 6, y: 6 },
        { x: 7, y: 8 },
        { x: 8, y: 2 },
        { x: 9, y: 20 }
    ];
    return (
        <Card>
            <FlexibleXYPlot height={200} width={400} stackBy="y">
                <LineSeries style={{strokeWidth: 5}} color="white" data={data} />
                <HorizontalGridLines />
                <MarkSeries color="white" data={data} />
                <XAxis />
                <YAxis />
            </FlexibleXYPlot>
        </Card>
    )
}