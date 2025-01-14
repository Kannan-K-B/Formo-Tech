document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 6;
    const items = document.querySelectorAll('.item4');
    const totalItems = items.length;
    let currentPage = 1;


    function displayItems() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        
       
        items.forEach((item, index) => {
            item.style.display = 'none';
        });

       
        for (let i = startIndex; i < endIndex && i < totalItems; i++) {
            items[i].style.display = 'flex'; 
        }

     
        document.getElementById('prev4').disabled = currentPage === 1;
        document.getElementById('next4').disabled = currentPage === Math.ceil(totalItems / itemsPerPage);
    }

   
    document.getElementById('prev4').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            displayItems();
        }
    });

    document.getElementById('next4').addEventListener('click', function () {
        if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
            currentPage++;
            displayItems();
        }
    });


    displayItems();
});
