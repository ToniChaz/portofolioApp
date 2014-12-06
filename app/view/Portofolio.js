Ext.define('portofolio.view.Portofolio',{
  extend: 'Ext.TabPanel',
  xtype: 'portofolio',  
  requires: [
      'Ext.dataview.List',
      'Ext.data.reader.Json',
      'Ext.data.Store',
      'Ext.Map'
    ],
  config: {
    title:'Portofolio',
    iconCls: 'port',
    
    
        items: [        
        {
          xtype: 'list',
          title: 'Diseños',
          html : 'Coming Soon'
        },
        {
          xtype: 'list',
          title: 'Programacion',
          html : 'Coming Soon'
        }
      ]
    }    
});
