//
// Find the missing letter in the passed letter range and return it.
//


function findMissingLetter(str: string) {
	let missing = '';
	let step = 0;
	for (let i = str.charCodeAt(0); i < str.charCodeAt(str.length-1); i++) {
		if (str.charCodeAt(step) !== i) {
            let diff = str.charCodeAt(step) - i;
            
           	for (let j = 0; j < diff; j++) {
              missing += String.fromCharCode(i+j);
            }

            i += str.charCodeAt(step) - i;
		}
		step++;
	}

	return missing.length > 0 ? missing : undefined;
}

findMissingLetter("ad"); // --> "bc"