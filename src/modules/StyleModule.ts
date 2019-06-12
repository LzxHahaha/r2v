import Module, { ModuleType } from './Module';

/**
 * 样式类型（CSS etc.）
 */
export default class StyleModule extends Module {
    readonly type = ModuleType.Style;
    
    src: string = '';
    
    load() {
        if (this.loaded) {
            return;
        }
    }
}
