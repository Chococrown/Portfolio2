let is24HourFormat = true; // เริ่มต้นเป็น 24 ชั่วโมง

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  let ampm = '';

  if (!is24HourFormat) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // ถ้าเป็น 0 ให้เป็น 12
  }

  const hoursStr = String(hours).padStart(2, '0');
  const timeString = is24HourFormat
    ? `${hoursStr}:${minutes}:${seconds}`
    : `${hoursStr}:${minutes}:${seconds} ${ampm}`;

  document.getElementById('clock').textContent = timeString;
}

// เปลี่ยนรูปแบบเมื่อกดปุ่ม
document.getElementById('toggleFormat').addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  document.getElementById('toggleFormat').textContent =
    is24HourFormat ? 'เปลี่ยนเป็น AM/PM' : 'เปลี่ยนเป็น 24 ชั่วโมง';
  updateClock(); // อัปเดตทันที
});

updateClock();               // แสดงครั้งแรก
setInterval(updateClock, 1000); // อัปเดตทุกวินาที
