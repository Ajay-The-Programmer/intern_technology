
const Profile=(props:any)=>{

    console.log(props)
    return (<h4> Your Entered Id is :{props.match.params.profile_id}</h4>
    )

}
export default Profile;
