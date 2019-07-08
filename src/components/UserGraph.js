import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
const stub = [
    {
        "id": "japan",
        "color": "hsl(66, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 115
            },
            {
                "x": "helicopter",
                "y": 104
            },
            {
                "x": "boat",
                "y": 244
            },
            {
                "x": "train",
                "y": 288
            },
            {
                "x": "subway",
                "y": 39
            },
            {
                "x": "bus",
                "y": 58
            },
            {
                "x": "car",
                "y": 296
            },
            {
                "x": "moto",
                "y": 203
            },
            {
                "x": "bicycle",
                "y": 254
            },
            {
                "x": "horse",
                "y": 113
            },
            {
                "x": "skateboard",
                "y": 149
            },
            {
                "x": "others",
                "y": 243
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(353, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 169
            },
            {
                "x": "helicopter",
                "y": 90
            },
            {
                "x": "boat",
                "y": 51
            },
            {
                "x": "train",
                "y": 209
            },
            {
                "x": "subway",
                "y": 198
            },
            {
                "x": "bus",
                "y": 118
            },
            {
                "x": "car",
                "y": 242
            },
            {
                "x": "moto",
                "y": 39
            },
            {
                "x": "bicycle",
                "y": 266
            },
            {
                "x": "horse",
                "y": 115
            },
            {
                "x": "skateboard",
                "y": 197
            },
            {
                "x": "others",
                "y": 134
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(88, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 205
            },
            {
                "x": "helicopter",
                "y": 5
            },
            {
                "x": "boat",
                "y": 47
            },
            {
                "x": "train",
                "y": 31
            },
            {
                "x": "subway",
                "y": 67
            },
            {
                "x": "bus",
                "y": 137
            },
            {
                "x": "car",
                "y": 270
            },
            {
                "x": "moto",
                "y": 290
            },
            {
                "x": "bicycle",
                "y": 244
            },
            {
                "x": "horse",
                "y": 160
            },
            {
                "x": "skateboard",
                "y": 297
            },
            {
                "x": "others",
                "y": 14
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(256, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 296
            },
            {
                "x": "helicopter",
                "y": 69
            },
            {
                "x": "boat",
                "y": 225
            },
            {
                "x": "train",
                "y": 81
            },
            {
                "x": "subway",
                "y": 127
            },
            {
                "x": "bus",
                "y": 128
            },
            {
                "x": "car",
                "y": 235
            },
            {
                "x": "moto",
                "y": 17
            },
            {
                "x": "bicycle",
                "y": 283
            },
            {
                "x": "horse",
                "y": 178
            },
            {
                "x": "skateboard",
                "y": 222
            },
            {
                "x": "others",
                "y": 259
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(19, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 222
            },
            {
                "x": "helicopter",
                "y": 124
            },
            {
                "x": "boat",
                "y": 181
            },
            {
                "x": "train",
                "y": 191
            },
            {
                "x": "subway",
                "y": 5
            },
            {
                "x": "bus",
                "y": 297
            },
            {
                "x": "car",
                "y": 116
            },
            {
                "x": "moto",
                "y": 89
            },
            {
                "x": "bicycle",
                "y": 287
            },
            {
                "x": "horse",
                "y": 43
            },
            {
                "x": "skateboard",
                "y": 102
            },
            {
                "x": "others",
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