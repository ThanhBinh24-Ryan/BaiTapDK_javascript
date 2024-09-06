function bai1_onclick(){
    const number1 = document.getElementById("bai1_id").value *1;
    let resutl;
    if(number1 > 16){
        resutl = "Da du tuoi lai xe";
    } else{
        resutl = " chua du tuoi lai xe";
    }
    const div_bai1 = document.getElementById("bai1_div");
    div_bai1.innerHTML = resutl;
}
const bai2_onclick = () => {
    const number1 = document.getElementById("bai2_id").value *1;
    let resutl;
    let DS = number1 * 20000;
    if(number1 > 100){
        resutl = "được thưởng "+ DS * 0.2;
    } else{
        resutl = "không có thưởng";
    }
    const div_bai2 = document.getElementById("bai2_div");
    div_bai2.innerHTML = resutl;
}
const tinhtien = (a) =>{
   const giamGia = a - (a * 0.2);
   return giamGia;
}
const bai3_onclick = () =>{
    const dolar = document.getElementById("bai3_id").value * 1;
    let resutl;
    const giamGias = tinhtien(dolar);
    if (dolar > 500){
        resutl = "Money da duoc giam gia xuong con = "+ giamGias;
    }else{
        resutl = "Money khong duoc giam gia  = "+ dolar;
    }
    const money = document.getElementById("bai3_div");
    money.innerHTML = resutl;
}
// ---------------------------------------------------------------
const bai33_onclick = () =>{
    const number = document.getElementById("bai3.3_id").value *1;
    let resutl;
    if(number  % 2 == 0){
        resutl = " La so chan ";

    }else{
        resutl = " La so le ";


    }
    const chanLe = document.getElementById("bai3.3");
    chanLe.innerHTML = resutl;
}
const bai22_onclick = () =>{
    const number = document.getElementById("bai2.2_id").value *1;
    let resutl;
    if(number  >= 6){
        resutl = "Hoc sinh DA DU tuoi vao vao lop 1 ";

    }else{
        resutl = "Hoc sinh KHONG DU vao lop 1";


    }
    const chanLe = document.getElementById("bai2.2_div");
    chanLe.innerHTML = resutl;
}
const bai11_onclick = () =>{
    const number = document.getElementById("bai1.1_id").value *1;
    let resutl;
    if(number > 0){
        resutl = " La so DUONG ";

    }else{
        resutl = " La so AM ";


    }
    const chanLe = document.getElementById("bai1.1_div");
    chanLe.innerHTML = resutl;
}