// let display = document.getElementById('display');

// function appendValue(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = '';
// }

// function calculateResult() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = 'Error';
//   }
// }



let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    const result = safeEval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// ฟังก์ชันคำนวณอย่างปลอดภัย (ไม่ใช้ eval())
function safeEval(expression) {
  const tokens = expression.match(/[\d\.]+|[+\-*/]/g);
  if (!tokens) throw 'Invalid Expression';

  let output = [];
  let operators = [];

  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };

  for (let token of tokens) {
    if (!isNaN(token)) {
      output.push(parseFloat(token));
    } else if ('+-*/'.includes(token)) {
      while (
        operators.length &&
        precedence[token] <= precedence[operators[operators.length - 1]]
      ) {
        compute(output, operators.pop());
      }
      operators.push(token);
    }
  }

  while (operators.length) {
    compute(output, operators.pop());
  }

  if (output.length !== 1) throw 'Invalid Expression';
  return output[0];
}

function compute(stack, operator) {
  const b = stack.pop();
  const a = stack.pop();
  switch (operator) {
    case '+': stack.push(a + b); break;
    case '-': stack.push(a - b); break;
    case '*': stack.push(a * b); break;
    case '/': stack.push(a / b); break;
    default: throw 'Unknown operator';
  }
}

// รองรับ keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/\d/.test(key)) appendValue(key);              // ตัวเลข 0-9
  else if ('+-*/.'.includes(key)) appendValue(key);  // เครื่องหมาย
  else if (key === 'Enter') calculateResult();        // กด Enter = คำนวณ
  else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);       // ลบตัวล่าสุด
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();                                   // กด c = ล้าง
  }
});
