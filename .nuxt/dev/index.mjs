globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join as join$1 } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, getQuery, createError } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/h3/dist/index.mjs';
import { createRenderer } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, withQuery } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/radix3/dist/index.mjs';
import { createRequire } from 'module';
import { promisify } from 'util';
import AsyncCache from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/async-cache/ac.js';
import unionBy from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/lodash.unionby/index.js';
import generateETag from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/etag/index.js';
import fresh from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/fresh/index.js';
import { hostname } from 'os';
import { join } from 'path';
import { URL as URL$1 } from 'url';
import isHTTPS from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/is-https/dist/index.mjs';
import * as sm from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/sitemap/dist/index.js';
import consola from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/unenv/runtime/npm/consola.mjs';
import Minimatch from 'file:///home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/node_modules/minimatch/minimatch.js';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false}}},"public":{},"sitemap":{"options":"{\"/sitemap.xml\": {\"path\": '/sitemap.xml', \"hostname\": null, \"exclude\": [], \"routes\": [], \"cacheTime\": 900000, \"etag\": {\"weak\": true}, \"filter\": null, \"gzip\": false, \"xmlNs\": null, \"xslUrl\": null, \"trailingSlash\": false, \"lastmod\": null, \"i18n\": null, \"defaults\": {}, \"base\": '/', \"generateOnBuild\": true, \"pathGzip\": '/sitemap.xml'}}","staticRoutes":[{"name":"about___en","path":"/about","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/about.vue","children":[],"url":"/about"},{"name":"about___fr","path":"/fr/about","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/about.vue","children":[],"url":"/fr/about"},{"name":"casting-management___en","path":"/casting-management","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/casting-management.vue","children":[],"url":"/casting-management"},{"name":"casting-management___fr","path":"/fr/casting-management","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/casting-management.vue","children":[],"url":"/fr/casting-management"},{"name":"community___en","path":"/community","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/community.vue","children":[],"url":"/community"},{"name":"community___fr","path":"/fr/community","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/community.vue","children":[],"url":"/fr/community"},{"name":"contact___en","path":"/contact","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/contact.vue","children":[],"url":"/contact"},{"name":"contact___fr","path":"/fr/contact","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/contact.vue","children":[],"url":"/fr/contact"},{"name":"customer-stories___en","path":"/customer-stories","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/customer-stories.vue","children":[],"url":"/customer-stories"},{"name":"customer-stories___fr","path":"/fr/customer-stories","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/customer-stories.vue","children":[],"url":"/fr/customer-stories"},{"name":"elite-hosting___en","path":"/elite-hosting","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/elite-hosting.vue","children":[],"url":"/elite-hosting"},{"name":"elite-hosting___fr","path":"/fr/elite-hosting","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/elite-hosting.vue","children":[],"url":"/fr/elite-hosting"},{"name":"feature-films___en","path":"/feature-films","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/feature-films.vue","children":[],"url":"/feature-films"},{"name":"feature-films___fr","path":"/fr/feature-films","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/feature-films.vue","children":[],"url":"/fr/feature-films"},{"name":"ftrack___en","path":"/ftrack","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/ftrack.vue","children":[],"url":"/ftrack"},{"name":"ftrack___fr","path":"/fr/ftrack","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/ftrack.vue","children":[],"url":"/fr/ftrack"},{"name":"index___en","path":"/","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/index.vue","children":[],"url":"/"},{"name":"index___fr","path":"/fr","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/index.vue","children":[],"url":"/fr"},{"name":"pricing___en","path":"/pricing","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/pricing.vue","children":[],"url":"/pricing"},{"name":"pricing___fr","path":"/fr/pricing","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/pricing.vue","children":[],"url":"/fr/pricing"},{"name":"privacy___en","path":"/privacy","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/privacy.vue","children":[],"url":"/privacy"},{"name":"privacy___fr","path":"/fr/privacy","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/privacy.vue","children":[],"url":"/fr/privacy"},{"name":"production-tracker___en","path":"/production-tracker","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/production-tracker.vue","children":[],"url":"/production-tracker"},{"name":"production-tracker___fr","path":"/fr/production-tracker","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/production-tracker.vue","children":[],"url":"/fr/production-tracker"},{"name":"review-engine___en","path":"/review-engine","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/review-engine.vue","children":[],"url":"/review-engine"},{"name":"review-engine___fr","path":"/fr/review-engine","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/review-engine.vue","children":[],"url":"/fr/review-engine"},{"name":"schools___en","path":"/schools","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/schools.vue","children":[],"url":"/schools"},{"name":"schools___fr","path":"/fr/schools","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/schools.vue","children":[],"url":"/fr/schools"},{"name":"shorts___en","path":"/shorts","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/shorts.vue","children":[],"url":"/shorts"},{"name":"shorts___fr","path":"/fr/shorts","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/shorts.vue","children":[],"url":"/fr/shorts"},{"name":"shotgrid___en","path":"/shotgrid","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/shotgrid.vue","children":[],"url":"/shotgrid"},{"name":"shotgrid___fr","path":"/fr/shotgrid","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/shotgrid.vue","children":[],"url":"/fr/shotgrid"},{"name":"software-integrations___en","path":"/software-integrations","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/software-integrations.vue","children":[],"url":"/software-integrations"},{"name":"software-integrations___fr","path":"/fr/software-integrations","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/software-integrations.vue","children":[],"url":"/fr/software-integrations"},{"name":"spreadsheets___en","path":"/spreadsheets","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/spreadsheets.vue","children":[],"url":"/spreadsheets"},{"name":"spreadsheets___fr","path":"/fr/spreadsheets","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/spreadsheets.vue","children":[],"url":"/fr/spreadsheets"},{"name":"studio-database___en","path":"/studio-database","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/studio-database.vue","children":[],"url":"/studio-database"},{"name":"studio-database___fr","path":"/fr/studio-database","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/studio-database.vue","children":[],"url":"/fr/studio-database"},{"name":"studios___en","path":"/studios","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/studios.vue","children":[],"url":"/studios"},{"name":"studios___fr","path":"/fr/studios","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/studios.vue","children":[],"url":"/fr/studios"},{"name":"tailor-made-architecture___en","path":"/tailor-made-architecture","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/tailor-made-architecture.vue","children":[],"url":"/tailor-made-architecture"},{"name":"tailor-made-architecture___fr","path":"/fr/tailor-made-architecture","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/tailor-made-architecture.vue","children":[],"url":"/fr/tailor-made-architecture"},{"name":"team-collaboration___en","path":"/team-collaboration","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/team-collaboration.vue","children":[],"url":"/team-collaboration"},{"name":"team-collaboration___fr","path":"/fr/team-collaboration","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/team-collaboration.vue","children":[],"url":"/fr/team-collaboration"},{"name":"terms___en","path":"/terms","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/terms.vue","children":[],"url":"/terms"},{"name":"terms___fr","path":"/fr/terms","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/terms.vue","children":[],"url":"/fr/terms"},{"name":"top-notch-support___en","path":"/top-notch-support","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/top-notch-support.vue","children":[],"url":"/top-notch-support"},{"name":"top-notch-support___fr","path":"/fr/top-notch-support","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/top-notch-support.vue","children":[],"url":"/fr/top-notch-support"},{"name":"tvshows___en","path":"/tvshows","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/tvshows.vue","children":[],"url":"/tvshows"},{"name":"tvshows___fr","path":"/fr/tvshows","file":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/pages/tvshows.vue","children":[],"url":"/fr/tvshows"}]}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const serverAssets = [{"baseName":"server","dir":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.node.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.node.res.statusMessage = response.statusMessage;
      }
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

function createRoutesCache(globalCache, options) {
  const cache = new AsyncCache({
    maxAge: options.cacheTime,
    async load(_, callback) {
      try {
        let routes = await Promise.all(await promisifyRoute(options.routes));
        routes = joinRoutes(globalCache.staticRoutes ? globalCache.staticRoutes() : [], routes);
        callback(null, routes);
      } catch (err) {
        callback(err);
      }
    }
  });
  cache.get = promisify(cache.get);
  return cache;
}
function promisifyRoute(fn) {
  if (Array.isArray(fn)) {
    return Promise.resolve(
      fn.map(async (r) => {
        if (typeof r === "function") {
          return await promisifyRoute(r);
        }
        return r;
      })
    );
  }
  if (fn.length === 1) {
    return new Promise((resolve, reject) => {
      fn(function(err, routeParams) {
        if (err) {
          reject(err);
        }
        resolve(routeParams);
      });
    });
  }
  let promise = fn();
  if (!promise || !(promise instanceof Promise) && typeof promise.then !== "function") {
    promise = Promise.resolve(promise);
  }
  return promise;
}
function joinRoutes(staticRoutes, dynamicRoutes) {
  staticRoutes = staticRoutes.map(ensureIsValidRoute);
  dynamicRoutes = dynamicRoutes.map(ensureIsValidRoute);
  return unionBy(dynamicRoutes, staticRoutes, "url");
}
function ensureIsValidRoute(route) {
  let _route = typeof route === "object" ? { ...route } : route;
  _route = typeof _route === "object" ? _route.route ? { url: _route.route } : _route : { url: _route };
  _route.url = String(_route.url);
  return _route;
}
function validHttpCache(entity, options, req, res) {
  if (!options) {
    return false;
  }
  const { hash } = options;
  const etag = hash ? hash(entity, options) : generateETag(entity, options);
  if (fresh(req.headers, { etag })) {
    res.statusCode = 304;
    res.end();
    return true;
  }
  res.setHeader("ETag", etag);
  return false;
}

function warn(message, options = null) {
  consola.warn({
    message: `[sitemap-module] ${message}`,
    additional: options ? JSON.stringify(options, null, 2) : null
  });
}
function fatal(message, options = null) {
  consola.fatal({
    message: `[sitemap-module] ${message}`,
    additional: options ? JSON.stringify(options, null, 2) : null
  });
}
const logger = { success: consola.success, info: consola.info, fatal, warn };

function createSitemap(options, routes, base = null, req = null) {
  const sitemapConfig = { cacheTime: null, hostname: null, xmlNs: null, xslUrl: null, urls: null };
  sitemapConfig.cacheTime = options.cacheTime || 0;
  sitemapConfig.hostname = getHostname(options, req, base);
  sitemapConfig.xmlNs = options.xmlNs;
  sitemapConfig.xslUrl = options.xslUrl;
  routes = routes.map((route) => ({ ...options.defaults, ...route }));
  if (options.trailingSlash) {
    routes = routes.map((route) => {
      if (!route.url.endsWith("/")) {
        route.url = `${route.url}/`;
      }
      return route;
    });
  }
  if (options.i18n) {
    const { locales, routesNameSeparator } = options.i18n;
    routes.reduce((i18nRoutes, route) => {
      if (!route.name) {
        return i18nRoutes;
      }
      const [page, lang, isDefault = false] = route.name.split(routesNameSeparator);
      if (!lang) {
        return i18nRoutes;
      }
      const link = {
        lang,
        url: join(".", route.url)
      };
      if (isDefault) {
        link.lang = "x-default";
      } else {
        const locale = locales.find(({ code }) => code === lang);
        if (locale && locale.iso) {
          link.lang = locale.iso;
        }
      }
      if (!i18nRoutes[page]) {
        i18nRoutes[page] = [];
      }
      const langs = i18nRoutes[page].map(({ lang: lang2 }) => lang2);
      langs.push(link.lang);
      const index = langs.sort().indexOf(link.lang);
      i18nRoutes[page].splice(index, 0, link);
      route.links = i18nRoutes[page];
      return i18nRoutes;
    }, {});
  }
  if (typeof options.filter === "function") {
    routes = options.filter({
      options: { ...sitemapConfig },
      routes
    });
  }
  routes = routes.map((route) => {
    const { chunkName, component, name, path, ...sitemapOptions } = route;
    return {
      ...sitemapOptions,
      url: join(".", String(sitemapOptions.url))
    };
  });
  sitemapConfig.urls = routes;
  return sm.createSitemap(sitemapConfig);
}
function getHostname(options, req, base) {
  if (!options.hostname && !req) {
    logger.fatal("The `hostname` option is mandatory in your config on `spa` or `generate` build mode", options);
  }
  const href = new URL$1(
    base || "",
    options.hostname || req && `${isHTTPS(req) ? "https" : "http"}://${req.headers.host}` || `http://${hostname()}`
  ).href;
  return href.slice(-1) === "/" ? href : href + "/";
}

function excludeRoutes(patterns, routes) {
  patterns.forEach((pattern) => {
    const minimatch = new Minimatch.Minimatch(pattern);
    minimatch.negate = true;
    routes = routes.filter(({ url }) => minimatch.match(url));
  });
  return routes;
}

const globalCache = { cache: {  }, staticRoutes: null };

const _a7EiZz = eventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const res = event.res;
  const req = event.req;

  const require = createRequire(globalThis._importMeta_.url);
  if (!require) {
    console.log('cant use require in middleware');
  }
  // eslint-disable-next-line no-new-func,no-eval
  const options = eval('(' + runtimeConfig.sitemap.options + ')')[event.req.url];
  const staticRoutes = runtimeConfig.sitemap.staticRoutes;

  // Init cache
  if (!globalCache.staticRoutes) {
    globalCache.staticRoutes = () => excludeRoutes(options.exclude, staticRoutes);
  }

  if(!globalCache.cache[event.req.url]) {
    globalCache.cache[event.req.url] = createRoutesCache(globalCache, options);
  }

  try {
    // Init sitemap
    const routes = await globalCache.cache[event.req.url].get('routes');
    const xml = createSitemap(options, routes, options.base, req).toXML();
    // Check cache headers
    if (validHttpCache(xml, options.etag, req, res)) {
      return
    }
    // Send http response
    res.setHeader('Content-Type', 'application/xml');
    res.end(xml);
  } catch (err) {
    /* istanbul ignore next */
    return err
  }
});

const _lazy_sCwHHq = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/__nuxt_error', handler: _lazy_sCwHHq, lazy: true, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _a7EiZz, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sCwHHq, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join$1("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join$1(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join$1(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
      __proto__: null,
      template: template
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('/home/frankrousseau/Projets/cg-wire/online/kitsu-cloud/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<meta name=\"keywords\" content=\"production management pipeline cg cg blender nuke 3dsmax maya animation movie vfx tracking shotgun alternative 2D 3D\">\n<meta name=\"og:title\" content=\"CGWire - Collaboration Platform for Animation and VFX studios\">\n<meta name=\"og:locale\" content=\"en_US\">\n<meta name=\"og:locale:alternate\" content=\"fr_FR\">\n<meta name=\"og:image\" content=\"https://cgwire.com/assets/images/logo.svg\">\n<meta name=\"twitter:card\" content=\"summary\">\n<meta name=\"twitter:url\" content=\"http://twitter.com/cgwirenews/\">\n<meta name=\"twitter:title\" content=\"CGWire - Collaboration Platform for Animation and VFX studios\">\n<meta name=\"twitter:image\" content=\"https://cgwire.com/assets/images/logo.svg\">\n<link rel=\"icon\" href=\"_nuxt/assets/favicon.png\">\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\">\n<noscript>Javascript is required</noscript>","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
      __proto__: null,
      default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
