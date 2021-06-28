import { IAdaptedHashtag, IVisionResponse } from '../../interfaces';

export const adapter = (data: IVisionResponse): IAdaptedHashtag[] => {
    const result: IAdaptedHashtag[] = [];
    if (data?.responses?.[0]?.labelAnnotations) {
        data.responses[0].labelAnnotations.forEach(item => {
            result.push({ tag: item.description.replace(/ /g, '_').replace(/\W+/g, '').toLowerCase(), active: false });
        });
    }

    if (data?.responses?.[0]?.logoAnnotations) {
        data.responses[0].logoAnnotations.forEach(item => {
            result.push({ tag: item.description.replace(/ /g, '_').replace(/\W+/g, '').toLowerCase(), active: false });
        });
    }

    return result;
};
