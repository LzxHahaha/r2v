import Module, { ModuleType } from './Module';

/**
 * mixin类型
 */
export default class UnknownModule extends Module {
    readonly type = ModuleType.Unknown;
}
