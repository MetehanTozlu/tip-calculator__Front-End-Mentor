// Gerekli HTML elementlerini seçme
const money = document.getElementById('moneyInput');
const tipButtons = document.querySelectorAll('.tip');
const customTip = document.getElementById('selectTip');
const people = document.getElementById('peopleInput');
const tip = document.getElementById('tipAmount');
const totalTip = document.getElementById('total');

// Her bir düğmeye tıklama olayı ekleme
tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Seçili düğmeyi vurgula
    tipButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Custom tip değerini sıfırla
    customTip.value = '';

    // Hesaplama fonksiyonunu çağırma
    calculateTip(parseFloat(button.textContent) / 100);
  });
});

// Custom tip değeri girildiğinde aktif butonun rengini ayarlama
customTip.addEventListener('input', () => {
  tipButtons.forEach(button => {
    button.classList.remove('active');
  });
  customTip.classList.add('active');
  calculateTip(parseFloat(customTip.value) / 100);
});

// Input değerleri değiştiğinde otomatik olarak sonuçları güncelleme
money.addEventListener('input', () => {
  const tipPercentage = parseFloat(document.querySelector('.tip.active').textContent) / 100;
  calculateTip(tipPercentage);
});

people.addEventListener('input', () => {
  const tipPercentage = parseFloat(document.querySelector('.tip.active').textContent) / 100;
  calculateTip(tipPercentage);
});

// Hesaplama fonksiyonu
function calculateTip(tipPercentage) {
  const bill = parseFloat(money.value);
  const numOfPeople = parseFloat(people.value);

  // Hesaplamaları yapma ve sonuçları güncelleme
  if (!isNaN(bill) && bill > 0 && !isNaN(numOfPeople) && numOfPeople > 0) {
    const tipAmount = (bill * tipPercentage) / numOfPeople;
    const totalAmount = (bill + (bill * tipPercentage)) / numOfPeople;
    tip.textContent = '$' + tipAmount.toFixed(2);
    totalTip.textContent = '$' + totalAmount.toFixed(2);
  } else {
    tip.textContent = '$0.00';
    totalTip.textContent = '$0.00';
  }
}

// Sıfırlama düğmesine tıklama olayı ekleme
const resetButton = document.querySelector('.outputBtn');
resetButton.addEventListener('click', () => {
  money.value = '';
  customTip.value = '';
  customTip.classList.remove('active');
  tipButtons.forEach(button => {
    button.classList.remove('active');
  });
  tip.textContent = '$0.00';
  totalTip.textContent = '$0.00';
});
