function excelExport() {
    var table2excel = new Table2Excel();
    table2excel.export(document.getElementById('mojaTabulka'));
}