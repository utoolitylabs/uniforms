(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(1),a=t(10),o=(t(0),t(203)),c={},i={id:"examples/CustomFields/DisplayIfFieldSchema",title:"DisplayIfFieldSchema",description:"```js",source:"@site/../docs/examples/CustomFields/DisplayIfFieldSchema.md",permalink:"/docs/examples/CustomFields/DisplayIfFieldSchema"},l=[],s={rightToc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Ajv from 'ajv';\nimport { JSONSchemaBridge } from 'uniforms-bridge-json-schema';\n\nconst ajv = new Ajv({ allErrors: true, useDefaults: true });\n\nconst schema = {\n  title: 'DisplayIf',\n  type: 'object',\n  properties: {\n    fieldA: { type: 'string' },\n    fieldB: { type: 'string' }\n  }\n};\n\nfunction createValidator(schema) {\n  const validator = ajv.compile(schema);\n\n  return model => {\n    validator(model);\n\n    if (validator.errors && validator.errors.length) {\n      throw { details: validator.errors };\n    }\n  };\n}\n\nconst schemaValidator = createValidator(schema);\n\nexport default new JSONSchemaBridge(schema, schemaValidator);\n")))}p.isMDXComponent=!0},203:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},u=function(e){var r=p(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?a.a.createElement(d,i({ref:r},s,{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);