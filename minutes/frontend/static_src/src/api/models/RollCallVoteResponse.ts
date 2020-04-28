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
    RollCallVote,
    RollCallVoteFromJSON,
    RollCallVoteFromJSONTyped,
    RollCallVoteToJSON,
} from './';

/**
 * 
 * @export
 * @interface RollCallVoteResponse
 */
export interface RollCallVoteResponse {
    /**
     * 
     * @type {number}
     * @memberof RollCallVoteResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof RollCallVoteResponse
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RollCallVoteResponse
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<RollCallVote>}
     * @memberof RollCallVoteResponse
     */
    results?: Array<RollCallVote>;
}

export function RollCallVoteResponseFromJSON(json: any): RollCallVoteResponse {
    return RollCallVoteResponseFromJSONTyped(json, false);
}

export function RollCallVoteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RollCallVoteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(RollCallVoteFromJSON)),
    };
}

export function RollCallVoteResponseToJSON(value?: RollCallVoteResponse | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(RollCallVoteToJSON)),
    };
}


