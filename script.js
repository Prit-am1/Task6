function details(){
    localStorage.setItem("Name",document.getElementById("name").value);
    localStorage.setItem("Email ID",document.getElementById("email").value);
    localStorage.setItem("Phone Number",document.getElementById("phone").value);
    localStorage.setItem("Date",document.getElementById("call").value);
    localStorage.setItem("Time",document.getElementById("time").value);
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("phone").value = " ";
    document.getElementById("call").value = " ";
    document.getElementById("time").value = " ";
}