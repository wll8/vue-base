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

import axios from "axios";
export var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://httpbin.org" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  setSecurityData = (data) => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
  createFormData(input) {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }
  request = async ({ secure, path, type, query, format, body, ...params }) => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;
    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};
      body = this.createFormData(body);
    }
    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
/**
 * @title httpbin.org
 * @version 0.9.2
 * @baseUrl https://httpbin.org
 * @contact <me@kennethreitz.org> (https://kennethreitz.org)
 *
 * A simple HTTP Request & Response Service.<br/> <br/> <b>Run locally: </b> <code>$ docker run -p 80:80 kennethreitz/httpbin</code>
 */
export class Api extends HttpClient {
  absoluteRedirect = {
    /**
     * No description
     *
     * @tags Redirects
     * @name AbsoluteRedirectDetail
     * @summary Absolutely 302 Redirects n times.
     * @request GET:/absolute-redirect/{n}
     */
    absoluteRedirectDetail: (n, params = {}) =>
      this.request({
        path: `/absolute-redirect/${n}`,
        method: "GET",
        ...params,
      }),
  };
  anything = {
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingDelete
     * @summary Returns anything passed in request data.
     * @request DELETE:/anything
     */
    anythingDelete: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingList
     * @summary Returns anything passed in request data.
     * @request GET:/anything
     */
    anythingList: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingPartialUpdate
     * @summary Returns anything passed in request data.
     * @request PATCH:/anything
     */
    anythingPartialUpdate: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "PATCH",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingCreate
     * @summary Returns anything passed in request data.
     * @request POST:/anything
     */
    anythingCreate: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "POST",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingUpdate
     * @summary Returns anything passed in request data.
     * @request PUT:/anything
     */
    anythingUpdate: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "PUT",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name TraceAnything
     * @summary Returns anything passed in request data.
     * @request TRACE:/anything
     */
    traceAnything: (params = {}) =>
      this.request({
        path: `/anything`,
        method: "TRACE",
        ...params,
      }),
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
    anythingDelete2: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Anything
     * @name AnythingDetail
     * @summary Returns anything passed in request data.
     * @request GET:/anything/{anything}
     */
    anythingDetail: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "GET",
        ...params,
      }),
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
    anythingPartialUpdate2: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "PATCH",
        ...params,
      }),
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
    anythingCreate2: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "POST",
        ...params,
      }),
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
    anythingUpdate2: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "PUT",
        ...params,
      }),
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
    traceAnything2: (anything, params = {}) =>
      this.request({
        path: `/anything/${anything}`,
        method: "TRACE",
        ...params,
      }),
  };
  base64 = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name Base64Detail
     * @summary Decodes base64url-encoded string.
     * @request GET:/base64/{value}
     */
    base64Detail: (value, params = {}) =>
      this.request({
        path: `/base64/${value}`,
        method: "GET",
        ...params,
      }),
  };
  basicAuth = {
    /**
     * No description
     *
     * @tags Auth
     * @name BasicAuthDetail
     * @summary Prompts the user for authorization using HTTP Basic Auth.
     * @request GET:/basic-auth/{user}/{passwd}
     */
    basicAuthDetail: (user, passwd, params = {}) =>
      this.request({
        path: `/basic-auth/${user}/${passwd}`,
        method: "GET",
        ...params,
      }),
  };
  bearer = {
    /**
     * No description
     *
     * @tags Auth
     * @name BearerList
     * @summary Prompts the user for authorization using bearer authentication.
     * @request GET:/bearer
     */
    bearerList: (params = {}) =>
      this.request({
        path: `/bearer`,
        method: "GET",
        ...params,
      }),
  };
  brotli = {
    /**
     * No description
     *
     * @tags Response formats
     * @name BrotliList
     * @summary Returns Brotli-encoded data.
     * @request GET:/brotli
     */
    brotliList: (params = {}) =>
      this.request({
        path: `/brotli`,
        method: "GET",
        ...params,
      }),
  };
  bytes = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name BytesDetail
     * @summary Returns n random bytes generated with given seed
     * @request GET:/bytes/{n}
     */
    bytesDetail: (n, params = {}) =>
      this.request({
        path: `/bytes/${n}`,
        method: "GET",
        ...params,
      }),
  };
  cache = {
    /**
     * No description
     *
     * @tags Response inspection
     * @name CacheList
     * @summary Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
     * @request GET:/cache
     */
    cacheList: (params = {}) =>
      this.request({
        path: `/cache`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Response inspection
     * @name CacheDetail
     * @summary Sets a Cache-Control header for n seconds.
     * @request GET:/cache/{value}
     */
    cacheDetail: (value, params = {}) =>
      this.request({
        path: `/cache/${value}`,
        method: "GET",
        ...params,
      }),
  };
  cookies = {
    /**
     * No description
     *
     * @tags Cookies
     * @name CookiesList
     * @summary Returns cookie data.
     * @request GET:/cookies
     */
    cookiesList: (params = {}) =>
      this.request({
        path: `/cookies`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Cookies
     * @name DeleteList
     * @summary Deletes cookie(s) as provided by the query string and redirects to cookie list.
     * @request GET:/cookies/delete
     */
    deleteList: (query, params = {}) =>
      this.request({
        path: `/cookies/delete`,
        method: "GET",
        query: query,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Cookies
     * @name GetCookies
     * @summary Sets cookie(s) as provided by the query string and redirects to cookie list.
     * @request GET:/cookies/set
     */
    getCookies: (query, params = {}) =>
      this.request({
        path: `/cookies/set`,
        method: "GET",
        query: query,
        ...params,
      }),
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
    getCookies2: (name, value, params = {}) =>
      this.request({
        path: `/cookies/set/${name}/${value}`,
        method: "GET",
        ...params,
      }),
  };
  deflate = {
    /**
     * No description
     *
     * @tags Response formats
     * @name DeflateList
     * @summary Returns Deflate-encoded data.
     * @request GET:/deflate
     */
    deflateList: (params = {}) =>
      this.request({
        path: `/deflate`,
        method: "GET",
        ...params,
      }),
  };
  delay = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayDelete
     * @summary Returns a delayed response (max of 10 seconds).
     * @request DELETE:/delay/{delay}
     */
    delayDelete: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayDetail
     * @summary Returns a delayed response (max of 10 seconds).
     * @request GET:/delay/{delay}
     */
    delayDetail: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayPartialUpdate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request PATCH:/delay/{delay}
     */
    delayPartialUpdate: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "PATCH",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayCreate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request POST:/delay/{delay}
     */
    delayCreate: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "POST",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DelayUpdate
     * @summary Returns a delayed response (max of 10 seconds).
     * @request PUT:/delay/{delay}
     */
    delayUpdate: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "PUT",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Dynamic data
     * @name TraceDelay
     * @summary Returns a delayed response (max of 10 seconds).
     * @request TRACE:/delay/{delay}
     */
    traceDelay: (delay, params = {}) =>
      this.request({
        path: `/delay/${delay}`,
        method: "TRACE",
        ...params,
      }),
  };
  delete = {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name DeleteDelete
     * @summary The request's DELETE parameters.
     * @request DELETE:/delete
     */
    deleteDelete: (params = {}) =>
      this.request({
        path: `/delete`,
        method: "DELETE",
        ...params,
      }),
  };
  deny = {
    /**
     * No description
     *
     * @tags Response formats
     * @name DenyList
     * @summary Returns page denied by robots.txt rules.
     * @request GET:/deny
     */
    denyList: (params = {}) =>
      this.request({
        path: `/deny`,
        method: "GET",
        ...params,
      }),
  };
  digestAuth = {
    /**
     * No description
     *
     * @tags Auth
     * @name DigestAuthDetail
     * @summary Prompts the user for authorization using Digest Auth.
     * @request GET:/digest-auth/{qop}/{user}/{passwd}
     */
    digestAuthDetail: (qop, user, passwd, params = {}) =>
      this.request({
        path: `/digest-auth/${qop}/${user}/${passwd}`,
        method: "GET",
        ...params,
      }),
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
    digestAuthDetail2: (qop, user, passwd, algorithm, params = {}) =>
      this.request({
        path: `/digest-auth/${qop}/${user}/${passwd}/${algorithm}`,
        method: "GET",
        ...params,
      }),
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
    digestAuthDetail3: (qop, user, passwd, algorithm, staleAfter, params = {}) =>
      this.request({
        path: `/digest-auth/${qop}/${user}/${passwd}/${algorithm}/${staleAfter}`,
        method: "GET",
        ...params,
      }),
  };
  drip = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name DripList
     * @summary Drips data over a duration after an optional initial delay.
     * @request GET:/drip
     */
    dripList: (query, params = {}) =>
      this.request({
        path: `/drip`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  encoding = {
    /**
     * No description
     *
     * @tags Response formats
     * @name Utf8List
     * @summary Returns a UTF-8 encoded body.
     * @request GET:/encoding/utf8
     */
    utf8List: (params = {}) =>
      this.request({
        path: `/encoding/utf8`,
        method: "GET",
        ...params,
      }),
  };
  etag = {
    /**
     * No description
     *
     * @tags Response inspection
     * @name EtagDetail
     * @summary Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
     * @request GET:/etag/{etag}
     */
    etagDetail: (etag, params = {}) =>
      this.request({
        path: `/etag/${etag}`,
        method: "GET",
        ...params,
      }),
  };
  get = {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name GetGet
     * @summary The request's query parameters.
     * @request GET:/get
     */
    getGet: (params = {}) =>
      this.request({
        path: `/get`,
        method: "GET",
        ...params,
      }),
  };
  gzip = {
    /**
     * No description
     *
     * @tags Response formats
     * @name GzipList
     * @summary Returns GZip-encoded data.
     * @request GET:/gzip
     */
    gzipList: (params = {}) =>
      this.request({
        path: `/gzip`,
        method: "GET",
        ...params,
      }),
  };
  headers = {
    /**
     * No description
     *
     * @tags Request inspection
     * @name HeadersList
     * @summary Return the incoming request's HTTP headers.
     * @request GET:/headers
     */
    headersList: (params = {}) =>
      this.request({
        path: `/headers`,
        method: "GET",
        ...params,
      }),
  };
  hiddenBasicAuth = {
    /**
     * No description
     *
     * @tags Auth
     * @name HiddenBasicAuthDetail
     * @summary Prompts the user for authorization using HTTP Basic Auth.
     * @request GET:/hidden-basic-auth/{user}/{passwd}
     */
    hiddenBasicAuthDetail: (user, passwd, params = {}) =>
      this.request({
        path: `/hidden-basic-auth/${user}/${passwd}`,
        method: "GET",
        ...params,
      }),
  };
  html = {
    /**
     * No description
     *
     * @tags Response formats
     * @name HtmlList
     * @summary Returns a simple HTML document.
     * @request GET:/html
     */
    htmlList: (params = {}) =>
      this.request({
        path: `/html`,
        method: "GET",
        ...params,
      }),
  };
  image = {
    /**
     * No description
     *
     * @tags Images
     * @name ImageList
     * @summary Returns a simple image of the type suggest by the Accept header.
     * @request GET:/image
     */
    imageList: (params = {}) =>
      this.request({
        path: `/image`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name JpegList
     * @summary Returns a simple JPEG image.
     * @request GET:/image/jpeg
     */
    jpegList: (params = {}) =>
      this.request({
        path: `/image/jpeg`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name GetImage
     * @summary Returns a simple PNG image.
     * @request GET:/image/png
     */
    getImage: (params = {}) =>
      this.request({
        path: `/image/png`,
        method: "GET",
        ...params,
      }),
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
    getImage2: (params = {}) =>
      this.request({
        path: `/image/svg`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name WebpList
     * @summary Returns a simple WEBP image.
     * @request GET:/image/webp
     */
    webpList: (params = {}) =>
      this.request({
        path: `/image/webp`,
        method: "GET",
        ...params,
      }),
  };
  ip = {
    /**
     * No description
     *
     * @tags Request inspection
     * @name GetIp
     * @summary Returns the requester's IP Address.
     * @request GET:/ip
     */
    getIp: (params = {}) =>
      this.request({
        path: `/ip`,
        method: "GET",
        ...params,
      }),
  };
  json = {
    /**
     * No description
     *
     * @tags Response formats
     * @name JsonList
     * @summary Returns a simple JSON document.
     * @request GET:/json
     */
    jsonList: (params = {}) =>
      this.request({
        path: `/json`,
        method: "GET",
        ...params,
      }),
  };
  links = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name LinksDetail
     * @summary Generate a page containing n links to other pages which do the same.
     * @request GET:/links/{n}/{offset}
     */
    linksDetail: (n, offset, params = {}) =>
      this.request({
        path: `/links/${n}/${offset}`,
        method: "GET",
        ...params,
      }),
  };
  patch = {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PatchPartialUpdate
     * @summary The request's PATCH parameters.
     * @request PATCH:/patch
     */
    patchPartialUpdate: (params = {}) =>
      this.request({
        path: `/patch`,
        method: "PATCH",
        ...params,
      }),
  };
  post = {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PostCreate
     * @summary The request's POST parameters.
     * @request POST:/post
     */
    postCreate: (params = {}) =>
      this.request({
        path: `/post`,
        method: "POST",
        ...params,
      }),
  };
  put = {
    /**
     * No description
     *
     * @tags HTTP Methods
     * @name PutPut
     * @summary The request's PUT parameters.
     * @request PUT:/put
     */
    putPut: (params = {}) =>
      this.request({
        path: `/put`,
        method: "PUT",
        ...params,
      }),
  };
  range = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name RangeDetail
     * @summary Streams n random bytes generated with given seed, at given chunk size per packet.
     * @request GET:/range/{numbytes}
     */
    rangeDetail: (numbytes, params = {}) =>
      this.request({
        path: `/range/${numbytes}`,
        method: "GET",
        ...params,
      }),
  };
  redirectTo = {
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToDelete
     * @summary 302/3XX Redirects to the given URL.
     * @request DELETE:/redirect-to
     */
    redirectToDelete: (params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToList
     * @summary 302/3XX Redirects to the given URL.
     * @request GET:/redirect-to
     */
    redirectToList: (query, params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "GET",
        query: query,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToPartialUpdate
     * @summary 302/3XX Redirects to the given URL.
     * @request PATCH:/redirect-to
     */
    redirectToPartialUpdate: (params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "PATCH",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToCreate
     * @summary 302/3XX Redirects to the given URL.
     * @request POST:/redirect-to
     */
    redirectToCreate: (data, params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "POST",
        body: data,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectToUpdate
     * @summary 302/3XX Redirects to the given URL.
     * @request PUT:/redirect-to
     */
    redirectToUpdate: (data, params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "PUT",
        body: data,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Redirects
     * @name TraceRedirectTo
     * @summary 302/3XX Redirects to the given URL.
     * @request TRACE:/redirect-to
     */
    traceRedirectTo: (params = {}) =>
      this.request({
        path: `/redirect-to`,
        method: "TRACE",
        ...params,
      }),
  };
  redirect = {
    /**
     * No description
     *
     * @tags Redirects
     * @name RedirectDetail
     * @summary 302 Redirects n times.
     * @request GET:/redirect/{n}
     */
    redirectDetail: (n, params = {}) =>
      this.request({
        path: `/redirect/${n}`,
        method: "GET",
        ...params,
      }),
  };
  relativeRedirect = {
    /**
     * No description
     *
     * @tags Redirects
     * @name RelativeRedirectDetail
     * @summary Relatively 302 Redirects n times.
     * @request GET:/relative-redirect/{n}
     */
    relativeRedirectDetail: (n, params = {}) =>
      this.request({
        path: `/relative-redirect/${n}`,
        method: "GET",
        ...params,
      }),
  };
  responseHeaders = {
    /**
     * No description
     *
     * @tags Response inspection
     * @name ResponseHeadersList
     * @summary Returns a set of response headers from the query string.
     * @request GET:/response-headers
     */
    responseHeadersList: (query, params = {}) =>
      this.request({
        path: `/response-headers`,
        method: "GET",
        query: query,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Response inspection
     * @name ResponseHeadersCreate
     * @summary Returns a set of response headers from the query string.
     * @request POST:/response-headers
     */
    responseHeadersCreate: (query, params = {}) =>
      this.request({
        path: `/response-headers`,
        method: "POST",
        query: query,
        ...params,
      }),
  };
  robotsTxt = {
    /**
     * No description
     *
     * @tags Response formats
     * @name RobotsTxtList
     * @summary Returns some robots.txt rules.
     * @request GET:/robots.txt
     */
    robotsTxtList: (params = {}) =>
      this.request({
        path: `/robots.txt`,
        method: "GET",
        ...params,
      }),
  };
  status = {
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusDelete
     * @summary Return status code or random status code if more than one are given
     * @request DELETE:/status/{codes}
     */
    statusDelete: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusDetail
     * @summary Return status code or random status code if more than one are given
     * @request GET:/status/{codes}
     */
    statusDetail: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusPartialUpdate
     * @summary Return status code or random status code if more than one are given
     * @request PATCH:/status/{codes}
     */
    statusPartialUpdate: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "PATCH",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusCreate
     * @summary Return status code or random status code if more than one are given
     * @request POST:/status/{codes}
     */
    statusCreate: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "POST",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status codes
     * @name StatusUpdate
     * @summary Return status code or random status code if more than one are given
     * @request PUT:/status/{codes}
     */
    statusUpdate: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "PUT",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status codes
     * @name TraceStatus
     * @summary Return status code or random status code if more than one are given
     * @request TRACE:/status/{codes}
     */
    traceStatus: (codes, params = {}) =>
      this.request({
        path: `/status/${codes}`,
        method: "TRACE",
        ...params,
      }),
  };
  streamBytes = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name StreamBytesDetail
     * @summary Streams n random bytes generated with given seed, at given chunk size per packet.
     * @request GET:/stream-bytes/{n}
     */
    streamBytesDetail: (n, params = {}) =>
      this.request({
        path: `/stream-bytes/${n}`,
        method: "GET",
        ...params,
      }),
  };
  stream = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name StreamDetail
     * @summary Stream n JSON responses
     * @request GET:/stream/{n}
     */
    streamDetail: (n, params = {}) =>
      this.request({
        path: `/stream/${n}`,
        method: "GET",
        ...params,
      }),
  };
  userAgent = {
    /**
     * No description
     *
     * @tags Request inspection
     * @name UserAgentList
     * @summary Return the incoming requests's User-Agent header.
     * @request GET:/user-agent
     */
    userAgentList: (params = {}) =>
      this.request({
        path: `/user-agent`,
        method: "GET",
        ...params,
      }),
  };
  uuid = {
    /**
     * No description
     *
     * @tags Dynamic data
     * @name UuidList
     * @summary Return a UUID4.
     * @request GET:/uuid
     */
    uuidList: (params = {}) =>
      this.request({
        path: `/uuid`,
        method: "GET",
        ...params,
      }),
  };
  xml = {
    /**
     * No description
     *
     * @tags Response formats
     * @name GetXml
     * @summary Returns a simple XML document.
     * @request GET:/xml
     */
    getXml: (params = {}) =>
      this.request({
        path: `/xml`,
        method: "GET",
        ...params,
      }),
  };
}
