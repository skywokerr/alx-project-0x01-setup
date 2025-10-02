import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {user.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">{user.email}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-sm">{user.phone}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
          <span className="text-sm">{user.website}</span>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-700 mb-1">Address</h3>
            <p className="text-sm text-gray-600">
              {user.address.street}, {user.address.suite}<br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">Company</h3>
            <p className="text-sm text-gray-600 font-medium">{user.company.name}</p>
            <p className="text-xs text-gray-500 mt-1">{user.company.catchPhrase}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;