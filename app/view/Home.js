Ext.define('portofolio.view.Home',{
  extend: 'Ext.Panel',
  xtype: 'homepanel',
  
  config: {
    title:'Inicio',
    iconCls: 'home',
    
    scrollable: true,
    styleHtmlContent: true,
    items: {
        docked: 'top',
        xtype: 'titlebar',
        title: 'Toni Chaz Web Developer'
    },
    
    html: [
       "<h2>Hola </h2>",
       "<p>Soy Toni Chaz, un desarrollador web que toma un boceto de dise&ntilde;o y lo hace moverse, sonar, rebotar y jugar. Soy un apasionado de la tecnolog&iacute;a y la programaci&oacute;n, organizado y comunicativo y es por eso que eleg&iacute; esta profesi&oacute;n. </p>",
       "<p>Mis programas favoritos son Notepad++ y Netbeans para desarrollar c&oacute;digo HTML5, CSS3 y Javascript, adem&aacute;s de Photoshop y Fireworks para la realizaci&oacute;n de bocetos.</p>",
       "<p>Trabajo mano a mano con directores de arte, dise&ntilde;adores y redactores, dando vida a sus ideas y/o dibujos.</p>"
   ].join("")
  }
});