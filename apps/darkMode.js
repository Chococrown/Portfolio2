const btnMode = document.querySelector(".header-img-1")

const image = document.getElementById('header-img-1')


// เปลี่ยนสีพื้นหลัง + เปลี่ยนสีตัวอักษร

btnMode.addEventListener("click",(e)=>{

    const html = document.querySelector('html')

    if(html.classList.contains("dark")){
        html.classList.remove("dark")
    }else{
        html.classList.add("dark")
    }

} )


// เปลี่ยนรูปภาพ

image.addEventListener('click', function() {
    
    if (this.src.endsWith("/images/icon/dark.png")) {
        this.src = "/images/icon/light.png";
    } else {
        this.src = "/images/icon/dark.png";
    }
});



