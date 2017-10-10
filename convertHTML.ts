//
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
//


function convertHTML(str: string) {
  const htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };

  return str.split('').map(entity => {
    return htmlEntities[entity] || entity;
  }).join('');
  
}

convertHTML("Dolce & Gabbana"); // --> "Dolce &amp; Gabbana"