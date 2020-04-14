class Article {

    static create() {
        const arti = document.createElement('div')
        arti.className = "Article"

        arti.innerHTML = `<input 
        type="text"
        id = "inpt"
        placeholder="Enter title"
        />
        <h2 id="title"></h2>
        <p>This is an example of class components using only normal JS ES6 modules</p>
        <p>We will test the module export and import capabilities</p>`

        return arti
    }
}
//(event)=>{this.ChangeTitle(event)}
export default Article

// ChangeTitle(e) {
//     let title = document.getElementById('title')
//     title.innerHTML = e.target.value
// }


// onChange = {
//     (event) => {
//         this.ChangeTitle(event)
//     }
// }

// let article = document.createElement('article')
// let h3 = document.createElement('h3')
// let input = document.createElement('input')
// input.className = 'm-5'
// input.type = 'text'
// input.setAttribute('placeholder', 'Add task')
// article.append(input)
// article.append(h3)
// article.innerHTML += '  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>'
// //document.querySelector('section').append(article)