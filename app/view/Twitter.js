Ext.define('portofolio.view.Twitter',{
  extend: 'Ext.TabPanel',
  xtype: 'twitter',
  
  
  
  config: {
    title:'Twitter',
    iconCls: 'twitter2',
    
    styleHtmlContent: true,
    
    items: [
        {
            title: 'Twitts',
            html: 'Lista de twitts'
        },
        {
            title: 'Mapa',
            html: 'Lugar de twitts'
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            defaults: {
                iconMask: true
            },
            items: [
                { xtype: 'spacer' },
                { iconCls: 'refresh' },
                { xtype: 'spacer' }
            ]
        }
    ]
  }
});