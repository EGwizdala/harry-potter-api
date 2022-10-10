export const dataSet = ["name", "dateOfBirth", "house", "wizard", "ancestry", "hogwartsStudent", "hogwartsStaff"];

export const drawTable = (data, tableBody) => {
  for (const row of data) {
    const rowElement = document.createElement('tr');
    let isStudent = false;
    let isStaff = false;
    dataSet.forEach(element => {
      const cellElement = document.createElement('td');
      if (element === "hogwartsStudent" || element === "hogwartsStaff") {
        if (element === "hogwartsStudent" && row[element] === true) {
          isStudent = true;
        } else if (element === "hogwartsStaff" && row[element] === true) {
          isStaff = true;;
        }
      } else {
        cellElement.textContent = row[element];
        rowElement.appendChild(cellElement);
      }
    });
    if (isStudent) {
      const cellElement = document.createElement('td')
      cellElement.textContent = "student";
      rowElement.appendChild(cellElement);
    } else if (isStaff) {
      const cellElement = document.createElement('td')
      cellElement.textContent = "staff";
      rowElement.appendChild(cellElement);
    }else if (!isStaff && !isStudent) {
      const cellElement = document.createElement('td')
      cellElement.textContent = "";
      rowElement.appendChild(cellElement);
    }
    tableBody.appendChild(rowElement)
  };
}

export const clearTable = (table) => {
  table.replaceChildren();
};