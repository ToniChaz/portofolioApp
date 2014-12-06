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
       "<p>Soy Toni Chaz, desarrollador front end que toma un boceto de diseño y lo hace moverse, sonar y saltar, al cabo el ususario puede jugar con el. Soy un apasionado de la tecnología y la programación, organizado y comunicativo y es por eso que elegí esta profesión.</p>",
       "<p>Mis programas favoritos son Kate de KDE y Netbeans para desarrollar código HTML5, CSS3 y Javascript. He trabajado bastante con PHP y MySQL y estoy aprendiendo nodeJS y mongoDB.</p>",
       "<p>Trabajo mano a mano con directores de arte, diseñadores y redactores, dando vida a sus ideas y/o dibujos.</p>"
   ].join("")
  }
});
