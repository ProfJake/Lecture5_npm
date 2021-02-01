var censoredWords = [ "sad", "bad", "mad" ];
var customCensoredWords = [];
function censor(instr){


    for (idx in censoredWords) {
	instr = instr.replace(censoredWords[idx], "********");
    }

    for (id in customCensoredWords) {
	instr = instr.replace(customCensoredWords[id], "********");

    }
    return instr;
}

function addWord(word){
    customCensoredWords.push(word);
}

function getWord(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addWord = addWord;
exports.getWord = getWord;
