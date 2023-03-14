/* tslint:disable */
/* eslint-disable */
/**
 * Splat3Api
 * このAPIは、Splatoon3の関連データを取得するための非公式APIです。  ## Rate Limit  このAPIには、1分あたり100回のレート制限があります。どのエンドポイントにおいても、以下のようなレスポンスヘッダーが含まれています。  ``` RateLimit-Limit: 100 RateLimit-Remaining: 99 RateLimit-Reset: 589 ```  - `RateLimit-Limit`はレート制限の基準数です。この値を超えると、再度リクエストを送信できるようになるまでブロックされます。 - `RateLimit-Remaining`は残りのリクエスト回数です。 - `RateLimit-Reset`は`RateLimit-Remaining`がリセットされるまでの秒数です。  レート制限はIPごとに行われます。また、すべてのリクエストがカウントの対象であり、どのレスポンスであっても1リクエストとしてカウントされます。  - 404 Not Found - 400 Bad Request - 204 No Content - 200 OK
 *
 * The version of the OpenAPI document: 0.0.21-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  XRankingPlayerData,
} from '../models';
import {
    XRankingPlayerDataFromJSON,
    XRankingPlayerDataToJSON,
} from '../models';

export interface GetAreaXRankingsRequest {
    from?: number;
    to?: number;
}

export interface GetClamXRankingsRequest {
    from?: number;
    to?: number;
}

export interface GetRainmakerXRankingsRequest {
    from?: number;
    to?: number;
}

export interface GetTowerXRankingsRequest {
    from?: number;
    to?: number;
}

/**
 * 
 */
export class RankingApi extends runtime.BaseAPI {

    /**
     * エリアのXバトルランキングを取得します。
     * Get Area X Rankings
     */
    async getAreaXRankingsRaw(requestParameters: GetAreaXRankingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<XRankingPlayerData>>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/xRankings/area`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(XRankingPlayerDataFromJSON));
    }

    /**
     * エリアのXバトルランキングを取得します。
     * Get Area X Rankings
     */
    async getAreaXRankings(requestParameters: GetAreaXRankingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<XRankingPlayerData>> {
        const response = await this.getAreaXRankingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * アサリのXバトルランキングを取得します。
     * Get Clam X Rankings
     */
    async getClamXRankingsRaw(requestParameters: GetClamXRankingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<XRankingPlayerData>>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/xRankings/clam`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(XRankingPlayerDataFromJSON));
    }

    /**
     * アサリのXバトルランキングを取得します。
     * Get Clam X Rankings
     */
    async getClamXRankings(requestParameters: GetClamXRankingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<XRankingPlayerData>> {
        const response = await this.getClamXRankingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ホコのXバトルランキングを取得します。
     * Get Rainmaker X Rankings
     */
    async getRainmakerXRankingsRaw(requestParameters: GetRainmakerXRankingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<XRankingPlayerData>>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/xRankings/rainmaker`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(XRankingPlayerDataFromJSON));
    }

    /**
     * ホコのXバトルランキングを取得します。
     * Get Rainmaker X Rankings
     */
    async getRainmakerXRankings(requestParameters: GetRainmakerXRankingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<XRankingPlayerData>> {
        const response = await this.getRainmakerXRankingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * ヤグラのXバトルランキングを取得します。
     * Get Tower X Rankings
     */
    async getTowerXRankingsRaw(requestParameters: GetTowerXRankingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<XRankingPlayerData>>> {
        const queryParameters: any = {};

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/xRankings/tower`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(XRankingPlayerDataFromJSON));
    }

    /**
     * ヤグラのXバトルランキングを取得します。
     * Get Tower X Rankings
     */
    async getTowerXRankings(requestParameters: GetTowerXRankingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<XRankingPlayerData>> {
        const response = await this.getTowerXRankingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
