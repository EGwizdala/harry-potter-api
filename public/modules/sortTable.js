import { tableBody, mainTable } from "./const.js";
const reverseDate = (date) => {
    return date.split('-').reverse().join('-');
};
const sortGrid = (e) => {
    const th = e.target;
    const arrow = th.querySelector('[data-id="sort-arrow"]');
    const order = th.dataset.order;
    const column = th.dataset.column;
    const colNum = th.cellIndex;
    const rowsArray = Array.from(tableBody.rows);
    let compare;
    if (tableBody.innerHTML !== "") {
        arrow.classList.toggle('rotate');
    }
    ;
    switch (order) {
        case 'desc':
            th.dataset.order = "asc";
            compare = function (rowA, rowB) {
                if (column === "date") {
                    if (rowA.cells[colNum].innerHTML === "")
                        return 1;
                    if (rowB.cells[colNum].innerHTML === "")
                        return -1;
                    const dateOne = new Date(reverseDate(rowA.cells[colNum].innerHTML));
                    const dateTwo = new Date(reverseDate(rowB.cells[colNum].innerHTML));
                    const substracton = dateOne.getTime() - dateTwo.getTime();
                    return substracton;
                }
                else {
                    if (rowA.cells[colNum].innerHTML === "")
                        return -1;
                    if (rowB.cells[colNum].innerHTML === "")
                        return 1;
                    return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
                }
            };
            break;
        case 'asc':
            th.dataset.order = "desc";
            compare = function (rowA, rowB) {
                if (column === "date") {
                    return new Date(reverseDate(rowB.cells[colNum].innerHTML)).getTime() - new Date(reverseDate(rowA.cells[colNum].innerHTML)).getTime();
                }
                else {
                    return rowA.cells[colNum].innerHTML < rowB.cells[colNum].innerHTML ? 1 : -1;
                }
            };
            break;
    }
    rowsArray.sort(compare);
    tableBody.append(...rowsArray);
};
export const sortTable = function () {
    const tableHeader = mainTable.querySelector('thead');
    const headers = tableHeader.querySelectorAll('th');
    headers.forEach(header => {
        header.addEventListener("click", sortGrid);
    });
};
