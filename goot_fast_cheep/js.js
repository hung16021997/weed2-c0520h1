let checkbox = [];
function run(checkboxid) {
    let check = document.getElementById(checkboxid);
    if(check.checked)
    {
        checkbox.push(checkboxid);
    }
    if(checkbox.length===3)
    {
        document.getElementById(checkbox[0]).checked = false;
        checkbox.shift();
    }
    if(checkbox.length<3)
    {
        if(!check.checked)
        {
            let position = checkbox.indexOf(checkboxid);
            checkbox.splice(position,1);
        }
    }