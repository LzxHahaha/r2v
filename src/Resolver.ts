import { resolve as resolvePath, isAbsolute as isAbsolutePath } from 'path';

import Module, {
    UnknownModule,
    ObjectModule,
    ComponentModule,
    MixinModule,
    TemplateModule,
    StyleModule
} from './modules';

export default class Resolver {
    dependenceQueue: string[] = [];

    constructor(
        public basePath: string,
        public globalComponents = new Set<string>(),
        public globalModules = new Set<string>(),
        public modules = new Map<string, Module>()
    ) {}

    async start(codePath: string): Promise<string> {
        codePath = this.formatPath(codePath);
        this.dependenceQueue.push(codePath);
        while (this.dependenceQueue.length) {
            const p = this.dependenceQueue.shift() as string;
            await this.load(p);
        }
        return codePath;
    }

    /**
     * Load single module.
     * @param codePath Absolute path.
     */
    async load(codePath: string): Promise<Module> {
        let module = this.modules.get(codePath);
        if (!module) {
            module = this.createModule(codePath);
            this.modules.set(codePath, module);
        }
        if (module.loaded) {
            return module;
        }
        await module.load();

        // Regular的加载是文件级别，因此目录要往上找一级
        const basePath = resolvePath(codePath, '..');
        // 对组件和mixin再去加载依赖
        if (module instanceof ComponentModule || module instanceof MixinModule) {
            for (let modulePath of module.dependencies) {
                modulePath = this.formatPath(modulePath, basePath);
                if (!this.modules.has(modulePath)) {
                    this.dependenceQueue.push(modulePath);
                }
            }
        }

        return module;
    }

    /**
     * Format path to absolute path.
     * @param p Path.
     */
    private formatPath(p: string, basePath = this.basePath): string {
        if (/^text!/.test(p)) {
            p = p.substr(5);
        }
        if (isAbsolutePath(p)) {
            return p;
        }
        return resolvePath(basePath, p);
    }

    /**
     * Create a module.
     * @param modulePath Absolute path.
     */
    private createModule(modulePath: string): Module {
        let module: Module;
        if (this.globalComponents.has(modulePath)) {
            module = new ComponentModule(modulePath, true);
        } else if (this.globalModules.has(modulePath)) {
            module = new ObjectModule(modulePath);
        } else if (/\.html$/.test(modulePath)) {
            module = new TemplateModule(modulePath);
        } else if (/\.(css|less|sass|scss)/.test(modulePath)) {
            module = new StyleModule(modulePath);
        } else {
            module = new UnknownModule(modulePath);
        }
        return module;
    }
}
