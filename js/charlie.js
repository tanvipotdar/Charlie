function Counter(list){
  var counter = {}
  for(var i = 0, j = list.length; i < j; i++){
    counter[list[i]] = (counter[list[i]] || 0) + 1;
  }
  return counter
}


function getWordFrequencyList(data){
	var words = []
	for(var i in data){
		var entry = data[i]
		if('SMS' in entry){
			words = words.concat(entry['SMS'].toLowerCase().split(' '))
		}
	}
	
  var counter = Counter(words)
	var word_list = []
	for(var key in counter){
		var c = {text: key, weight: counter[key]}
		word_list.push(c)
	}
	word_list.sort(function(a,b){
		return b["weight"] - a["weight"]
	})
  
  return word_list
}