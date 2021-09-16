/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  private mergeRequestParams;
  private createFormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<any>;
}
/**
 * @title httpbin.org
 * @version 0.9.2
 * @baseUrl https://httpbin.org
 * @contact <me@kennethreitz.org> (https://kennethreitz.org)
 *
 * A simple HTTP Request & Response Service.<br/> <br/> <b>Run locally: </b> <code>$ docker run -p 80:80 kennethreitz/httpbin</code>
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  absoluteRedirect: {
    /**
     * No description
     *
     * @tags Redirects
     * @name AbsoluteRedirectDetail
     * @summary Absolutely 302 Redirects n times.
     * @request GET:/absolute-redirect/{n}
     */
    absoluteRedirectDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  anything: {
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingDelete
     * @summary Returns anything passed in request data.
     * @request DELETE:/anything
     */
    anythingDelete: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingList
     * @summary Returns anything passed in request data.
     * @request GET:/anything
     */
    anythingList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingPartialUpdate
     * @summary Returns anything passed in request data.
     * @request PATCH:/anything
     */
    anythingPartialUpdate: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingCreate
     * @summary Returns anything passed in request data.
     * @request POST:/anything
     */
    anythingCreate: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingUpdate
     * @summary Returns anything passed in request data.
     * @request PUT:/anything
     */
    anythingUpdate: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name TraceAnything
     * @summary Returns anything passed in request data.
     * @request TRACE:/anything
     */
    traceAnything: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingDelete2
     * @summary Returns anything passed in request data.
     * @request DELETE:/anything/{anything}
     * @originalName anythingDelete
     * @duplicate
     */
    anythingDelete2: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingDetail
     * @summary Returns anything passed in request data.
     * @request GET:/anything/{anything}
     */
    anythingDetail: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingPartialUpdate2
     * @summary Returns anything passed in request data.
     * @request PATCH:/anything/{anything}
     * @originalName anythingPartialUpdate
     * @duplicate
     */
    anythingPartialUpdate2: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingCreate2
     * @summary Returns anything passed in request data.
     * @request POST:/anything/{anything}
     * @originalName anythingCreate
     * @duplicate
     */
    anythingCreate2: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingUpdate2
     * @summary Returns anything passed in request data.
     * @request PUT:/anything/{anything}
     * @originalName anythingUpdate
     * @duplicate
     */
    anythingUpdate2: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Anything
     * @name TraceAnything2
     * @summary Returns anything passed in request data.
     * @request TRACE:/anything/{anything}
     * @originalName traceAnything
     * @duplicate
     */
    traceAnything2: (anything: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  base64: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name Base64Detail
     * @summary Decodes base64url-encoded string.
     * @request GET:/base64/{value}
     */
    base64Detail: (value?: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  basicAuth: {
    /**
     * No description
     *
     * @tags Auth
     * @name BasicAuthDetail
     * @summary Prompts the user for authorization using HTTP Basic Auth.
     * @request GET:/basic-auth/{user}/{passwd}
     */
    basicAuthDetail: (user?: string, passwd?: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  bearer: {
    /**
     * No description
     *
     * @tags Auth
     * @name BearerList
     * @summary Prompts the user for authorization using bearer authentication.
     * @request GET:/bearer
     */
    bearerList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  brotli: {
    /**
     * No description
     *
     * @tags Response formats
     * @name BrotliList
     * @summary Returns Brotli-encoded data.
     * @request GET:/brotli
     */
    brotliList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  bytes: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name BytesDetail
     * @summary Returns n random bytes generated with given seed
     * @request GET:/bytes/{n}
     */
    bytesDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  cache: {
    /**
     * No description
     *
     * @tags Response inspection
     * @name CacheList
     * @summary Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
     * @request GET:/cache
     */
    cacheList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Response inspection
     * @name CacheDetail
     * @summary Sets a Cache-Control header for n seconds.
     * @request GET:/cache/{value}
     */
    cacheDetail: (value?: number, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  cookies: {
    /**
     * No description
     *
     * @tags Cookies
     * @name CookiesList
     * @summary Returns cookie data.
     * @request GET:/cookies
     */
    cookiesList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Cookies
     * @name DeleteList
     * @summary Deletes cookie(s) as provided by the query string and redirects to cookie list.
     * @request GET:/cookies/delete
     */
    deleteList: (
      query?: {
        freeform?: Record<string, string>;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Cookies
     * @name GetCookies
     * @summary Sets cookie(s) as provided by the query string and redirects to cookie list.
     * @request GET:/cookies/set
     */
    getCookies: (
      query?: {
        freeform?: Record<string, string>;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Cookies
     * @name GetCookies2
     * @summary Sets a cookie and redirects to cookie list.
     * @request GET:/cookies/set/{name}/{value}
     * @originalName getCookies
     * @duplicate
     */
    getCookies2: (name?: string, value?: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  deflate: {
    /**
     * No description
     *
     * @tags Response formats
     * @name DeflateList
     * @summary Returns Deflate-encoded data.
     * @request GET:/deflate
     */
    deflateList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  delay: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayDelete
     * @summary Returns a delayed response (max of 10 seconds).
     * @request DELETE:/delay/{delay}
     */
    delayDelete: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayDetail
     * @summary Returns a delayed response (max of 10 seconds).
     * @request GET:/delay/{delay}
     */
    delayDetail: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayPartialUpdate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request PATCH:/delay/{delay}
     */
    delayPartialUpdate: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayCreate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request POST:/delay/{delay}
     */
    delayCreate: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayUpdate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request PUT:/delay/{delay}
     */
    delayUpdate: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Dynamic data
     * @name TraceDelay
     * @summary Returns a delayed response (max of 10 seconds).
     * @request TRACE:/delay/{delay}
     */
    traceDelay: (delay?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  delete: {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name DeleteDelete
     * @summary The request's DELETE parameters.
     * @request DELETE:/delete
     */
    deleteDelete: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  deny: {
    /**
     * No description
     *
     * @tags Response formats
     * @name DenyList
     * @summary Returns page denied by robots.txt rules.
     * @request GET:/deny
     */
    denyList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  digestAuth: {
    /**
     * No description
     *
     * @tags Auth
     * @name DigestAuthDetail
     * @summary Prompts the user for authorization using Digest Auth.
     * @request GET:/digest-auth/{qop}/{user}/{passwd}
     */
    digestAuthDetail: (
      qop?: string,
      user?: string,
      passwd?: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Auth
     * @name DigestAuthDetail2
     * @summary Prompts the user for authorization using Digest Auth + Algorithm.
     * @request GET:/digest-auth/{qop}/{user}/{passwd}/{algorithm}
     * @originalName digestAuthDetail
     * @duplicate
     */
    digestAuthDetail2: (
      qop?: string,
      user?: string,
      passwd?: string,
      algorithm?: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description allow settings the stale_after argument.
     *
     * @tags Auth
     * @name DigestAuthDetail3
     * @summary Prompts the user for authorization using Digest Auth + Algorithm.
     * @request GET:/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}
     * @originalName digestAuthDetail
     * @duplicate
     */
    digestAuthDetail3: (
      qop?: string,
      user?: string,
      passwd?: string,
      algorithm?: string,
      staleAfter?: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
  };
  drip: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DripList
     * @summary Drips data over a duration after an optional initial delay.
     * @request GET:/drip
     */
    dripList: (
      query?: {
        duration?: number;
        numbytes?: number;
        code?: number;
        delay?: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
  };
  encoding: {
    /**
     * No description
     *
     * @tags Response formats
     * @name Utf8List
     * @summary Returns a UTF-8 encoded body.
     * @request GET:/encoding/utf8
     */
    utf8List: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  etag: {
    /**
     * No description
     *
     * @tags Response inspection
     * @name EtagDetail
     * @summary Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
     * @request GET:/etag/{etag}
     */
    etagDetail: (etag: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  get: {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name GetGet
     * @summary The request's query parameters.
     * @request GET:/get
     */
    getGet: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  gzip: {
    /**
     * No description
     *
     * @tags Response formats
     * @name GzipList
     * @summary Returns GZip-encoded data.
     * @request GET:/gzip
     */
    gzipList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  headers: {
    /**
     * No description
     *
     * @tags Request inspection
     * @name HeadersList
     * @summary Return the incoming request's HTTP headers.
     * @request GET:/headers
     */
    headersList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  hiddenBasicAuth: {
    /**
     * No description
     *
     * @tags Auth
     * @name HiddenBasicAuthDetail
     * @summary Prompts the user for authorization using HTTP Basic Auth.
     * @request GET:/hidden-basic-auth/{user}/{passwd}
     */
    hiddenBasicAuthDetail: (user?: string, passwd?: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  html: {
    /**
     * No description
     *
     * @tags Response formats
     * @name HtmlList
     * @summary Returns a simple HTML document.
     * @request GET:/html
     */
    htmlList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  image: {
    /**
     * No description
     *
     * @tags Images
     * @name ImageList
     * @summary Returns a simple image of the type suggest by the Accept header.
     * @request GET:/image
     */
    imageList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Images
     * @name JpegList
     * @summary Returns a simple JPEG image.
     * @request GET:/image/jpeg
     */
    jpegList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Images
     * @name GetImage
     * @summary Returns a simple PNG image.
     * @request GET:/image/png
     */
    getImage: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Images
     * @name GetImage2
     * @summary Returns a simple SVG image.
     * @request GET:/image/svg
     * @originalName getImage
     * @duplicate
     */
    getImage2: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Images
     * @name WebpList
     * @summary Returns a simple WEBP image.
     * @request GET:/image/webp
     */
    webpList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  ip: {
    /**
     * No description
     *
     * @tags Request inspection
     * @name GetIp
     * @summary Returns the requester's IP Address.
     * @request GET:/ip
     */
    getIp: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  json: {
    /**
     * No description
     *
     * @tags Response formats
     * @name JsonList
     * @summary Returns a simple JSON document.
     * @request GET:/json
     */
    jsonList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  links: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name LinksDetail
     * @summary Generate a page containing n links to other pages which do the same.
     * @request GET:/links/{n}/{offset}
     */
    linksDetail: (n?: any, offset?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  patch: {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PatchPartialUpdate
     * @summary The request's PATCH parameters.
     * @request PATCH:/patch
     */
    patchPartialUpdate: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  post: {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PostCreate
     * @summary The request's POST parameters.
     * @request POST:/post
     */
    postCreate: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  put: {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PutPut
     * @summary The request's PUT parameters.
     * @request PUT:/put
     */
    putPut: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  range: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name RangeDetail
     * @summary Streams n random bytes generated with given seed, at given chunk size per packet.
     * @request GET:/range/{numbytes}
     */
    rangeDetail: (numbytes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  redirectTo: {
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToDelete
     * @summary 302/3XX Redirects to the given URL.
     * @request DELETE:/redirect-to
     */
    redirectToDelete: (params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToList
     * @summary 302/3XX Redirects to the given URL.
     * @request GET:/redirect-to
     */
    redirectToList: (
      query: {
        url: string;
        status_code?: int;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToPartialUpdate
     * @summary 302/3XX Redirects to the given URL.
     * @request PATCH:/redirect-to
     */
    redirectToPartialUpdate: (params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToCreate
     * @summary 302/3XX Redirects to the given URL.
     * @request POST:/redirect-to
     */
    redirectToCreate: (
      data: {
        url: string;
        status_code?: int;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToUpdate
     * @summary 302/3XX Redirects to the given URL.
     * @request PUT:/redirect-to
     */
    redirectToUpdate: (
      data: {
        url: string;
        status_code?: int;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Redirects
     * @name TraceRedirectTo
     * @summary 302/3XX Redirects to the given URL.
     * @request TRACE:/redirect-to
     */
    traceRedirectTo: (params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  redirect: {
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectDetail
     * @summary 302 Redirects n times.
     * @request GET:/redirect/{n}
     */
    redirectDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  relativeRedirect: {
    /**
     * No description
     *
     * @tags Redirects
     * @name RelativeRedirectDetail
     * @summary Relatively 302 Redirects n times.
     * @request GET:/relative-redirect/{n}
     */
    relativeRedirectDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  responseHeaders: {
    /**
     * No description
     *
     * @tags Response inspection
     * @name ResponseHeadersList
     * @summary Returns a set of response headers from the query string.
     * @request GET:/response-headers
     */
    responseHeadersList: (
      query?: {
        freeform?: Record<string, string>;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Response inspection
     * @name ResponseHeadersCreate
     * @summary Returns a set of response headers from the query string.
     * @request POST:/response-headers
     */
    responseHeadersCreate: (
      query?: {
        freeform?: Record<string, string>;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
  };
  robotsTxt: {
    /**
     * No description
     *
     * @tags Response formats
     * @name RobotsTxtList
     * @summary Returns some robots.txt rules.
     * @request GET:/robots.txt
     */
    robotsTxtList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  status: {
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusDelete
     * @summary Return status code or random status code if more than one are given
     * @request DELETE:/status/{codes}
     */
    statusDelete: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusDetail
     * @summary Return status code or random status code if more than one are given
     * @request GET:/status/{codes}
     */
    statusDetail: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusPartialUpdate
     * @summary Return status code or random status code if more than one are given
     * @request PATCH:/status/{codes}
     */
    statusPartialUpdate: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusCreate
     * @summary Return status code or random status code if more than one are given
     * @request POST:/status/{codes}
     */
    statusCreate: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusUpdate
     * @summary Return status code or random status code if more than one are given
     * @request PUT:/status/{codes}
     */
    statusUpdate: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Status codes
     * @name TraceStatus
     * @summary Return status code or random status code if more than one are given
     * @request TRACE:/status/{codes}
     */
    traceStatus: (codes?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  streamBytes: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name StreamBytesDetail
     * @summary Streams n random bytes generated with given seed, at given chunk size per packet.
     * @request GET:/stream-bytes/{n}
     */
    streamBytesDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  stream: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name StreamDetail
     * @summary Stream n JSON responses
     * @request GET:/stream/{n}
     */
    streamDetail: (n?: any, params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  userAgent: {
    /**
     * No description
     *
     * @tags Request inspection
     * @name UserAgentList
     * @summary Return the incoming requests's User-Agent header.
     * @request GET:/user-agent
     */
    userAgentList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  uuid: {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name UuidList
     * @summary Return a UUID4.
     * @request GET:/uuid
     */
    uuidList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
  xml: {
    /**
     * No description
     *
     * @tags Response formats
     * @name GetXml
     * @summary Returns a simple XML document.
     * @request GET:/xml
     */
    getXml: (params?: RequestParams) => Promise<AxiosResponse<void>>;
  };
}
