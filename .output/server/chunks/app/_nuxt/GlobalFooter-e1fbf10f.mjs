import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './mti-e00e09a7.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'ufo';
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
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-600 pt-12" }, _attrs))}><div class="text-left text-white px-10 font-light text-sm"><div class="flex text-white text-lg items-center"><img${ssrRenderAttr("src", _imports_0)} class="w-8" alt=""><p class="font-semibold tracking-widest px-2">METAMASK</p></div><div class="grid grid-cols-1 md:grid-cols-3 pt-10"><div class=""><p class="text-xl orange">LEARN MORE</p><ul class="pt-4"><li>About</li><li class="pt-2">Developers Docs</li><li class="pt-2">Download</li><li class="pt-2">MetamaskMask Institutional</li><li class="pt-2">News</li><li class="pt-2">Security</li></ul></div><div class="pt-6"><p class="text-xl">GET INVOLVED</p><ul class="pt-4"><li class="pt-2">GitHub</li><li class="pt-2">GitCoin</li><li class="pt-2">Open Positions</li><li class="pt-2">SwagShip</li><li class="pt-2">Press &amp; Partnershops</li></ul></div><div class="pt-6"><p class="text-xl">LEGAL</p><ul class="pt-4"><li class="pt-2">Privacy Policy</li><li class="pt-2">Terms of use</li><li class="pt-2">Contributor License Agreement</li><li class="pt-2">Site Map</li></ul></div></div><div class="py-6 text-sm"><span class="text-white">\xA9 2023 <a href="https://metamask.io/">MetaMask</a> \u2022 A Consensys Formation </span></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/GlobalFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=GlobalFooter-e1fbf10f.mjs.map
