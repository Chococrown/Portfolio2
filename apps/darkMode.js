const btnMode = document.querySelector(".header-img-1");
const image = document.getElementById('header-img-1');

// ฟังก์ชันสำหรับโหลดธีมที่บันทึกไว้
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        image.src = "/images/icon/light.png"; // ตั้งค่ารูปภาพสำหรับโหมดกลางคืน
    } else {
        document.body.classList.remove('dark-mode');
        image.src = "/images/icon/dark.png"; // ตั้งค่ารูปภาพสำหรับโหมดกลางวัน
    }
}

// ใช้ธีมที่บันทึกไว้เมื่อโหลดหน้าเว็บ
applySavedTheme();

// สลับระหว่างโหมดกลางวัน/กลางคืนและเปลี่ยนรูปภาพ
btnMode.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    
    // อัปเดตรูปภาพตามโหมดปัจจุบัน
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        image.src = "/images/icon/light.png";
    } else {
        localStorage.setItem('theme', 'light');
        image.src = "/images/icon/dark.png";
    }
});