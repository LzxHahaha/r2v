import fs from 'fs';

export enum ModuleType {
    Unknown,
    Object,
    Component,
    Mixin,
    Template,
    Style
};

/**
 * 基础模块类型
 */
export default abstract class Module {
    // 解析标志
    loaded = false;
    abstract type: ModuleType;

    constructor (public path: string) {}

    load(option?: any): any {}

    async readFile(): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.path, (err, data) => {
                if (err) {
                    err.message = `【无法加载文件】${err.message}`;
                    return reject(err);
                }
                resolve(data.toString());
            });
        });
    }
}
