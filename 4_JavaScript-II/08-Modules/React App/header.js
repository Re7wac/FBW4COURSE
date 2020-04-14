// export function makeHeader() {
//     let header = document.createElement('header')
//     let a = document.createElement('a');
//     a.setAttribute('href','#')
//     a.innerHTML = `Home Page`
//     header.style.margin = '0%'
//     header.style.padding = '0%'
//     header.style.background = 'red';
//     header.style.color = '#fff';
//     header.style.height = '100px';
//     header.style.width = '100%';
//      header.append(a)
//     document.body.append(header)
// }

class Header {
    static create() {
        const header = document.createElement('header')
        header.className = "Header"
        const a = document.createElement('a')
        a.setAttribute('href', '#')
        a.innerHTML = `Home Page`
        header.append(a)
        return header
    }
}

export default Header;