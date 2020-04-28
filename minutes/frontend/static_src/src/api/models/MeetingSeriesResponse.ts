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
    MeetingSeries,
    MeetingSeriesFromJSON,
    MeetingSeriesFromJSONTyped,
    MeetingSeriesToJSON,
} from './';

/**
 * 
 * @export
 * @interface MeetingSeriesResponse
 */
export interface MeetingSeriesResponse {
    /**
     * 
     * @type {number}
     * @memberof MeetingSeriesResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof MeetingSeriesResponse
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MeetingSeriesResponse
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<MeetingSeries>}
     * @memberof MeetingSeriesResponse
     */
    results?: Array<MeetingSeries>;
}

export function MeetingSeriesResponseFromJSON(json: any): MeetingSeriesResponse {
    return MeetingSeriesResponseFromJSONTyped(json, false);
}

export function MeetingSeriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeetingSeriesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(MeetingSeriesFromJSON)),
    };
}

export function MeetingSeriesResponseToJSON(value?: MeetingSeriesResponse | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(MeetingSeriesToJSON)),
    };
}

