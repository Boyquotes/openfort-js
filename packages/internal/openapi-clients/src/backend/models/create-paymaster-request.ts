/* tslint:disable */
/* eslint-disable */
/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreatePaymasterRequest
 */
export interface CreatePaymasterRequest {
    /**
     * Specifies the address of the paymaster
     * @type {string}
     * @memberof CreatePaymasterRequest
     */
    'address': string;
    /**
     * Specifies the paymaster URL
     * @type {string}
     * @memberof CreatePaymasterRequest
     */
    'url'?: string;
    /**
     * Specifies the context, that is, the arbitrary repositories that the specific paymaster may require
     * @type {object}
     * @memberof CreatePaymasterRequest
     */
    'context'?: object;
    /**
     * Specifies the name of the paymaster
     * @type {string}
     * @memberof CreatePaymasterRequest
     */
    'name'?: string;
}

