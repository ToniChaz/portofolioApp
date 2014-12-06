Ext.define('portofolio.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'blog'
            },
            {
                xtype: 'twitter'
            },
            {
                xtype: 'portofolio'
            },
            {
                xtype: 'contactform'
            }
        ]
    
    }

});