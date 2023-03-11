/* tslint:disable */
/* eslint-disable */
/**
 * Splat3Api
 * このAPIは、Splatoon3の関連データを取得するための非公式APIです。  ## Rate Limit  このAPIには、1分あたり100回のレート制限があります。どのエンドポイントにおいても、以下ようなレスポンスヘッダーが含まれています。  ``` RateLimit-Limit: 100 RateLimit-Remaining: 99 RateLimit-Reset: 589 ```  - `RateLimit-Limit`はレート制限の基準数です。この値を超えると、再度リクエストを送信できるようになるまでブロックされます。 - `RateLimit-Remaining`は残りのリクエスト回数です。 - `RateLimit-Reset`は`RateLimit-Remaining`がリセットされるまでの秒数です。  レート制限はIPごとに行われます。また、すべてのリクエストがカウントの対象であり、どのレスポンスであっても1リクエストとしてカウントされます。  - 404 Not Found - 400 Bad Request - 204 No Content - 200 OK
 *
 * The version of the OpenAPI document: 0.0.15-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * XRankingのプレイヤーデータ
 * @export
 * @interface XRankingPlayerData
 */
export interface XRankingPlayerData {
    /**
     * 
     * @type {string}
     * @memberof XRankingPlayerData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof XRankingPlayerData
     */
    nameId?: string;
    /**
     * 
     * @type {number}
     * @memberof XRankingPlayerData
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof XRankingPlayerData
     */
    xPower?: number;
    /**
     * 
     * @type {string}
     * @memberof XRankingPlayerData
     */
    weapon?: string;
}

/**
 * Check if a given object implements the XRankingPlayerData interface.
 */
export function instanceOfXRankingPlayerData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XRankingPlayerDataFromJSON(json: any): XRankingPlayerData {
    return XRankingPlayerDataFromJSONTyped(json, false);
}

export function XRankingPlayerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): XRankingPlayerData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nameId': !exists(json, 'nameId') ? undefined : json['nameId'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'xPower': !exists(json, 'xPower') ? undefined : json['xPower'],
        'weapon': !exists(json, 'weapon') ? undefined : json['weapon'],
    };
}

export function XRankingPlayerDataToJSON(value?: XRankingPlayerData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'nameId': value.nameId,
        'rank': value.rank,
        'xPower': value.xPower,
        'weapon': value.weapon,
    };
}

