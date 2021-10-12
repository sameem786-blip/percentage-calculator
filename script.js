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
    let noOfSubjects = Number(document.getElementById("i3").value);

    let percentage = ((gainedMarks/totalMarks) * 100).toString();
    
    let avg = gainedMarks/noOfSubjects;

    let grade;

    if(avg>=91 && avg<=100){
        grade = "A1";
    }else if(avg>=81 && avg<91){
        grade = "A2";
    }else if(avg>=71 && avg<81){
        grade = "B1";
    }else if(avg>=61 && avg<71){
        grade = "B2";
    }else if(avg>=51 && avg<61){
        grade = "C1";
    }else if(avg>=41 && avg<51){
        grade = "C2";
    }else if(avg>=33 && avg<41){
        grade = "D";
    }else if(avg>=21 && avg<33){
        grade = "E1";
    }else if(avg>=0 && avg<21){
        grade = "E2";
    }else{
        console.error("Invalid Input");
    }         
    

    document.getElementById("r1").innerHTML = `${percentage}%`;

    document.getElementById("r2").innerHTML = grade;
}

// if(avg>=91 && avg<=100)
//         cout<<"A1";
//     else if(avg>=81 && avg<91)
//         cout<<"A2";
//     else if(avg>=71 && avg<81)
//         cout<<"B1";
//     else if(avg>=61 && avg<71)
//         cout<<"B2";
//     else if(avg>=51 && avg<61)
//         cout<<"C1";
//     else if(avg>=41 && avg<51)
//         cout<<"C2";
//     else if(avg>=33 && avg<41)
//         cout<<"D";
//     else if(avg>=21 && avg<33)
//         cout<<"E1";
//     else if(avg>=0 && avg<21)
//         cout<<"E2";
//     else
//         cout<<"Invalid!";
//     cout<<endl;
//     return 0;
