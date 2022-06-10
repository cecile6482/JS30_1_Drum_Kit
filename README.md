# JS30_1_Drum_Kit

Premier challenge de <a href="https://github.com/wesbos">Wes Bos</a> avec le "30 Day Vanilla JS Coding Challenge". 

Il s'agit ici de produire une page HTML qui affiche une collection de div, chacun contenant une lettre qui correspond à une touche du clavier, et le nom du clip audio à jouer lorsque ce bouton est cliqué. Lorsqu'un utilisateur appuie sur une touche qui correspond à l'une des lettres affichées dans les div, la page doit lire le clip audio correspondant et placer une « highlight » (ou bordure) temporaire autour de la div.

## Guide 👩‍🏫
> Dans le Github de Wes Bos, nous avons le code HTML, CSS et les extraits sonores nécessaires pour créer cette page/application.

1. Ajoutez un écouteur d'événement à l'ensemble de l'objet window qui écoute un événement keydown ; la fonction que nous fournirons lors du rappel sera définie ensuite. Pour l'instant, décidez du nom de la fonction et fournissez ce nom comme deuxième argument pour notre écouteur d'événement.

2. Créez une fonction avec le nom que vous avez choisi à l'étape 1.<br><br>
    - La fonction doit accepter un paramètre, l'événement que la fonction va gérer.
    - Dans la fonction, déclarez et définissez deux variables qui référenceront les éléments div et audio qui correspondent à la touche qui a déclenché la fonction. 
    - Si la touche ne correspond pas à l'une des touches définies sur notre page, nous n'avons pas besoin d'aller plus loin, mais si c'est le cas, nous pouvons utiliser la variable référençant la div pour lui ajouter la class de lecture, et on peut utiliser la variable faisant référence à l'élément audio pour lire le fichier audio.

3. Déclarez et définissez une variable qui référencera tous les éléments HTML de notre page avec une class "key".

4. Parcourez les éléments HTML et ajoutez un écouteur d'événement à chacun qui se déclenchera sur l'événement en "transitioned". Fournissez une autre fonction (nom de votre choix) comme deuxième argument qui se chargera de supprimer la class "playing".

5. Créez une fonction avec le nom que vous avez choisi à l'étape 4.<br><br>
    - Cette fonction (gestionnaire d'événements) se déclenchera lorsque la class "playing" est ajoutée à un élément et que l'animation de transition se termine. L'événement fourni à la fonction en tant qu'argument contiendra une référence au TransitionEvent (ou aux événements) avec le nom de la propriété CSS vers laquelle la transition a eu lieu.
    - La fonction ne devrait être concernée que par la propriété "transform", car cette propriété définit le temps que prendra l'animation, et nous ne voulons pas supprimer la class tant que la transformation n'est pas terminée. 
    - S'il existe un événement avec une propriété "transform", ciblez le contexte de la fonction (l'élément HTML auquel l'écouteur d'événement était attaché) et supprimez la class "playing".


Terminé! 👍 