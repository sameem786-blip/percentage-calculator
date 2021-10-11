// var btn = document.getElementById('sbtn');


// if(btn){
//     btn.addEventListener('click', ()=>{
//         let totalMarks = Number(document.getElementById("i1").value);
//         let gainedMarks = Number(document.getElementById("i2").value);

//         let percentage = (gainedMarks/totalMarks) * 100;

//         document.getElementById("r1").innerHTML = percentage;
//     });
// }

const cal = () => {
    let totalMarks = Number(document.getElementById("i1").value);
    let gainedMarks = Number(document.getElementById("i2").value);

    let percentage = ((gainedMarks/totalMarks) * 100).toString();

    document.getElementById("r1").innerHTML = percentage + "%";
}
