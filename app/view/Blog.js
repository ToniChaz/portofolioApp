Ext.define('portofolio.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    
    requires: [
      'Ext.dataview.List',
      'Ext.data.proxy.JsonP',
      'Ext.data.Store'
    ],
    
    config: {
     title: 'Blog',
     iconCls: 'star',
     
      items: [        
        {
          xtype: 'list',
          title: 'Entradas Recientes',
          itemTpl: '{title}',
          
          store: {
            autoLoad: true,
            fields: ['title', 'content'],
            
            proxy: {
                type: 'jsonp',
                url: 'http://www.tonichaz.com/api/get_recent_posts/',
                
                reader: {
                    type: 'json',
                    rootProperty: 'posts'
                }
            }
          }
        }
      ]
    }
});
