
// HEADER PART
const header = {

    name: "header",
    att: [
        { name: "className", value: "d-flex bg-dark px-2 py-2 justify-content-between align-items-center" }
    ],
    childs: [
        {
            name: "div",
            att: [
                { name: "className", value: "logo text-light" }
            ],
            text: "<img src='Images/flip.png' style='height:30px'/>"
        },
        {
            name: "div",
            att: [
                { name: "className", value: " text-light " }
            ],
            childs: [
                {
                    name: "ul",
                    att: [
                        { name: "className", value: "list-unstyled d-flex gap-5 align-items-center pt-2 " }
                    ],
                    childs: [
                        {
                            name: "li",
                            text: "Home"
                        },
                        {
                            name: "li",
                            text: "About"
                        },
                        {
                            name: "li",
                            text: "Services"
                        },
                        {
                            name: "li",
                            text: "Other"
                        },
                    ]
                }
            ]

        },
        {
            name: "div",
            att: [
                { name: "className", value: "d-flex align-items-center gap-3" }
            ],
            childs: [
                {
                    name: "i",
                    att: [
                        { name: "className", value: "fa-brands fa-opencart text-light" }
                    ]
                },
                {
                    name: "button",
                    att: [
                        { name: "className", value: "btn btn-warning" }
                    ],
                    text: "Sing In"
                }
            ]
        }
    ],
}

// PRODUCT PART
const Products = {
    name: "div",
    att: [
        { name: "className", value: "d-flex justify-content-center vh-100 align-items-center" }
    ],
    childs: [

        //PRODUCT 1

        {
            name: "div",
            text: "<img src='Images/pic-5.jpg' style='height:300px'>",
            att: [
                {
                    name: "className",
                    value: "d-flex flex-column  m-5 rounded ",
                },
                {
                    name: "style",
                    value: "background:#4068a33d"
                }
            ],
            childs: [

                {
                    name: "span",
                    text: " $ 699 ",
                    att: [
                        { name: "className", value: "w-100 d-flex border-top border-3 border-dark  justify-content-between align-items-center px-2 py-2 " }
                    ],
                    childs: [
                        {
                            name: "button",
                            text: "Buy !",
                            att: [
                                { name: "className", value: "btn btn-outline-primary px-3" }
                            ]
                        }
                    ]
                },

            ]
        },

        //PRODUCT 2

        {
            name: "div",
            text: "<img src='Images/pic-3.jpg' style='height:300px'>",
            att: [
                {
                    name: "className",
                    value: "d-flex flex-column  m-5  rounded"
                },
                {
                    name: "style",
                    value: "background:#4068a33d"
                }
            ],
            childs: [

                {
                    name: "span",
                    text: " $ 989 ",
                    att: [
                        { name: "className", value: "w-100 d-flex border-top border-3 border-dark  justify-content-between align-items-center px-2 py-2 " }
                    ],
                    childs: [
                        {
                            name: "button",
                            text: "Buy !",
                            att: [
                                { name: "className", value: "btn btn-outline-primary px-3" }
                            ]
                        }
                    ]
                },

            ]
        },

        //PRODUCT 3

        {
            name: "div",
            text: "<img src='Images/pic-4.jpg' style='height:300px; '>",
            att: [
                {
                    name: "className",
                    value: "d-flex flex-column  m-5  rounded"
                },
                {
                    name: "style",
                    value: "background:#4068a33d"
                }
            ],
            childs: [

                {
                    name: "span",
                    text: " $ 899 ",
                    att: [
                        { name: "className", value: "w-100 d-flex border-top border-3 border-dark  justify-content-between align-items-center px-2 py-2 " }
                    ],
                    childs: [
                        {
                            name: "button",
                            text: "Buy !",
                            att: [
                                { name: "className", value: "btn btn-outline-primary px-3" }
                            ]
                        }
                    ]
                },

            ]
        },

        //PRODUCT 4

        {
            name: "div",
            text: "<img src='Images/pic-5.jpg' style='height:300px; '>",
            att: [
                {
                    name: "className",
                    value: "d-flex flex-column  m-5  rounded"
                },
                {
                    name: "style",
                    value: "background:#4068a33d"
                }
            ],
            childs: [

                {
                    name: "span",
                    text: " $ 999 ",
                    att: [
                        { name: "className", value: "w-100 d-flex border-top border-3 border-dark  justify-content-between align-items-center px-2 py-2 " }
                    ],
                    childs: [
                        {
                            name: "button",
                            text: "Buy !",
                            att: [
                                { name: "className", value: "btn btn-outline-primary px-3" }
                            ]
                        }
                    ]
                },

            ]
        },

        //PRODUCT 5

        {
            name: "div",
            text: "<img src='Images/pic-6.jpg' style='height:300px; '>",
            att: [
                {
                    name: "className",
                    value: "d-flex flex-column  m-5  rounded"
                },
                {
                    name: "style",
                    value: "background:#4068a33d"
                }
            ],
            childs: [

                {
                    name: "span",
                    text: " $ 499 ",
                    att: [
                        { name: "className", value: "w-100 d-flex border-top border-3 border-dark  justify-content-between align-items-center px-2 py-2 " }
                    ],
                    childs: [
                        {
                            name: "button",
                            text: "Buy !",
                            att: [
                                { name: "className", value: "btn btn-outline-primary px-3" }
                            ]
                        }
                    ]
                },

            ]
        },
    ],
}

// FOOTER PART
const footer = {
    name: "footer",
    att: [
        {
            name: "className",
            value: "text-center bg-dark py-3 text-light",
        }
    ],
    text: "Copyright All Right Resever"
}
