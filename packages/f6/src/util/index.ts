import * as ColorUtil from "./color";
import * as LayoutUtil from "./layout";
import { Util } from "@antv/f6-core";

const G6Util: any = { ...Util, ...ColorUtil, ...LayoutUtil };

export default G6Util;
