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
          html : 'Aqui van los diseños'
        },
        {
          xtype: 'list',
          title: 'Programacion',
          html : 'Aqui van los trabajos de programacion'
        }
      ]
    }    
});
