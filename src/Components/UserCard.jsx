

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* User Header */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold uppercase text-white">
          {user.name.firstname.charAt(0)}
          {user.name.lastname.charAt(0)}
        </div>

        <div>
          <h2 className="text-xl font-bold capitalize text-gray-800">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Information */}
      <div className="mt-6 space-y-4">

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Email
          </p>
          <p className="break-all text-sm text-gray-700">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Phone
          </p>
          <p className="text-sm text-gray-700">
            {user.phone}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase text-gray-400">
            Address
          </p>

          <p className="text-sm capitalize text-gray-700">
            {user.address.number}, {user.address.street}
          </p>

          <p className="text-sm capitalize text-gray-500">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

      </div>

      {/* Button */}
      <button className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-indigo-700">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;