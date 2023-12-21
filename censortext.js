var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
    for(idx in censoredWords){
	inStr=inStr.replace(censoredWords[idx], "****");
}
for(idx in customCenoredWords){
	inStr=inStr.replace(customCensoredWords[idx], "****");
}
return inStr;
}
function add CensoredWord(word){
	custom.CensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=add CensoredWord;
exports.getCensoredWords=getCensoredWords;