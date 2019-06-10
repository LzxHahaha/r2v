define([
    'util/path',
    'baseComponent/path',
    'text!./index.html',
    'mixin/path',
    'component/path'
], function(_, BaseComponent, html, mixin, component) {
    return BaseComponent.extend({
        config: function(data) {
            _.extend(data, {
                template: html,
                value: 1,
                arr: ['a', 2, {}]
            });
            this.supr(data);
        },
        init: function() {
            this.supr();
            this.doSomething();
        },
        doSomething: function() {
            this.$request('url', {
                method: 'GET',
                data: {
                    value: this.value
                },
                onload: (function() {
                    this.data.value = 2;
                }).bind(this)
            });
        }
    })
        .use(mixin)
        .component('tag', component);
});