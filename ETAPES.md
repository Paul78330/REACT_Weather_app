### Etapes & instructions

1- Editer App.js en important le loader et mettre en place le JSX

2- Editer le CSS du projet /App.css

3- Créer un compte sur https://www.iqair.com/ et se connecter 

* Depuis le dashboard, créer une clé API afin de pouvoir utiliser les services proposés par IQAir
* créer un fichier .env et y stocker la cléf dans une variable nommée VITE_WEATHER_API_KEY

4- Dans App.js utiliser notre useEffect pour appeler notre API à l'aide de fetch()

5- Utiliser la réponse de notre promesse afin de stocker les données dans notre useState weatherData et hydrater notre render avec les données nouvellement récupérées

6- Ajouter un catch pour la gestion des erreurs en cas de problèmes lors de la requête fetch et mettre à jour errorInfo

7- Prevoir un render si errorInfo est défini
