Ext.define('portofolio.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            blog: 'blog'
        },
        control: {
            'blog list': {
                itemtap: 'showPost'
            }
        }
    },
    showPost: function (that, list, index, target) {
        this.getBlog().push({
            xtype: 'panel',
            title: target.get('title'),
            html: target.get('content'),
            scrollable: true,
            styleHtmlContent: true
        });
    }
});