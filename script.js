const table = document.getElementById('table');

if (table) {// Check if table exists
  if(table.rows.length > 0 && table.rows[0].cells.length > 1) {
  // Check for rows
  const td = table.rows[0].cell[1];
  td.style.backgroundColor = "red"; // Highlight the cell
}else {
  console.error("Table doesn't have enough rows or cells!");
}
}else{
  console.error("Table withID 'table not found!");
}