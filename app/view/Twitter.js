var timeline = {
    title: 'Twitts',
    tpl: [
         '<div class="tweet">',
                 '<div class="avatar"><img src="http://cdn4.iconfinder.com/data/icons/macosxstyle/macosxstyle_png/128/Finder.png" /></div>',
                 '<div class="tweet-content">',
                     '<h2>Mac</h2>',
                     '<p>This is example</p>',
                 '</div>',
         '</div>'
     ]
};
var mapPanel = {
    title: 'Mapa',
    html: 'Aqui encuntras el oro'
};
Ext.define('portofolio.view.Twitter',{
  extend: 'Ext.TabPanel',
  xtype: 'twitter',  
  
  config: {
    title:'Twitter',
    iconCls: 'twitter2',
    
    styleHtmlContent: true, 
   tabBar:{
            dockedItems:[{ 
                xtype: 'button',
                iconMask: true,
                docked: 'right',
                ui: 'action',
                stretch: false,
                style: 'height:35px;margin-top:5px;',
                handler: function(){
                    alert('Refresh panel');    
                }
            }]
        },
            items: [{iconCls: 'refresh'},timeline,mapPanel]
        }
});
