//CROP NAME PAGE JS


const items1 = [
    { name: 'Rice', category: 'Fruit' },
    { name: 'Wheat', category: 'Fruit' },
    { name: 'Tomato', category: 'Fruit' },
    { name: 'Maize', category: 'Fruit' },
    { name: 'Potato', category: 'Fruit' },
    { name: 'Sorghum', category: 'Fruit' },
    { name: 'Marri Gold', category: 'Fruit' },
    { name: 'Jasmine', category: 'Fruit' },
    { name: 'Ladys Finger', category: 'Dairy' },
    { name: 'Ragi', category: 'Fruit' },
    { name: 'Ground Nut', category: 'Fruit' },
    { name: 'Suger Cane', category: 'Fruit' },
    { name: 'Carrot', category: 'Fruit' },
    { name: 'Beans', category: 'Fruit' },
    { name: 'Beet Root', category: 'Fruit' },
    { name: 'Raddist', category: 'Fruit' },
    { name: 'Greengram', category: 'Fruit' },
    { name: 'Blackgram', category: 'Fruit' },
    { name: 'Cowpea', category: 'Fruit' },
    { name: 'Onion', category: 'Fruit' },
    { name: 'Rice', category: 'Fruit' },
    { name: 'Wheat', category: 'Fruit' },
    { name: 'Tomato', category: 'Fruit' },
    { name: 'Maize', category: 'Fruit' },
    { name: 'Potato', category: 'Fruit' },
    { name: 'Sorghum', category: 'Fruit' },
    { name: 'Marri Gold', category: 'Fruit' },
    { name: 'Jasmine', category: 'Fruit' },
    { name: 'Ladys Finger', category: 'Dairy' },
    { name: 'Ragi', category: 'Fruit' },
    { name: 'Ground Nut', category: 'Fruit' },
    { name: 'Suger Cane', category: 'Fruit' },
    { name: 'Carrot', category: 'Fruit' },
    { name: 'Beans', category: 'Fruit' },
    { name: 'Beet Root', category: 'Fruit' },
    { name: 'Raddist', category: 'Fruit' },
    { name: 'Greengram', category: 'Fruit' },
    { name: 'Blackgram', category: 'Fruit' },
    { name: 'Cowpea', category: 'Fruit' },
    { name: 'Onion', category: 'Fruit' },

];

const itemsPerPage1 = 28; 
let currentPage1 = 1;
let filteredItems1 = items1;


function renderItems1(page) {
    const itemList1 = document.getElementById('item-list1');
    itemList1.innerHTML = ''; 

    const start1 = (page - 1) * itemsPerPage1;
    const end1 = page * itemsPerPage1;
    const currentItems1 = filteredItems1.slice(start1, end1);

    currentItems1.forEach(item => {
        const anchor = document.createElement('a');
        anchor.classList.add('item1');
        anchor.textContent = item.name;
        anchor.href = "soil.html"; // URL for Crop name <a> tag
        anchor.target = "_blank"; 
        
        itemList1.appendChild(anchor);
    });

 
    document.getElementById('prev1').disabled = page === 1;
    document.getElementById('next1').disabled = page === Math.ceil(filteredItems1.length / itemsPerPage1);
}


function filterItems1() {
    const searchQuery = document.getElementById('search-bar1').value.toLowerCase();
    const selectedCategory = document.getElementById('category-dropdown1').value;

    filteredItems1 = items1.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    currentPage1 = 1; 
    renderItems1(currentPage1);
}

document.getElementById('search-bar1').addEventListener('input', filterItems1);
document.getElementById('category-dropdown1').addEventListener('change', filterItems1);


renderItems1(currentPage1);


function nextPage1() {
    if (currentPage1 < Math.ceil(filteredItems1.length / itemsPerPage1)) {
        currentPage1++;
        renderItems1(currentPage1);
    }
}

function previousPage1() {
    if (currentPage1 > 1) {
        currentPage1--;
        renderItems1(currentPage1);
    }
}




// USER-DETAILS JS

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const district = document.getElementById('district').value;
    const aadhar = document.getElementById('aadhar').value;
    const mobile = document.getElementById('mobile').value;

    // Basic validation
    if (aadhar.length !== 12 || isNaN(aadhar)) {
        alert("Please enter a valid 12-digit Aadhaar number.");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert(`Name: ${name}\nFather's Name: ${fatherName}\nDistrict: ${district}\nAadhaar: ${aadhar}\nMobile: ${mobile}`);
});


//SOIL NAME JS

