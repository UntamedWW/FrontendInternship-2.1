
import React, { useState } from "react"
import PersonCheck from "../../components/PersonCheck";
import PersonAdd from "../../components/PersonAdd";

interface UsersProps {
    heading: string;
    onSelectedUser: (user: string) => void;
}

function ListOfUsers({ heading, onSelectedUser} : UsersProps) {
    const [idSelected, setIdSelected] = useState(-1);

    const [users, setUsers] = useState<string[]>([]);

     const handleAddUser = (name: string) => {
         setUsers([...users, name]);
  };

    

    return (
        <>
            < h3>Users:</h3>
            <ul>
                {users.map((user, index) => (
                    <li className={idSelected === index ? 'list-group active' : 'list-group'} onClick={() => { setIdSelected(index); onSelectedUser(user)}}>
                        {user}
                    </li>
                ))}
            </ul>
            <PersonCheck />
            <PersonAdd onAddUser={handleAddUser} />
        </>
    )
}

export default ListOfUsers