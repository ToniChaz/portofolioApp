Ext.define('portofolio.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            blog: 'blog',
            twitter: 'twitter'
        },
        control: {
            'blog list': {
                itemtap: 'showPost'
            },
            'twitter list': {
                itemtap: 'openUrl'
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
    },
    openUrl: function (that, list, index, target) {
        window.open(target.get('open_url'), '_blank');
    }
});