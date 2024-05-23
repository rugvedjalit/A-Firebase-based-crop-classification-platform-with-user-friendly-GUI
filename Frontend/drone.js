const dropArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');

let button = dropArea.querySelector('.button');
let input = dropArea.querySelector('input');

let file;






dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.classList.add('active');
    dragText.textContent = 'Release to Upload';
  
  });
  
 
  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
   
    dragText.textContent = 'Drag & Drop';
  });
  
  
  dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
   
  
    file = event.dataTransfer.files[0]; 
   
    displayFile();
  });
  
  function displayFile() {
    let fileType = file.type;
   
  
    let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  
    if (validExtensions.includes(fileType)) {
      
      let fileReader = new FileReader();
  
      fileReader.onload = () => {
        let fileURL = fileReader.result;
        
        let imgTag = `<img src="${fileURL}" alt="">`;
        dropArea.innerHTML = imgTag;
      };
      fileReader.readAsDataURL(file);
    } else {
      alert('This is not an Image File');
      dropArea.classList.remove('active');
    }
  }




  button.onclick = () => {
    input.click();
  };
  
 
  input.addEventListener('change', function () {
    file = this.files[0];
    dropArea.classList.add('active');
    displayFile();
  });