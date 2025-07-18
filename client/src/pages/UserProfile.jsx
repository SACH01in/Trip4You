const UserProfile = () => {
    // Example user data
    const user = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        avatar:
            "https://ui-avatars.com/api/?name=Jane+Doe&background=0D8ABC&color=fff",
        bio: "Traveler. Photographer. Food lover.",
        location: "New York, USA",
        joined: "January 2023",
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <img
                        src={user.avatar}
                        alt="User avatar"
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
                    <p className="text-gray-500 mb-2">{user.location}</p>
                    <p className="text-gray-700 mb-4 text-center">{user.bio}</p>
                    <div className="w-full border-t pt-4 mt-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Email:</span>
                            <span>{user.email}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Joined:</span>
                            <span>{user.joined}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;