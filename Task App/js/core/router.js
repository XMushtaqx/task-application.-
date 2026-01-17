import { isAunthenticated } from "./auth";

const publicPages = ["login.html", "register.html"];
const privatePages = ["dashboard.html","task.html","contact.html"];

export function routeHandler(){
    const currentPage = window.location.pathname.split("/").pop();
 
    if(privatePages.includes(currentPage) && !isAunthenticated()){
        window.location.href ="login.html";
    }

    if(publicPages.includes(currentPage) && isAunthenticated()){
        window.location.href = "dashboard.html";
    }
}