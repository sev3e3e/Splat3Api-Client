/* tslint:disable */
/* eslint-disable */
/**
 * Splat3Api
 * このAPIは、Splatoon3の関連データを取得するための非公式APIです。  ## Rate Limit  このAPIには、1分あたり100回のレート制限があります。どのエンドポイントにおいても、以下ようなレスポンスヘッダーが含まれています。  ``` RateLimit-Limit: 100 RateLimit-Remaining: 99 RateLimit-Reset: 589 ```  - `RateLimit-Limit`はレート制限の基準数です。この値を超えると、再度リクエストを送信できるようになるまでブロックされます。 - `RateLimit-Remaining`は残りのリクエスト回数です。 - `RateLimit-Reset`は`RateLimit-Remaining`がリセットされるまでの秒数です。  レート制限はIPごとに行われます。また、すべてのリクエストがカウントの対象であり、どのレスポンスでも1リクエストとしてカウントされます。  - 404 Not Found - 400 Bad Request - 204 No Content - 200 OK
 *
 * The version of the OpenAPI document: 0.0.6-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetAllSchedules200Response,
  SalmonRunSchedule,
  Schedule,
} from '../models';
import {
    GetAllSchedules200ResponseFromJSON,
    GetAllSchedules200ResponseToJSON,
    SalmonRunScheduleFromJSON,
    SalmonRunScheduleToJSON,
    ScheduleFromJSON,
    ScheduleToJSON,
} from '../models';

/**
 * 
 */
export class ScheduleApi extends runtime.BaseAPI {

    /**
     * `regular match`, `bankaraMatch Open`, `bankaraMatch Challenge`, `Salmon Run`, `X Battle`のスケジュールを返します。
     * Get All Schedules
     */
    async getAllSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllSchedules200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllSchedules200ResponseFromJSON(jsonValue));
    }

    /**
     * `regular match`, `bankaraMatch Open`, `bankaraMatch Challenge`, `Salmon Run`, `X Battle`のスケジュールを返します。
     * Get All Schedules
     */
    async getAllSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllSchedules200Response> {
        const response = await this.getAllSchedulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * バンカラマッチ(チャレンジ)のScheduleを取得します。
     * Get Bankara(Challenge) Schedules
     */
    async getBankaraChallengeSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/bankara/challenge`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScheduleFromJSON));
    }

    /**
     * バンカラマッチ(チャレンジ)のScheduleを取得します。
     * Get Bankara(Challenge) Schedules
     */
    async getBankaraChallengeSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schedule>> {
        const response = await this.getBankaraChallengeSchedulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * バンカラマッチ(オープン)のScheduleを取得します。
     * Get Bankara(Open) Schedules
     */
    async getBankaraOpenSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/bankara/open`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScheduleFromJSON));
    }

    /**
     * バンカラマッチ(オープン)のScheduleを取得します。
     * Get Bankara(Open) Schedules
     */
    async getBankaraOpenSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schedule>> {
        const response = await this.getBankaraOpenSchedulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * バンカラマッチのScheduleを取得します。
     * Get Bankara Open/Challenge Schedules
     */
    async getBankaraSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/bankara`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScheduleFromJSON));
    }

    /**
     * バンカラマッチのScheduleを取得します。
     * Get Bankara Open/Challenge Schedules
     */
    async getBankaraSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schedule>> {
        const response = await this.getBankaraSchedulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * レギュラーマッチのScheduleを取得します。
     * Get Regular Schedules
     */
    async getRegularScheduleRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/regular`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScheduleFromJSON));
    }

    /**
     * レギュラーマッチのScheduleを取得します。
     * Get Regular Schedules
     */
    async getRegularSchedule(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schedule>> {
        const response = await this.getRegularScheduleRaw(initOverrides);
        return await response.value();
    }

    /**
     * サーモンランのScheduleを取得します。
     * Get SalmonRun Schedules
     */
    async getSalmonrunSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SalmonRunSchedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/salmonRun`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SalmonRunScheduleFromJSON));
    }

    /**
     * サーモンランのScheduleを取得します。
     * Get SalmonRun Schedules
     */
    async getSalmonrunSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SalmonRunSchedule>> {
        const response = await this.getSalmonrunSchedulesRaw(initOverrides);
        return await response.value();
    }

    /**
     * XマッチのScheduleを取得します。
     * Get Bankara(Challenge) Schedules
     */
    async getXBattleSchedulesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Schedule>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/schedules/xBattle`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScheduleFromJSON));
    }

    /**
     * XマッチのScheduleを取得します。
     * Get Bankara(Challenge) Schedules
     */
    async getXBattleSchedules(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Schedule>> {
        const response = await this.getXBattleSchedulesRaw(initOverrides);
        return await response.value();
    }

}