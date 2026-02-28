
// Initial value based on the first line (x = y + 1 where x is 3)
  let y = 2;
  let x = y + 1;
  document.write("x = y + 1 ...Result = " + x + "<br>");

  // Line 2: To get Result = 6
  x = 4; 
  x += y; 
  document.write("x += y ...Result = " + x + "<br>");

  // Line 3: To get Result = 3 (Note: interpreted the image's "-+" as "-=")
  x = 5; 
  x -= y; 
  document.write("x -= y ...Result = " + x + "<br>");

  // Line 4: To get Result = 9
  x = 4.5; 
  x *= y; 
  document.write("x *= y ...Result = " + x + "<br>");

  // Line 5: To get Result = 3
  x = 6; 
  x /= y; 
  document.write("x /= y ...Result = " + x + "<br>");