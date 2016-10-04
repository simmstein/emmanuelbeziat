webpackJsonp([46,4],{168:function(e,n){e.exports={rawContent:'\r\nLorsqu’on utilise du CSS, on peut se contenter des trois sélecteurs de base : les éléments, les identifiants et les classes. Souvent, sans le savoir, vous utilisez un sélecteur simple de descendance, par un espace entre deux de ces sélecteurs - hé oui ! Mais il existe d’autres sélecteurs plus avancés, nous allons les passer en revue.\r\n\r\nJe ne traite ici que du CSS 3\\. Je vous recommande d’avoir lu préalablement l’article concernant les [sélecteurs du CSS2](http://www.emmanuelbeziat.com/blog/principes-du-css-les-selecteurs-partie1-css2/ "Principes du CSS – Les sélecteurs (Partie1 : cSS2)").\r\n\r\n\r\n## Les espaces de noms (namespace)\r\n\r\n```css\r\nnamespace|div {\r\n\tcolor: red\r\n}\r\n```\r\n\r\nUne des grandes nouveautés apportées par cette nouvelle version est la gestion des espaces de noms. Les programmeurs sauront de quoi je parle. Pour faire simple, on peut définir un espace de nom particulier et n’appliquer des propriétés qu’aux balises dans cet espace de nom.\r\n\r\n**Exemple :** Définissons un espace de nom pour une page particulière :\r\n\r\n```css\r\n@namespace produits url(http://www.monsite.com/produits.html);```\r\n\r\nPuis un espace de nom pour une autre page :\r\n\r\n```css\r\n@namespace membre url(http://www.monsite.com/membre.html);```\r\n\r\nIl est désormais possible d’appliquer des modifications qui ne seront spécifiques qu’à ces pages :\r\n\r\n```css\r\n/* propriétés qui ne seront appliqués que sur les balises h1\r\nde la page définie par l’espace de nom "produits" */\r\nproduits|h1 { color: red }\r\n\r\n/* uniquement les balises h1 dans la page définie par "membre" */\r\nmembre|h1 { color: red }\r\n\r\n/* uniquement les balises h1 qui ne sont PAS dans un espace de nom\r\n(donc autre que dans les pages définies plus haut */\r\n|h1 { color: red }\r\n\r\n/* tout élément h1 dans n’importe quel espace de nom */\r\n*|h1 { color: red }\r\n\r\n/* par défaut */\r\nh1 {color: red}\r\n```\r\n\r\nÀ noter qu’il est possible de définir un nom d’espace par défaut :\r\n\r\n```css\r\n@namespace "http://www.monsite.com"```\r\n\r\nTous les sélecteurs css qui n’ont pas d’espace de nom spécifié seront donc attribués à celui-ci.\r\n\r\n## Les sélecteurs\r\n\r\n### Sélecteur d’adjacence indirecte : "~"\r\n\r\n```css\r\nh1 ~ pre {\r\n\tcolor: red\r\n}\r\n```\r\n\r\nDans la même idée que les sélecteurs d’adjacence `+`, celui-ci permet d’atteindre tout élément (ici `pre`) de même niveau que l’élément référent (ici `h1`). La différence étant qu’ici, l’élément cible n’a pas besoin d’être directement adjacent à l’élément référent.\r\n\r\n```markup\r\n<h1>Titre</h1>\r\n<p>Pas affecté</p>\r\n<pre>Affecté</pre>\r\n<p>Pas affecté</p>\r\n```\r\n\r\n### Sélecteur d’attribut\r\n\r\n```css\r\na[href^=https] {\r\n\tcolor: red\r\n}\r\n```\r\n\r\nCe sélecteur permet de choisir un élément dont la valeur de l’attribut commence par ce que vous avez défini. Dans l’exemple, tous les liens dont l’adresse commence par "https".\r\n\r\n```markup\r\n<a href="http://www.monsite.com">Ce lien ne sera pas affecté</a>\r\n<a href="https://www.monsite.com">Ce lien sera affecté</a>\r\n```\r\n\r\nÉvidemment, ça ne se limite pas qu’aux liens.\r\n\r\n```css\r\na[href$=.pdf] {\r\n\tcolor: red\r\n}\r\n```\r\n\r\nAvec celui-ci, on peut choisir à l’inverse un élément dont la valeur de l’attribut fini par ce que vous avez défini. L’exemple au-dessus permet donc de choisir tous les liens vers un fichier PDF.\r\n\r\n```markup\r\n<a href="monfichier.doc">Ce lien ne sera pas affecté</a>\r\n<a href="monfichier.pdf">Ce lien sera affecté</a>\r\n<a href="monfichier.pdf.doc">Ce lien ne sera pas affecté</a>\r\n```\r\n\r\n```css\r\na[href*=monsite] {\r\n\tcolor: red\r\n}\r\n```\r\n\r\nCelui-ci enfin, permet de sélectionner l’élément dont l’attribut désigné comporte au moins la chaîne de caractère définie.\r\n\r\n```markup\r\n<a href="http://www.lesite.com">Ce lien ne sera pas affecté</a>\r\n<a href="http://www.monsite.com">Ce lien sera affecté</a>\r\n```\r\n\r\n## Les pseudo-classes\r\n\r\n### :last-child\r\n\r\nÀ la manière de `:first-child`, cette pseudo-classe cible un élément s’il est le dernier enfant de son parent.\r\n\r\n```css\r\ndiv p:last-child {\r\n\tcolor: red;\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n</div>\r\n```\r\n\r\nSi on voit maintenant, pour le même code CSS, ce code HTML :\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<h2>Ce titre ne sera pas affecté</h2>\r\n</div>\r\n```\r\n\r\nRien ne va se passer. En effet, le code CSS signifie "cibler tous les éléments `p` s’il s’agit du dernier enfant de leur parent" et non "cibler tous les éléments `p` qui sont les derniers de ce éléments de type `p` enfants". Or dans ce cas, c’est `h2` qui est le dernier enfant.\r\n\r\n### :first-of-type\r\n\r\nL’élément manquant à `:first-child`. Cette pseudo-classe permet cette fois-ci de cibler chaque premier élément d’un type donné, pour son parent (par exemple, le premier <span> dans un paragraphe).\r\n\r\n```css\r\ndiv *:first-of-type {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>Cet élément sera affecté</span>\r\n</div>\r\n\r\n<div>\r\n\t<h2>Ce titre sera affecté</h2>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>Cet élément sera affecté</span>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\n### :last-of-type\r\n\r\nLe parfait opposé de `:first-of-type`. Cette pseudo-classe permet cette fois-ci de cibler chaque dernier élément d’un type donné, pour son parent.\r\n\r\n```css\r\ndiv p:last-of-type {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n</div>\r\n\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<h2>Ce titre ne sera pas affecté</h2>\r\n</div>\r\n```\r\n\r\n### :only-of-type\r\n\r\nUn peu plus particulier cette-fois ci, cette pseudo-classe permet d’affecter un élément qui est le seul de son type par rapport à son parent.\r\n\r\n```css\r\ndiv p:only-of-type {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n\r\n<div>\r\n\t<h2>Ce titre ne sera pas affecté</h2>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<h2>Ce titre ne sera pas affecté</h2>\r\n</div>\r\n```\r\n\r\n### :only-child\r\n\r\nComme son nom l’indique, cette pseudo-classe n’agit que sur un élément qui est le seul enfant de son parent.\r\n\r\n```css\r\ndiv p:only-child {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n\r\n<div>\r\n\t<p>Cet élément sera affecté</p>\r\n</div>\r\n```\r\n\r\n### :nth-child(n)\r\n\r\nUn peu particulier, cette pseudo-classe permet de cibler un élément qui est le _n_ième enfant de son parent. Par exemple, si on veut choisir le second élément d’une liste :\r\n\r\n```css\r\nli:nth-child(2) {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<ul>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n\t<li>Cet élément sera affecté</li>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n</ul>\r\n```\r\n\r\n### :nth-last-child(n)\r\n\r\nMême chose que précédement, mais cette fois le décompte de _n_ commence en partant du dernier enfant. Par exemple, si on veut cibler l’avant-dernier élément d’une liste :\r\n\r\n```css\r\nli:nth-last-child(2) {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<ul>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n\t<li>Cet élément sera affecté</li>\r\n\t<li>Cet élément ne sera pas affecté</li>\r\n</ul>\r\n```\r\n\r\n### :nth-of-type(n)\r\n\r\nSimilaire à `:nth-child(_n_)` , celle-ci permet de cibler le _n_ième enfant d’un type défini. Par exemple, si on veut choisir le troisième paragraphe :\r\n\r\n```css\r\np:nth-of-type(3) {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\nSachant qu’il s’agit de type et non de nombre d’enfant, on peut s’en servir même lorsqu’il y a des balises entre deux :\r\n\r\n```markup\r\n<div>\r\n\t<span>balise</span>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>balise</span>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>balise</span>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\n### :nth-last-of-type(n)\r\n\r\nCette fois-ci, vous pouvez cibler le dernier d’un type, en partant du dernier de ce même type. Par exemple pour un avant-dernier paragraphe :\r\n\r\n```css\r\np:nth-last-of-type(3) {\r\n\tcolor: red\r\n}\r\n```\r\n\r\n```markup\r\n<div>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\nSachant qu’il s’agit de type et non de nombre d’enfant, on peut s’en servir même lorsqu’il y a des balises entre deux :\r\n\r\n```markup\r\n<div>\r\n\t<span>balise</span>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>balise</span>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n\t<span>balise</span>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\n### :not(selecteur)\r\n\r\nUn peu particulier encore une fois, cette pseudo-classe permet d’affecter tout élément qui n’est pas du type spécifié. Un exemple :\r\n\r\n```css\r\n:not(p) {\r\n\tcolor: red\r\n}\r\n```\r\n```markup\r\n<div>\r\n\t<ul>\r\n\t\t<li>Cet élément sera affecté</li>\r\n\t\t<li>Cet élément sera affecté.\r\n\t\t\t<p>Cet élément ne sera pas affecté</p>\r\n\t\t</li>\r\n\t</ul>\r\n\t<p>Cet élément ne sera pas affecté</p>\r\n</div>\r\n```\r\n\r\n### :empty\r\n\r\nUne pseudo-classe toute simple qui permet de cibler tout élément qui n’a aucun enfant.\r\n\r\n```css\r\np:empty {\r\n\tcolor: red\r\n}\r\n```\r\n```markup\r\n<div>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément sera affecté</p>\r\n\t<p>Cet élément ne sera pas affecté\r\n\t\t<span>car il contient un enfant</span>\r\n\t</p>\r\n</div>\r\n```\r\n\r\n### :enabled\r\n\r\nCelle-ci permet de cibler tout élément qui est, soit par défaut, soit précisément via html, défini comme "actif". c’est surtout utile pour les éléments de formulaire.\r\n\r\n```input:enabled {\r\n\tbackground: white\r\n}\r\n```\r\n\r\n```markup\r\n<!-- cet élément sera affecté -->\r\n<input type="text" />\r\n<!-- cet élément ne sera pas affecté, il est désactivé -->\r\n<input type="text" disabled="disabled" />\r\n```\r\n\r\n### :disabled\r\n\r\nÀ l’inverse, cette pseudo-classe permet de cibler un élément défini comme désactivé.\r\n\r\n```css\r\ninput:disabled {\r\n\tbackground: grey\r\n}\r\n```\r\n```markup\r\n<!-- cet élément ne sera pas affecté, il n’est pas désactivé -->\r\n<input type="text" />\r\n<!-- cet élément sera affecté, il est désactivé -->\r\n<input type="text" disabled="disabled" />\r\n```\r\n\r\n## Conclusion… ?\r\n\r\nTout en essayant d’être complet, je n’ai pas été exhaustif. Le CSS3 est une norme loin d’être terminée, qui évolue encore, et qui pourrait voir d’autres éléments s’ajouter par la suite. Comme toujours, n’oubliez pas qu’on peut toujours mixer plusieurs sélecteurs !\r\n',metaData:{title:"Principes du CSS - Les sélecteurs (Partie 2 : CSS3)",image:"https://images.emmanuelbeziat.com/social-default-fb.jpg",date:"2014-02-04 08:55:02",tags:["html/css"],clients:[""],categories:["Tutoriels"],template:"post",description:"",disqus:!0,publish:!0}}}});
//# sourceMappingURL=46.85da4f4355e80fd4ed93.js.map