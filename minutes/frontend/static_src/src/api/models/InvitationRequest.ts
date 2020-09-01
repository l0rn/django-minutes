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
 * @interface InvitationRequest
 */
export interface InvitationRequest {
    /**
     * 
     * @type {string}
     * @memberof InvitationRequest
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationRequest
     */
    email: string;
}

export function InvitationRequestFromJSON(json: any): InvitationRequest {
    return InvitationRequestFromJSONTyped(json, false);
}

export function InvitationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
    };
}

export function InvitationRequestToJSON(value?: InvitationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
    };
}


