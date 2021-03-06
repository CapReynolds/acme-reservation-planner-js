import axios from 'axios';
const userList = document.querySelector('#user-list');
const restaurantList = document.querySelector('#restaurant-list');
const reservationList = document.querySelector('#reservation-list');

//console.log(userList);
const renderUsers = (users) =>{
    const html = users.map(user =>
            `
            <li>
                <a href='#${user.id}'>
                ${user.name}
                </a>
             </li>
            `
        ).join('')
    ;
    userList.innerHTML = html;
}

const renderRestaurants = (restaurants) =>{
    const html = restaurants.map(restaurant =>
            `
            <li>
                <a href='#${restaurant.id}'>
                ${restaurant.name}()
                </a>
             </li>
            `
        ).join('')
    ;
    restaurantList.innerHTML = html;
}


const renderReservations = (reservations) =>{
    const html = reservation.map(reservation =>
            `
            <li>
                <a href='#${reservation.id}'>
                ${reservation.name}
                </a>
             </li>
            `
        ).join('')
    ;
    userList.innerHTML = html;
}

//renderUsers();

const init = async() => {
    try {
        const users = (await axios.get('/api/users')).data;
        const restaurants = (await axios.get('/api/restaurants')).data;
        //const reservations = (await axios.get('api/users/:userId/reservations')).data;
        //console.log(users);
        renderUsers(users);
        renderRestaurants(restaurants);
        //renderReservations(reservations);
    }
    catch(ex)
    {
        console.log(ex);
    }
}
init();