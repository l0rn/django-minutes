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
import {
    Meeting,
    MeetingFromJSON,
    MeetingFromJSONTyped,
    MeetingToJSON,
} from './';

/**
 * 
 * @export
 * @interface MeetingResponse
 */
export interface MeetingResponse {
    /**
     * 
     * @type {number}
     * @memberof MeetingResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof MeetingResponse
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeetingResponse
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Meeting>}
     * @memberof MeetingResponse
     */
    results?: Array<Meeting>;
}

export function MeetingResponseFromJSON(json: any): MeetingResponse {
    return MeetingResponseFromJSONTyped(json, false);
}

export function MeetingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeetingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(MeetingFromJSON)),
    };
}

export function MeetingResponseToJSON(value?: MeetingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(MeetingToJSON)),
    };
}

