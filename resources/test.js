define([
    'pro/util',
    'pro/BaseComponent',
    'text!./index.html',
    './mixin.js',
    './component.js'
], function(_, BaseComponent, html, mixin, component) {
    var Notify = NEKUI.Notify;
    var component = BaseComponent.extend({
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
        },
        foo: function() {
            Notify.success('message');
            return true;
        }
    });
        
    component.use(mixin)
        .component('tag', component);

    return component;
});