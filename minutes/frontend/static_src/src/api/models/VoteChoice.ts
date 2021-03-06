/* tslint:disable */
/* eslint-disable */
/**
 * Minutes API V1
 * django-minutes API specifications
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VoteChoice
 */
export interface VoteChoice {
    /**
     * 
     * @type {number}
     * @memberof VoteChoice
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof VoteChoice
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VoteChoice
     */
    colorCode?: number;
}

export function VoteChoiceFromJSON(json: any): VoteChoice {
    return VoteChoiceFromJSONTyped(json, false);
}

export function VoteChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): VoteChoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'colorCode': !exists(json, 'color_code') ? undefined : json['color_code'],
    };
}

export function VoteChoiceToJSON(value?: VoteChoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'color_code': value.colorCode,
    };
}


