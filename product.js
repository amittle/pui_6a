function switchGlaze() {
    let obj = document.getElementById("glaze_value");
    let glaze_value = obj.textContent;
    console.log(glaze_value);
    if (glaze_value == "NONE"){
        obj.textContent = "Sugar";
    }else if (glaze_value == "Sugar"){
        obj.textContent = "Vanilla";
    }else if (glaze_value == "Vanilla"){
        obj.textContent = "Choco";
    }else {
        obj.textContent = "NONE";
    }

}

function switchQuant() {
    let obj_q = document.getElementById("quant_value");
    let obj_p = document.getElementById("price");
    let quant_value = obj_q.textContent;
    if (quant_value == "1"){
        obj_q.textContent = "3";
        obj_p.textContent = "$10.99";
    }else if (quant_value == "3"){
        obj_q.textContent = "6";
        obj_p.textContent = "$20.99";
    }
    else if (quant_value == "6"){
        obj_q.textContent = "12";
        obj_p.textContent = "$44.99";
    }else {

        obj_q.textContent = "1";
        obj_p.textContent = "$3.99";
    }
}

function addCart() {
    location.href = "index.html";
    let obj = document.getElementById("cart_num");
    obj.textContent = "1";
    console.log(obj.textContent);

}