const input = document.querySelector('.form__input');
const form = document.querySelector('.form');
const container = document.querySelector('.container');
const getPageData = async (e) =>{
    
    e.preventDefault();
    //get the value from input;
    const link = input.value;
    try{
        //fetch the data
        //read this for cors
        //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
        //read this for ifram thing
        //https://stackoverflow.com/questions/31944552/iframe-refuses-to-display
        //read this for iframe header thing
        //https://stackoverflow.com/questions/13432821/is-it-possible-to-add-request-headers-to-an-iframe-src-request
        
        //TODO: find a way around cors thing 
        //TODO: make the iframe work
    }catch(e){
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(e.message || 'some error occoured'));
        div.className = 'error text-center';
        
        container.appendChild(div);

        
        setTimeout(() => {
            container.removeChild(div);
        }, 3000);
        
        
        console.log(e);
    }
    
}


//search upon submition
form.addEventListener('submit', getPageData);

