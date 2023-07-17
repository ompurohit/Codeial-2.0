async function getInputStoke(){
    const keystroke = document.getElementById('label').value;
    const searchBox = document.getElementById('auto-search-box');
    const container = document.getElementById('search-container');
    container.innerHTML = '';
    try{
        const response = await fetch(`/labels/${keystroke}`);
        const result = await response.json();

        const htmlFormatedText = formateText(result);
    
        container.innerHTML =  htmlFormatedText;
        searchBox.classList.remove('hidden');
    }catch (error){
        console.error(error);

    }
}

/**
 * parsing arrary data in string and formate it into the html text.
 * 
 * @param {*} data Array
 * @retrun string formate
 */
function formateText(data){
    let output = '';
    for (let item of data) {
        output +=
            `<p class="text-sm text-gray-900 pt-2 transition duration-500 ease-in-out cursor-pointer hover:bg-gray-800 hover:text-white hover:pl-2 label-container" > 
            ${item.name} 
         </p>
         <input type="hidden" class="labels_id" name="labels[]" value="${item._id}" />
        `;
    }
    console.log('ouput',output)
    return output;
}

/**
 * put label value in input tax as label(HTML)
 * 
 * 
 */
