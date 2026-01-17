import { getItem, setItem, removeItem, STORAGE_KEYS } from "./storage";
export function register(email,password){
    const user = {
        id: crypto.randomUUID(),
        email,
        createdAt : Date.now()
    }

    setItem(STORAGE_KEYS.USER,user);
    return user;
};

export function login(email){
    const user = getItem(STORAGE_KEYS.USER);
    if(!user || user.email !== email){
        return null;
    }
     return user
}
 
export function logout(){
    removeItem(STORAGE_KEYS.USER);
}

export function isAunthenticated(){
    return Boolean(getItem(STORAGE_KEYS.USER));
}

export function reqiurdAuth(){
    if(!isAunthenticated()){
        window.location.href = "login.html";
    }
}
