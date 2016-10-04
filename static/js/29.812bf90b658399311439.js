webpackJsonp([29,4],{185:function(e,n){e.exports={rawContent:'\r\nLorsqu’on crée un design dont la particularité est que le pied de page soit toujours au bas de l’écran, on se heurte à un petit soucis de conception : comment définir une hauteur minimale à la fenêtre ?\r\n\r\nNous allons voir plusieurs solutions possibles, à choisir en fonction de vos besoins.\r\n\r\n\r\nCe tutoriel date un peu (2013), mais je suis en train de lui faire une petite remise à jour, incluant de nouvelles méthodes plus modernes et plus efficaces. Je n’ai pas encore détaillé toutes ces nouvelles méthodes, mais le code est disponible. {.c-note .c-note--info}\r\n\r\nTout d’abord, comprenons bien de quoi l’on parle dans ce tutoriel, et pour cela, nous allons d’abord illustrer le problème.\r\n\r\nLorsqu’un site possède une hauteur totale plus grande que l’écran sur lequel il est vu, on peut alors descendre la page vers le bas, jusqu’au bas de la page en question ; là, le défilement est arrêté, le pied-de-page, ou "footer" en anglais, est alors fixé naturellement au bas de la page et de l’écran.\r\n\r\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-01.png) ![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-02.png) { .text-align-center }\r\n\r\nMais dans le cas où la hauteur totale de la page est inférieure à la hauteur de l’écran, alors le pied-de-page, toujours placé au bas de la page, n’atteint pas le bas de l’écran.\r\n\r\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-03.png) { .text-align-center }\r\n\r\nSi certains design ne sont pas gênés par cette éventualité, ce n’est pas le cas de tous. Pour palier à ce problème, nous allons devoir faire en sorte que le design adopte la taille du contenu si la taille de la page est supérieure à la taille de l’écran, mais que la taille minimale de la page ne puisse pas être inférieure cette dernière.\r\n\r\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-04.png) { .text-align-center }\r\n\r\nNous allons maintenant voir comment faire ceci.\r\n\r\n## La vieille méthode (IE 7+)\r\n\r\n### Le html\r\n\r\nNous partons sur cette base html :\r\n\r\n```markup\r\n<div class="page">\r\n\t<div class="bloc-principal">\r\n\t\t<header class="site-header"></header>\r\n\t\t<main class="site-content">\r\n\t\t\t<div class="sidebar"></div>\r\n\t\t\t<div class="texte"></div>\r\n\t\t</main><!-- contenu -->\r\n\t</div><!-- fin bloc-principal -->\r\n\t<footer class="main-footer"></footer>\r\n</div><!-- fin page -->\r\n```\r\n\r\nCe n’est qu’un exemple de site de base ; vous pouvez bien sûr utiliser votre propre site.\r\n\r\n![Illustration du tutoriel](https://images.emmanuelbeziat.com/tuto1-05.png) { .text-align-center }\r\n\r\nPourquoi mettre le pied de page (footer) en dehors du bloc principal ? {.c-note .c-note--question}\r\n\r\nToute l’astuce est là, c’est le fait de placer le pied-de-page en dehors du bloc du contenu qui va permettre de le fixer au bas de la page, mais aussi de l’empêcher de passer par-dessus le texte du contenu.\r\n\r\n### Le CSS en action\r\n\r\nLa première étape est donc de donner à `<html>` une hauteur de 100% (correspondant à toute la hauteur de la fenêtre), qui servira de hauteur de référence pour les balises enfants et les valeurs en pourcentage que nous allons leur donner par la suite. En effet, la valeur relative "100%" doit correspondre à quelque chose : c’est donc "100% de la fenêtre" pour `<html>`. La première balise enfant étant `<body>`, nous lui attribuons également cette valeur pour qu’elle adote une hauteur de "100% de `<html>`". Ainsi, nous pourrons positionner le footer facilement au bas de l’écran dans sa position "minimale".\r\n\r\n```css\r\nhtml, body { height: 100% }\r\n```\r\n\r\nN’oubliez pas d’ajouter ultérieurement un `margin: 0` sur `body` afin de ne pas avoir de barre de défilement.\r\n\r\nIl nous faut ensuite donner à notre conteneur principal, "page", une hauteur de 100%. Mais nous n’allons pas utiliser la propriété height, car celle-ci défini une hauteur définitive ; à la place, nous ferons usage de `min-height`, qui défini une hauteur minimale pour le conteneur : ainsi, Si la fenêtre est plus grande que la page, alors le conteneur prendra toute la hauteur disponible, mais ne sera jamais plus petite que 100% -soit la taille du contenu de la page- et ne chevauchera donc jamais ledit contenu.\r\n\r\nIl faut également préparer le positionnement du pied-de-page au bas du conteneur, aussi nous appliquons un paramètre de position relative à page.\r\n\r\n```css\r\n.page {\r\n\tmin-height: 100%;\r\n\tposition: relative;\r\n}\r\n```\r\n\r\nNous passons maintenant au conteneur `bloc-principal`. L’astuce consiste à lui attribuer une marge interne de la hauteur du pied-de-page (ici, 100px). Cela a pour but de bien définir la fin du conteneur à la fin de son contenu. Sans ce paramètre, vous vous rendrez compte que le pied-de-page se superposerait au bas du contenu sur 120px, soit sa propre hauteur.\r\n\r\n```css\r\n.bloc-principal {\r\n\tpadding-bottom: 100px;\r\n}\r\n```\r\n\r\nMaintenant, nous nous attaquons au pied-de-page. Il faut que celui-ci ait tout d’abord une hauteur définie (même s’il s’agit d’un pourcentage), puis il faut lui affecter un positionnement absolu. Comme son parent direct, le conteneur `page`, est en positionnement relatif, `footer` se sert de cette référence pour savoir où se positionner. Enfin, grâce au positionnement absolu, il suffira d’accrocher le conteneur au bas du bloc parent. On ajoute également `left` et `right` afin que le bloc prenne toute la largeur.\r\n\r\n```css\r\n.site-footer {\r\n\theight: 100px;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n}\r\n```\r\n\r\nEt nous y voici ! Il est à noter que le pied de page doit avoir du contenu pour être affiché, à cause de son positionnement absolu.\r\n\r\nVous pouvez voir le code en action sur [Codepen](http://codepen.io/EmmanuelB/pen/rfCey){ target="_blank" }.\r\n\r\n## La méthode intermédiaire (IE 8+)\r\n\r\nVoici une méthode utilisant les propriétés `display: table-*` :\r\n\r\n```markup\r\n<body>\r\n\t<div class="page">\r\n\t\t<header class="site-header"></header>\r\n\r\n\t\t<main class="site-content"></main>\r\n\r\n\t\t<footer class="site-footer"></footer>\r\n\t</div>\r\n</body>\r\n```\r\n\r\n```css\r\nhtml,\r\nbody {\r\n\theight: 100%\r\n}\r\n\r\nbody {\r\n\tmargin: 0\r\n}\r\n\r\n.page {\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.site-header,\r\n.site-content,\r\n.site-footer {\r\n\tdisplay: table-row\r\n}\r\n```\r\n\r\nAinsi, on obtient le même résultat, avec moins d’efforts. Il sera toutefois nécessaire de spécifier une hauteur (ou une hauteur maximale) au header et au footer.\r\n\r\n## La méthode moderne (IE 9+)\r\n\r\nCette méthode nécessite qu’on connaisse la hauteur du pied de page.\r\n\r\nNous avons besoin de cette base html :\r\n\r\n```markup\r\n<div class="bloc-principal">\r\n\t<div class="site-header"></div>\r\n\t<main class="contenu">\r\n\t</main>\r\n</div>\r\n<div class="site-footer"></div>\r\n```\r\n\r\nPuis nous allons utiliser une simple astuce à base de `vh` et de `calc()`. Pour expliquer très sommairement, `vh` permet de définir une hauteur relative au _viewport_ (la fenêtre de navigation), et `calc()` permet de faire une opération simple en CSS. Pour toute information complémentaire, consultez votre moteur de recherche préféré !\r\n\r\nPartons du principe que notre pied de page fait ici 40px de haut.\r\n\r\n```css\r\nbody {\r\n\tmargin: 0\r\n}\r\n\r\n.bloc-principal {\r\n\tmin-height: calc(100vh - 40px)\r\n}\r\n```\r\n\r\nHé oui, c’est tout. On dit au bloc principal de faire au minimum la totalité de la hauteur de la fenêtre, moins la hauteur du pied de page. Malin, non ?\r\n\r\n## La méthode moderne améliorée (IE 10+)\r\n\r\nPour celle-ci, on va utiliser `flexbox`, une propriété toute récente, dont je vous invite à [vérifier la compatibilité](http://caniuse.com/#feat=flexbox "CanIUse Flexbox ?"){ target="_blank" }.\r\n\r\nFlexbox n’est pas sensé être utilisé pour un gabarit de page, c’est normalement le module CSS `grid` à qui revient cette charge. Cependant, l’écriture des spécifications de `flexbox` est presque terminé et la propriété est implémentée dans tous les navigateurs modernes, alors que `grid` est encore en _working draft_, et n’est implémenté que dans Internet Explorer 10+ et Edge. {.c-note .c-note--important}\r\n\r\n```markup\r\n<body>\r\n\t<div class="page">\r\n\t\t<header class="site-header"></header>\r\n\r\n\t\t<main class="site-content"></main>\r\n\r\n\t\t<footer class="site-footer"></footer>\r\n\t</div>\r\n</body>\r\n```\r\n\r\nNous allons donc simplement appliquer `display: flex;` à `body`, et spécifier le comportement de ses descendants direct en tant que colonnes. Puis nous diront simplement à `.site-content` d’utiliser toute la hauteur disponible.\r\n\r\n```css\r\nbody {\r\n\tmargin: 0;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-height: 100vh;\r\n}\r\n\r\n.site-content {\r\n\tflex: 1;\r\n}\r\n```\r\n\r\nc’est tout !\r\n\r\n## La méthode de demain\r\n\r\nÀ priori, il viendra un temps où nous utiliseront le module grid afin de faire le squelette de notre site (Et flexbox sera utilisé pour la gestion fine du contenu). Pour en savoir plus, je vous suggère de lire [cet article sur Alsacréations](http://www.alsacreations.com/article/lire/1388-css3-grid-layout.html){ target="_blank" }.\r\n',metaData:{title:"Un site qui prend toute la hauteur disponible",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2015-10-25 22:35:01",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=29.812bf90b658399311439.js.map