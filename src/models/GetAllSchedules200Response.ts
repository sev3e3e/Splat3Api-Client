/* tslint:disable */
/* eslint-disable */
/**
 * Splat3Api
 * このAPIは、Splatoon3の関連データを取得するための非公式APIです。  ## Rate Limit  このAPIには、1分あたり100回のレート制限があります。どのエンドポイントにおいても、以下ようなレスポンスヘッダーが含まれています。  ``` RateLimit-Limit: 100 RateLimit-Remaining: 99 RateLimit-Reset: 589 ```  - `RateLimit-Limit`はレート制限の基準数です。この値を超えると、再度リクエストを送信できるようになるまでブロックされます。 - `RateLimit-Remaining`は残りのリクエスト回数です。 - `RateLimit-Reset`は`RateLimit-Remaining`がリセットされるまでの秒数です。  レート制限はIPごとに行われます。また、すべてのリクエストがカウントの対象であり、どのレスポンスでも1リクエストとしてカウントされます。  - 404 Not Found - 400 Bad Request - 204 No Content - 200 OK
 *
 * The version of the OpenAPI document: 0.0.1-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SalmonRunSchedule } from './SalmonRunSchedule';
import {
    SalmonRunScheduleFromJSON,
    SalmonRunScheduleFromJSONTyped,
    SalmonRunScheduleToJSON,
} from './SalmonRunSchedule';
import type { Schedule } from './Schedule';
import {
    ScheduleFromJSON,
    ScheduleFromJSONTyped,
    ScheduleToJSON,
} from './Schedule';

/**
 * 
 * @export
 * @interface GetAllSchedules200Response
 */
export interface GetAllSchedules200Response {
    /**
     * 
     * @type {Array<Schedule>}
     * @memberof GetAllSchedules200Response
     */
    bankaraChallengeSchedules?: Array<Schedule>;
    /**
     * 
     * @type {Array<Schedule>}
     * @memberof GetAllSchedules200Response
     */
    bankaraOpenSchedules?: Array<Schedule>;
    /**
     * 
     * @type {Array<Schedule>}
     * @memberof GetAllSchedules200Response
     */
    regularSchedules?: Array<Schedule>;
    /**
     * 
     * @type {Array<SalmonRunSchedule>}
     * @memberof GetAllSchedules200Response
     */
    salmonRunSchedules?: Array<SalmonRunSchedule>;
    /**
     * 
     * @type {Array<Schedule>}
     * @memberof GetAllSchedules200Response
     */
    xSchedules?: Array<Schedule>;
}

/**
 * Check if a given object implements the GetAllSchedules200Response interface.
 */
export function instanceOfGetAllSchedules200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAllSchedules200ResponseFromJSON(json: any): GetAllSchedules200Response {
    return GetAllSchedules200ResponseFromJSONTyped(json, false);
}

export function GetAllSchedules200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllSchedules200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankaraChallengeSchedules': !exists(json, 'bankaraChallengeSchedules') ? undefined : ((json['bankaraChallengeSchedules'] as Array<any>).map(ScheduleFromJSON)),
        'bankaraOpenSchedules': !exists(json, 'bankaraOpenSchedules') ? undefined : ((json['bankaraOpenSchedules'] as Array<any>).map(ScheduleFromJSON)),
        'regularSchedules': !exists(json, 'regularSchedules') ? undefined : ((json['regularSchedules'] as Array<any>).map(ScheduleFromJSON)),
        'salmonRunSchedules': !exists(json, 'salmonRunSchedules') ? undefined : ((json['salmonRunSchedules'] as Array<any>).map(SalmonRunScheduleFromJSON)),
        'xSchedules': !exists(json, 'xSchedules') ? undefined : ((json['xSchedules'] as Array<any>).map(ScheduleFromJSON)),
    };
}

export function GetAllSchedules200ResponseToJSON(value?: GetAllSchedules200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankaraChallengeSchedules': value.bankaraChallengeSchedules === undefined ? undefined : ((value.bankaraChallengeSchedules as Array<any>).map(ScheduleToJSON)),
        'bankaraOpenSchedules': value.bankaraOpenSchedules === undefined ? undefined : ((value.bankaraOpenSchedules as Array<any>).map(ScheduleToJSON)),
        'regularSchedules': value.regularSchedules === undefined ? undefined : ((value.regularSchedules as Array<any>).map(ScheduleToJSON)),
        'salmonRunSchedules': value.salmonRunSchedules === undefined ? undefined : ((value.salmonRunSchedules as Array<any>).map(SalmonRunScheduleToJSON)),
        'xSchedules': value.xSchedules === undefined ? undefined : ((value.xSchedules as Array<any>).map(ScheduleToJSON)),
    };
}

