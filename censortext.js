var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr){
		for (index in censoredWords){
			inStr = inStr.replace(censoredWords[idx], "****");
		}
		for (index in customCensoredWords){
			inStr = inStr.replace(censoredWords[idx], "****");
		}
		return inStr;		
}
function addCEsnoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customedCesnoredWords);
}
exports.censor = censor;
exports.addCEsnoredWord = addCEsnoredWord;
exports.getCensoredWords = getCensoredWords;