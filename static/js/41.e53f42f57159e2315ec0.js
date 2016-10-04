webpackJsonp([41,4],{173:function(e,t){e.exports={rawContent:'\r\nAvec Windows 7 est apparue la possibilité d’épingler des programmes dans la barre des tâches. Internet Explorer (depuis la version 9) propose une fonctionnalité d’épinglage avancé : il suffit de déplacer l’onglet d’une page vers la barre des tâches pour y trouver de nouvelles actions possibles. Ces fonctionnalités se paramètrent sur votre propre site, nous allons donc voir comment.\r\n\r\n![sites-epingles](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/sites-epingles.jpg) { .text-align-center }\r\n\r\nPour la première partie, un minimum de connaissances en HTML est requis. Les parties HTML seront suffisamment détaillées pour que les moins expérimentés s’y retrouvent.\r\n\r\nPour la seconde partie, facultative, mais non moins intéressante, vous aurez également besoin de bonnes connaissances en Javascript. Ces parties sont réservées à des développeurs plus avancés, et de fait seront plus indicatives qu’explicatives. Il vous faudra donc être familier avec les fonctions et les variables.\r\n\r\nAllons-y.\r\n\r\n## Comment épingle-t-on un site ?\r\n\r\nIl existe plusieurs façons pour un utilisateur d’épingler un site.\r\n\r\nDans Windows 7 et 8 (en mode bureau), il suffit de faire glisser l’onglet du site ou le favicon (icône du site) vers la barre des tâches pour que le site s’épingle seul. Il est également possible d’utiliser le menu Outils (`Alt` + `o`), puis de sélectionner "_Ajouter le site au menu démarrer_", mais le raccourci se place dans le menu et non sur la barre des tâches.\r\n\r\n![épinglage](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/epinglage.jpg) { .text-align-center }\r\n\r\nDans Windows 8 (en mode ModernUI), il y a un bouton "_Épingler à l’écran d’accueil_" dans la barre de navigation en bas de la fenêtre d’Internet Explorer.\r\n\r\nIl est également possible de créer des outils d’épinglage (boutons, barres), comme nous le verrons par la suite.\r\n\r\n### Les modifications d’interface\r\n\r\nLorsqu’un site est lancé depuis un raccourci épinglé, l’interface change légèrement par rapport à une fenêtre normale d’Internet Explorer. Le bouton accueil à droite disparaît, l’icône du site est affichée à gauche des boutons de navigation, et ceux-ci adoptent une couleur différente.\r\n\r\n![Un exemple de site épinglé](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/exemple-site-epingle.jpg) { .text-align-center }\r\n\r\n### La barre des tâches, mais pas seulement !\r\n\r\nIl existe également une petite subtilité : si vous glissez le site non pas sur la barre des tâches mais sur le bouton du menu Démarrer (uniquement pour Windows 7 donc), votre site et ses raccourcis apparaîtront dans celui-ci.\r\n\r\n![epinglage menu démarrer](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/menu-demarrer.jpg) { .text-align-center }\r\n\r\nLa théorie étant vue, place à l’action.\r\n\r\n## Préparer le terrain\r\n\r\nIl faut savoir que n’importe quel site peut être épinglé à la barre de tâche, il n’y a rien à faire pour rendre un site épinglable ou non. Ce que nous allons faire tout au long de ce tutoriel, c’est **personnaliser cet épinglage** ; pour commencer, nous allons voir quelques informations de personnalisation de base à donner au site par le biais des métadonnées.\r\n\r\n### Les métadonnées d’installation\r\n\r\nCes éléments permettent de définir plusieurs paramètres qui seront enregistrés lors de l’épinglage du site, et donc de la création du raccourci. Ce sont des éléments facultatifs, mais recommandés.\r\n\r\nIl est important de comprendre que ces valeurs ne seront utilisées qu’à l’épinglage. Si vous modifiez ces données après que vous ou un utilisateur ayez épinglé le site, les modifications ne seront pas prises en comptes. Il faudra réépingler le site pour qu’une nouvelle "installation" se crée avec ces nouveaux paramètres. {.c-note .c-note--important}\r\n\r\n#### application-name\r\n\r\nLa première chose que l’on pourrait vouloir faire, c’est modifier le nom affiché dans la fenêtre d’information, qui apparaît lors du clic droit sur l’icône d’un site épinglé. En effet, par défaut il sera affiché le contenu de la balise `<title>` du document lié.\r\n\r\nAjoutons donc une métadonnée afin de choisir nous-mêmes ce qui sera affiché par le lien de base :\r\n\r\n```markup\r\n<meta name="application-name" content="Un beau site épinglable">\r\n```\r\n\r\nLe résultat est immédiat, le nom du lien vers le site est transformé selon nos souhaits.\r\n\r\n#### msapplication-tooltip\r\n\r\nIl est également possible d’ajouter une infobulle qui apparaîtra lors du survol de l’icône.\r\n\r\n```markup\r\n<meta name="msapplication-tooltip" content="Cliquez pour vous rendre sur un magnifique site !">\r\n```\r\n\r\n#### msapplication-starturl\r\n\r\nIl faut savoir que, par défaut, la page qui s’ouvrira lorsqu’un utilisateur cliquera sur le bouton du site épinglé sera celle qu’il visitait au moment où il l’a épinglé. s’il était sur une page obscure du fin fond de votre site, c’est cette page qu’il verra chaque fois qu’il ouvrira votre site par le biais de l’icône épinglée.\r\n\r\nPour choisir vous-même quelle URL sera lancée au moment de l’ouverture, vous pouvez utiliser ce code :\r\n\r\n```markup\r\n<meta name="msapplication-starturl" content="./">\r\n```\r\n\r\nIci, on demande au site de toujours s’ouvrir à la racine (l’index). On pourrait mettre n’importe quelle adresse, soit absolue (de forme http://www.monsite.com), soit relative à la page en cours (de forme /test.html).\r\n\r\nSeuls les protocoles HTTP et HTTPS sont autorisés. { .c-note .c-note--info }\r\n\r\n#### msapplication-window\r\n\r\nPar défaut, lors de la première ouverture d’un site épinglé, la fenêtre ouverte aura une taille de 800×600 pixels. Par la suite, la taille conservée sera celle qu’aura décidé l’utilisateur en redimensionnant ladite fenêtre.\r\n\r\nCependant, il peut être judicieux de vouloir faire en sorte que le premier affichage soit plus grand. Et c’est possible avec cette balise meta :\r\n\r\n```markup\r\n<meta name="msapplication-window" content="width=1024;height=768">\r\n```\r\n\r\n`height` représente bien sûr la hauteur, et `width` la largeur.\r\n\r\n### Les métadonnées d’exécution\r\n\r\nCes paramètres sont lus à chaque fois que le site épinglé est ouvert. Les données peuvent donc être facilement mises à jour.\r\n\r\n#### msapplication-navbutton-color\r\n\r\nComme je le disais plus tôt, lorsqu’un site est lancé depuis un raccourci épinglé (on parle de mode site), l’interface est légèrement modifiée par rapport au site ouvert normalement. Par exemple, les boutons précédents et suivants adoptent une couleur adaptée au site ; par défaut, Internet Explorer choisit cette couleur parmi les dominantes principales du site.\r\n\r\nLà encore, vous pouvez choisir vous-même cette couleur :\r\n\r\n```markup\r\n<meta name="msapplication-navbutton-color" content="#c80000">\r\n```\r\n\r\n#### msapplication-task\r\n\r\nGrâce à cette balise, vous pouvez ajouter des liens dans la liste des Tâches. Ce sera l’objet de la partie suivante de ce tutoriel.\r\n\r\n#### msapplication-task-separator\r\n\r\nCet élément permet de créer une ligne de séparation entre deux éléments de la liste des Tâches. La valeur de content est facultative.\r\n\r\n```markup\r\n<meta name="msapplication-task-separator" content="">\r\n```\r\n\r\n### Quelques exemples\r\n\r\nSaviez-vous que de nombreux sites utilisent déjà ces fonctionnalités ? Voici de petits exemples…\r\n\r\n#### Facebook\r\n\r\n```markup\r\n<meta name="application-name" content="Facebook" />\r\n<meta name="msapplication-tooltip" content="Start the Facebook App" />\r\n<meta name="msapplication-starturl" content="/" />\r\n<meta name="msapplication-window" content="width=800;height=600" />\r\n```\r\n\r\n#### Bing\r\n\r\n```markup\r\n<meta content="Bing" name="application-name" />\r\n<meta content="Bing" name="msapplication-tooltip" />\r\n<meta content="width=1024;height=768" name="msapplication-window" />\r\n<meta content="/" name="msapplication-starturl" />\r\n```\r\n\r\n#### Twitter\r\n\r\n```markup\r\n<meta name="msapplication-TileImage" content="//abs.twimg.com/favicons/win8-tile-144.png">\r\n<meta name="msapplication-TileColor" content="#00aced">\r\n```\r\n\r\n![exemple-bing](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/exemple-bing.jpg)\r\n\r\n## Liste de raccourcis statiques (tâches)\r\n\r\n![taches facebook](https://www.emmanuelbeziat.com/wp-content/uploads/2013/07/taches-fb.jpg)\r\n\r\nLe plus simple pour commencer, est de pouvoir ajouter des liens statiques, appelés "tâches" (jumplists en anglais). Ces liens ont pour but de rediriger vers des pages pérennes de votre site.\r\n\r\nLes tâches de base (statiques) sont définies par des balises de métadonnées (meta). Vous pouvez créer jusqu’à cinq tâches, qui apparaîtront dans la catégorie "Tâches".\r\n\r\nVoici la balise en question, qui se définit par la valeur de name "msapplication-task".\r\n\r\n```markup\r\n<meta name="msapplication-task" content="">\r\n```\r\n\r\nLes valeurs possibles de content sont au nombre de quatre, et doivent être séparées par un point-virgule. Voici un tableau des différentes valeurs possibles et de leur utilité :\r\n\r\n<table><tr><th>Nom</th><th>Description</th></tr>\r\n<tr><td>name</td><td>Nom de la tâche, qui apparaît dans la liste.\r\n</td></tr>\r\n<tr><td class="nowrap">action-uri</td><td>L’adresse qui sera ouverte lorsque l’élément sera cliqué, et qui peut être absolue ou relative.</td></tr>\r\n<tr><td class="nowrap">icon-uri</td><td>Une icône (image ou fichier icône) qui sera affichée juste en face du lien. L’adresse de l’icône peut également être absolue ou relative.</td></tr>\r\n<tr><td class="nowrap">window-type</td><td>Permet de définir le mode d’ouverture de la page liée.\r\n\r\n<ul>\r\n<li>tab (valeur par défaut) : nouvel onglet dans la fenêtre actuelle</li>\r\n<li>window : nouvelle fenêtre</li>\r\n<li>self : onglet actuel</li></ul></td></tr></table>\r\n\r\nPar exemple, pour créer un lien vers un blog, avec une icône personnalisée, on pourrait faire ceci :\r\n\r\n```markup\r\n<meta name="msapplication-task" content="name=Le Blog !;action-uri=http://monblog.com;icon-uri=blog.ico">\r\n```\r\n\r\nOu pour faire un lien vers une page Twitter en utilisant leur favicon comme icône :\r\n\r\n```markup\r\n<meta name="msapplication-task" content="name=Twitter;action-uri=http://fr.twitter.com/moi;icon-uri=http://twitter.com/favicon.ico">\r\n```\r\n\r\nIl est tout à fait possible de s’arrêter ici. Ces fonctions sont largement suffisantes pour beaucoup de sites. Les parties suivantes du tutoriel requièrent des notions plus ou moins avancées de Javascript, et ne conviendront pas aux débutants. { .c-note .c-note--info }\r\n\r\n## Liste de raccourcis dynamiques\r\n\r\nIl est également possible de créer des tâches dynamiquement, en utilisant du Javascript. Ces tâches peuvent être par exemple les derniers articles d’un blog, vos derniers tweets, ou bien les derniers commentaires d’une vidéo. Vous pouvez créer jusqu’à vingt tâches dynamiques, mais **seules les dix dernières seront affichées**.\r\n\r\n### Vérification du _mode site_\r\n\r\nLorsque le site est ouvert depuis un raccourci épinglé, on dit qu’il est en mode site. Il sera donc utile de vérifier en Javascript si le site est exécuté avec ce mode ou pas. Pour ça, il existe une méthode [`msIsSiteMode()`](http://msdn.microsoft.com/fr-fr/library/ie/ff976310%28v=vs.85%29.aspx "MSDN").\r\n\r\nNous pouvons créer une fonction simple de vérification, et attribuer le résultat à une variable :\r\n\r\n```var siteMode = testSiteMode();\r\n\r\n// Teste si le site a été lancé depuis un raccourci épinglé (mode site);\r\nfunction testSiteMode() {\r\n\ttry {\r\n\t\tif (window.external.msIsSiteMode()) {\r\n\t\t\treturn true;\r\n\t\t}\r\n\t}\r\n\tcatch(e) {\r\n\t\treturn false;\r\n\t}\r\n}\r\n```\r\n\r\nAinsi, il n’y aura plus qu’à tester la variable `siteMode` par la suite.\r\n\r\n### Créer une liste vide\r\n\r\nAvant de pouvoir ajouter des liens à une liste, il faut créer une liste grâce à la méthode [`msSiteModeCreateJumpList()`](http://msdn.microsoft.com/fr-fr/library/ff976293%28v=vs.85%29.aspx "MSDN").\r\n\r\n```javascript window.onload = function() {\r\n\ttry {\r\n\t\tif (siteMode) {\r\n\t\t\t// Créer la nouvelle liste\r\n\t\t\twindow.external.msSiteModeCreateJumpList(\'Liste Dynamique\');\r\n\t\t}\r\n\t}\r\n\tcatch (e) {\r\n\t\t// Echec, ne rien faire\r\n\t}\r\n}\r\n```\r\n\r\nAinsi, une nouvelle catégorie est ajoutée au-dessus des "Tâches".\r\n\r\nIl peut également être utile de remettre à zéro une liste, par exemple à la demande de l’utilisateur, ou pour mettre à jour des liens. Pour cela il existe la méthode [`msSiteModeClearJumpList()`](http://msdn.microsoft.com/fr-fr/library/ff976315%28v=vs.85%29.aspx "MSDN").\r\n\r\n```javascript\r\nwindow.onload = function() {\r\n\ttry {\r\n\t\tif (siteMode) {\r\n\t\t\t// Supprimer toute liste dynamique existante\r\n\t\t\twindow.external.msSiteModeClearJumpList();\r\n\t\t\t// Créer la nouvelle liste\r\n\t\t\twindow.external.msSiteModeCreateJumpList(\'Liste Dynamique\');\r\n\t\t}\r\n\t}\r\n\tcatch (e) {\r\n\t\t// Echec, ne rien faire\r\n\t}\r\n}\r\n```\r\n\r\n### Ajouter des éléments à la liste\r\n\r\nMaintenant que la liste est prête, nous allons y ajouter des éléments le plus simplement du monde, grâce à la fonction [`msSiteModeAddJumpListItem()`]("MSDN").\r\n\r\n```javascript\r\nwindow.onload = function() {\r\n\ttry {\r\n\t\tif (siteMode) {\r\n\t\t\t// Supprimer toute liste dynamique existante\r\n\t\t\twindow.external.msSiteModeClearJumpList();\r\n\t\t\t// Créer la nouvelle liste\r\n\t\t\twindow.external.msSiteModeCreateJumpList(\'Liste Dynamique\');\r\n\r\n\t\t\t// Créer les nouveaux éléments\r\n\t\t\twindow.external.msSiteModeAddJumpListItem(\'Ma Page\', \'page.html\', \'page2.ico\');\r\n\t\t\twindow.external.msSiteModeAddJumpListItem(\'Mon blog\', \'/blog/\', \'blog.ico\');\r\n\r\n\t\t\t// Créer les nouveaux éléments\r\n\t\t\twindow.external.msSiteModeShowJumpList();\r\n\t\t}\r\n\t}\r\n\tcatch (e) {\r\n\t\t// Echec, ne rien faire\r\n\t}\r\n}\r\n```\r\n\r\nNotez l’utilisation de la méthode [`msSiteModeShowJumList()`](http://msdn.microsoft.com/fr-fr/library/ff976318%28v=vs.85%29.aspx "MSDN") : elle est obligatoire, sans quoi les liens ajoutés ne seront pas affichés.\r\n\r\nIl ne vous reste désormais qu’à trouver des idées d’application. Vous pouvez par exemple, comme **Amazon**, enregistrer une liste de favoris, ou la liste des dernières recherches effectuées.\r\n\r\nOn pourrait par exemple imaginer créer un bouton pour l’ajout d’une fiche de membre à une liste de Favoris. Le bouton appellerait une fonction `AjouterMembreListe`, et les paramètres seraient passés dynamiquement à la fonction avec PHP (ou autre) :\r\n\r\n```javascript\r\nvar site = null;\r\nfunction AjouterMembreListe(nomMembre, adresseMembre) {\r\n\tsite = window.external;\r\n\tsite.msSiteModeCreateJumpList(\'Mes membres favoris\');\r\n\tsite.msSiteModeAddJumpListItem(nomMembre, adresseMembre, \'images/membre.ico\');\r\n}\r\n```\r\n\r\n## Les notifications en Javascript\r\n\r\nPuisque l’on a ajouté des éléments de manière dynamique, il peut être utile de prévenir l’utilisateur que des changements ont été faits. Il y a deux possibilités pour cela : ajouter une image superposée à l’icône, ou faire clignoter l’icône dans la barre des tâches.\r\n\r\n### Ajouter une image par-dessus l’icône\r\n\r\nUne technique qui peut-être très pratique pour indiquer qu’un certain type d’événement s’est produit. Par exemple, que l’utilisateur a reçu un certain nombre de messages.\r\n\r\n![notification-facebook](https://www.emmanuelbeziat.com/wp-content/uploads/2014/03/notif-fb.jpg) { .text-align-center }\r\n\r\nCela se fait avec la méthode [`msSiteModeSetIconOverlay()`](http://msdn.microsoft.com/fr-fr/library/ff976316%28v=vs.85%29.aspx "MSDN"), qui attend deux paramètres : l’adresse de l’image (obligatoire), et un texte descriptif de la notification (optionnel).\r\n\r\n```window.external.msSiteModeSetIconOverlay(\'newMP.ico\', \'Un nouveau message privé est arrivé\');```\r\n\r\nPour retirer cette image, on peut utiliser la méthode [`msSiteModeClearIconOverlay()`](http://msdn.microsoft.com/fr-fr/library/ff976314%28v=vs.85%29.aspx "MSDN"), par exemple lorsque les messages ont été lus.\r\n\r\n### Exemple concret\r\n\r\nVoici maintenant un exemple d’utilisation, qui imagine que nous avons un système de Commentaires. On souhaite créer une fonction qui modifie l’image en fonction d’un statut passé dynamiquement en fonction d’un événement. Une recherche est faite sur le site pour détecter la présence de nouveaux messages, et le résultat est transmis à l’icône épinglée par le biais d’une fonction :\r\n\r\n*   État normal\r\n*   Nouveaux messages, avec affichage du nombre de messages\r\n*   En recherche\r\n*   Erreur\r\n```javascript\r\nvar etats = { VIDE: 0, NORMAL: 1, ERREUR: 2 };\r\nvar messages = [ \'En attente\', \'Nouveaux commentaires !\', \'Erreur\' ];\r\n\r\n// Fonction de modification de l’icône en fonction du statut\r\nfunction modifierIcone(statut) {\r\n\tswitch (statut) {\r\n\t\tcase etats.VIDE:\r\n\t\t// s’il n’y a aucune notification, enlever l’image et laisser l’icône vide\r\n\t\tclearOverlayIcon();\r\n\t\tbreak;\r\n\r\n\t\tcase etats.NORMAL:\r\n\t\t// Si le nombre de messages non lu est nul, enlever l’image et laisser l’icône vide\r\n\t\tif (messagesNonLus == 0) {\r\n\t\t\tclearOverlayIcon();\r\n\t\t}\r\n\t\telse {\r\n\t\t\t// Sinon, appliquer une icône particulière en fonction du nombre de messages, et afficher une description\r\n\t\t\tsetOverlayIcon(\'img/num_\' + messagesNonLus + \'.ico\', messages[2]);\r\n\t\t}\r\n\t\tbreak;\r\n\r\n\t\tcase etats.ERREUR:\r\n\t\t\t\t\t// s’il y a une erreur, l’afficher, puis remettre l’icône normale\r\n\t\tif (messagesNonLus == 0) {\r\n\t\t\tsetOverlayIcon(\'img/erreur.ico\', messages[3]);\r\n\t\t\tsetStatus(etats.CLEAR);\r\n\t\t}\r\n\t\tbreak;\r\n\t}\r\n}\r\n```\r\n\r\n### Clignotement du bouton dans la barre des tâches\r\n\r\nUtile pour attirer rapidement l’attention, il faut néanmoins se demander s’il n’est pas plus pertinent d’utiliser une image superposée à l’icône. En effet, il n’y a rien de plus agaçant pour un utilisateur qu’un élément qui clignote toutes les deux minutes. Il sera par exemple préférable de mettre un chiffre en image pour signaler que de nouveaux commentaires ont été postés, plutôt que de flasher l’utilisateur à chaque fois. { .c-note .c-note--important }\r\n\r\n![clignotement](https://www.emmanuelbeziat.com/wp-content/uploads/2014/03/clignotement.jpg) { .text-align-center }\r\n\r\nLe clignotement se fait au moyen de la méthode [`msSiteModeActivate()`](http://msdn.microsoft.com/fr-fr/library/ff975166%28v=vs.85%29.aspx "MSDN"). Celle-ci ne prend aucun paramètre, et ne fait rien d’autre que faire clignoter l’icône jusqu’à ce que l’utilisateur ait ouvert la fenêtre.\r\n\r\n## L’aperçu miniature et la barre d’outils\r\n\r\nPour aller plus loin, il est également possible d’ajouter des fonctionnalités à la fenêtre d’aperçu, à la manière des lecteurs multimédias qui disposent dans cette même fenêtre de boutons tels que Play, Stop, Pause, Suivant et Précédent. Il est possible de créer le même genre d’éléments pour un site épinglé.\r\n\r\nAu-delà de boutons de lecture, on peut imaginer ajouter un bouton pour accéder directement à une liste de favoris, un bouton de partage sur les réseaux sociaux, modifier un état (en ligne/hors ligne), ou bien accéder aux informations de localisation d’une entreprise ; bref, un véritable petit contrôle à distance de votre site.\r\n\r\n![barre d’outils](https://www.emmanuelbeziat.com/wp-content/uploads/2014/03/barre-outils.jpg) { .text-align-center }\r\n\r\n#### À retenir avant toute chose\r\n\r\n*   Tout d’abord, il ne peut y avoir que sept boutons en tout et pour tout. Il est possible cependant d’affecter à certains boutons un double emploi. Par exemple, le bouton Play devient le bouton pause lorsque la lecture commence.\r\n*   Ensuite, vous ne pouvez pas ajouter de boutons à une barre d’outils déjà créée. Il faudra obligatoirement la réinitialiser. Il est cependant possible de masquer ou désactiver temporairement des boutons qui ne seraient pas désirés.\r\n*   Enfin, la barre d’outils et ses boutons sont créés pour toute la durée de la vue du site en mode épinglé. Si l’utilisateur quitte la page d’origine, les boutons et la barre d’outils restent visibles.\r\n\r\n### Créer les boutons et la barre\r\n\r\nContrairement aux tâches, les boutons de la barre d’outils doivent être créés avant la barre. Nous utilisons la méthode [`msSiteModeAddThumbBarButton()`](http://msdn.microsoft.com/fr-fr/library/ff976313%28v=vs.85%29.aspx "MSDN"), qui attend deux paramètres : l’URL de l’icône à utiliser (16×16px), et la description à afficher dans l’infobulle du bouton.\r\n\r\n```javascript\r\nvar btnFacebook = window.external.msSiteModeAddThumbBarButton(\'facebook.ico\', \'Facebook\');\r\nvar btnTwitter = window.external.msSiteModeAddThumbBarButton(\'twitter.ico\', \'Twitter\');\r\nvar btnGoogle = window.external.msSiteModeAddThumbBarButton(\'googleplus.ico\', \'Google+\');\r\n```\r\n\r\nLe "nom" des boutons (c’est un identifiant) sera utile pour leur attribuer des actions.\r\n\r\nIl reste ensuite à afficher la barre avec la fonction [`msSiteModeShowThumbBar()`](http://msdn.microsoft.com/fr-fr/library/ff976319%28v=vs.85%29.aspx "MSDN"). Comme signalé en début de chapitre, une fois passée cette étape, il ne sera pas possible d’ajouter de boutons supplémentaires.\r\n\r\n```javascript\r\nwindow.external.msSiteModeShowThumbBar();\r\n```\r\n\r\n### Donner des actions aux boutons\r\n\r\nRendus ici, nous avons trois jolis boutons affichés sous notre site, mais qui ne servent à rien. Voyons maintenant comment leur offrir une fonction avec un gestionnaire d’événements avec l’événement [`onmsthumbnailclick`](http://msdn.microsoft.com/fr-fr/library/ff975582%28v=vs.85%29.aspx "MSDN").\r\n\r\n#### Appeler l’événement\r\n\r\nEn fonction du mode de document (je vous passe les détails), la méthode d’appel au gestionnaire peut changer. Il faut donc prévoir les deux cas possibles :\r\n\r\n```javascript\r\nif (document.addEventListener) {\r\n\tdocument.addEventListener(\'msthumbnailclick\', actionBouton, false);\r\n}\r\nelse if (document.attachEvent) {\r\n\tdocument.attachEvent(\'onmsthumbnailclick\', actionBouton);\r\n}\r\n```\r\n\r\nAvec ceci, vous n’aurez pas de problème. Continuons donc : on peut maintenant créer la fonction adéquate. Lors de l’étape précédente, nous avons donné des identifiants à chaque bouton, c’est ce qui est passé en paramètre ici :\r\n\r\n```javascript\r\nfunction actionBouton(bouton) {\r\n\tswitch (bouton.buttonID) {\r\n\t\tcase btnFacebook: action; break;\r\n\t\tcase btnTwitter: action; break;\r\n\t\tcase btnGoogle: action; break;\r\n\t}\r\n}\r\n```\r\n\r\nIl ne reste plus qu’à définir les actions en questions, par exemple en faisant des appels de fonctions que vous aurez préalablement créées (ou que vous allez créer par la suite) :\r\n\r\n```javascript\r\nfunction actionBouton(bouton) {\r\n\tswitch (bouton.buttonID) {\r\n\t\tcase btnFacebook: actionFB(); break;\r\n\t\tcase btnTwitter: actionTwitt(); break;\r\n\t\tcase btnGoogle: actionGplus(); break;\r\n\t}\r\n}\r\n```\r\n\r\n### Modifier l’affichage des boutons\r\n\r\nComme je vous le disais plus tôt, il n’est pas possible d’ajouter ou de modifier des boutons une fois la barre d’outils affichés, mais il est en revanche possible d’agir sur les boutons déjà présents.\r\n\r\n#### Activer et désactiver un bouton\r\n\r\nSi vous faites un lecteur audio comme dans l’exemple de l’image d’illustration plus haut, il peut être utile d’activer ou désactiver certains boutons. Par exemple, lorsque l’utilisateur est sur la première piste, le bouton "piste précédente" est inutile ; idem lorsqu’il écoute la dernière piste pour le bouton "piste suivante".\r\n\r\nc’est la méthode [`msSiteModeUpdateThumbBarButton()`](http://msdn.microsoft.com/fr-fr/library/ff976320%28v=vs.85%29.aspx "MSDN") qui va permettre ceci. Elle attend trois paramètres obligatoires :\r\n\r\n*   l’identifiant du bouton retourné par la méthode [`msSiteModeAddThumbBarButton()`](http://msdn.microsoft.com/fr-fr/library/ff976313%28v=vs.85%29.aspx "MSDN") ; souvenez-vous, nous avons nommé les nôtres `btnFacebook`, `btnTwitter` et `btnGoogle`</a> dans le point précédent. Ce sont ces noms qu’il faut indiquer.\r\n*   un booléen qui indiquera si le bouton est activé (`true`) ou désactivé (`false`) : c’est ce dont nous allons nous servir ici.\r\n*   un second booléen qui indiquera si le bouton est affiché (`true`) ou masqué (`false`)\r\n\r\nVoyons un exemple avec deux boutons qui s’activent et se désactivent l’un l’autre :\r\n\r\n```javascript\r\nvar btnEtat = 0;\r\n\r\nfunction boutonChange() {\r\n\t// On active les deux boutons avant toute chose\r\n\twindow.external.msSiteModeUpdateThumbBarButton(boutonID1, true, true);\r\n\twindow.external.msSiteModeUpdateThumbBarButton(boutonID2, true, true);\r\n\r\n\tif (btnEtat === 0) {\r\n\t\t// Activer le bouton 1 et désactiver le bouton 2\r\n\t\twindow.external.msSiteModeUpdateThumbBarButton(boutonID1, true, true);\r\n\t\twindow.external.msSiteModeUpdateThumbBarButton(boutonID2, false, true);\r\n\t\tbtnEtat = 1;\r\n\t}\r\n\telse {\r\n\t\t// Activer le bouton 2 et désactiver le bouton 1\r\n\t\twindow.external.msSiteModeUpdateThumbBarButton(boutonID1, false, true);\r\n\t\twindow.external.msSiteModeUpdateThumbBarButton(boutonID2, true, true);\r\n\t\tbtnEtat = 0;\r\n\t}\r\n}\r\n```\r\n\r\n#### Masquer un bouton\r\n\r\nParfois, il peut être utile de masquer un bouton. On utilise donc la même méthode ([`msSiteModeUpdateThumbBarButton()`](http://msdn.microsoft.com/fr-fr/library/ff976320%28v=vs.85%29.aspx "MSDN")) que pour l’activation et la désactivation, mais cette fois nous nous intéressons au dernier paramètre attendu par la méthode. Il suffit donc de mettre le dernier paramètre sur false pour masquer un bouton :\r\n\r\n```javascript\r\nwindow.external.msSiteModeUpdateThumbBarButton(boutonID, true, false);\r\n```\r\n\r\nLorsqu’on change de page au sein d’un site en mode site, la barre d’outils reste visible tant que la fenêtre épinglée est ouverte, mais les boutons risquent de cesser de fonctionner. En effet, si l’utilisateur va sur un autre site, le gestionnaire d’événements ne sera plus présent. Il peut donc être utile de les masquer lorsque la page où le code se trouve est déchargée.\r\n\r\n```javascript\r\nfunction masquerBoutons() {\r\n\twindow.external.msSiteModeUpdateThumbBarButton(btnFacebook, true, false);\r\n\twindow.external.msSiteModeUpdateThumbBarButton(btnTwitter, true, false);\r\n\twindow.external.msSiteModeUpdateThumbBarButton(btnGoogle, true, false);\r\n}\r\n```\r\n\r\nIl suffit ensuite d’appeler la fonction à l’événement unload :\r\n\r\n```markup\r\n<body onunload="masquerBoutons()">\r\n```\r\n\r\nLors du retour sur la page adéquate, comme les boutons sont créés dans le chargement `onload`, ils seront à nouveau affichés automatiquement.\r\n\r\n#### Modifier l’état d’un bouton en changeant son style\r\n\r\nParfois, comme dans le cadre d’un bouton play/pause, il peut être utile de pouvoir changer l’état d’un bouton. c’est possible avec la méthode [`msSiteModeAddButtonStyle()`](http://msdn.microsoft.com/fr-fr/library/ff976298%28v=vs.85%29.aspx "MSDN"). On peut lui donner quatre paramètres, dont deux sont facultatifs : l’identifiant du bouton, l’icône du nouveau bouton (16×16px toujours), puis la description dans l’infobulle du "nouveau" bouton, et enfin un nouvel ID si besoin.\r\n\r\nEn gardant l’idée du bouton play/pause, nous allons d’abord créer les styles par défaut.\r\n\r\n```btnPlayPause = window.external.msSiteModeAddThumbBarButton(\'play.ico\', \'Lecture\'); stylePlay = 0;\r\n// Style par défaut\r\nstylePause = window.external.msSiteModeAddButtonStyle(btnPlayPause, \'pause.ico\', \'Pause\');```\r\n\r\nEnsuite, il suffit de modifier ces états via une fonction. On imagine qu’on passe une variable (relative à un player web) `etat` qui vaut soit pause, soit play.\r\n\r\n```function playPause(etat) {\r\n\t// En fonction de l’état envoyé, on défini le style à affecter\r\n\tvar styleBtn = etat.pause ? stylePlay : stylePause;\r\n\t// On attribue au bouton le nouveau style\r\n\twindow.external.msSiteModeShowButtonStyle(btnPlayPause, styleBtn);\r\n}\r\n```\r\n\r\nEt voilà pour cette partie.\r\n\r\n## Aller plus loin : les astuces\r\n\r\n### Une image pour épingler le site\r\n\r\nComme je vous le disais au début, il est possible de créer des images dans votre site que l’utilisateur aura simplement à déplacer vers la barre des tâches au lieu de l’onglet, vous donnant ainsi la possibilité d’expliquer simplement à vos utilisateurs de quoi il retourne. c’est ainsi que sur certains sites comme HtmlGoodies, les utilisateurs d’Internet Explorer 9 ou plus ont une petite barre affichée indiquant qu’il suffit de la déplacer dans la barre des tâches (l’image étant explicite) pour bénéficier de nouvelles fonctionnalités.\r\n\r\n![htmlgoodies](https://www.emmanuelbeziat.com/wp-content/uploads/2014/03/htmlgoodies.jpg) { .text-align-center }\r\n\r\nFaire ceci est très simple, car il suffit d’ajouter à une image la classe `msPinSite` pour que le navigateur sache quoi faire de cette image et comment la traiter. N’importe quel format d’image web peut-être utilisé (JPG, GIF, PNG).\r\n\r\n```markup\r\n<img src="monImage.png" alt="Glisser-épingler le site" class="msPinSite" />\r\n```\r\n\r\nMicrosoft a d’ailleurs publié une petite page d’exemple, [Pin Site Radio](http://ie.microsoft.com/testdrive/Browser/Radio/Default.html).\r\n\r\n### Détecter s’il s’agit du premier lancement du site épinglé\r\n\r\nSi vos utilisateurs lancent le site épinglé pour la première fois, il peut être intéressant de les rediriger vers une nouvelle page pour leur en expliquer les fonctionnalités (tâches statiques ou dynamiques…). Pour ça, il existe une méthode [`msIsSiteModeFirstRun()`](http://msdn.microsoft.com/fr-fr/library/gg593108%28v=vs.85%29.aspx "MSDN"). Vous devez lui donner un booléen en paramètre, qui va définir s’il doit ensuite enregistrer que le site a été consulté pour la première fois ou non.\r\n\r\n```javascript\r\ntry {\r\n\tif (window.external.msIsSiteMode()) {\r\n\t\t//  s’il s’agit du premier lancement\r\n\t\tif (external.msIsSiteModeFirstRun(false)) {\r\n\t\t\twindow.location = "./pageExplications.html"\r\n\t\t}\r\n\t}\r\n}\r\ncatch (e) {\r\n\t// Épinglage non-supporté\r\n}\r\n```\r\n\r\n## Pinify, le plugin jQuery\r\n\r\nIl existe un plugin jQuery nommé Pinify, qui apporte quelques suppléments (à consulter sur leur site). Il nécessite jQuery 1.5 minimum. Vous pouvez télécharger la [dernière version de jQuery](http://jquery.com/ "jQuery") depuis le site officiel.\r\n\r\nConcrètement, il permet de faire tout ce que l’on vient de voir, aussi bien la partie HTML que Javascript, de manière plus simple et rapide avec la syntaxe habituelle du jQuery. Vous pourrez donc créer vos balises meta, ajouter des listes de raccourcis (tâches) statiques ou dynamiques, gérer les notifications et créer une barre d’outils avec encore plus de facilité.\r\n\r\nCette partie est facultative, et s’adresse aux développeurs déjà habitués à manipuler du Javascript et jQuery. Elle sera donc concise et se contentera de présenter la façon de faire pour les étapes vues, en utilisant Pinify ; en cas de besoin, leur documentation est disponible. {.c-note .c-note--info}\r\n\r\nTout d’abord, il faut [télécharger Pinify](http://polyfillsbook.com/pinify/ "Pinify") et ajouter le fichier `jquery.pinify.js` à notre page (après avoir inclus jQuery). Tout est expliqué sur leur page, je vous laisse le soin d’aller lire leurs explications.\r\n\r\nEnsuite, il suffit d’appeler la fonction `.pinify();` :\r\n\r\n```javascript\r\n$(\'head\').pinify();\r\n```\r\n\r\nÀ partir de là, le plugin inclus automatiquement les balises meta de base. Nous allons maintenant voir comment les personnaliser.\r\n\r\n### La partie statique\r\n\r\n#### Ajouter des métadonnées de base\r\n\r\n```javascript\r\n$("head").pinify({\r\n\tapplicationName: \'Mon site\',\r\n\tfavIcon: \'favicon.ico\',\r\n\tnavColor: \'#bb0055\',\r\n\tstartUrl: \'http://www.monsite.com’,\r\n\ttooltip: \'Afficher mon site\',\r\n\twindow: \'width=1024;height=768\'\r\n});```\r\n\r\n#### Créer des tâches\r\n\r\n```javascript\r\n$("head").pinify({\r\n\tapplicationName: \'Mon site\',\r\n\tfavIcon: \'favicon.ico\',\r\n\tnavColor: \'#bb0055\',\r\n\tstartUrl: \'http://www.monsite.com’,\r\n\ttooltip: \'Afficher mon site\',\r\n\twindow: \'width=1024;height=768\',\r\n\ttasks: [{\r\n\t\t\'name\': \'Lire le site\',\r\n\t\t\'action\': \'http://www.monsite.com/mapage.html’,\r\n\t\t\'icon\': \'favicon.ico\'\r\n\t},\r\n\t{\r\n\t\t\'name\': \'Afficher mon blog\',\r\n\t\t\'action\': \'http://www.monsite.com/monblog/\',\r\n\t\t\'icon\': \'blog.ico\'\r\n\t}]\r\n});\r\n```\r\n\r\n### La partie dynamique\r\n\r\nDans l’exemple suivant, on va générer des tâches dynamiques… De manière dynamique. En effet, on va récupérer automatiquement les liens d’un menu de navigation (ici représenté par l’id "menu") et ajouter chaque lien dans une liste de tâches.\r\n\r\n```javascript\r\nvar menuItem = [];\r\n\r\n$("#menu a").each(data, function (key, val) {\r\n\tvar $this = $(this);\r\n\t// On crée un objet dans lequel on stocke le nom, l’adresse et l’adresse de l’icône\r\n\tvar item = {\r\n\t\t\'name\': $this.html(),\r\n\t\t\'url\': $this.attr(\'href\'),\r\n\t\t\'icon\': \'favicon.ico\'\r\n\t};\r\n\t// l’objet est ensuite ajouté à l’array que nous avons créé plus haut\r\n\tmenuItem.push(item);\r\n});\r\n\r\n// On utilise ensuite la fonction d’ajout addJumpList pour créer la liste et l’afficher\r\n$.pinify.addJumpList ({\r\n\ttitle: \'Mon menu\',\r\n\titems: menuItem\r\n});\r\n```\r\n\r\n### Les notifications\r\n\r\n#### Méthode de l’icône supplémentaire\r\n\r\nEncore plus simple que dans la version d’origine, jQuery oblige :\r\n\r\n```javascript\r\n$.pinify.addOverlay ({\r\n\ticon: \'iconeNotif.ico\',\r\n\ttitle: \'Nouvelle notification\'\r\n});\r\n```\r\n\r\nPar opposition, vous pouvez utiliser la fonction `clearOverlay()` pour retirer une icône.\r\n\r\n```javascript\r\n$.pinify.clearOverlay();\r\n```\r\n\r\n#### Méthode du clignotement\r\n\r\nTout aussi simplement que la méthode initiale :\r\n\r\n```javascript\r\n$.pinify.flashTaskbar();\r\n```\r\n\r\n### Les aperçus\r\n\r\nCette fois, le plugin simplifie grandement la tâche :\r\n\r\n```javascript\r\n$.pinify.createThumbbarButtons({\r\n\tbuttons: [{\r\n\t\tname: \'Facebook\',\r\n\t\ticon: \'facebook.ico\',\r\n\t\tclick: function () {\r\n\t\t\t// Gérer la fonction ici\r\n\t\t}\r\n\t},\r\n\t{\r\n\t\tname: \'Twitter\',\r\n\t\ticon: \'twitter.ico\',\r\n\t\tclick: function () {\r\n\t\t\t// Gérer la fonction ici\r\n\t\t}\r\n\t}]\r\n});\r\n```\r\n\r\n## Conclusion\r\n\r\nVoilà, vous savez désormais tout. Il est possible d’aller plus loin encore, en **C#** cette fois-ci, sur un serveur IIS (Windows Server), et de proposer des fonctionnalités avancées. Par exemple, vous pouvez attribuer des fonctions d’administration automatiques à un utilisateur pour peu qu’il ait les droits requis.\r\n\r\nNéanmoins, il s’agit de fonctionnalités bien plus avancées, nous nous arrêterons donc ici pour le moment. De nouvelles fonctionnalités apparaîtront avec les prochaines versions de Windows et d’Internet Explorer, comme déjà depuis IE10 les **notifications de Badge**. Ce sera l’occasion d’y revenir, et le tutoriel sera mis à jour en temps voulu.\r\n\r\nFaites de beaux sites épinglables !\r\n',
metaData:{title:"Site épinglé avec Internet Explorer",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-03-12 00:20:28",tags:["html/css","javascript","seo"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=41.e53f42f57159e2315ec0.js.map