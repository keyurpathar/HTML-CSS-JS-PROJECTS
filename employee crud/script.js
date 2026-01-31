
function getValue() {

    let picbody = document.querySelector('#picbody');
    let photo = document.querySelector('#photo');

    if (photo.files.length > 0) {
        picbody.src = URL.createObjectURL(photo.files[0]);
        picbody.style.display = "block";
        picbody.style.width = "1000px";
    }

    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let id = document.querySelector('#idnumber').value;
    let email = document.querySelector('#email').value;
    let position = document.querySelector('#position').value;

    let clutter = ''

    clutter += `
    <table border="1" cellspacing="10">

                    <tr>
                        <td>Name : </td>
                        <td>${fname} ${lname}</td>
                    </tr>

                    <tr>
                        <td>Id number : </td>
                        <td>${id}</td>
                    </tr>

                    <tr>
                        <td>E-mail : </td>
                        <td>${email}</td>
                    </tr>

                    <tr>
                        <td>Position : </td>
                        <td>${position}</td>
                    </tr>

                </table>
    `

    let tbl = document.getElementById('tbl').innerHTML = clutter;



}

