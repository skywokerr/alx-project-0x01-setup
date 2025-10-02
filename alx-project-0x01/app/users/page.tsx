import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

// Fetch users data at build time
async function getUsers(): Promise<UserProps[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
}

const Users: React.FC = async () => {
  const users = await getUsers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Users</h1>
      
      {users.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No users found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Users;