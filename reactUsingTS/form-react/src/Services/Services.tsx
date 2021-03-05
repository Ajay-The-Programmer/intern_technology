import { API } from '../pages/Constant';

export const Services = { getData, postData, updateUser, deleteUser };

function getData() {
    return new Promise(async (resolve, reject) => {
        const res: Response = await fetch(API.API_LIVE + 'get_data');
        res.json().then((res) => {
            if (res) { resolve(res); }
        }).catch(err => {
            reject(err);
        });
    });
}
function postData(props: any) {


    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(props),
            headers: { 'Content-Type': 'application/json' }
        };
        const res: Response = await fetch(API.API_LIVE + 'register', requestOptions);
        res.json().then((res) => {
            if (res) { resolve(res); }
        }).catch(err => {
            reject(err);
        });
    });
}
function updateUser(props: any) {
 

    return new Promise(async (resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(props),
            headers: { 'Content-Type': 'application/json' }
        };
        const res: Response = await fetch(API.API_LIVE + 'update-user', requestOptions);
        res.json().then((res) => {
            if (res) { resolve(res); }
        }).catch(err => {
            reject(err);
        });
    });
}

function deleteUser(props: number) {

    return new Promise(async (resolve, reject) => {
       
        const res: Response = await fetch(API.API_LIVE + `delete-user/${props}`);
        res.json().then((res) => {
            if (res) { resolve(res); }
        }).catch(err => {
            reject(err);
        });
    });
}

