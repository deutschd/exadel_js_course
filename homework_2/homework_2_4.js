const vovelsCounter = (str) => {
    const vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let counter = 0  
    for(letter of str){
        if (vovels.includes(letter)){
            counter++
        	}
    	}
    	return counter
}
/* Как я понял, тут проблем нет.
Добавил заглавные, искал проблему в самом коде...))) 
*/
console.log(vovelsCounter('The current directory is AD-123'))
console.log(vovelsCounter('hello'))