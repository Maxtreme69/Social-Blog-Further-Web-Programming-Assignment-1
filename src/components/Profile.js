import React from "react";
import avatar from '../images/profile-picture.svg';
import { removeUser } from "../data/repository"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const editIcon = <FontAwesomeIcon color="black" icon={faPen}/>;
const deleteIcon =  <FontAwesomeIcon color="black" icon={faTrash}/>

class Profile extends React.Component {

    render() {
        return (
                <div className="profile-wrapper">
                    <h1 style={{color: "red"}}>Profile</h1>
                    <div className="grid-container">
                        <div className="grid-item">
                            <img src={avatar} className="profile-avatar" alt="Profile Avatar" width="250px" height="250px" />
                        </div>
                        <div className="grid-item">
                            <br></br>
                            <p><strong>{localStorage.getItem('user')}</strong></p>
                            <p style={{color: "grey"}}>{localStorage.getItem("user-email")}</p>
                            <p style={{fontSize: "15px", paddingTop: "95px"}} ><strong>Joined - </strong> {localStorage.getItem("timestamp")}</p>
                        </div>
                        <div className="grid-item">
                            <div style={{paddingTop: "38px"}}><button className='btn btn-outline-primary'>{editIcon}</button> <button className='btn btn-outline-danger' data-toggle="modal" data-target="#exampleModal">{deleteIcon}</button></div>
                        </div>
                    </div>

                    {/*Modal Window JSX */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Delete Account</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span style={{fontSize: "60px"}} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p style={{paddingLeft: "65px", fontSize: "20px", color: "gray"}}><strong>Confirm to delete your account.</strong></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                            <button type="button" className="btn btn-danger"  onClick={() => removeUser()}>CONFIRM</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            );
        }
    }

export default Profile;
