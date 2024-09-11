function LoggedOutFront({ navigate }) {
    return (
      <main className="py-10 h-screen bg-gradient-to-b from-gray-300 to-gray-700 flex flex-col items-center justify-center space-y-1.5">
        <h1 className="font-bold min-h-72 text-9xl text-center my-7 italic bg-gradient-to-r from-orange-400 to-red-700 bg-clip-text text-transparent">
          Task App
        </h1>
        <div className="flex flex-col justify-center items-center">
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-1"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => navigate('/creation')}
          >
            Create New Account
          </button>
        </div>
      </main>
    );
}

export default LoggedOutFront;
