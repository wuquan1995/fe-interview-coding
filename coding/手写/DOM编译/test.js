const vDom = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};
// 把上述虚拟Dom转化成下方真实Dom
const realDom = `<div id="app">
    <span>
      <a></a>
    </span>
    <span>
      <a></a>
      <a></a>
    </span>
  </div>`;

// 真正的渲染函数
function _render(vnode) {}

console.log(_render(vDom));
