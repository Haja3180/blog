//app

import express from "express" //import du module express selon docs https://expressjs.com/en/starter/hello-world.html
import { connect_db } from './db/db_connection.js' //import de la variable connect_db depuis le répertoire indiqué
import { post_router } from "./routes/post_route.js" //import de la variable post_router
import { user_router } from "./routes/user_route.js" //import de la variable user_router
connect_db(); // appel de la fonction connect_db précédemment importée

//initialisation serveur express (cf. docs expressJS https://expressjs.com/en/starter/hello-world.html)
const app = express();
const port = 4000;

//spécifie à l'app qu'on utilise du json
app.use(express.json())

//spécifie à l'app d'utiliser la route posts (incluant la f° d'ajout de post)
app.use(post_router)

//spécifie à l'app d'utiliser la route users (incluant la f° d'ajout de user)
app.use(user_router)

// spécifie à l'app d'écouter sur le port (toujours mettre à la fin) (cf. docs expressJS https://expressjs.com/en/starter/hello-world.html)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`, '!');
}
);
