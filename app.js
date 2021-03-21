// No. 1


// function drawingTools(){

//     let jenisBangunan = document.getElementById("jenisBangunan").value;

//     let panjangBangunan = document.getElementById("ukuranBangunan").value;

// Siku rata Kiri

    let ukuranSikuRataKiri = 10;

    let space = " ";

        for(let i=0; i <= ukuranSikuRataKiri; i++){

            for(let j=0; j < i; j++){

                space += "*"

            }

            space += "\n"
        }

        console.log(space);

        // let input = `<p>${space}</p>`

        // document.getElementById("result").innerHTML = input


// Persegi

    let ukuranPersegi = 10;

    let spacePersegi = "";

        for(let i=0; i < ukuranPersegi; i++){

            for(let j=0; j < ukuranPersegi; j++){

                spacePersegi += "*"

            }

            spacePersegi += "\n"
        }

        console.log(spacePersegi);


// Siku Rata Kanan

    let ukuranSikuKanan = 10;

    let spaceSikuKanan = "";


        for(let i=0; i < ukuranSikuKanan; i++){

            for(let j=ukuranSikuKanan - i - 1; j > 0; j--){

                spaceSikuKanan += " ";

                }

                for(k=0; k < i; k++) {
                    spaceSikuKanan += "*"
                }

                spaceSikuKanan += "\n"
            }

        console.log(spaceSikuKanan)


    // if(jenisBangunan == 2) {

    //     for(let i=0; i < panjangBangunan; i++){

    //         for(let j=0; j <= i; j++){

    //             space += "*"

    //         }

    //         space += `<p>`
    //     }

    //     let input = `<p>${space}</p>`

    //     document.getElementById("result").innerHTML = input;
    // }


    // if(jenisBangunan == 3) {

    //     for(let i=0; i < panjangBangunan; i++){

    //         for(let j=panjangBangunan - i - 1; j > 0; j--){

    //             space += " ";

    //         }

    //         for(k=0; k < i; k++) {
    //             space += "*"
    //         }

    //         space += `<p>`
    //     }

    //     let input = `<p>${space}</p>`

    //     document.getElementById("result").innerHTML = input;
    // }

// Nomor 2

let arr = []

let programCondition = false;

let num = 0;

    do {

        let input = prompt("Masukkan Angka");

        let inputInt = parseInt(input)

        if (inputInt >= 0) {

            arr.push(input); 

            programCondition = true

        }

        else {

            programCondition = false

        }

    }

    while(programCondition)

let intArr = arr.map(value=>{

     return parseInt(value);

})

let intArr2 = arr.map(value=>{

    return parseInt(value);

})


let minValue = 

    arr.sort(function(a,b) {
        return a - b;
    })

let minValueNum = minValue[0]

let maxValue =

    arr.sort(function(a,b) {
        return b - a;    
})

let maxValueNum = maxValue[0]



console.log(intArr);
console.log(`Nilai Tertinggi adalah : ${maxValueNum}\nNilai Terendah Adalah : ${minValueNum}`)



