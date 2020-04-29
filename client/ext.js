let createDiv = function(users){
    console.log(users);
    let template = '';
    users.forEach(user =>{
        let props = user.split(',');
        template = template + `<div class = 'row'>`
        props.forEach(prop =>{
            template = template + `
                <div class = 'col-md-1'>
                    ${prop}
                </div>
            `;
        });
        template = template +  `</div>`
    });
    console.log(template)
    $('#users').html(template);
}

$.ajax({
    dataType : 'json',
    url : 'http://localhost:3000/output',
    success : function(data){
        createDiv(data)
    },
    error : function(error){
        console.log(error)
    }
});
