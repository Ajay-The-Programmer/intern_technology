import { API}   from '../Constant';

export const Services = { getData };

function getData(){
    return new Promise(async (resolve, reject) => {
        const res: Response = await fetch(API.API_LIVE + 'get_data');
          res.json().then((res) => {
            if(res){ resolve(res); }
        }).catch(err => {
            reject(err);
        });
    }); 
}
