import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleUser() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, [id]);

    return (
        <>
            <div className="user-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row align-items-center user-detail-top">
                                <div className="col-md-5">
                                    <div className="user-slider-user">
                                        <img src={user.image} alt="User Image" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="user-content">
                                        <div className="title">
                                            <h2>{user.firstName} {user.maidenName} {user.lastName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Basic Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>Basic Information</h4>
                                    <p><strong>Age:</strong> {user.age}</p>
                                    <p><strong>Gender:</strong> {user.gender}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Phone:</strong> {user.phone}</p>
                                    <p><strong>Username:</strong> {user.username}</p>
                                    <p><strong>Password:</strong> {user.password}</p>
                                    <p><strong>Birthdate:</strong> {user.birthDate}</p>
                                    <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Physical Information</h4>
                                    <p><strong>Height:</strong> {user.height} cm</p>
                                    <p><strong>Weight:</strong> {user.weight} kg</p>
                                    <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                                    <p><strong>Hair Color:</strong> {user.hair?.color}</p>
                                    <p><strong>Hair Type:</strong> {user.hair?.type}</p>
                                </div>
                            </div>

                            {/* Address Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Address Information</h4>
                                    <p>{user.address?.address}, {user.address?.city}, {user.address?.state} {user.address?.postalCode}, {user.address?.country}</p>
                                    <p><strong>Coordinates:</strong> Lat: {user.address?.coordinates?.lat}, Lng: {user.address?.coordinates?.lng}</p>
                                </div>
                            </div>

                            {/* Company Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Company Information</h4>
                                    <p><strong>Company:</strong> {user.company?.name}</p>
                                    <p><strong>Department:</strong> {user.company?.department}</p>
                                    <p><strong>Title:</strong> {user.company?.title}</p>
                                    <p><strong>Company Address:</strong> {user.company?.address?.address}, {user.company?.address?.city}, {user.company?.address?.state} {user.company?.address?.postalCode}</p>
                                </div>
                            </div>

                            {/* Bank Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h4>Bank Information</h4>
                                    <p><strong>Card Type:</strong> {user.bank?.cardType}</p>
                                    <p><strong>Card Number:</strong> {user.bank?.cardNumber}</p>
                                    <p><strong>Card Expire:</strong> {user.bank?.cardExpire}</p>
                                    <p><strong>Currency:</strong> {user.bank?.currency}</p>
                                    <p><strong>IBAN:</strong> {user.bank?.iban}</p>
                                </div>
                                <div className="col-md-6">
                                    <h4>Crypto Information</h4>
                                    <p><strong>Coin:</strong> {user.crypto?.coin}</p>
                                    <p><strong>Wallet:</strong> {user.crypto?.wallet}</p>
                                    <p><strong>Network:</strong> {user.crypto?.network}</p>
                                </div>
                            </div>

                            {/* Miscellaneous Info Row */}
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <h4>Miscellaneous Information</h4>
                                    <p><strong>Role:</strong> {user.role}</p>
                                    <p><strong>SSN:</strong> {user.ssn}</p>
                                    <p><strong>MAC Address:</strong> {user.macAddress}</p>
                                    <p><strong>University:</strong> {user.university}</p>
                                    <p><strong>User Agent:</strong> {user.userAgent}</p>
                                    <p><strong>EIN:</strong> {user.ein}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleUser;
