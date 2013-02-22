Ext.define('portofolio.view.Twitter',{
  extend: 'Ext.TabPanel',
  xtype: 'twitter',  
  
  config: {
    title:'Twitter',
    iconCls: 'twitter2',
    
    styleHtmlContent: true,
        
         items: [        
            {
                title: 'timeline'          
            },
            {
                title: 'map'
            }   
         ]
    }
    
});