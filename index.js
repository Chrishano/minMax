function updateValue() {
    const rangeInput = document.getElementById('rangeInput');
    const selectedValue = document.getElementById('selectedValue');
    selectedValue.textContent = `Selected value: ${rangeInput.value}`;
  }
  