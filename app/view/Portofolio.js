Ext.define('portofolio.view.Portofolio', {
    extend: 'Ext.TabPanel',
    xtype: 'portofolio',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store',
        'Ext.Carousel'
    ],
    defaults: {
        styleHtmlContent: true
    },
    config: {
        title: 'Portofolio',
        iconCls: 'port',
        items: [
            {
                xtype: 'list',
                title: 'Algunos de mis proyectos',
                store: {
                    fields: ['name', 'url'],
                    data: [
                        {
                            name: 'Blyck Ideas',
                            url: 'http://www.blyckideas.com'
                        },
                        {
                            name: 'Fotocampoo',
                            url: 'http://www.fotocampoo.com'
                        },
                        {
                            name: 'Clinica Dental',
                            url: 'http://www.dentalsanbernardo15.com'
                        },
                        {
                            name: 'Blog Fotovintage',
                            url: 'http://www.facevintage.com'
                        },
                        {
                            name: 'ZulosClub',
                            url: 'http://www.zulosclub.net'
                        }
                    ]
                },
                itemTpl: '{name}',
                listeners: {
                    select: function (view, record) {
                        window.open(record.get('url'), '_blank');
                    }
                }
            },
            {
                title: 'Mas proyectos',
                xtype: 'carousel',
                direction: 'horizontal',
                directionLock: true,
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/lux-sevilla.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/as.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/canal-iphone.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/12-rooms.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/chh-osuna.png'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/hotel-europe-paris.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/plus-ipad.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/sexsaciones.jpg'
                    },
                    {
                        xtype: 'image',
                        src: 'resources/images/yulos40.jpg'
                    }
                ]
            }

        ]
    }
});