async function getInputStoke(){
    const keystroke = document.getElementById('label').value;
    try{
        const response = await fetch(`/labels/${keystroke}`);
        const result = await response.json();
        console.log(result);
    }catch (error){
        console.error(error);
    }

    console.log('text',keystroke);
}