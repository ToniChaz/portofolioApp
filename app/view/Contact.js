Ext.define('portofolio.view.Contact',{
  extend: 'Ext.form.Panel',
  xtype: 'contactform',
  
  requires: [
    'Ext.form.FieldSet',
    'Ext.field.Email'
  ],
  config: {
    title:'Contacto',
    iconCls: 'mail',
    
    scrollable: true,
    styleHtmlContent: true,    
    
    items: [
      {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Contacte conmigo'
      },
     {
       xtype: 'fieldset',
       title: 'Contacto',
       instructions: '(Email no requerido!)',
       
       items: [
         {
           xtype: 'textfield',
           name: 'name',
           label: 'Nombre',
         },
         {
           xtype: 'emailfield',
           name: 'email',
           label: 'Email',
         },
         {
           xtype: 'textareafield',
           name: 'message',
           label: 'Mensaje',
         }
       ]
     },
         {
          xtype: 'button',
          text: 'Enviar',
          ui: 'confirm',
          handler: function() {
           this.up('contactform').submit({               
               url: 'send-mail.php', 
               method: 'Post',
                success: function() { 
                    Ext.Msg.alert('Enviado');
                    this.reset();
                }, failure: function() {
                    Ext.Msg.alert("Rellena los campos!"); 
                } 
            });
            //this.up('contactform').reset();
          }
         }
    ]
  }
});