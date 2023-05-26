const root = document.getElementById("root")

const CreatElement = (elementdetails, parent) => {


    if (!parent) {
        parent = root
    }

    const element = document.createElement(elementdetails.name)
    // console.log(parent);

    if (elementdetails.text) {

        if (element.children.length > 0) {
            element.innerHTML = elementdetails.text + element.innerHTML
        } else {
            element.innerHTML = elementdetails.text
        }
    }

    if (elementdetails.att) {

        let i = 0
        while (i < elementdetails.att.length) {
            let tmp = elementdetails.att[i]
            element[tmp.name] = tmp.value
            i++
        }
    }

    if (elementdetails.childs) {
        let i = 0
        while (i < elementdetails.childs.length) {
            const Children = elementdetails.childs[i]
            CreatElement(Children, element)  //recursion
            i++
        }
    }
    parent.appendChild(element)
}
CreatElement(header)
CreatElement(Products)
CreatElement(footer)
