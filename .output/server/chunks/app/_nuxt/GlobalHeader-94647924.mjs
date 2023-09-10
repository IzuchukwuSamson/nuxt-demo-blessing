import { _ as __nuxt_component_0$1 } from './nuxt-link-26e5a74c.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './mti-e00e09a7.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed bg-black w-full font-medium py-2 md:h-20" }, _attrs))}><div class="text-white md:px-40"><div class="hidden md:flex mx-auto md:px-6 items-center"><div class="flex"><img${ssrRenderAttr("src", _imports_0)} class="w-8" alt=""><p class="text-2xl tracking-widest">METAMASK</p></div><div class="flex mx-auto py-6 items-center space-x-10">`);
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Features `);
      } else {
        return [
          createTextVNode("Features ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Build `);
      } else {
        return [
          createTextVNode("Build ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Resourses `);
      } else {
        return [
          createTextVNode("Resourses ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { href: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn `);
      } else {
        return [
          createTextVNode("Learn ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button class="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-full h-10 py-2 px-4 inline-flex items-center font-bold text-white"> Download </button><div><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="white" d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288Zm0 230a86 86 0 1 1 86-86a85.88 85.88 0 0 1-86 86Z"></path></svg></div></div></div><div id="mobile-menu" class="sm:hidden"><div class="justify-between px-6 py-4 flex items-center"><div class="flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0)} class="h-10" alt=""><p class="text-2xl text-white tracking-widest">METAMASK</p></div><div class="mobile-menu-button hover:cursor-pointer hover:bg-gray-800 hover:rounded-sm text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"></path></svg></div></div></div></div><div class="hidden mobile-menu md:hidden py-2 px-8 text-white"><a href="#" class="block pt-2">Features </a><a href="#" class="block pt-4">Build </a><a href="#" class="block pt-4">Resourses </a><a href="#" class="block pt-4">Learn </a></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/GlobalHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=GlobalHeader-94647924.mjs.map
