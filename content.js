currentUrl = $(location).attr('href');

if(currentUrl.includes('przegladaj_oceny/uczen')) {
    callback();
}



function callback() {
    grades = Array();
    let re = "^[0-9][.][0-9]{2}$";

    
    cells = document.querySelectorAll("td.right");
    for (i=0; i<cells.length; i++){

        let cell = cells[i].textContent;

        if (cell != null){
            if(cell.match(re)){
                grades.push(parseFloat(cell));
                i+=2;
            }
        }
    }

    function sum(arr) {
        let a = 0
        for(i=0; i<arr.length; i++) {
            a += arr[i];
        }
        return a
    }

    let avg = Math.round((sum(grades) / grades.length) * 100) / 100

    rows = document.querySelectorAll("tbody")[5]
    console.log(rows)

    
    // rows.concat(document.querySelectorAll("tr.line1"));
    console.log(grades);
    console.log(avg);
}