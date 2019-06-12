import Module, { ModuleType } from './Module';

/**
 * 模板类型（HTML）
 */
export default class TemplateModule extends Module {
    readonly type = ModuleType.Template;

    src: string = '';
    
    load() {
        if (this.loaded) {
            return;
        }
    }
}
