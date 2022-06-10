/* OBJECTIF : lorsqu'un utilisateur ouvre cette page et appuie sur une touche qui correspond à
 une des div, on doit lire le clip audio associé à la touche, ajouter une class à l'élément qui correspond à la touche, puis supprimez cette class afin de réinitialiser l'élément à son état d'origine.
*/

(()=> {
   const playSound = (e) => {
     const soundclip = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const keyelement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     
     if (!soundclip) return undefined;   // Stop la fonction si la clé ne match pas les éléments
     
     keyelement.classList.add('playing');
     
     // Le clip audio est toujours lu depuis le début. 
     soundclip.currentTime = 0;
     
     soundclip.play(); // Play sound
   }
   
   const removeTransition = (e) => {
    // skip si ce n'est pas un transform event
     if (e.propertyName !== 'transform') return undefined;
     e.target.classList.remove('playing');
   }
   
  // Trouve tous les éléments du document avec une class 'key'
   const keys = document.querySelectorAll('.key');
   
   
   // Écoute tous les événements `keydown` qui se produisent sur cette page
   // Si `keydown`, déclenche la fonction `playSound`, en passant `keydown` comme argument (e)
   window.addEventListener('keydown', playSound);
   keys.forEach(key =>
     key.addEventListener(
       'transitionend',
       (e) => removeTransition.call(key, e)
     ));
 })();