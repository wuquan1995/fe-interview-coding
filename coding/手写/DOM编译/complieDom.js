const vDom = {
    tag: 'DIV',
    attrs:{
     id:'app'
    },
    children: [
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] }
        ]
      },
      {
        tag: 'SPAN',
        children: [
          { tag: 'A', children: [] },
          { tag: 'A', children: [] }
        ]
      }
    ]
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
function _render(vnode) {
    // 如果是数字类型转化为字符串
    if (typeof vnode === "number") {
      vnode = String(vnode);
    }
    // 字符串类型直接就是文本节点
    if (typeof vnode === "string") {
      return document.createTextNode(vnode);
    }
    // 普通DOM
    const dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
      // 遍历属性
      Object.keys(vnode.attrs).forEach((key) => {
        const value = vnode.attrs[key];
        dom.setAttribute(key, value);
      });
    }
    // 子数组进行递归操作 这一步是关键
    vnode.children.forEach((child) => dom.appendChild(_render(child)));
    return dom;
  }

  console.log(_render(vDom))