const searchInput = document.getElementById('searchInput');
const searchList = document.getElementById('searchList');

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Kiwi', 'Strawberry', 'Watermelon'];

function displayItems(query) {
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    const html = filteredItems.map(item => `<li>${item}</li>`).join('');
    searchList.innerHTML = html;
}

searchInput.addEventListener('input', function() {
    displayItems(this.value);
});

// Initial display
displayItems('');
