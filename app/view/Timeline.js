Ext.define('portofolio.view.Timeline',{
  extend: 'Ext.dataview.List',
  xtype: 'timeline',
  
  config: {
    title:'Timeline',
    

    disableSelection: true,
    itemTpl: [
            '<div class="tweet_data">',
            '<div class="tweet_avatar">',
            '<img width="30" height="30" src="{profile_image_url}"/>',
            '</div>',
            '<div class="tweet_content">',
            '<a class="user" href="http://twitter.com/{from_user}">{from_user}</a>&nbsp;',
            '{text}',
            '</div>',
            '<div class="clear"></div></div>'
        ]
    }
    
});
