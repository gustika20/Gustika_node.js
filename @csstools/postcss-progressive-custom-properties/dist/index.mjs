import e from"postcss-value-parser";const r=[{supports:"color(srgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"srgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"srgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(srgb-linear 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"srgb-linear"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"srgb-linear"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(a98-rgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"a98-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"a98-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(prophoto-rgb 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"prophoto-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"prophoto-rgb"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(display-p3 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"display-p3"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"display-p3"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(rec2020 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"rec2020"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"rec2020"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz-d50 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d50"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d50"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz-d65 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d65"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz-d65"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color(xyz 0 0 0)",property:"color",sniff:"color",matchers:[{type:"function",value:"color",nodes:[{type:"word",value:"xyz"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color",nodes:[{type:"word",value:"xyz"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hsl(0, 0%, 0%)",property:"color",sniff:"hsl",matchers:[{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]}]},{supports:"hsl(0 0% 0% / 0)",property:"color",sniff:"hsl",matchers:[{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hsl",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hsla(0 0% 0% / 0)",property:"color",sniff:"hsla",matchers:[{type:"function",value:"hsla",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"hwb(0 0% 0%)",property:"color",sniff:"hwb",matchers:[{type:"function",value:"hwb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"hwb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"lab(0% 0 0)",property:"color",sniff:"lab",matchers:[{type:"function",value:"lab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"lch(0% 0 0)",property:"color",sniff:"lch",matchers:[{type:"function",value:"lch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"lch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"oklab(0% 0 0)",property:"color",sniff:"oklab",matchers:[{type:"function",value:"oklab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklab",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"oklch(0% 0 0)",property:"color",sniff:"oklch",matchers:[{type:"function",value:"oklch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"oklch",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"rgb(0, 0, 0, 0)",property:"color",sniff:"rgb",matchers:[{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]}]},{supports:"rgb(0 0 0 / 0)",property:"color",sniff:"rgb",matchers:[{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"rgb",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"rgba(0 0 0 / 0)",property:"color",sniff:"rgba",matchers:[{type:"function",value:"rgba",nodes:[{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:"/"},{type:"word",isVariable:!0}]}]},{supports:"color-mix(in oklch, #000, #fff)",property:"color",sniff:"color-mix",matchers:[{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]},{type:"function",value:"color-mix",nodes:[{type:"word",value:"in"},{type:"space"},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0},{type:"div",value:","},{type:"word",isVariable:!0},{type:"space"},{type:"word",isVariable:!0}]}]},{supports:"1ic",property:"font-size",sniff:"ic",matchers:[{type:"word",value:"1ic",dimension:{unit:"ic"}}]}];function a(e,r){if(e.isVariable&&r)return!0;if(e.type!==r.type)return!1;if(function(e,r){if("space"===e.type&&"space"===r.type&&e.value.trim()===r.value.trim())return!1;if(e.dimension&&r.dimension)return e.dimension.unit!==r.dimension.unit;if(e.value!==r.value)return!0;return!1}(e,r))return!1;if(e.nodes&&r.nodes){for(let p=0;p<e.nodes.length;p++){let t=p,i=p;for(;e.nodes[t]&&"space"===e.nodes[t].type;)t++;for(;r.nodes[i]&&"space"===r.nodes[i].type;)i++;if(!!e.nodes[t]!=!!r.nodes[i])return!1;if(!a(e.nodes[t],r.nodes[i]))return!1}return!0}return!0}const p=["at","bottom","center","circle","closest-corner","closest-side","ellipse","farthest-corner","farthest-side","from","in","left","right","to","top"];function t(t){const i=[],o=[];r.forEach((e=>{t.indexOf(e.sniff)>-1&&o.push(e)}));try{e(t).walk((r=>{try{r.dimension=e.unit(r.value)}finally{!1===r.dimension&&delete r.dimension}for(let e=0;e<o.length;e++){const p=o[e];for(let e=0;e<p.matchers.length;e++){if(a(p.matchers[e],r))return void i.push(`(${p.property}: ${p.supports})`)}}i.push(...function(e){const r=[];if("function"===e.type&&("conic-gradient"===e.value||"linear-gradient"===e.value||"radial-gradient"===e.value||"repeating-conic-gradient"===e.value||"repeating-linear-gradient"===e.value||"repeating-radial-gradient"===e.value)){let a=0,t=!1,i=!1;e:for(let o=0;o<e.nodes.length;o++){const s=e.nodes[o];if("word"===s.type&&p.includes(s.value)&&(t=!0),"div"!==s.type||","!==s.value.trim())if("word"!==s.type||"in"!==s.value){if("word"!==s.type&&"function"!==s.type||a++,i)switch(e.value){case"conic-gradient":r.push("(background: conic-gradient(in oklch, red 0deg, red 0deg 1deg, red 2deg))");break e;case"linear-gradient":r.push("(background: linear-gradient(in oklch, red 0%, red 0% 1%, red 2%))");break e;case"radial-gradient":r.push("(background: radial-gradient(in oklch, red, red 1px 2px, red 3px))");break e;case"repeating-conic-gradient":r.push("(background: repeating-conic-gradient(in oklch from 0deg, red 0deg, red 0deg 1deg, red 2deg))");break e;case"repeating-linear-gradient":r.push("(background: repeating-linear-gradient(in oklch, red 0%, red 0% 1%, red 2%))");break e;case"repeating-radial-gradient":r.push("(background: repeating-radial-gradient(in oklch, red, red 1px 2px, red 3px))");break e}if(!t&&3===a)switch(e.value){case"conic-gradient":r.push("(background: conic-gradient(red 0deg, red 0deg 1deg, red 2deg))");break e;case"linear-gradient":r.push("(background: linear-gradient(red 0%, red 0% 1%, red 2%))");break e;case"radial-gradient":r.push("(background: radial-gradient(red, red 1px 2px, red 3px))");break e;case"repeating-conic-gradient":r.push("(background: repeating-conic-gradient(from 0deg, red 0deg, red 0deg 1deg, red 2deg))");break e;case"repeating-linear-gradient":r.push("(background: repeating-linear-gradient(red 0%, red 0% 1%, red 2%))");break e;case"repeating-radial-gradient":r.push("(background: repeating-radial-gradient(red, red 1px 2px, red 3px))");break e}}else i=!0;else a=0,t=!1}}return r}(r))}))}catch(e){}return Array.from(new Set(i))}const i=()=>({postcssPlugin:"postcss-progressive-custom-properties",RuleExit:(e,{postcss:r})=>{const a=[],p=new Set;e.each((i=>{if("decl"!==i.type)return;if(!i.variable)return;if("initial"===i.value.trim())return;if(""===i.value.trim())return;if(!p.has(i.prop.toString()))return void p.add(i.prop.toString());const o=t(i.value);if(!o.length)return;const s=r.atRule({name:"supports",params:o.join(" and "),source:e.source,raws:{before:"\n\n",after:"\n"}}),l=e.clone();l.removeAll(),l.raws.before="\n",l.append(i.clone()),i.remove(),s.append(l),a.push(s)})),0!==a.length&&a.reverse().forEach((r=>{e.after(r)}))}});i.postcss=!0;export{i as default};
