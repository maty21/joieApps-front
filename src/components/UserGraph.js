import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
const stub = [
    {
        "id": "japan",
        "color": "hsl(66, 70%, 50%)",
        "data": [
            {
                "x": "01-01-2018",
                "y": 115
            },
            {
                "x": "01-02-2018",
                "y": 104
            },
            {
                "x": "01-03-2018",
                "y": 244
            },
            {
                "x": "01-04-2018",
                "y": 288
            },
            {
                "x": "01-05-2018",
                "y": 39
            },
            {
                "x": "01-06-2018",
                "y": 58
            },
            {
                "x": "01-07-2018",
                "y": 296
            },
            {
                "x": "01-08-2018",
                "y": 203
            },
            {
                "x": "01-09-2018",
                "y": 254
            },
            {
                "x": "01-10-2018",
                "y": 113
            },
            {
                "x": "01-11-2018",
                "y": 149
            },
            {
                "x": "01-12-2018",
                "y": 243
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(353, 70%, 50%)",
        "data": [
            {
                "x": "01-01-2018",
                "y": 169
            },
            {
                "x": "01-02-2018",
                "y": 90
            },
            {
                "x": "01-03-2018",
                "y": 51
            },
            {
                "x": "01-04-2018",
                "y": 209
            },
            {
                "x": "01-05-2018",
                "y": 198
            },
            {
                "x": "01-06-2018",
                "y": 118
            },
            {
                "x": "01-07-2018",
                "y": 242
            },
            {
                "x": "01-08-2018",
                "y": 39
            },
            {
                "x": "01-09-2018",
                "y": 266
            },
            {
                "x": "01-10-2018",
                "y": 115
            },
            {
                "x": "01-11-2018",
                "y": 197
            },
            {
                "x": "01-12-2018",
                "y": 134
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(88, 70%, 50%)",
        "data": [
            {
                "x": "01-01-2018",
                "y": 205
            },
            {
                "x": "01-02-2018",
                "y": 5
            },
            {
                "x": "01-03-2018",
                "y": 47
            },
            {
                "x": "01-04-2018",
                "y": 31
            },
            {
                "x": "01-05-2018",
                "y": 67
            },
            {
                "x": "01-06-2018",
                "y": 137
            },
            {
                "x": "01-07-2018",
                "y": 270
            },
            {
                "x": "01-08-2018",
                "y": 290
            },
            {
                "x": "01-09-2018",
                "y": 244
            },
            {
                "x": "01-10-2018",
                "y": 160
            },
            {
                "x": "01-11-2018",
                "y": 297
            },
            {
                "x": "01-12-2018",
                "y": 14
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(256, 70%, 50%)",
        "data": [
            {
                "x": "01-01-2018",
                "y": 296
            },
            {
                "x": "01-02-2018",
                "y": 69
            },
            {
                "x": "01-03-2018",
                "y": 225
            },
            {
                "x": "01-04-2018",
                "y": 81
            },
            {
                "x": "01-05-2018",
                "y": 127
            },
            {
                "x": "01-06-2018",
                "y": 128
            },
            {
                "x": "01-07-2018",
                "y": 235
            },
            {
                "x": "01-08-2018",
                "y": 17
            },
            {
                "x": "01-09-2018",
                "y": 283
            },
            {
                "x": "01-10-2018",
                "y": 178
            },
            {
                "x": "01-11-2018",
                "y": 222
            },
            {
                "x": "01-12-2018",
                "y": 259
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(19, 70%, 50%)",
        "data": [
            {
                "x": "01-01-2018",
                "y": 222
            },
            {
                "x": "01-02-2018",
                "y": 124
            },
            {
                "x": "01-03-2018",
                "y": 181
            },
            {
                "x": "01-04-2018",
                "y": 191
            },
            {
                "x": "01-05-2018",
                "y": 5
            },
            {
                "x": "01-06-2018",
                "y": 297
            },
            {
                "x": "01-07-2018",
                "y": 116
            },
            {
                "x": "01-08-2018",
                "y": 89
            },
            {
                "x": "01-09-2018",
                "y": 287
            },
            {
                "x": "01-10-2018",
                "y": 43
            },
            {
                "x": "01-11-2018",
                "y": 102
            },
            {
                "x": "01-12-2018",
                "y": 142
            }
        ]
    }
]
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export default function UserGraph({ data /* see data tab */ }) {
    return (
        <ResponsiveLine
            data={stub}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'yellow_green_blue' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={4}
            pointBorderColor={{ from: 'serieColor' }}
            enablePointLabel={true}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />)
}