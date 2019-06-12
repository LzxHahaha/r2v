import Module, { ModuleType } from './Module';

/**
 * mixin类型
 */
export default class MixinModule extends Module {
    readonly type = ModuleType.Mixin;
    dependencies: string[] = [];

    load() {
        if (this.loaded) {
            return;
        }
    }
}
