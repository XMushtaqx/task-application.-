if(!localStorage.getItem("verifiedUser")){
    location.href = "login.html"
};

const protectedPages = ["dashboard.html", "contact.html"];

const currentPage = location.pathname.split("/").pop();

if (
  protectedPages.includes(currentPage) &&
  !localStorage.getItem("verifiedUser")
) {
  location.replace("index.html");
}
