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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListUsersResponse
 */
export interface ListUsersResponse {
    /**
     * 
     * @type {number}
     * @memberof ListUsersResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof ListUsersResponse
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ListUsersResponse
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<User>}
     * @memberof ListUsersResponse
     */
    results?: Array<User>;
}

export function ListUsersResponseFromJSON(json: any): ListUsersResponse {
    return ListUsersResponseFromJSONTyped(json, false);
}

export function ListUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListUsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(UserFromJSON)),
    };
}

export function ListUsersResponseToJSON(value?: ListUsersResponse | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(UserToJSON)),
    };
}


