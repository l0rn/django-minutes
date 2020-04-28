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
 * @interface AgendaItem
 */
export interface AgendaItem {
    /**
     * 
     * @type {number}
     * @memberof AgendaItem
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof AgendaItem
     */
    meeting: number;
    /**
     * 
     * @type {string}
     * @memberof AgendaItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AgendaItem
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AgendaItem
     */
    readonly mentions?: Array<string>;
}

export function AgendaItemFromJSON(json: any): AgendaItem {
    return AgendaItemFromJSONTyped(json, false);
}

export function AgendaItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgendaItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'meeting': json['meeting'],
        'name': json['name'],
        'description': json['description'],
        'mentions': !exists(json, 'mentions') ? undefined : json['mentions'],
    };
}

export function AgendaItemToJSON(value?: AgendaItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meeting': value.meeting,
        'name': value.name,
        'description': value.description,
    };
}


