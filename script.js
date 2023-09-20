function handleGetFormData(){
    // Mengambil nilai dari input form menggunakan getElementById
    const nameInput = document.getElementById('name').value;
    const cityInput = document.getElementById('city').value;
    const emailInput = document.getElementById('email').value;
    const zipCodeInput = document.getElementById('zip-code').value;
    const statusCheckbox = document.getElementById('status').checked;

    // Membuat objek yang berisi data dari input form
    const dataInput = {
        name: nameInput,
        city: cityInput,
        email: emailInput,
        zipCode: zipCodeInput,
        status: statusCheckbox,
    };

    // Mengembalikan objek formData
    return dataInput;
}

function isNumber(string){
    if(!isNaN(string)){ // Jika string adalah angka
        return true;
    }else if(isNaN(string)){ // jika string terdapat huruf
        return false;
    }
}

function checkboxIsChecked(){
    if(document.getElementById("status").checked) {
        return true;
    } else {
        return false;
    }
}

function validateFormData(data){
    if(data != null && isNumber(data.zipCode) && checkboxIsChecked()){
        return true;
    }else {
        return false;
    }
}

const form = document.querySelector('form');

function submit(){
    const warningDiv = document.getElementById("warning");
    // Memanggil fungsi handleGetFormData untuk mendapatkan data input form
    const dataInput = handleGetFormData();
    // Memanggil fungsi validateFormData untuk validasi
    if(validateFormData(dataInput) == false) {
        // Jika validasi gagal, tampilkan pesan kesalahan
        warningDiv.textContent = 'Periksa form anda sekali lagi';
        // warningDiv.classList.remove('hidden');
    } else if(validateFormData(dataInput) == true){
        // Jika validasi berhasil, hapus pesan kesalahan
        warningDiv.textContent = '';
        // warningDiv.classList.add('hidden');
    }
}

// const submitBtn = document.getElementById("submit-form");
form.addEventListener('submit', function(event){
    event.preventDefault();
    submit();
});
