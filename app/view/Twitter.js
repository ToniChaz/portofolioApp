Ext.define('portofolio.view.Twitter',{
  extend: 'Ext.TabPanel',
  xtype: 'twitter',  
  requires: [
      'Ext.dataview.List',
      'Ext.data.reader.Json',
      'Ext.data.Store',
      'Ext.Map'
    ],
  config: {
    title:'Twitter',
    iconCls: 'bird',
    
    
        items: [        
        {
          title: 'Tweets',
          xtype: 'list',
          itemTpl : [            
            '<div>',
            '<div>',
            '<img class="tweetAvatar" src="{profile_image_url}"/>',
            '</div>',
            '<div>',            
            '{text}<br/>',
            'From:<a class="btnTweet" href="http://twitter.com/{screen_name}">@{screen_name}</a>',
            '</div></div>'
          ],
          disableSelection: true,
          store: {
            autoLoad: true,
            fields: [
                {
                    name:'text'
                },
                {
                    name: 'screen_name',
                    mapping: 'user.screen_name'
                },
                {
                    name: 'profile_image_url',
                    mapping: 'user.profile_image_url'
                },
                {
                    name: "open_url",
                    mapping: "entities.urls[0].url"
                }
            ],
            
            proxy: {
                type: 'ajax',
                url: 'get-tweets.php',
                reader: {
                    type: 'json'         
                }
            }
          }
        },
        {
            title: 'Map',
            xtype: 'map',                
            useCurrentLocation: true,
            mapOptions: {
                    zoom: 12
            },
            listeners: {
                maprender: function(extMapComponent, googleMapComp){
                                  
                    var marker = new google.maps.Marker({
                         position: position = new google.maps.LatLng (extMapComponent._geo._latitude,extMapComponent._geo._longitude),
                         map: googleMapComp
                    });

                    
                }
            }
        }
      ]
    }    
});
