import { UserProps, UserData } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { useState } from 'react';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(users);

  const handleAddUser = (newUser: UserData) => {
    const userToAdd: UserProps = {
      ...newUser,
      id: userList.length + 1
    };
    setUserList(prevUsers => [...prevUsers, userToAdd]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <button 
          onClick={() => setModalOpen(true)}
          className="bg-blue-700 px-6 py-3 rounded-full text-white hover:bg-blue-800 transition font-medium"
        >
          Add User
        </button>
      </div>
      
      {userList.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No users found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {isModalOpen && (
        <UserModal 
          onClose={() => setModalOpen(false)} 
          onSubmit={handleAddUser} 
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  }
}

export default Users;