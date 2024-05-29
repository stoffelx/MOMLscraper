javascript:
prodCode = "MMLP";
prodName = "Part II: 1763-1970";
baseUrl = "https://go.gale.com/ps/i.do?p=" + prodCode + "&id=";
appendUrl = "&v=2.1&it=r";
outline = "";
coreData = [];
editData = [];
inTags = document.getElementsByTagName("input");
snwTags = document.querySelectorAll(".snippetWrapper > span");
for ( i = 0; i < inTags.length; ++i) { 
	if (/documentId|documentTitle/.test(inTags[i].name)) {
		if (/documentTitle/.test(inTags[i].name)) {
			coreData.push(inTags[i].value);
			coreData.push("%");
		} else {
			inTags[i].value = inTags[i].value.replace(/^/, baseUrl).replace(/$/, appendUrl) + "\t%" + inTags[i].value;
			coreData.push(inTags[i].value);
			};
	};
};
for ( i = 0; i < snwTags.length; ++i) {
	snwMatch = new RegExp("Found in " + prodName);
	if (snwMatch.test(snwTags[i].innerText)) {
		editData.push(snwTags[i].innerText);
		editData.push("%");
	} else {
	editData.push(snwTags[i].innerText);
	};
}; 
function combineArrays(arr1, arr2, delimiter) {
result = [];
i = 0, j = 0;
switchArray = false;
    while (i < arr1.length || j < arr2.length) {
		if (!switchArray) {
			while (i < arr1.length && arr1[i] !== delimiter) {
				result.push(arr1[i]);
				i++;
				}
			if (i < arr1.length && arr1[i] === delimiter) {
			i++;
			}
		} else {
		while (j < arr2.length && arr2[j] !== delimiter) {
		result.push(arr2[j]);
		j++;
		}
			if (j < arr2.length && arr2[j] === delimiter) {
			j++;
			}
		}
		switchArray = !switchArray;
	}
return result;
}
delimiter = "%";
combinedArray = combineArrays(coreData, editData, delimiter);
outRepl = new RegExp("Found in " + prodName + "%", "g");
outline = combinedArray.join("%").replace(outRepl, "Found in " + prodName + "\n");
console.log(outline);