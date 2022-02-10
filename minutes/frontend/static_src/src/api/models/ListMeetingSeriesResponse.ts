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
 * @interface ListMeetingSeriesResponse
 */
export interface ListMeetingSeriesResponse {
    /**
     * 
     * @type {number}
     * @memberof ListMeetingSeriesResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof ListMeetingSeriesResponse
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListMeetingSeriesResponse
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<MeetingSeries>}
     * @memberof ListMeetingSeriesResponse
     */
    results?: Array<MeetingSeries>;
}

export function ListMeetingSeriesResponseFromJSON(json: any): ListMeetingSeriesResponse {
    return ListMeetingSeriesResponseFromJSONTyped(json, false);
}

export function ListMeetingSeriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMeetingSeriesResponse {
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

export function ListMeetingSeriesResponseToJSON(value?: ListMeetingSeriesResponse | null): any {
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

