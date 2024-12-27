import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            setUsers(data.users);
        });
    }, []);

    console.log(users);

    return ( 
        <>

        <div className="user-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        
                                    </div>
                                </div>
                            </div>

                            {users.map((user) => (
                                <div key={user.id} className="col-lg-4">
                                    <div className="user-item">
                                        <div className="user-image">
                                        <Link to={`/singleUser/${user.id}`}>
                                              <img src={user.image} alt={user.title} />
                                            </Link>
                                        </div>
                                        <div className="user-content">
                                            <div className="title">
                                                <a href="#">{user.firstName} {user.lastName} {user.maidenName}</a>
                                            </div>
                                            <div className="age">
                                                {user.age}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Users;
