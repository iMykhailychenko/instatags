import { IVisionResponse } from '../../../interfaces';

export const visionResponse: IVisionResponse = {
    responses: [
        {
            logoAnnotations: [
                {
                    mid: '/m/0k8z',
                    description: 'Apple Inc.',
                    score: 0.9911639,
                    boundingPoly: {
                        vertices: [
                            {
                                x: 345,
                                y: 298,
                            },
                            {
                                x: 821,
                                y: 298,
                            },
                            {
                                x: 821,
                                y: 901,
                            },
                            {
                                x: 345,
                                y: 901,
                            },
                        ],
                    },
                },
            ],
            labelAnnotations: [
                {
                    mid: '/m/0c9ph5',
                    description: 'Flower',
                    score: 0.9781906,
                    topicality: 0.9781906,
                },
                {
                    mid: '/m/05s2s',
                    description: 'Plant',
                    score: 0.96721464,
                    topicality: 0.96721464,
                },
                {
                    mid: '/m/09ggk',
                    description: 'Purple',
                    score: 0.9041535,
                    topicality: 0.9041535,
                },
                {
                    mid: '/m/016q19',
                    description: 'Petal',
                    score: 0.89476657,
                    topicality: 0.89476657,
                },
                {
                    mid: '/m/09t49',
                    description: 'Leaf',
                    score: 0.8917984,
                    topicality: 0.8917984,
                },
                {
                    mid: '/m/01bwr',
                    description: 'Botany',
                    score: 0.87714887,
                    topicality: 0.87714887,
                },
                {
                    mid: '/m/05nnm',
                    description: 'Organism',
                    score: 0.86683005,
                    topicality: 0.86683005,
                },
                {
                    mid: '/m/01fnns',
                    description: 'Vegetation',
                    score: 0.8561668,
                    topicality: 0.8561668,
                },
                {
                    mid: '/m/0fbflw',
                    description: 'Terrestrial plant',
                    score: 0.84439075,
                    topicality: 0.84439075,
                },
                {
                    mid: '/m/01fklc',
                    description: 'Pink',
                    score: 0.84306,
                    topicality: 0.84306,
                },
            ],
            imagePropertiesAnnotation: {
                dominantColors: {
                    colors: [
                        {
                            color: {
                                red: 179,
                                green: 4,
                                blue: 95,
                            },
                            score: 0.107172884,
                            pixelFraction: 0.047138643,
                        },
                        {
                            color: {
                                red: 44,
                                green: 12,
                                blue: 22,
                            },
                            score: 0.026096338,
                            pixelFraction: 0.038289085,
                        },
                        {
                            color: {
                                red: 192,
                                green: 37,
                                blue: 238,
                            },
                            score: 0.0069103986,
                            pixelFraction: 0.0027728614,
                        },
                        {
                            color: {
                                red: 240,
                                green: 138,
                                blue: 10,
                            },
                            score: 0.0061206,
                            pixelFraction: 0.0053097345,
                        },
                        {
                            color: {
                                red: 252,
                                green: 173,
                                blue: 9,
                            },
                            score: 0.0045455773,
                            pixelFraction: 0.003480826,
                        },
                    ],
                },
            },
            cropHintsAnnotation: {
                cropHints: [
                    {
                        boundingPoly: {
                            vertices: [
                                {
                                    x: 1008,
                                },
                                {
                                    x: 2701,
                                },
                                {
                                    x: 2701,
                                    y: 3023,
                                },
                                {
                                    x: 1008,
                                    y: 3023,
                                },
                            ],
                        },
                        confidence: 0.71875006,
                        importanceFraction: 0.61090916,
                    },
                ],
            },
        },
    ],
};
