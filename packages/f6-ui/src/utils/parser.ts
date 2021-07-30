export function typeParser(value) {
  if (/^\d+$/.test(value)) {
    return Number(value);
  }

  if (/true|false/.test(value)) {
    return Boolean(value);
  }

  if (/^\s*\[/.test(value)) {
    try {
      return JSON.parse(value);
    } catch (e) {
      throw new Error(`解析数组${value}失败`);
    }
  }

  if (/^\s*\{/.test(value)) {
    try {
      return JSON.parse(value);
    } catch (e) {
      throw new Error(`解析对象${value}失败`);
    }
  }
  return value;
}

enum colors {
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen',
}

export function isColor(value) {
  return (
    colors[value] ||
    value.startsWith('rgb(') ||
    value.startsWith('rgba(') ||
    (value.startsWith('#') && !isNaN(Number(`0x${value.slice(1)}`)))
  );
}

export function walkDomSelector(dom, fn) {
  if (!dom || !fn) return;
  if (dom.attrs.id) {
    fn('id', dom.attrs.id);
  }
  if (dom.attrs.class) {
    selectorToArr(dom.attrs.class, /\s+/g).forEach((className) => fn('class', className));
  }
  fn('tagName', dom.tagName);
}

export function selectorToArr(selector, rex) {
  if (!rex) return [selector];
  return selector.split(rex).filter((s) => s != '');
}

export function isSelectorMatchDom(dom, selector) {
  if (!dom || !selector) {
    return false;
  }
  const tags = selector.match(/(^[^\.#]+)/g);
  const ids = selector.match(/#[^\.#]+/g);
  const classes = selector.match(/\.[^\.#]+/g);

  const parts = [...(tags || []), ...(ids || []), ...(classes || [])];

  const domSels = {};

  walkDomSelector(dom, (key, sel) => {
    switch (key) {
      case 'id':
        domSels[`#${sel}`] = 1;
        break;
      case 'class':
        domSels[`.${sel}`] = 1;
        break;
      case 'tagName':
        domSels[`${sel}`] = 1;
        break;
    }
  });

  for (const part of parts) {
    // 对比dom的id/class等是否和selector匹配上的
    if (!domSels[part]) return false;
  }
  return true;
}

export enum layoutAttrs {
  'position',
  'display',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'top',
  'left',
  'right',
  'bottom',
  'flex',
  'margin',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'borderWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'flexDirection',
  'justifyContent',
  'alignItems',
  'alignSelf',
  'flexWrap',
}
