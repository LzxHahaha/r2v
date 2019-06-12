import Module, { ModuleType } from './Module';

/**
 * utils/request 等非组件模块类型
 */
export default class ObjectModule extends Module {
    // 无须进行解析，直接略过
    readonly loaded = true;
    readonly type = ModuleType.Object;
    
    load() {
        if (this.loaded) {
            return;
        }
    }
}