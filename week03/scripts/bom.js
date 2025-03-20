const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArrays = getChapterList() || [];



button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.innerHTML = input.value;
        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();


        });
        input.value = '';
        input.focus();



    }
    else {
        input.focus();
    }



    chaptersArrays.forEach(chapter => {
        displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value !== '') {
            displayList(input.value);
            chaptersArrays.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }


    });

});