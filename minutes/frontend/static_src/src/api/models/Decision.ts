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
 * @interface Decision
 */
export interface Decision {
    /**
     * 
     * @type {number}
     * @memberof Decision
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Decision
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Decision
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Decision
     */
    agendaItem: number;
}

export function DecisionFromJSON(json: any): Decision {
    return DecisionFromJSONTyped(json, false);
}

export function DecisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Decision {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'],
        'agendaItem': json['agenda_item'],
    };
}

export function DecisionToJSON(value?: Decision | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'agenda_item': value.agendaItem,
    };
}


