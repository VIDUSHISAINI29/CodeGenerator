const photoContainer = document.getElementById('bDayGuyPhoto');
const widthPrompt = document.getElementById('widthSlider');
const heightPrompt = document.querySelector('#heightSlider');
const borderRadiusPrompt = document.querySelector('#borderRadius');
const namePrompt = document.querySelector('#namePrompt');
const nameAcceptor = document.querySelector('#bdayPersonName');
const photoPromptElem = document.querySelector('#photoPrompt');
const bdayGuyPhotoElem = document.querySelector('#bDayGuyPhoto');    
const htmlDiv = document.querySelector('#htmlCode');    
const cssDiv = document.querySelector('#cssCode');    
const exportButton = document.querySelector('.export');    
const cardHtml = document.querySelector('.cardSection');    
bdayGuyPhotoElem.src = 'Images/profileIcon.png'
nameAcceptor.innerText = `Dear, Name`
photoContainer.style.width = '140px';
photoContainer.style.height = '140px';

let srcOfPhoto = ''

widthPrompt.addEventListener('input', () => {
    photoContainer.style.width =  `${widthPrompt.value}px`;
})
heightPrompt.addEventListener('input', () => {
    photoContainer.style.height =  `${heightPrompt.value}px`;
})
borderRadiusPrompt.addEventListener('input', () => {
    photoContainer.style.borderRadius =  `${borderRadiusPrompt.value}%`;
})

namePrompt.addEventListener('input', () => {
    nameAcceptor.innerText = `Dear, ${namePrompt.value}`
})
photoPromptElem.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            bdayGuyPhotoElem.src = e.target.result;
            srcOfPhoto =  e.target.result // Set the image source to the file's data URL
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});
function supplyHtmlCode(){

    htmlDiv.innerText = `HTML CODE :
    
    <div class="mainBG wfull display">
                  <div class="secBG wFull displayCol">
                     <div class="display wFull">
                        <div class="dateContainer wFull">
                           <span class="dateOfBirth"></span>
                        </div>
                     </div>
                     <div class="wishesContainer displayCol">
                        <span class="crimson wishing marginY">
                           Wishing you a very
                        </span>
                        <span class="hBday">Happy Birthday</span>
                        <span
                           id="bdayPersonName"
                           class="crimson name marginY"></span>
                        <img class="photo" id="bDayGuyPhoto" src="" alt="" />

                        <img
                           class="birthdayCandle"
                           src="/Images/birthdayCandle.png"
                           alt="" />
                        <img
                           class="birthdayCake"
                           src="/Images/BirthdayCake.png"
                           alt="" />
                     </div>
                  </div>
               </div>`;
               cssDiv.innerText = `CSS Code : 
               
               *{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    font-family: cursive;
}
.marginY{
    margin: 12px 0px;
}
.crimson{
    color: crimson;
}
.display{
    display: flex;
    justify-content: center;
    align-items: center;
}
.displayCol{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.displayAround{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.wFull{
    width: 100%;
}
.mainBG{
    background-image: url('Images/BirthdayBorder.jpg');
    background-size: cover;
    height: 110vh;
    padding: 40px;
}
.cardSection{
    width: 60%;
}
.mainContainer{
    margin: 40px;
    gap: 60px;
}
.secBG{
    background-image: url("/Images/bridthdayCardBG.jpg");
    background-size: cover;
    height: 100vh;
 }
 .dateContainer{
    display: flex;
    justify-content: end;
    padding: 10px;
 }
 .wishesContainer{
    position: relative;
    width: 75%;
 }

.wishing{
    font-size: 20px;
}
.hBday{
    font-size: 35px;
    color: #020933;
    font-weight: 550;
}

.name{
    font-size: 30px;
    font-weight: 550;
}
.photo{
    margin: 40px 0px 0px 0px;
    height: 140px;
    background-color: #fff;
    width: ${photoContainer.style.width};
    height: ${photoContainer.style.height};
    border-radius: ${photoContainer.style.borderRadius};
}
.birthdayCandle{
    position: absolute;
    left: -80px;
    top: 180px;
    width: 128px;
    height: 112px;
    transform: rotate(-30deg);
}
.birthdayCake{
    position: absolute;
    right: -50px;
    top: 180px;
    width: 128px;
    height: 112px;
}
.infoPrompts{
    border-radius: 5px;
    border:  2px #020933;
    padding: 6px;
    outline: none;
}
.editingSection{
    width: 35%;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    font-weight: 550;
    background-color: #d4dcfa;
    padding: 15px;
    font-size: 14px;
    gap: 20px;
}
.export{
    padding: 8px;
    background: #020933;
    color: white;
    border-radius: 12px;
    cursor: pointer;
}
.htmlCode{
    width: 80%;
    background-color: #9ef2da;
}`
        console.log("what's inside", cardHtml.inner)
}
exportButton.addEventListener('click', () => {
    supplyHtmlCode()
})