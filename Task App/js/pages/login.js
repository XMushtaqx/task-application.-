import {isAuthenticated} from "../core/auth.js";

console.log("Auth check:", isAuthenticated());
 
import { routeHandler } from "../core/router.js";

console.log ("Router loaded");
routeHandler();