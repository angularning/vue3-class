var VueRuntimeCore = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/runtime-core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    createRenderer: () => createRenderer,
    h: () => h
  });

  // packages/runtime-core/src/render.ts
  function createRenderer(renderOptions) {
    const render = (vnode, container) => {
    };
    return {
      render
    };
  }

  // packages/shared/src/index.ts
  var isObject = (value) => {
    return value !== null && typeof value === "object";
  };
  var isArray = (value) => {
    return value !== null && Array.isArray(value);
  };

  // packages/runtime-core/src/h.ts
  function h(type, propsChildren, children) {
    const len = arguments.length;
    if (len === 2) {
      if (isObject(propsChildren) && !isArray(propsChildren)) {
      }
    } else {
      if (len > 3) {
      } else {
      }
    }
  }
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=runtime-core.global.js.map
