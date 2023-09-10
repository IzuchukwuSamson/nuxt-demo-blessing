import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = /* @__PURE__ */ defineComponent({});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><nav class="bg-gray-800 p-4"><div class="container mx-auto flex items-center justify-between"><div class="text-white font-bold text-xl">Logo</div><div class="flex space-x-4 sm:hidden"><button id="menu-toggle" class="text-white"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div><ul class="hidden space-x-4 sm:flex"><li><a href="#" class="text-white hover:text-gray-300">Home</a></li><li><a href="#" class="text-white hover:text-gray-300">Features</a></li><li><a href="#" class="text-white hover:text-gray-300">Download</a></li><li><a href="#" class="text-white hover:text-gray-300">Support</a></li></ul></div><div id="mobile-menu" class="hidden sm:hidden"><ul class="mt-4 space-y-2"><li><a href="#" class="text-white hover:text-gray-300">Home</a></li><li><a href="#" class="text-white hover:text-gray-300">Features</a></li><li><a href="#" class="text-white hover:text-gray-300">Download</a></li><li><a href="#" class="text-white hover:text-gray-300">Support</a></li></ul></div></nav></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { main as default };
//# sourceMappingURL=main-9df94581.mjs.map
