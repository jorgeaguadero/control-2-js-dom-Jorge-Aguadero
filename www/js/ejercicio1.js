'use strict';
const getUsers = async (num) => {
    const newUsers = [];
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${num}`);

        const { results } = await response.json();

        for (const user of results) {
            const username = user.login.username;
            const { first, last } = user.name;
            const gender = user.gender;
            const country = user.location.country;
            const email = user.email;
            const picture = user.picture.large;

            newUsers.push({
                username: username,
                firstname: first,
                lastName: last,
                country: country,
                gender: gender,
                picture: picture,
                mail: email,
            });
        }
        console.log(newUsers);
    } catch (error) {
        console.log(error);
    }
};

getUsers(5);
